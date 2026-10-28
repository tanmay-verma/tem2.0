import type { Configuration, RedirectRequest, SilentRequest } from '@azure/msal-browser'

// Sourced from .env (see .env.example) — set per environment, never hardcoded.
const TENANT_ID = import.meta.env.VITE_AZURE_TENANT_ID
const CLIENT_ID = import.meta.env.VITE_AZURE_CLIENT_ID

if (!TENANT_ID || !CLIENT_ID) {
  throw new Error(
    'Missing Azure AD config: set VITE_AZURE_TENANT_ID and VITE_AZURE_CLIENT_ID (see .env.example).',
  )
}

export const msalConfig: Configuration = {
  auth: {
    clientId: CLIENT_ID,
    authority: `https://login.microsoftonline.com/${TENANT_ID}`,
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'sessionStorage',
  },
}

// Scopes requested at login. User.Read lets the app call Graph for basic profile info.
export const loginRequest: RedirectRequest = {
  scopes: ['User.Read'],
}

// Set (in localStorage) by a local sign-out; while present, the next sign-in forces a password prompt
// (prompt=login) instead of silently reusing the Microsoft session. Cleared on LOGIN_SUCCESS in main.tsx.
export const FORCE_LOGIN_KEY = 'tem.forceLoginPrompt'

// Scope for the Autotron API bearer token. Empty until VITE_API_SCOPE is set in .env.
export const apiRequest: SilentRequest = {
  scopes: import.meta.env.VITE_API_SCOPE ? [import.meta.env.VITE_API_SCOPE] : [],
}
