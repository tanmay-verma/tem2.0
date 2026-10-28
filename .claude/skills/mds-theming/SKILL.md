---
name: mds-theming
description: 'Implement runtime theme switching with MDS. Use for: dark mode, light mode toggle, theme switch, mc-theme-switch, prefers-color-scheme, persist theme preference, localStorage, brand switching, runtime brand swap, multi-brand.'
related-skills: ['mds-design-tokens', 'mds-setup', 'mds-navigation']
related-components: ['mc-theme-switch', 'mc-top-bar']
---

# Implement Runtime Theme Switching with MDS

## When to Use

- Adding a light/dark mode toggle button to the app header
- Respecting the user's OS theme preference (`prefers-color-scheme`)
- Persisting the user's theme choice across page loads
- Switching between brands at runtime (e.g. white-label apps)

## Decision Table

| Need                                         | Approach                                         | Notes                                                     |
| -------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| Light/dark toggle button                     | `mc-theme-switch`                                | Requires two `<link media>` tags in `<head>` — see Step 1 |
| Follow OS preference only (no manual toggle) | Two `<link media>` tags alone                    | No component needed; browser handles it                   |
| Persist user's theme choice                  | `localStorage` + `change` event                  | Restore before render to avoid flash                      |
| Runtime brand switching                      | Swap stylesheet `href` via JS                    | No MDS component; replace both light+dark hrefs           |
| Place toggle in app header                   | `mc-theme-switch` in `mc-top-bar` `actions` slot | Standard placement                                        |

## When NOT to Use

- **App supports only one theme** — skip `mc-theme-switch` entirely; import the single token CSS file directly
- **Only following OS preference** — two `<link media>` tags are enough; no component needed
- **Custom `<button>` + `classList.toggle('dark')`** — MDS theming works via stylesheet swapping, not CSS class toggling; use `mc-theme-switch` instead
- **Importing tokens as a JS/TS import for runtime switching** — JS imports cannot be toggled after load; use `<link media>` tags

## Procedure

### 1. Set Up the Two Theme Stylesheets

`mc-theme-switch` works by toggling the `media` attribute on two `<link>` tags in `<head>`. **Both must be present before any MDS component renders.** This setup alone (without `mc-theme-switch`) already follows the OS `prefers-color-scheme` automatically.

```html
<head>
  <link
    rel="stylesheet"
    media="(prefers-color-scheme: light)"
    href="./node_modules/@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css"
  />
  <link
    rel="stylesheet"
    media="(prefers-color-scheme: dark)"
    href="./node_modules/@maersk-global/mds-design-tokens/maersk/dark/css/design-tokens-px.css"
  />
</head>
```

Replace `maersk` with your brand: `maersk`, `apmterminals`, `alianca`, `captainpeter`, `stillstrom`.

### 2. Add mc-theme-switch

Place `mc-theme-switch` in the `actions` slot of `mc-top-bar`:

```html
<!-- Vanilla / Angular / Vue -->
<mc-top-bar product="Shipment Tracker" productshort="ST">
  <div slot="actions">
    <mc-theme-switch></mc-theme-switch>
  </div>
</mc-top-bar>
```

```tsx
// React
import { McThemeSwitch } from '@maersk-global/mds-react-wrapper/components-core/mc-theme-switch';
import { McTopBar } from '@maersk-global/mds-react-wrapper/components-core/mc-top-bar';

<McTopBar product="Shipment Tracker" productshort="ST">
  <div slot="actions">
    <McThemeSwitch />
  </div>
</McTopBar>;
```

The component reads the current state from the `<link>` tags and toggles them. The `change` event fires with `e.detail.theme` set to `'light'`, `'dark'`, or `'auto'`.

**Props:**

| Prop  | Type                       | Default  | Notes                     |
| ----- | -------------------------- | -------- | ------------------------- |
| `fit` | `small \| medium \| large` | `medium` | Size of the toggle button |

**Event:** `change` → `CustomEvent<{ theme: 'light' | 'dark' | 'auto' }>`

### 3. Persist the Theme Preference

Run a restoration script in `<head>` **before** the `<link>` tags to avoid a flash of wrong theme on reload:

```html
<head>
  <script>
    // Must run before <link> tags to avoid flash of wrong theme
    const saved = localStorage.getItem('mds-theme');
    if (saved === 'dark') {
      document.querySelectorAll('link[media*="light"]').forEach((l) => (l.media = 'not all'));
      document.querySelectorAll('link[media*="dark"]').forEach((l) => (l.media = 'all'));
    } else if (saved === 'light') {
      document.querySelectorAll('link[media*="dark"]').forEach((l) => (l.media = 'not all'));
      document.querySelectorAll('link[media*="light"]').forEach((l) => (l.media = 'all'));
    }
    // If null: keep the default media queries (OS preference)
  </script>
  <link
    rel="stylesheet"
    media="(prefers-color-scheme: light)"
    href="./node_modules/@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css"
  />
  <link
    rel="stylesheet"
    media="(prefers-color-scheme: dark)"
    href="./node_modules/@maersk-global/mds-design-tokens/maersk/dark/css/design-tokens-px.css"
  />
</head>
```

Save the preference when the user toggles:

```js
// Vanilla JS
document.querySelector('mc-theme-switch').addEventListener('change', (e) => {
  localStorage.setItem('mds-theme', e.detail.theme);
});
```

```tsx
// React
<McThemeSwitch change={(e) => localStorage.setItem('mds-theme', (e as CustomEvent<{ theme: string }>).detail.theme)} />
```

### 4. Runtime Brand Switching

There is no MDS component for brand switching — swap the `href` values on the two theme `<link>` tags directly:

```js
function switchBrand(brand) {
  document.querySelectorAll('link[href*="mds-design-tokens"]').forEach((link) => {
    link.href = link.href.replace(/mds-design-tokens\/[^/]+\//, `mds-design-tokens/${brand}/`);
  });
}

switchBrand('apmterminals'); // switch to APM Terminals
switchBrand('maersk'); // switch back to Maersk
```

Available brands: `maersk`, `apmterminals`, `alianca`, `captainpeter`, `stillstrom`

## Hard Constraints

### ❌ JS import for theming vs ✅ link tags with media attribute

```js
// ❌ — JS imports are static; cannot be toggled at runtime
import '@maersk-global/mds-design-tokens/maersk/dark/css/design-tokens-px.css';
```

```html
<!-- ✅ — link tags with media can be toggled by mc-theme-switch -->
<link rel="stylesheet" media="(prefers-color-scheme: light)" href=".../maersk/light/css/design-tokens-px.css" />
<link rel="stylesheet" media="(prefers-color-scheme: dark)" href=".../maersk/dark/css/design-tokens-px.css" />
```

### ❌ Custom theme toggle vs ✅ mc-theme-switch

```html
<!-- ❌ — reinventing the wheel; classList approach won't work with MDS tokens -->
<button onclick="document.body.classList.toggle('dark-mode')">Toggle</button>

<!-- ✅ — mc-theme-switch handles media query toggling, accessibility, and icon -->
<mc-theme-switch></mc-theme-switch>
```

### ❌ Single link tag vs ✅ both light and dark link tags

```html
<!-- ❌ — mc-theme-switch has nothing to toggle; only one theme will load -->
<link rel="stylesheet" href=".../maersk/light/css/design-tokens-px.css" />
<mc-theme-switch></mc-theme-switch>

<!-- ✅ — both tags required; mc-theme-switch toggles between them -->
<link rel="stylesheet" media="(prefers-color-scheme: light)" href=".../maersk/light/css/design-tokens-px.css" />
<link rel="stylesheet" media="(prefers-color-scheme: dark)" href=".../maersk/dark/css/design-tokens-px.css" />
<mc-theme-switch></mc-theme-switch>
```

### ❌ Restoration script after link tags vs ✅ before link tags

```html
<!-- ❌ — flash of wrong theme: browser loads the wrong stylesheet before script runs -->
<head>
  <link rel="stylesheet" media="(prefers-color-scheme: light)" href=".../light/..." />
  <link rel="stylesheet" media="(prefers-color-scheme: dark)" href=".../dark/..." />
  <script>
    /* restore from localStorage */
  </script>
</head>

<!-- ✅ — script runs first, sets correct media before browser fetches stylesheets -->
<head>
  <script>
    /* restore from localStorage */
  </script>
  <link rel="stylesheet" media="(prefers-color-scheme: light)" href=".../light/..." />
  <link rel="stylesheet" media="(prefers-color-scheme: dark)" href=".../dark/..." />
</head>
```

## Common Mistakes

- Using a JS/TS import for token CSS — cannot be toggled at runtime; use `<link media>` tags
- Adding only one `<link>` tag — both light and dark must be present for `mc-theme-switch` to toggle
- Placing the localStorage restoration script after the `<link>` tags — causes a flash of the wrong theme on page reload
- Using `body.classList.toggle('dark')` — MDS theming works via stylesheet swapping, not class toggling
- Forgetting to restore from `localStorage` on page load — users lose their preference on refresh
- Not placing `mc-theme-switch` before components that depend on theme — the toggle must be available before user interaction
