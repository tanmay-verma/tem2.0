---
name: mds-navigation
description: 'Create navigation patterns with MDS components. Use for: navigation, sidebar, top bar, tabs, tab bar, breadcrumb, tree nav, context menu, dropdown menu, segmented control, hamburger menu, header, app bar, view switcher, page routing, active nav link.'
related-skills: ['mds-layout', 'mds-components', 'mds-a11y', 'mds-icons', 'mds-overlays']
related-components:
  [
    'mc-card',
    'mc-link-button',
    'mc-list-item',
    'mc-list',
    'mc-menu',
    'mc-segmented-control-item',
    'mc-segmented-control',
    'mc-side-bar',
    'mc-tab-bar',
    'mc-tab',
    'mc-top-bar',
    'mds-breadcrumb',
    'mds-tree-nav',
  ]
---

# Create Navigation with MDS Components

## When to Use

- Setting up an application header with branding and top-level actions
- Building collapsible sidebar navigation with hierarchical links
- Adding in-page tab switching between content sections
- Adding context menus and action dropdowns
- Showing the user's location in the app hierarchy (breadcrumbs)
- Switching between views or content filters (list/grid/map)

## Decision Table

| Need                           | Component / Approach                                 | Notes                                                                          |
| ------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Application header             | `mc-top-bar`                                         | Always required in MDS apps; holds logo, product name, actions                 |
| Collapsible sidebar            | `mc-side-bar`                                        | Place `mds-tree-nav` nav inside the default slot                               |
| Hierarchical side nav links    | CSS class `mds-tree-nav`                             | Use `<details>`/`<summary>` for expandable groups; always inside `mc-side-bar` |
| In-page content switching      | `mc-tab-bar` + `mc-tab`                              | Tabs are for in-page sections, not page routing                                |
| Context menu / action dropdown | `mc-menu`                                            | Use the `trigger` slot for the button/icon that opens it                       |
| Switch views (list/grid/map)   | `mc-segmented-control` + `mc-segmented-control-item` | Listen to `listchange` for the selected value                                  |
| Location trail                 | CSS class `mds-breadcrumb`                           | Use for 3+ hierarchy levels; HTML-only, no web component                       |
| A href - links                 | Use semantic <a> tag                                 | Link with default MDS styling                                                  |
| Button links                   | `mc-link-button`                                     | For links that look like buttons; use `href` prop for navigation               |
| List of links                  | `mc-list` + `mc-list-item`                           | For menus, dropdowns, or any list of links                                     |

## When NOT to Use

- **`mc-tab-bar` for page-level routing** — tabs are for in-page section switching, not navigating between pages. Use `mc-side-bar` or router links with `mc-segmented-control type="none"` for page-level navigation.
- **Custom dropdown/popover** instead of `mc-menu` — `mc-menu` handles positioning, keyboard navigation, and focus management. Don't build a manual solution.
- **`mc-button-group`** for view toggles — use `mc-segmented-control` instead.
- **Breadcrumbs with fewer than 3 levels** — flat hierarchies don't need breadcrumbs; omit them.
- **Breadcrumb link on the current page** — the last item must be plain text (not `<a>`), with `aria-current="page"` on the `<li>`.

## Procedure

### 1. Set Up the Application Shell (mc-top-bar)

Every MDS app starts with `mc-top-bar` inside `mds-layout`:

```html
<!-- Vanilla / Angular / Vue -->
<mc-top-bar product="Shipment Tracker" productshort="ST">
  <!-- actions slot: icons, user avatar, settings menu -->
  <div slot="actions">
    <mc-menu trigger="click">
      <mc-button
        slot="trigger"
        icon="cog"
        variant="plain"
        appearance="neutral"
        hiddenlabel
        label="Settings"
      ></mc-button>
      <mc-list>
        <mc-list-item label="Preferences"></mc-list-item>
        <mc-list-item label="Sign out"></mc-list-item>
      </mc-list>
    </mc-menu>
  </div>
  <!-- link slot: SPA router link to home -->
  <a slot="link" href="/">Home</a>
</mc-top-bar>
```

```tsx
// React
import { McTopBar } from '@maersk-global/mds-react-wrapper/components-core/mc-top-bar';

<McTopBar product="Shipment Tracker" productshort="ST">
  <div slot="actions">...</div>
</McTopBar>;
```

**Key props:**

| Prop           | Type                      | Default | Notes                                   |
| -------------- | ------------------------- | ------- | --------------------------------------- |
| `product`      | `string`                  | `''`    | Full product name shown next to logo    |
| `productshort` | `string`                  | `''`    | Short name shown in mobile view         |
| `href`         | `string`                  | `''`    | Makes the Maersk logo a clickable link  |
| `logosize`     | `auto \| compact \| full` | `auto`  | Auto uses compact when `product` is set |

**Slots:** `actions` (buttons/icons/menus in top-right), `link` (SPA router link), default (mega menu or search bar)

### 2. Add Side Navigation (mc-side-bar + mds-tree-nav)

`mc-side-bar` provides the collapsible container. Place a `mds-tree-nav` nav inside its default slot:

```html
<mc-side-bar>
  <nav class="mds-tree-nav" role="navigation" aria-label="Main navigation">
    <ul>
      <li>
        <details open>
          <summary>Shipments</summary>
          <ul>
            <li><a href="/shipments/active" class="mds-tree-nav__active" aria-current="page">Active</a></li>
            <li><a href="/shipments/completed">Completed</a></li>
          </ul>
        </details>
      </li>
      <li><a href="/bookings">Bookings</a></li>
      <li class="mds-tree-nav--separator"></li>
      <li><a href="https://help.maersk.com" class="mds-tree-nav__external">Help</a></li>
    </ul>
  </nav>
</mc-side-bar>
```

**Tree-nav CSS classes:**

| Class                     | Purpose                                                      |
| ------------------------- | ------------------------------------------------------------ |
| `mds-tree-nav`            | Root class on `<nav>` element                                |
| `mds-tree-nav__active`    | Active/current link — always pair with `aria-current="page"` |
| `mds-tree-nav__external`  | External link — adds an external-link icon automatically     |
| `mds-tree-nav--separator` | Horizontal divider line (`<li>` with no content)             |

Use `<details open>` to expand a group by default. See [tree-nav reference](./references/tree-nav.md) for full nested examples.

### 3. Add Tab Navigation (mc-tab-bar + mc-tab)

Tabs manage their own panel visibility when you use the `panel` slot. The `tab` and `panel` slots are paired by position — each `mc-tab` must be immediately followed by its `div slot="panel"`:

```html
<mc-tab-bar>
  <mc-tab slot="tab" label="Overview" icon="info-circle"></mc-tab>
  <div slot="panel">Overview content</div>

  <mc-tab slot="tab" label="Documents" icon="file"></mc-tab>
  <div slot="panel">Documents list</div>

  <mc-tab slot="tab" label="Tracking" icon="route" disabled></mc-tab>
  <div slot="panel">Tracking content (disabled)</div>
</mc-tab-bar>
```

For external panel control (routing), omit the `panel` slots and listen to the `tabchange` event — `e.detail` is the new tab index (0-based):

```js
// Vanilla JS
document.querySelector('mc-tab-bar').addEventListener('tabchange', (e) => {
  const newIndex = e.detail; // number
  showPage(newIndex);
});
```

```tsx
// React
import { McTabBar } from '@maersk-global/mds-react-wrapper/components-core/mc-tab-bar';
import { McTab } from '@maersk-global/mds-react-wrapper/components-core/mc-tab';

<McTabBar tabchange={(e) => showPage((e as CustomEvent<number>).detail)}>
  <McTab slot="tab" label="Overview" icon="info-circle" />
  <McTab slot="tab" label="Documents" icon="file" />
</McTabBar>;
```

Set `currentindex` programmatically to control the active tab (0-based):

```html
<mc-tab-bar currentindex="1">...</mc-tab-bar>
```

### 4. Add a Context Menu (mc-menu)

`mc-menu` requires two slots: `trigger` (what the user clicks/hovers) and the default slot (the `mc-list` with items):

```html
<mc-menu trigger="click" position="bottom-left">
  <mc-button
    slot="trigger"
    icon="ellipsis-vertical"
    hiddenlabel
    label="Actions"
    variant="plain"
    appearance="neutral"
  ></mc-button>
  <mc-list>
    <mc-list-item label="Edit booking"></mc-list-item>
    <mc-list-item label="Download PDF"></mc-list-item>
    <mc-list-item label="Cancel shipment"></mc-list-item>
  </mc-list>
</mc-menu>
```

```tsx
// React
import { McMenu } from '@maersk-global/mds-react-wrapper/components-core/mc-menu';

<McMenu trigger="click" position="bottom-left">
  <McButton
    slot="trigger"
    icon="ellipsis-vertical"
    hiddenlabel={true}
    label="Actions"
    variant="plain"
    appearance="neutral"
  />
  <McList>
    <McListItem label="Edit booking" />
  </McList>
</McMenu>;
```

**Key props:**

| Prop                   | Type                                                          | Default       | Notes                                      |
| ---------------------- | ------------------------------------------------------------- | ------------- | ------------------------------------------ |
| `trigger`              | `click \| hover \| focus \| contextmenu \| manual`            | `click`       | Event that opens the menu                  |
| `position`             | `bottom-left \| bottom-right \| top-left \| top-right \| ...` | `bottom-left` | Menu placement relative to trigger element |
| `disablecloseonselect` | `boolean`                                                     | `false`       | Keep menu open after selecting an item     |

### 5. Add Breadcrumbs (mds-breadcrumb)

Breadcrumbs are CSS-only — no web component. The current page item must be plain text (not a link), with `aria-current="page"` on the `<li>`:

```html
<nav class="mds-breadcrumb" aria-label="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/shipments">Shipments</a></li>
    <li><a href="/shipments/ocean">Ocean</a></li>
    <li aria-current="page">Booking #12345</li>
  </ol>
</nav>
```

For long items (5+ levels), use `mds-breadcrumb__long-and-truncated` to truncate with an ellipsis:

```html
<li class="mds-breadcrumb__long-and-truncated"><a href="#">Sub-region data exports</a></li>
```

### 6. Segmented Control (view/filter switcher)

Use `mc-segmented-control` for switching between views (list/grid/map) or filtering content. Limit to 4–5 items:

```html
<mc-segmented-control>
  <mc-segmented-control-item value="list" label="List" icon="list-bullets" selected></mc-segmented-control-item>
  <mc-segmented-control-item value="grid" label="Grid" icon="grid"></mc-segmented-control-item>
  <mc-segmented-control-item value="map" label="Map" icon="map"></mc-segmented-control-item>
</mc-segmented-control>
```

Listen to `listchange` — `e.detail.value` is the selected item's value:

```js
// Vanilla JS
document.querySelector('mc-segmented-control').addEventListener('listchange', (e) => {
  switchView(e.detail.value);
});
```

```tsx
// React
import { McSegmentedControl } from '@maersk-global/mds-react-wrapper/components-core/mc-segmented-control';
import { McSegmentedControlItem } from '@maersk-global/mds-react-wrapper/components-core/mc-segmented-control-item';

<McSegmentedControl listchange={(e) => switchView((e as CustomEvent).detail.value)}>
  <McSegmentedControlItem value="list" label="List" icon="list-bullets" selected={true} />
  <McSegmentedControlItem value="grid" label="Grid" icon="grid" />
</McSegmentedControl>;
```

## Hard Constraints

### ❌ mc-tab-bar for page routing vs ✅ sidebar for page navigation

```html
<!-- ❌ — tabs are NOT for navigating between pages -->
<mc-tab-bar>
  <mc-tab slot="tab" label="Dashboard"></mc-tab>
  <mc-tab slot="tab" label="Reports"></mc-tab>
</mc-tab-bar>

<!-- ✅ — use mc-side-bar + mds-tree-nav for page navigation -->
<mc-side-bar>
  <nav class="mds-tree-nav" role="navigation" aria-label="Main navigation">
    <ul>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/reports">Reports</a></li>
    </ul>
  </nav>
</mc-side-bar>
```

### ❌ Custom dropdown instead of mc-menu

```html
<!-- ❌ — manual positioning, no keyboard support -->
<div style="position: relative;">
  <mc-button label="Actions" trailingicon="caret-down"></mc-button>
  <mc-list style="position: absolute; top: 40px;">
    <mc-list-item label="Edit"></mc-list-item>
  </mc-list>
</div>

<!-- ✅ — mc-menu handles positioning, focus, and keyboard navigation -->
<mc-menu trigger="click" position="bottom-left">
  <mc-button slot="trigger" label="Actions" trailingicon="caret-down"></mc-button>
  <mc-list>
    <mc-list-item label="Edit"></mc-list-item>
  </mc-list>
</mc-menu>
```

### ❌ Active nav link without aria-current vs ✅ both class and attribute

```html
<!-- ❌ — visual only, not accessible to screen readers -->
<a href="/shipments" class="mds-tree-nav__active">Shipments</a>

<!-- ✅ — visual + semantic -->
<a href="/shipments" class="mds-tree-nav__active" aria-current="page">Shipments</a>
```

### ❌ mc-button-group for view switching vs ✅ mc-segmented-control

```html
<!-- ❌ — no selection state, wrong semantic -->
<mc-button-group>
  <mc-button label="List"></mc-button>
  <mc-button label="Grid"></mc-button>
</mc-button-group>

<!-- ✅ — tracks selection state, emits listchange -->
<mc-segmented-control>
  <mc-segmented-control-item value="list" label="List" selected></mc-segmented-control-item>
  <mc-segmented-control-item value="grid" label="Grid"></mc-segmented-control-item>
</mc-segmented-control>
```

### ❌ Breadcrumb current page as link vs ✅ plain text with aria-current

```html
<!-- ❌ — current page should not be a link, and needs aria-current on li -->
<nav class="mds-breadcrumb" aria-label="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/current-page">Current page</a></li>
  </ol>
</nav>

<!-- ✅ — current page is plain text, aria-current="page" on the li -->
<nav class="mds-breadcrumb" aria-label="breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li aria-current="page">Current page</li>
  </ol>
</nav>
```

## Common Mistakes

- Using `mc-tab-bar` for page routing — it is for in-page content switching only
- Forgetting `aria-current="page"` alongside `mds-tree-nav__active` — visual style alone is not accessible
- Missing the `trigger` slot on `mc-menu` — without it, the menu has no opener element
- Making the current breadcrumb item a link — it must be plain text
- Using `mc-segmented-control` with more than 5 items — limit to 4–5 for readability
- Missing `aria-label` on `<nav>` wrappers when the page has multiple nav regions
- Omitting `role="navigation"` and `aria-label` from `mds-tree-nav` — both are required

## Reference Files

- [tree-nav reference](./references/tree-nav.md) — full CSS classes and deep-nested example for `mds-tree-nav`
- [Component skill](../mds-components/SKILL.md) — overview of all components with references to detail component's API
