'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function signIn() {
    setLoading(true)
    setError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) {
      setError(error.message)
      setLoading(false)
    }
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
          onClick={signIn}
          disabled={loading}
          className="login-btn"
        >
          {loading ? 'Redirecting…' : 'Continue with Google'}
        </button>
        {error && <p className="login-error">{error}</p>}
      </div>
    </main>
  )
}
