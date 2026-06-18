import { createBrowserClient } from '@supabase/ssr'

/**
 * Browser Supabase client — used only on the /login page to kick off the
 * Google OAuth sign-in. Carries the anon key (safe for the browser).
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
