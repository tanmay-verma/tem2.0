import { useState } from 'react'
import { useMsal } from '@azure/msal-react'
import { McTopBar } from '@maersk-global/mds-react-wrapper/components-core/mc-top-bar'
import { McSideBar } from '@maersk-global/mds-react-wrapper/components-core/mc-side-bar'
import { McAvatar } from '@maersk-global/mds-react-wrapper/components-core/mc-avatar'
import JobsPage from './JobsPage'
import HistoryPage from './HistoryPage'
import './AppShell.css'

interface NavItem {
  key: string
  label: string
  children?: NavItem[]
}

const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: 'Home' },
  {
    key: 'jobs',
    label: 'Jobs',
    children: [
      { key: 'jobs-trigger', label: 'Trigger a job' },
      { key: 'jobs-history', label: 'History' },
    ],
  },
  { key: 'pipelines', label: 'Pipelines' },
  {
    key: 'terminal-info',
    label: 'Terminal Info',
    children: [
      { key: 'terminal-info-gijon', label: 'Gijon' },
      { key: 'terminal-info-monrovia', label: 'Monrovia' },
    ],
  },
]

function findNavItem(items: NavItem[], key: string): NavItem | undefined {
  for (const item of items) {
    if (item.key === key) return item
    if (item.children) {
      const found = findNavItem(item.children, key)
      if (found) return found
    }
  }
  return undefined
}

function getAvatarImageUrl(name: string): string {
  // Generate avatar image URL using ui-avatars service
  const encodedName = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?name=${encodedName}&background=003d7a&color=fff&size=128`
}

function AppShell() {
  const { instance, accounts } = useMsal()
  const account = accounts[0]
  const [activeKey, setActiveKey] = useState<string>(NAV_ITEMS[0].key)
  const [sidebarOpen] = useState<boolean>(true)

  const handleSignOut = () => {
    instance.logoutRedirect()
  }

  const activeItem = findNavItem(NAV_ITEMS, activeKey)

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, key: string) => {
    event.preventDefault()
    setActiveKey(key)
  }

  return (
    <div className="mds-layout">
      <McTopBar product="TOS Enterprise Manager 2.0" productshort="TEM 2.0">
        <div slot="actions" className="app-header__user">
          <div className="app-header__avatar-wrapper" title={account?.username || 'User'}>
            <McAvatar imagesrc={getAvatarImageUrl(account?.name ?? account?.username ?? 'User')} />
          </div>
          <button type="button" className="app-header__signout" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </McTopBar>

      <McSideBar open={sidebarOpen}>
        <nav className="mds-tree-nav" role="navigation" aria-label="side navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                {item.children ? (
                  <details>
                    <summary
                      onClick={(e) => {
                        // Allow the details element to handle expand/collapse
                        e.stopPropagation()
                      }}
                    >
                      {item.label}
                    </summary>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.key}>
                          <a
                            href={`#${child.key}`}
                            className={child.key === activeKey ? 'mds-tree-nav__active' : undefined}
                            aria-current={child.key === activeKey ? 'page' : undefined}
                            onClick={(event) => handleNavClick(event, child.key)}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a
                    href={`#${item.key}`}
                    className={item.key === activeKey ? 'mds-tree-nav__active' : undefined}
                    aria-current={item.key === activeKey ? 'page' : undefined}
                    onClick={(event) => handleNavClick(event, item.key)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </McSideBar>

      <main id="main-content" className="mds-page mds-container">
        {/* MDS caps .mds-page > .mds-grid at 1080px; wide pages (the History table) opt out with mds-full-width */}
        <div className={activeKey === 'jobs-history' ? 'mds-grid mds-full-width' : 'mds-grid'}>
          <h1 className="mds-headline mds-headline--medium">{activeItem?.label}</h1>
          {activeKey === 'jobs-trigger' && <JobsPage />}
          {activeKey === 'jobs-history' && <HistoryPage />}
        </div>
      </main>
    </div>
  )
}

export default AppShell
