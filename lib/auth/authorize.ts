import type { SupabaseClient } from '@supabase/supabase-js'
import { isAllowedAdmin } from './admin-allowlist'

/**
 * Authorization for the internal docs. A signed-in reader is allowed if:
 *
 *   1. their email is in SAKEN_ADMIN_ALLOWLIST (break-glass / bootstrap), OR
 *   2. they are an active superuser in the DB (public.is_platform_admin).
 *
 * The env check is first so it's the fast path AND a fallback: a misconfigured
 * or not-yet-applied platform_admins table can never lock the bootstrap
 * operators out. The DB check is the durable source of truth — it lets a
 * superuser sign in with EITHER Google OR email+password, authorized by
 * identity, and lets the list change without a redeploy.
 *
 * is_platform_admin() reads the CURRENT session's auth.email() internally
 * (SECURITY DEFINER + service_role owner), so the cookie client can call it
 * without a service-role key and the superuser list is never exposed.
 */
export async function isAuthorizedAdmin(
  supabase: SupabaseClient,
  email: string | null | undefined,
): Promise<boolean> {
  if (isAllowedAdmin(email)) return true
  try {
    const { data, error } = await supabase.rpc('is_platform_admin')
    if (error) return false
    return data === true
  } catch {
    return false
  }
}
