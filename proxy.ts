import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { isAuthorizedAdmin } from '@/lib/auth/authorize'

/**
 * Global auth gate (Next 16 `proxy` — the renamed `middleware`). Every request
 * that isn't a public auth path or static asset must come from an
 * authenticated, allowlisted reader. Also refreshes the Supabase session
 * cookie, as required by @supabase/ssr.
 */
const PUBLIC_PREFIXES = ['/login', '/denied', '/auth']

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/'))
  ) {
    return NextResponse.next()
  }

  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          )
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  if (!(await isAuthorizedAdmin(supabase, user.email))) {
    const url = request.nextUrl.clone()
    url.pathname = '/denied'
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: [
    // Gate everything except Next internals, the Pagefind search index, and
    // static image/asset files.
    '/((?!_next/static|_next/image|_pagefind|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
