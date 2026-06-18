export default function DeniedPage() {
  return (
    <main className="login-shell">
      <div className="login-card is-centered">
        <h1 className="login-title">Access denied</h1>
        <p className="login-sub">
          Your account is not on the access allowlist. If you believe this is a
          mistake, ask to be added to <code>SAKEN_ADMIN_ALLOWLIST</code>.
        </p>
        <form action="/auth/signout" method="post" className="login-denied-link">
          <button type="submit">Sign out</button>
        </form>
      </div>
    </main>
  )
}
