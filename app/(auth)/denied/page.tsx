export default function DeniedPage() {
  return (
    <main className="login-shell">
      <div className="login-card is-centered">
        <h1 className="login-title">Access denied</h1>
        <p className="login-sub">
          Your account is not authorized to read the internal docs. If you
          believe this is a mistake, ask a superuser to grant you access.
        </p>
        <form action="/auth/signout" method="post" className="login-denied-link">
          <button type="submit">Sign out</button>
        </form>
      </div>
    </main>
  )
}
