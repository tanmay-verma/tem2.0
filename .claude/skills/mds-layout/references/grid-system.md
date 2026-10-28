# MDS Grid System Reference

Use this packaged grid-system reference together with [container-grid metadata](./container-grid.md), [base-grid metadata](./base-grid.md), and [gap utilities](./_gap.md).

## Container Grid

The MDS grid is container-responsive. Wrap content in `mds-container` to enable container queries.

### Breakpoints → Columns

| Breakpoint | Container width | Columns |
| ---------- | --------------- | ------- |
| xs         | 0 – 640px       | 2       |
| sm         | 641 – 1024px    | 6       |
| md         | 1025px+         | 12      |

### Class Pattern

```
mds-grid                               — grid container
mds-grid-{bp}-col-{start}             — column start position
mds-grid-{bp}-col-span-{count}        — column span
mds-grid-{bp}-row-{n}                 — row position
mds-grid-{bp}-rows-{count}            — total row count
```

Where `{bp}` is `xs`, `sm`, or `md`.

### Example: Responsive 3-column layout

```html
<main class="mds-container">
  <div class="mds-grid">
    <!-- Full width on xs/sm, 4-col on md -->
    <div class="mds-grid-md-col-1 mds-grid-md-col-span-4">Column 1</div>
    <div class="mds-grid-md-col-5 mds-grid-md-col-span-4">Column 2</div>
    <div class="mds-grid-md-col-9 mds-grid-md-col-span-4">Column 3</div>
  </div>
</main>
```

### Example: Sidebar + Content

```html
<div class="mds-grid">
  <!-- Sidebar: 3 columns on md, full width on sm/xs -->
  <div
    class="mds-grid-md-col-1 mds-grid-md-col-span-3
              mds-grid-sm-col-1 mds-grid-sm-col-span-6"
  >
    Sidebar
  </div>
  <!-- Content: 9 columns on md, full width on sm/xs -->
  <div
    class="mds-grid-md-col-4 mds-grid-md-col-span-9
              mds-grid-sm-col-1 mds-grid-sm-col-span-6"
  >
    Main Content
  </div>
</div>
```

## Gap Classes

Gap classes use the token-based spacing scale, not pixel values:

```html
<div class="mds-grid mds-gap-200">8px gap</div>
<div class="mds-grid mds-gap-400">16px gap</div>
<div class="mds-grid mds-gap-600">24px gap</div>
```

Pattern: `mds-gap-{token}`, `mds-col-gap-{token}`, `mds-row-gap-{token}`.
Responsive: `mds-{breakpoint}-gap-{token}` (e.g., `mds-md-gap-400`).

## Viewport Grid

For viewport-based (not container-based) grid, replace `mds-container` with `mds-viewport` as the parent wrapper. The inner `mds-grid` and all `mds-grid-{bp}-*` classes remain identical.

```html
<!-- Container grid: responds to container width (default) -->
<main class="mds-container">
  <div class="mds-grid">...</div>
</main>

<!-- Viewport grid: responds to viewport width -->
<main class="mds-viewport">
  <div class="mds-grid">...</div>
</main>
```

## Base Grid (non-responsive)

For a fixed 12-column grid that does not change at breakpoints, use `mds-grid-col-{n}` and `mds-grid-col-span-{n}` without a breakpoint prefix:

```html
<div class="mds-container">
  <div class="mds-grid">
    <div class="mds-grid-col-1 mds-grid-col-span-6">Left half</div>
    <div class="mds-grid-col-7 mds-grid-col-span-6">Right half</div>
  </div>
</div>
```

Special base-grid utilities: `mds-grid-col-1-reverse` (positions cell at the end), `mds-grid-col-span-to-end` (spans to last column).
