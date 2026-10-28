import { AuthenticatedTemplate, useMsal } from '@azure/msal-react'

function Header() {
  const { instance, accounts } = useMsal()
  const account = accounts[0]

  const handleSignOut = () => {
    instance.logoutRedirect()
  }

  return (
    <header className="app-header">
      <div className="app-header__brand">
        <div className="apmt-logo" aria-label="APM Terminals logo" role="img" />

        <h1 className="mds-headline mds-headline--small app-header__title">
          <center>TOS Enterprise Manager 2.0</center>
        </h1>
      </div>

      <AuthenticatedTemplate>
        <div className="app-header__user">
          <span className="mds-text mds-text--small-normal">{account?.name ?? account?.username}</span>
          <button type="button" className="app-header__signout" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </AuthenticatedTemplate>
    </header>
  )
}

export default Header
