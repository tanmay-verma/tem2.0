import { useEffect, useState } from 'react'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react'
import './App.css'
import Header from './Header'
import AppShell from './AppShell'
import IdleSessionGuard, { IDLE_LIMIT_MS, IDLE_SIGNOUT_FLAG } from './IdleSessionGuard'
import { FORCE_LOGIN_KEY, loginRequest } from './authConfig'

function readIdleSignOutFlag(): boolean {
  try {
    return sessionStorage.getItem(IDLE_SIGNOUT_FLAG) === '1'
  } catch {
    return false
  }
}

function SignInScreen() {
  const { instance } = useMsal()
  // Pure read here; the flag is cleared in an effect so StrictMode's double render can't lose it
  const [signedOutForInactivity] = useState(readIdleSignOutFlag)

  useEffect(() => {
    try {
      sessionStorage.removeItem(IDLE_SIGNOUT_FLAG)
    } catch {
      // nothing to clear
    }
  }, [])

  const handleSignIn = () => {
    let forcePrompt = false
    try {
      forcePrompt = localStorage.getItem(FORCE_LOGIN_KEY) === '1'
    } catch {
      // storage blocked: fall back to normal SSO
    }
    // After a local sign-out, prompt=login makes Microsoft ask for credentials even though its session is alive
    instance.loginRedirect(forcePrompt ? { ...loginRequest, prompt: 'login' } : loginRequest)
  }

  const idleMinutes = Math.round(IDLE_LIMIT_MS / 60_000)

  return (
    <div className="sign-in-screen">
      {signedOutForInactivity && (
        <p>
          You were signed out after {idleMinutes} {idleMinutes === 1 ? 'minute' : 'minutes'} of inactivity.
        </p>
      )}
      <p>Please sign in to continue.</p>
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  )
}

function App() {
  return (
    <>
      <UnauthenticatedTemplate>
        <div className="unauthenticated-layout">
          <Header />
          <SignInScreen />
        </div>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <AppShell />
        <IdleSessionGuard />
      </AuthenticatedTemplate>
    </>
  )
}

export default App
