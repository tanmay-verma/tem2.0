# MDS Layout Patterns Reference

Common page layout patterns with complete 3-breakpoint grid classes. All examples use container grid (`mds-container`).

## Dashboard — Grid of Cards

Three equal-width cards side by side on desktop, stacked on mobile.

```html
<main class="mds-page mds-container">
  <div class="mds-grid mds-gap-400
              mds-grid-md-rows-1
              mds-grid-sm-rows-3
              mds-grid-xs-rows-3">

    <mc-card class="mds-grid-md-col-1 mds-grid-md-col-span-4 mds-grid-md-row-1
                    mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-1
                    mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-1">
      Card 1
    </mc-card>

    <mc-card class="mds-grid-md-col-5 mds-grid-md-col-span-4 mds-grid-md-row-1
                    mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-2
                    mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-2">
      Card 2
    </mc-card>

    <mc-card class="mds-grid-md-col-9 mds-grid-md-col-span-4 mds-grid-md-row-1
                    mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-3
                    mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-3">
      Card 3
    </mc-card>

  </div>
</main>
```

## Settings Page — Sidebar + Form Content

Narrow sidebar (3/12) beside a wider content area (9/12) on desktop; full width stacked on smaller screens.

```html
<main class="mds-page mds-container">
  <div class="mds-grid mds-gap-600
              mds-grid-md-rows-1
              mds-grid-sm-rows-2
              mds-grid-xs-rows-2">

    <!-- Settings nav sidebar -->
    <aside class="mds-grid-md-col-1 mds-grid-md-col-span-3 mds-grid-md-row-1
                  mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-1
                  mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-1">
      <nav>...</nav>
    </aside>

    <!-- Main settings form -->
    <section class="mds-grid-md-col-4 mds-grid-md-col-span-9 mds-grid-md-row-1
                    mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-2
                    mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-2">
      <div class="mds-flex mds-flex-column mds-gap-400">
        <mc-input label="Display name"></mc-input>
        <mc-input label="Email"></mc-input>
        <mc-button label="Save changes" appearance="primary"></mc-button>
      </div>
    </section>

  </div>
</main>
```

## List Page — Full Width Table

Data table spanning the full grid width at all breakpoints.

```html
<main class="mds-page mds-container">

  <!-- Toolbar row: title + actions -->
  <div class="mds-flex mds-flex-items-center mds-gap-400" style="margin-bottom: 0">
    <h1 class="mds-headline mds-headline--medium">Shipments</h1>
    <div class="mds-flex mds-flex-row mds-gap-200" style="margin-left: auto">
      <mc-button label="Export" appearance="neutral" variant="outlined"></mc-button>
      <mc-button label="New shipment" appearance="primary"></mc-button>
    </div>
  </div>

  <!-- Table: full width at all breakpoints -->
  <div class="mds-grid">
    <div class="mds-grid-md-col-1 mds-grid-md-col-span-12 mds-grid-md-row-1
                mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-1
                mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-1">
      <mc-table>...</mc-table>
    </div>
  </div>

</main>
```

## Detail Page — Wide Content + Narrow Metadata

Primary content (8/12) beside metadata panel (4/12) on desktop; stacked on smaller screens.

```html
<main class="mds-page mds-container">
  <div class="mds-grid mds-gap-600
              mds-grid-md-rows-1
              mds-grid-sm-rows-2
              mds-grid-xs-rows-2">

    <!-- Primary content -->
    <article class="mds-grid-md-col-1 mds-grid-md-col-span-8 mds-grid-md-row-1
                    mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-1
                    mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-1">
      <div class="mds-flex mds-flex-column mds-gap-400">
        <h1 class="mds-headline mds-headline--large">Booking #BKG-12345</h1>
        <!-- detail content -->
      </div>
    </article>

    <!-- Metadata / actions panel -->
    <aside class="mds-grid-md-col-9 mds-grid-md-col-span-4 mds-grid-md-row-1
                  mds-grid-sm-col-1 mds-grid-sm-col-span-6 mds-grid-sm-row-2
                  mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-2">
      <mc-card>
        <div class="mds-flex mds-flex-column mds-gap-300">
          <p class="mds-text mds-text--small-bold">Status</p>
          <mc-tag label="In transit" appearance="info"></mc-tag>
          <mc-button label="Track shipment" appearance="primary"></mc-button>
        </div>
      </mc-card>
    </aside>

  </div>
</main>
```

## No-Sidebar Layout

When there is no `mc-side-bar`, add `mds-layout-no-side-bar` to `mds-layout`:

```html
<div class="mds-layout mds-layout-no-side-bar">
  <mc-top-bar product="My App" productshort="MA"></mc-top-bar>
  <main id="main-content" class="mds-page mds-container">
    <div class="mds-grid">...</div>
  </main>
  <footer id="footer" class="mds-footer">© Maersk</footer>
</div>
```

## Centered Content Page

For login pages, empty states, or confirmation screens, use `mds-page-centered` instead of `mds-page mds-container`:

```html
<div class="mds-layout mds-layout-no-side-bar">
  <mc-top-bar product="My App" productshort="MA"></mc-top-bar>
  <main id="main-content" class="mds-page-centered">
    <div class="mds-flex mds-flex-column mds-flex-items-center mds-gap-400">
      <mc-icon name="check-circle" size="48"></mc-icon>
      <h1 class="mds-headline mds-headline--medium">Booking confirmed</h1>
      <mc-button label="Back to dashboard" href="/dashboard"></mc-button>
    </div>
  </main>
  <footer id="footer" class="mds-footer">© Maersk</footer>
</div>
```
