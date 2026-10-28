import { useEffect, useState } from 'react'
import { useMsal } from '@azure/msal-react'
import type { IPublicClientApplication } from '@azure/msal-browser'
import { McDialog } from '@maersk-global/mds-react-wrapper/components-core/mc-dialog'
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button'
import { FORCE_LOGIN_KEY } from './authConfig'

// Sign the user out of TEM after this long without activity, warning them shortly before.
export const IDLE_LIMIT_MS = 30 * 60 * 1000
const WARNING_MS = 25 * 60 * 1000

// Last-activity time is shared between tabs through localStorage, so activity in any tab keeps them all alive.
const ACTIVITY_KEY = 'tem.lastActivity'
// Set just before the reload so the sign-in screen can explain why the user was signed out.
export const IDLE_SIGNOUT_FLAG = 'tem.idleSignedOut'

const ACTIVITY_EVENTS = ['mousedown', 'mousemove', 'keydown', 'scroll', 'wheel', 'touchstart'] as const
const ACTIVITY_WRITE_THROTTLE_MS = 5_000
const CHECK_INTERVAL_MS = 1_000

// In-memory copy so the guard still works when localStorage is unavailable
let lastActivityInMemory = Date.now()

function markActive() {
  lastActivityInMemory = Date.now()
  try {
    localStorage.setItem(ACTIVITY_KEY, String(lastActivityInMemory))
  } catch {
    // storage blocked: per-tab tracking only
  }
}

function readLastActivity(): number {
  try {
    const stored = Number(localStorage.getItem(ACTIVITY_KEY))
    if (Number.isFinite(stored)) return Math.max(lastActivityInMemory, stored)
  } catch {
    // fall through to the in-memory value
  }
  return lastActivityInMemory
}

// Local-only sign-out: clears TEM's cached tokens but does not redirect to Microsoft's logout endpoint,
// so the Microsoft session (and other Microsoft apps in this browser) stay signed in.
async function signOutLocally(instance: IPublicClientApplication, idle: boolean) {
  // The Microsoft session survives a local sign-out, so make the next sign-in ask for the password again.
  // localStorage (not sessionStorage) so closing the tab doesn't let the user back in silently.
  try {
    localStorage.setItem(FORCE_LOGIN_KEY, '1')
  } catch {
    // storage blocked: the next sign-in falls back to silent SSO
  }
  if (idle) {
    try {
      sessionStorage.setItem(IDLE_SIGNOUT_FLAG, '1')
    } catch {
      // the notice is optional
    }
  }
  const account = instance.getActiveAccount() ?? instance.getAllAccounts()[0]
  await instance.clearCache({ account })
  // Reloading re-renders App with no signed-in account, which shows the sign-in screen.
  window.location.reload()
}

function formatRemaining(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000))
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function IdleSessionGuard() {
  const { instance } = useMsal()
  // Time left until sign-out while the warning is showing; null otherwise
  const [remainingMs, setRemainingMs] = useState<number | null>(null)

  useEffect(() => {
    markActive()
    let lastWrite = Date.now()
    let warningShown = false
    let signingOut = false

    const check = () => {
      if (signingOut) return
      const remaining = IDLE_LIMIT_MS - (Date.now() - readLastActivity())
      if (remaining <= 0) {
        signingOut = true
        signOutLocally(instance, true)
        return
      }
      warningShown = remaining <= WARNING_MS
      setRemainingMs(warningShown ? remaining : null)
    }

    const onActivity = () => {
      // Once the warning is up, only the dialog buttons count: mouse movement must not dismiss it silently.
      if (warningShown) return
      const now = Date.now()
      if (now - lastWrite < ACTIVITY_WRITE_THROTTLE_MS) return
      lastWrite = now
      markActive()
    }

    ACTIVITY_EVENTS.forEach((name) => window.addEventListener(name, onActivity, { passive: true }))
    // Timers are throttled in background tabs and while asleep; re-check against the real clock on return
    document.addEventListener('visibilitychange', check)
    const interval = window.setInterval(check, CHECK_INTERVAL_MS)

    return () => {
      ACTIVITY_EVENTS.forEach((name) => window.removeEventListener(name, onActivity))
      document.removeEventListener('visibilitychange', check)
      window.clearInterval(interval)
    }
  }, [instance])

  const staySignedIn = () => {
    markActive()
    setRemainingMs(null)
  }

  return (
    <McDialog
      heading="Are you still there?"
      dimension="small"
      open={remainingMs !== null}
      // Closing by any route other than "Sign out now" (the button, Esc, clicking outside) keeps the session
      closing={staySignedIn}
    >
      <p className="mds-text mds-text--medium-normal">
        For security, you will be signed out of TEM in <strong>{formatRemaining(remainingMs ?? 0)}</strong> because of
        inactivity. Any unsaved changes will be lost.
      </p>
      <McButton
        slot="secondaryAction"
        appearance="neutral"
        variant="outlined"
        label="Sign out now"
        click={() => signOutLocally(instance, false)}
      />
      <McButton slot="primaryAction" dialogaction="ok" appearance="primary" label="Stay signed in" />
    </McDialog>
  )
}

export default IdleSessionGuard
