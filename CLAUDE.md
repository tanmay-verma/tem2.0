# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

TOS Enterprise Manager 2.0 (TEM 2.0): an internal APM Terminals web app, a React 19 + TypeScript + Vite 8 SPA. Users sign in with Azure AD, then trigger operational jobs against terminal servers and view job history. It is built on the Maersk Design System (MDS). `README.md` is still the stock Vite template text; ignore it.

## Commands

- `npm run dev`: Vite dev server on :5173 (falls back to the next free port if taken).
- `npm run build`: `tsc -b && vite build`. This is the type check; run it after changes. An IDE diagnostic can lag behind the file, so trust the build output.
- `npm run lint`: ESLint (typescript-eslint, react-hooks, react-refresh).
- There is no test framework configured, so there are no tests or single-test command.

The app throws at startup (`src/authConfig.ts`) unless `.env` defines `VITE_AZURE_TENANT_ID` and `VITE_AZURE_CLIENT_ID`. Copy `.env.example`. A blank page on localhost usually means a missing env var or a TypeScript/import error, so check the browser console and `npm run build`.

## Architecture

- **Auth gate** (`main.tsx`, `App.tsx`, `authConfig.ts`): MSAL redirect flow with `sessionStorage` cache. `main.tsx` initializes MSAL and calls `handleRedirectPromise()` before rendering, and keeps an active account set via an event callback. `App.tsx` renders `AuthenticatedTemplate` (→ `AppShell`) or `UnauthenticatedTemplate` (→ `Header` + sign-in screen). Login only requests `User.Read`; the Autotron API token is requested separately and silently at call time (see API layer).
- **API layer** (`src/api/`): `client.ts` has `getAccessToken` (`acquireTokenSilent` with `apiRequest` from `authConfig.ts`, redirect fallback) and `apiFetch` (adds `Authorization: Bearer` and `Consumer-Key` headers, throws on non-2xx). `jobs.ts` has `fetchJobs` and the single `toJobHistory` mapper from the API's `data.jobSummaries` rows to the History columns. Config comes from `.env`: `VITE_API_BASE_URL`, `VITE_API_TENANT_ID`, `VITE_API_CONSUMER_KEY`, `VITE_API_SCOPE`. The consumer key ships in the browser bundle, so treat it as an identifier. The app targets the production API, `https://api.maersk.com/autotron/ui` (the dev host is `api-cdt.maersk.com`), e.g. `GET /v1/jobs/?limit=100&tenantId=71`. The Jobs page `POST /v1/jobs/` therefore triggers real prod jobs. Reuse `apiFetch` for new endpoints. Dev-only stopgap until TEM's app registration is approved for the scope: under `npm run dev`, `getAccessToken` uses a token pasted into `localStorage['tem.devApiToken']` instead of MSAL (compiled out of production builds). The Jobs page asks for confirmation (`McDialog`) before triggering.
- **Idle timeout** (`IdleSessionGuard.tsx`, mounted in `App.tsx` for signed-in users): after 60 min without activity it signs out of TEM only (`instance.clearCache()` then reload, with no Microsoft logout redirect, so other Microsoft apps stay signed in), with a 5-minute warning dialog. Last activity is shared across tabs via `localStorage['tem.lastActivity']`. A local sign-out also sets `localStorage[FORCE_LOGIN_KEY]` (`authConfig.ts`), so the next sign-in uses `prompt: 'login'` (password re-entry) until a `LOGIN_SUCCESS` clears it in `main.tsx`. Limits are the `IDLE_LIMIT_MS` / `WARNING_MS` constants at the top of the file.
- **Navigation is state, not a router** (`AppShell.tsx`): there is no react-router. `NAV_ITEMS` (nested via `children`) defines the sidebar, `activeKey` state selects the page, and pages render through `{activeKey === 'x' && <Page />}`. The page `<h1>` shows the active item's label (`findNavItem`). To add a page, add a `NAV_ITEMS` entry and a render line. Only the keys `jobs-trigger` and `jobs-history` have pages; `home`, `pipelines` and the Terminal Info items render nothing yet.
- **Pages** are flat files in `src/`, each with a sibling CSS file: `JobsPage` (trigger form: Job Name, Terminal Env, Target Servers, Incident/Change Ref) and `HistoryPage` (job history table).
- **Not yet wired** (placeholders in code):
  - Job submit calls `triggerJob` (`POST /v1/jobs/`, payload copied from the Autotron UI). The form's job name maps to the API `actionName` through `JOB_ACTION_NAMES` in `src/api/jobs.ts`, and the environment is sent lowercased. The POST response shape is unconfirmed, so the execution ID is read defensively and may be absent. Add `VITE_API_TENANT_NAME` (e.g. `TOS`) to `.env`.
  - Target Servers are hardcoded, with a TODO to load them from `Targets.csv` filtered by the selected Terminal Env. That file is not in the repo.
  - `HistoryPage` is wired to the API, but `VITE_API_SCOPE` is not set yet, so it shows an auth error until it is. The `status` column shows the raw single-letter code (`f` seen in samples) because the code meanings are unknown.
  - Terminal Env and Job Name option lists are hardcoded constants in `JobsPage.tsx`.

## MDS conventions (the details that cause bugs here)

The MDS rules live in `.github/instructions/mds-*.instructions.md` and `.claude/skills/mds-*` (component APIs are in `.claude/skills/mds-components/references/mc-*.md`). Consult them before using any component, and never guess props. The parts that have bitten us:

- Import each component from its own path: `@maersk-global/mds-react-wrapper/components-core/mc-<name>`.
- Props and events are lowercase (`optionselected`, `input`, `click`). Handlers read `event.detail`, not `event.target.value`. `JobsPage.tsx` defines a local `SelectedOption` type for the select events.
- `McTable` is a single data-driven component: pass `data` (rows) and `columns` (`{ id, label, ... }`). There are no `McTableRow`, `McTableHead` or similar wrappers; importing them is a compile error. Column API: `.claude/skills/mds-data-table/SKILL.md`.
- Theme is APM Terminals light (`mds-design-tokens/apmterminals/light`), set in `main.tsx`. Icons use the CDN bundle (`MdsConfig.forceIconsCdnBundle`).
- `AppShell.css` forces the MDS layout to a fixed grid with a 280px always-open sidebar (desktop-only app) and uses `!important` heavily to override MDS defaults.
- Page layout: pages sit inside `<main class="mds-page mds-container"><div class="mds-grid">`. A page root needs `grid-column: 1 / -1` to span below the `<h1>`, as `.jobs-page` and `.history-page` do. Forms use `mds-grid-{xs|sm|md}-*` placement classes, plus explicit `grid-template-columns` in `JobsPage.css`, because the MDS container-query classes alone did not lay out the form reliably.
- React Compiler is enabled (`babel-plugin-react-compiler` in `vite.config.ts`), so avoid manual `useMemo`/`useCallback` unless needed.
