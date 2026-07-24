'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [googleLoading, setGoogleLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pwLoading, setPwLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function signInWithGoogle() {
    setGoogleLoading(true)
    setError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    if (error) {
      setError(error.message)
      setGoogleLoading(false)
    }
  }

  async function signInWithPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPwLoading(true)
    setError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
      setPwLoading(false)
      return
    }
    // Session cookie is set. Hard nav so the proxy re-runs and authorizes
    // (superuser check). A non-authorized account lands on /denied.
    window.location.assign('/')
  }

  return (
    <main className="login-shell">
      <div className="login-card">
        <div className="login-head">
          <p className="login-eyebrow">Saken</p>
          <h1 className="login-title">Documentation</h1>
          <p className="login-sub">
            Internal access only. Sign in with an authorized account.
          </p>
        </div>

        <button
          type="button"
          onClick={signInWithGoogle}
          disabled={googleLoading}
          className="login-btn"
        >
          {googleLoading ? 'Redirecting…' : 'Continue with Google'}
        </button>

        <div className="login-divider">
          <span />
          <span className="login-divider-text">or</span>
          <span />
        </div>

        <form onSubmit={signInWithPassword} className="login-form">
          <div>
            <label htmlFor="email" className="login-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={pwLoading}
              className="login-input"
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={pwLoading}
              className="login-input"
            />
          </div>
          <button
            type="submit"
            disabled={pwLoading || email.length === 0 || password.length === 0}
            className="login-btn-secondary"
          >
            {pwLoading ? 'Signing in…' : 'Sign in with email'}
          </button>
        </form>

        {error && <p className="login-error">{error}</p>}
      </div>
    </main>
  )
}
