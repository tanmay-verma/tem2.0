---
name: mds-layout
description: 'Create responsive page layouts with MDS grid, flex, spacing, and breakpoints. Use for: layout, grid, columns, responsive, spacing, breakpoint, dashboard, sidebar, page structure, container, main content area, footer, flexbox, gaps, mds-container, mds-grid, mds-flex.'
related-skills: ['mds-design-tokens', 'mds-navigation', 'mds-components', 'mds-a11y']
related-components: ['mc-top-bar', 'mc-side-bar']
---

# Create Page Layouts with MDS

## When to Use

- Building a new page layout (dashboard, settings, detail page, list page)
- Adding responsive multi-column grid layouts
- Setting up the app shell (top bar, sidebar, main content area, footer)
- Laying out form fields, button rows, or card internals (flex)
- Making custom elements responsive across breakpoints

## Decision Table

| Need | Approach | Notes |
| ---- | --------- | ----- |
| Standard responsive page layout | Container grid: `mds-container` + `mds-grid` | Responds to **container** width — most common choice |
| Full-page responsive layout | Viewport grid: `mds-viewport` + `mds-grid` | Responds to **viewport** width instead |
| Fixed 12-column layout (no responsiveness needed) | Base grid: `mds-grid-col-{n}` / `mds-grid-col-span-{n}` | No breakpoint prefixes; always 12 columns |
| Linear stacking, form fields, button rows | Flex: `mds-flex` + direction + gap | 1-dimensional only; not for page columns |
| App shell without sidebar | `mds-layout mds-layout-no-side-bar` | Required when `mc-side-bar` is absent |
| Centered content page | `mds-page-centered` | Use instead of `mds-page mds-container` |
| Full-width content page | `mds-page-full-width` | Use instead of `mds-page mds-container` |
| Independent column / row gap | `mds-col-gap-{n}` / `mds-row-gap-{n}` | Use when column and row spacing must differ |

## When NOT to Use

- **Custom CSS Grid** (`display: grid; grid-template-columns: ...`) — always use `mds-grid` classes
- **Custom Flexbox** (`display: flex; flex-direction: column; gap: 24px;`) — always use `mds-flex` utility classes
- **Hardcoded pixel spacing** (`padding: 40px; gap: 24px`) — always use `mds-gap-{token}` classes
- **Tailwind/Bootstrap grid classes** — MDS provides its own grid system; do not mix
- **Custom breakpoints** in CSS/SCSS — always use the MDS breakpoint scale via mixins
- **`mds-flex`** for multi-column page layouts — use `mds-grid` for anything that spans rows and columns

## Procedure

### 1. Set Up the App Shell

Every MDS application follows this structure. Place `mds-footer` **inside** `mds-layout` and **outside** `mds-page`:

```html
<body class="mds">
  <a href="#main-content" class="mds-skip-to">Skip to content</a>
  <a href="#footer" class="mds-skip-to">Skip to footer</a>
  <div class="mds-layout">
    <mc-top-bar product="My App" productshort="MA"></mc-top-bar>

    <mc-side-bar>
      <nav class="mds-tree-nav" role="navigation" aria-label="Side navigation">
        <ul>
          <li><a href="/" aria-current="page" class="mds-tree-nav__active">Dashboard</a></li>
          <li><a href="/shipments">Shipments</a></li>
        </ul>
      </nav>
    </mc-side-bar>

    <main id="main-content" class="mds-page mds-container">
      <div class="mds-grid">
        <!-- page content -->
      </div>
    </main>

    <footer id="footer" class="mds-footer">© Maersk</footer>
  </div>
</body>
```

**Without a sidebar**, add `mds-layout-no-side-bar` to the layout wrapper:

```html
<div class="mds-layout mds-layout-no-side-bar">
  <mc-top-bar product="My App" productshort="MA"></mc-top-bar>
  <main id="main-content" class="mds-page mds-container">...</main>
  <footer id="footer" class="mds-footer">...</footer>
</div>
```

### 2. Use the Container Grid (Standard)

The MDS default grid is **container-responsive** — it responds to the width of the `mds-container` element, not the full viewport. This is the correct choice for most page layouts.

**Breakpoints → columns:**

| Breakpoint | Container width | Columns |
| ---------- | --------------- | ------- |
| xs         | 0 – 640px       | 2       |
| sm         | 641 – 1024px    | 6       |
| md         | 1025px+         | 12      |

**Class patterns:**

```
mds-container                          — parent that enables container queries
mds-grid                               — grid container
mds-grid-{bp}-col-{n}                 — column start position (1-based)
mds-grid-{bp}-col-span-{n}           — number of columns to span
mds-grid-{bp}-row-{n}                 — row position
mds-grid-{bp}-rows-{n}               — total row count (on the grid wrapper)
```

Where `{bp}` is `xs`, `sm`, or `md`. Always define all three breakpoints:

```html
<main class="mds-page mds-container">
  <div class="mds-grid mds-grid-md-rows-1 mds-grid-sm-rows-2 mds-grid-xs-rows-3">

    <!-- Column 1: 4/12 on md, 3/6 on sm, full on xs -->
    <div class="mds-grid-md-col-1 mds-grid-md-col-span-4 mds-grid-md-row-1
                mds-grid-sm-col-1 mds-grid-sm-col-span-3 mds-grid-sm-row-1
                mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-1">
      Panel A
    </div>

    <!-- Column 2: 4/12 on md, 3/6 on sm, full on xs -->
    <div class="mds-grid-md-col-5 mds-grid-md-col-span-4 mds-grid-md-row-1
                mds-grid-sm-col-4 mds-grid-sm-col-span-3 mds-grid-sm-row-1
                mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-2">
      Panel B
    </div>

    <!-- Column 3: 4/12 on md, full on sm, full on xs -->
    <div class="mds-grid-md-col-9 mds-grid-md-col-span-4 mds-grid-md-row-1
                mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-2
                mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-3">
      Panel C
    </div>

  </div>
</main>
```

Grid alignment modifiers (added to the `mds-grid` element):

```
mds-grid-justify-start | mds-grid-justify-center | mds-grid-justify-end | mds-grid-justify-stretch
mds-grid-align-start   | mds-grid-align-center   | mds-grid-align-end   | mds-grid-align-stretch
```

For common layout patterns (dashboard cards, sidebar+content, list+detail), see [layout-patterns reference](./references/layout-patterns.md).  
For the full grid class listing, see [grid-system reference](./references/grid-system.md).

### 3. Use Flex Utilities

For one-dimensional layouts (stacking form fields, aligning button rows, card content), use MDS flex utilities. Do **not** use `mds-flex` for multi-column page layouts.

```html
<!-- Vertical stack (form fields) -->
<div class="mds-flex mds-flex-column mds-gap-400">
  <mc-input label="First name"></mc-input>
  <mc-input label="Last name"></mc-input>
  <mc-input label="Email"></mc-input>
</div>

<!-- Horizontal row (action buttons) -->
<div class="mds-flex mds-flex-row mds-gap-200">
  <mc-button label="Cancel" appearance="neutral" variant="outlined"></mc-button>
  <mc-button label="Save" appearance="primary"></mc-button>
</div>

<!-- Centered content -->
<div class="mds-flex mds-flex-items-center mds-flex-content-center mds-gap-400">
  <mc-icon name="check-circle"></mc-icon>
  <p class="mds-text mds-text--medium-normal">All done</p>
</div>
```

**All flex classes:**

| Class | CSS equivalent | Notes |
| ----- | -------------- | ----- |
| `mds-flex` | `display: flex` | Required on container |
| `mds-flex-row` | `flex-direction: row` | Default direction |
| `mds-flex-column` | `flex-direction: column` | Vertical stack |
| `mds-flex-nowrap` | `flex-wrap: nowrap` | Prevent wrapping (default behavior) |
| `mds-flex-items-start` | `align-items: flex-start` | |
| `mds-flex-items-center` | `align-items: center` | |
| `mds-flex-items-end` | `align-items: flex-end` | |
| `mds-flex-items-baseline` | `align-items: baseline` | |
| `mds-flex-items-stretch` | `align-items: stretch` | |
| `mds-flex-content-start` | `justify-content: flex-start` | |
| `mds-flex-content-center` | `justify-content: center` | |
| `mds-flex-content-end` | `justify-content: flex-end` | |

### 4. Apply Gap Spacing

`mds-gap-{token}` works on both `mds-grid` and `mds-flex` containers. Use `mds-col-gap-{n}` and `mds-row-gap-{n}` when column and row spacing must differ.

**Token → pixel reference:**

| Token | px |
| ----- | -- |
| 50    | 2px |
| 100   | 4px |
| 150   | 6px |
| 200   | 8px |
| 300   | 12px |
| 400   | 16px |
| 500   | 20px |
| 600   | 24px |
| 700   | 28px |
| 800   | 32px |
| 1000  | 40px |
| 1200  | 48px |
| 1600  | 64px |

Breakpoint-specific gap: `mds-{bp}-gap-{token}` (e.g., `mds-md-gap-600 mds-xs-gap-200`).

```html
<!-- Same gap on all sides -->
<div class="mds-grid mds-gap-400">...</div>

<!-- Different column and row gap -->
<div class="mds-grid mds-col-gap-600 mds-row-gap-200">...</div>

<!-- Gap that changes at breakpoints -->
<div class="mds-grid mds-md-gap-600 mds-sm-gap-400 mds-xs-gap-200">...</div>
```

### 5. Apply Responsive Styles with Breakpoint Mixins

Use SCSS mixins from `@maersk-global/mds-foundations` for custom responsive styles. Use **viewport** mixins for page-level styles, **container** mixins for component-level styles (requires a `mds-container` ancestor).

```scss
@use '@maersk-global/mds-foundations/sass/mixins/_media.scss' as *;

.my-element {
  // Mobile-first: xs styles first
  padding: 8px;

  @include mds-viewport-above('xs') {
    // sm and above (641px+)
    padding: 16px;
  }

  @include mds-viewport-above('sm') {
    // md and above (1025px+)
    padding: 24px;
  }
}
```

**Available mixins:**

| Mixin | Applies when |
| ----- | ------------ |
| `mds-viewport-above('xs')` | viewport ≥ 641px (sm+) |
| `mds-viewport-above('sm')` | viewport ≥ 1025px (md+) |
| `mds-viewport-above('md')` | viewport ≥ 1441px (lg+) |
| `mds-viewport-above('lg')` | viewport ≥ 1921px (xl+) |
| `mds-viewport-below('sm')` | viewport < 640px (xs) |
| `mds-viewport-below('md')` | viewport < 1024px (sm and below) |
| `mds-container-above('xs')` | container ≥ 641px (sm+) |
| `mds-container-above('sm')` | container ≥ 1025px (md+) |

Equivalent raw CSS breakpoints if SCSS is unavailable:

```css
/* xs */
@media only screen and (max-width: 640px) { ... }
/* sm */
@media only screen and (min-width: 641px) and (max-width: 1024px) { ... }
/* md+ */
@media only screen and (min-width: 1025px) { ... }
```

## Hard Constraints

### ❌ Custom CSS layout vs ✅ MDS classes

```css
/* ❌ — never write custom grid or flex CSS */
.my-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.my-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

```html
<!-- ✅ — always use MDS utility classes -->
<div class="mds-grid mds-gap-600">...</div>
<div class="mds-flex mds-flex-column mds-gap-400">...</div>
```

### ❌ Wrong flex class names vs ✅ actual MDS class names

```html
<!-- ❌ — these classes do not exist in MDS -->
<div class="mds-flex mds-flex-wrap mds-align-items-center mds-justify-content-center"></div>

<!-- ✅ — correct MDS class names -->
<div class="mds-flex mds-flex-items-center mds-flex-content-center"></div>
<!-- To PREVENT wrapping (not enable it): -->
<div class="mds-flex mds-flex-nowrap"></div>
```

### ❌ Missing mds-container on grid parent vs ✅ required wrapper

```html
<!-- ❌ — grid has no responsive behavior without mds-container -->
<div>
  <div class="mds-grid">
    <div class="mds-grid-md-col-1 mds-grid-md-col-span-6">...</div>
  </div>
</div>

<!-- ✅ — mds-container activates container queries so breakpoints work -->
<main class="mds-page mds-container">
  <div class="mds-grid">
    <div class="mds-grid-md-col-1 mds-grid-md-col-span-6">...</div>
  </div>
</main>
```

### ❌ Missing mds-layout-no-side-bar vs ✅ required modifier without sidebar

```html
<!-- ❌ — layout grid is misaligned without sidebar modifier -->
<div class="mds-layout">
  <mc-top-bar product="App"></mc-top-bar>
  <main class="mds-page mds-container">...</main>
</div>

<!-- ✅ — add mds-layout-no-side-bar when mc-side-bar is absent -->
<div class="mds-layout mds-layout-no-side-bar">
  <mc-top-bar product="App"></mc-top-bar>
  <main class="mds-page mds-container">...</main>
</div>
```

### ❌ Footer inside mds-page vs ✅ footer outside mds-page, inside mds-layout

```html
<!-- ❌ — footer inside main content area breaks the layout -->
<div class="mds-layout">
  <mc-top-bar ...></mc-top-bar>
  <main class="mds-page mds-container">
    <div class="mds-grid">...</div>
    <footer class="mds-footer">Footer</footer>  <!-- wrong position -->
  </main>
</div>

<!-- ✅ — footer is a sibling of mds-page, child of mds-layout -->
<div class="mds-layout">
  <mc-top-bar ...></mc-top-bar>
  <main class="mds-page mds-container">
    <div class="mds-grid">...</div>
  </main>
  <footer id="footer" class="mds-footer">Footer</footer>
</div>
```

### ❌ Hardcoded pixel spacing vs ✅ gap tokens

```css
/* ❌ */
.card-grid { gap: 24px; }
.form { padding: 32px; }
```

```html
<!-- ✅ -->
<div class="mds-grid mds-gap-600">...</div>    <!-- 24px -->
<div class="mds-flex mds-flex-column mds-gap-800">...</div>  <!-- 32px -->
```

### ❌ mds-flex for multi-column page layout vs ✅ mds-grid

```html
<!-- ❌ — flex is 1-dimensional; use for form fields and button rows only -->
<div class="mds-flex">
  <div style="width: 33%">Column 1</div>
  <div style="width: 33%">Column 2</div>
  <div style="width: 33%">Column 3</div>
</div>

<!-- ✅ — mds-grid handles multi-column responsive layouts -->
<main class="mds-container">
  <div class="mds-grid">
    <div class="mds-grid-md-col-1 mds-grid-md-col-span-4 ...">Column 1</div>
    <div class="mds-grid-md-col-5 mds-grid-md-col-span-4 ...">Column 2</div>
    <div class="mds-grid-md-col-9 mds-grid-md-col-span-4 ...">Column 3</div>
  </div>
</main>
```

## Common Mistakes

- Writing `mds-flex-wrap` — this class does not exist; use `mds-flex-nowrap` to prevent wrapping
- Writing `mds-align-items-center` or `mds-justify-content-center` — wrong names; use `mds-flex-items-center` and `mds-flex-content-center`
- Missing `mds-container` on the grid parent — breakpoint classes have no effect without it
- Missing `mds-layout-no-side-bar` when there is no `mc-side-bar` — causes misaligned layout
- Placing `<footer class="mds-footer">` inside `mds-page` — it must be a sibling of `mds-page` inside `mds-layout`
- Using `mds-flex` for multi-column layouts — use `mds-grid`; flex is for single-axis alignment only
- Hardcoding pixel spacing (`gap: 24px`, `padding: 40px`) — use `mds-gap-600`, `mds-gap-1000`
- Only defining the `md` breakpoint grid classes — always define `xs`, `sm`, and `md` for each cell
- Using raw CSS media queries with non-MDS breakpoint values — use the MDS mixin scale or exact values (640px, 1024px, 1440px, 1920px)
- Using `mds-viewport-grid` — this class does not exist; use `mds-viewport` as the parent alongside `mds-grid`

## Reference Files

- [Grid system reference](./references/grid-system.md) — class patterns, breakpoints, examples
- [Layout patterns reference](./references/layout-patterns.md) — dashboard, settings, list, detail page examples
- [layout CSS classes](./references/layout.md) — app shell classes (`mds-layout`, `mds-page`, `mds-footer`, etc.)
- [flex CSS classes](./references/flex.md) — flex utility class listing
- [gap CSS classes](./references/gap.md) — all gap tokens and breakpoint variants
- [media / breakpoints](./references/media.md) — SCSS mixin reference
- [container-grid classes](./references/container-grid.md) — full container-responsive grid class listing
- [viewport-grid classes](./references/viewport-grid.md) — viewport-responsive grid class listing
- [base-grid classes](./references/base-grid.md) — non-responsive fixed 12-column grid

### Foundation CSS References

- [base-grid](./references/base-grid.md)
- [container-grid](./references/container-grid.md)
- [flex](./references/flex.md)
- [gap](./references/gap.md)
- [layout](./references/layout.md)
- [media](./references/media.md)
- [viewport-grid](./references/viewport-grid.md)
