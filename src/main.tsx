import '@maersk-global/fonts/maeu/fonts.css'
import '@maersk-global/mds-design-tokens/apmterminals/light/css/design-tokens-px.css'
import '@maersk-global/mds-foundations/css/foundations.css'
import { MdsConfig } from '@maersk-global/mds-config'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PublicClientApplication, EventType } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import './index.css'
import App from './App.tsx'
import { FORCE_LOGIN_KEY, msalConfig } from './authConfig'

MdsConfig.forceIconsCdnBundle = true

const msalInstance = new PublicClientApplication(msalConfig)

// Keep an active account set so useMsal()/AccountIdentifiers resolve after login,
// including when the redirect flow completes on page load.
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    // The forced password prompt has been satisfied; later sign-ins can use SSO again
    try {
      localStorage.removeItem(FORCE_LOGIN_KEY)
    } catch {
      // nothing to clear
    }
  }
  if (
    (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
    event.payload &&
    'account' in event.payload &&
    event.payload.account
  ) {
    msalInstance.setActiveAccount(event.payload.account)
  }
})

async function bootstrap() {
  await msalInstance.initialize()
  await msalInstance.handleRedirectPromise()

  if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0])
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </StrictMode>,
  )
}

bootstrap()
