import { BrowserAuthError, BrowserAuthErrorCodes, InteractionRequiredAuthError } from '@azure/msal-browser'
import type { IPublicClientApplication, AccountInfo } from '@azure/msal-browser'
import { apiRequest } from '../authConfig'

// Dev-only stopgap until TEM's app registration is approved for the Autotron API scope.
// Paste a token obtained from the Autotron UI / Bruno in the browser console:
//   localStorage.setItem('tem.devApiToken', '<token>')
// Remove it with localStorage.removeItem('tem.devApiToken'). Never read in production builds.
const DEV_TOKEN_KEY = 'tem.devApiToken'

function jwtExpiryMs(token: string): number | undefined {
  try {
    const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))
    return typeof payload.exp === 'number' ? payload.exp * 1000 : undefined
  } catch {
    return undefined
  }
}

function getDevToken(): string | undefined {
  if (!import.meta.env.DEV) return undefined
  let stored: string | null
  try {
    stored = localStorage.getItem(DEV_TOKEN_KEY)
  } catch {
    return undefined
  }
  const token = stored?.trim().replace(/^Bearer\s+/i, '')
  if (!token) return undefined

  const expiry = jwtExpiryMs(token)
  if (expiry !== undefined && expiry < Date.now()) {
    throw new Error(`The dev API token in localStorage ("${DEV_TOKEN_KEY}") has expired. Paste a fresh one.`)
  }
  console.warn(`[dev] Using the manual API token from localStorage "${DEV_TOKEN_KEY}" instead of MSAL.`)
  return token
}

export async function getAccessToken(
  instance: IPublicClientApplication,
  account: AccountInfo | undefined,
): Promise<string> {
  const devToken = getDevToken()
  if (devToken) return devToken

  if (!apiRequest.scopes.length) {
    throw new Error('API scope is not configured: set VITE_API_SCOPE in .env.')
  }
  if (!account) {
    throw new Error('No signed-in account.')
  }
  try {
    const result = await instance.acquireTokenSilent({ ...apiRequest, account })
    return result.accessToken
  } catch (error) {
    // Silent acquisition can't proceed: either the user must interact (consent, MFA), or the
    // hidden-iframe attempt timed out, which is what MSAL does on the first request for a new scope.
    const needsInteraction =
      error instanceof InteractionRequiredAuthError ||
      (error instanceof BrowserAuthError && error.errorCode === BrowserAuthErrorCodes.timedOut)
    if (needsInteraction) {
      // Redirects away from the page; the promise never resolves with a token.
      await instance.acquireTokenRedirect({ ...apiRequest, account })
    }
    throw error
  }
}

interface ApiFetchOptions {
  signal?: AbortSignal
  method?: 'GET' | 'POST'
  // Serialized as JSON when provided
  body?: unknown
}

export async function apiFetch<T>(path: string, token: string, options: ApiFetchOptions = {}): Promise<T> {
  const { signal, method = 'GET', body } = options
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${path}`, {
    method,
    signal,
    headers: {
      Authorization: `Bearer ${token}`,
      'Consumer-Key': import.meta.env.VITE_API_CONSUMER_KEY,
      Accept: 'application/json',
      ...(body !== undefined && { 'Content-Type': 'application/json' }),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  if (!response.ok) {
    const body = await response.text().catch(() => '')
    throw new Error(`API request failed (${response.status} ${response.statusText})${body ? `: ${body}` : ''}`)
  }
  return response.json() as Promise<T>
}
