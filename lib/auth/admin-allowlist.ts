/**
 * The internal-access allowlist. Only emails listed in SAKEN_ADMIN_ALLOWLIST
 * may read the docs. Comma-, space-, or newline-separated.
 *
 * Same model as the saken-admin app: a simple, auditable env allowlist for a
 * small internal team.
 */
export function getAdminAllowlist(): string[] {
  return (process.env.SAKEN_ADMIN_ALLOWLIST ?? '')
    .split(/[\s,]+/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

export function isAllowedAdmin(email: string | null | undefined): boolean {
  if (!email) return false
  return getAdminAllowlist().includes(email.toLowerCase())
}
