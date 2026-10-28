---
name: mds-setup
description: 'Set up Maersk Design System in a project. Use for: initial setup, install MDS packages, import fonts and design tokens, configure iconsDynamicImportPath, add body mds class, foundations CSS, app shell bootstrap, first-use checklist.'
related-skills: ['mds-components', 'mds-icons', 'mds-design-tokens', 'mds-layout', 'mds-testing']
related-components: ['mc-top-bar', 'mc-side-bar', 'mc-theme-switcher']
---

# Set Up MDS In a Project

## When to Use

- Bootstrapping MDS in a new app
- Adding MDS to an existing project that never used MDS before
- Adding the first MDS component to a React, Vue, or Angular project
- Checking whether an existing app is missing required setup steps
- Configuring icon loading, foundations CSS, design tokens, and base layout classes
- Setting up the standard MDS app shell structure with top bar and skip link

## Decision Table

| Situation                                        | Use this skill? | Action                                                |
| ------------------------------------------------ | --------------- | ----------------------------------------------------- |
| Brand new project                                | ✅              | Follow full setup procedure                           |
| Existing project, never used MDS                 | ✅              | Follow full setup procedure                           |
| Project already uses MDS, adding a new component | ❌              | Use the relevant component or feature skill           |
| Troubleshooting icons not loading or CSS missing | ❌              | Use `mds-icons` or the relevant troubleshooting skill |
| Using tokens, layout, or grid utilities          | ❌              | Use `mds-design-tokens`, `mds-layout`, or grid skills |
| Monorepo with multiple apps                      | ✅              | Repeat setup for each app entry point                 |
| Test or Storybook environment                    | ✅              | Follow setup, then see `mds-testing` skill            |

## When NOT to Use

- Adding to an already set-up project — use the relevant skill for the area you're working in
- Troubleshooting specific MDS issues (e.g. icon loading) — use `mds-icons` skill
- Setting up testing frameworks — use `mds-testing` skill
- Non-MDS component libraries — this skill is specific to MDS

## Procedure

### 1. Install the Required Packages

Choose the framework-appropriate package plus the shared setup packages:

**React:**

```bash
npm i @maersk-global/mds-react-wrapper @maersk-global/mds-config @maersk-global/mds-foundations @maersk-global/mds-design-tokens @maersk-global/icons @maersk-global/fonts
```

**Vue / Angular / Vanilla JavaScript / Web Components:**

```bash
npm i @maersk-global/mds-components-core @maersk-global/mds-config @maersk-global/mds-foundations @maersk-global/mds-design-tokens @maersk-global/icons @maersk-global/fonts
```

All MDS packages are hosted on either Maersk Global GitHub Packages or the private npm repository at nexus.maerskdev.net. Ensure registry access is configured before installing.

### 2. Import Base Styles

Add these imports in the app entry point, in this order:

```ts
import '@maersk-global/fonts/maeu/fonts.css';
import '@maersk-global/mds-design-tokens/{brand}/{theme}/css/design-tokens-px.css';
import '@maersk-global/mds-foundations/css/foundations.css';
```

`theme` is `light` or `dark` (default `light`). `brand` options:

- `maersk` — default, use if not specified
- `apmterminals`, `captainpeter`, `alianca`, `stillstorm`

These imports enable fonts, theming, layout classes, typography, grid utilities and design tokens.

### 3. Configure Icons

Always configure icon loading. Prefer the CDN bundle — simpler setup, no path issues:

```ts
import { MdsConfig } from '@maersk-global/mds-config';
MdsConfig.forceIconsCdnBundle = true;
```

Only use the local path approach if the project cannot use the CDN:

```ts
MdsConfig.iconsDynamicImportPath = '/node_modules/'; // dev
// MdsConfig.iconsDynamicImportPath = '/assets/node_modules/'; // prod
```

### 4. Add the Base MDS Class

Wrap the application root with `class="mds"` so typography and foundation styles apply:

```html
<body class="mds">
  <!-- app content -->
</body>
```

### 5. Add the App Shell

Use the standard shell structure for applications:

```html
<body class="mds">
  <a href="#main-content" class="mds-skip-to">Skip to content</a>
  <div class="mds-layout">
    <mc-top-bar product="My App" productshort="MA"></mc-top-bar>
    <mc-side-bar>
      <nav class="mds-tree-nav" role="navigation" aria-label="side navigation">
        <ul>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
        </ul>
      </nav>
    </mc-side-bar>
    <main id="main-content" class="mds-page mds-container mds-content">
      <!-- app content -->
    </main>
  </div>
</body>
```

- `mds-content` — content areas needing MDS margins for headings, paragraphs, and lists (articles, blog, news pages)
- `mds-container` — container-responsive layouts with the MDS grid (dashboards, data tables, forms)
- For advanced layout and grid usage, see the [mds-layout skill](../mds-layout/SKILL.md)

### 6. Framework-Specific Configuration

See [Framework Setup Reference](./references/framework-setup.md) for full React, Vue, and Angular configuration details.

Quick summary:

- **React** — import from `@maersk-global/mds-react-wrapper/components-core/mc-{name}`; use lowercase props
- **Vue** — import side-effect packages; configure `isCustomElement` in `vite.config.ts`
- **Angular** — import side-effect packages; declare `CUSTOM_ELEMENTS_SCHEMA` in every component or module using MDS

## Hard Constraints

### ❌ Wrong package for React vs ✅ React wrapper

```ts
// ❌
import '@maersk-global/mds-components-core-button';

// ✅
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';
```

### ❌ Component import before CSS vs ✅ CSS first

```ts
// ❌
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';
import '@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css';

// ✅
import '@maersk-global/fonts/maeu/fonts.css';
import '@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css';
import '@maersk-global/mds-foundations/css/foundations.css';
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';
```

### ❌ Missing mds root class vs ✅ mds on body

```html
<!-- ❌ -->
<body>
  <div class="app">...</div>
</body>

<!-- ✅ -->
<body class="mds">
  <div class="app">...</div>
</body>
```

### ❌ Manual icon path vs ✅ CDN bundle

```ts
// ❌ (only use this if CDN is unavailable)
MdsConfig.iconsDynamicImportPath = '/node_modules/';

// ✅
MdsConfig.forceIconsCdnBundle = true;
```

### Absolute rules

- **NEVER** import MDS component packages before design tokens and foundations CSS
- **NEVER** use `@maersk-global/mds-components-core-{name}` in a React project — use the React wrapper
- **NEVER** invent CSS class names for layout and spacing — use MDS foundations utilities
- **NEVER** omit `CUSTOM_ELEMENTS_SCHEMA` in Angular components or modules using MDS

## Common Mistakes

- Forgetting `MdsConfig.forceIconsCdnBundle = true` and spending time debugging icon paths
- Missing registry access to Maersk GitHub Packages or Nexus before installing
- Importing components before design tokens and foundations CSS
- Forgetting the `mds` root class on the body or app root
- Confusing `mds-content` and `mds-container` — they serve different layout purposes
- Not specifying the correct brand and theme in the design tokens import path
- Not adding `mc-theme-switcher` when theme switching is required — see the [mds-components skill](../mds-components/SKILL.md) for implementation

## Reference Files

- [Framework Setup Reference](./references/framework-setup.md) — full React, Vue, and Angular configuration examples
- [Component skill](../mds-components/SKILL.md) — overview of all components with references to detail component's API
