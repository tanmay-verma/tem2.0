---
name: mds-content
description: 'Display content with MDS components. Use for: card, tag, badge, tabs, accordion, list, modal, heading, typography, content layout, article, KPI, status label, metadata display, content formatting, date display, currency display, number formatting, colour classes, text colour, background colour, border colour, content inside cards, content inside modals, content inside tab-bars.'
related-skills: ['mds-layout', 'mds-design-tokens', 'mds-form', 'mds-dashboard', 'mds-overlays', 'mds-a11y']
related-components:
  [
    'mc-accordion',
    'mc-accordion-item',
    'mc-badge',
    'mc-card',
    'mc-icon',
    'mc-list',
    'mc-list-item',
    'mc-modal',
    'mc-tab',
    'mc-tab-bar',
    'mc-tag',
    'mc-text-and-icon',
    'mc-tooltip',
  ]
---

# Display Content with MDS Components

## When to Use

- Displaying content in cards (articles, KPIs, product info, teasers)
- Showing status labels, metadata keywords, or applied filters
- Organising content with tabs or accordions
- Building lists of items with selection or navigation
- Opening overlay dialogs that contain rich content (modals)
- Displaying headings, text blocks, and structured content
- Applying semantic colour to text, backgrounds, and borders using MDS colour classes
- Formatting dates, numbers, and currencies in UI

---

## Decision Table

| Need                           | Component / Approach                            | Notes                                                                                          |
| ------------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Content container / teaser     | `mc-card`                                       | Use `heading`, `body`, `footer` props — never nest `<h2>` in default slot                      |
| Card with image                | `mc-card` + `image` prop or slot                | Use `orientation` to control layout                                                            |
| Clickable card (URL)           | `mc-card href="..."`                            | Renders as `<a>` — hides `actions` slot                                                        |
| Clickable card (JS action)     | `mc-card clickable`                             | Adds hover/focus style — never combine with `href`                                             |
| Status label / keyword tag     | `mc-tag`                                        | Use semantic `appearance` — never `style="color: green"`                                       |
| Removable filter tag           | `mc-tag withaction`                             | Fires `dismiss` event when × clicked                                                           |
| Count badge (overlaid on icon) | `mc-badge` (pinned, wraps child)                | Wraps target element inside `<mc-badge>`                                                       |
| Standalone count label         | `mc-badge display="inline"`                     | Does not wrap children                                                                         |
| Status dot (no count)          | `mc-badge variant="dot"`                        | Use for unread indicators                                                                      |
| In-page section switcher       | `mc-tab-bar` + `mc-tab`                         | NOT for site-level navigation                                                                  |
| Collapsible content sections   | `mc-accordion` + `mc-accordion-item`            | Use `heading` prop on items (not `label`)                                                      |
| Overlay dialog with content    | `mc-modal`                                      | Use `heading` prop; body via default slot; actions via `primaryAction`/`secondaryAction` slots |
| List with selection            | `mc-list` + `mc-list-item`                      | Supports single, multiple, typeahead selection modes                                           |
| Navigation list                | `mc-list-item href="..."`                       | Renders item as `<a>`                                                                          |
| Page/section heading           | `<h1>`–`<h6>` + `mds-headline--{size}`          | Always pair semantic element with MDS class                                                    |
| Body/description text          | `<p>` or `<span>` + `mds-text--{size}-{weight}` | Never hardcode font-size or color                                                              |
| Semantic text colour           | `mds-{appearance}__text-color`                  | e.g. `mds-error__text-color` for error-coloured text                                           |
| Semantic background colour     | `mds-{appearance}--{variant}__background-color` | Pair with `mds-{appearance}--{variant}__on-background-color` for contrast                      |
| Semantic border colour         | `mds-{appearance}__border-color`                | Apply to custom containers, dividers, etc.                                                     |
| Inline icon + text             | `mc-text-and-icon`                              | Use `label` and `icon` props                                                                   |
| Reveal truncated text          | `mc-tooltip`                                    | Never rely on native HTML `title` attribute                                                    |

---

## When NOT to Use

- **`mc-tab-bar` for site navigation** — use `mc-top-bar` or `mc-side-bar` instead
- **Hardcoded colours** on text or backgrounds — always use MDS colour CSS classes or design tokens
- **Custom `<span>`/`<div>` for status labels** — use `mc-tag` with the appropriate `appearance`
- **`<h2>`/`<h3>` inside `mc-card` default slot** — use the `heading` prop; the card renders the heading internally
- **`label` prop on `mc-accordion-item`** — the correct prop is `heading`
- **`mc-modal` for full-page layouts or non-interruptive content** — modals block the rest of the page; use inline content instead
- **Custom `<ul>`/`<li>` with inline CSS** when `mc-list` + `mc-list-item` provides the needed functionality (selection, search, keyboard navigation)
- **Invented hex values** on UI elements — only MDS colour classes or design tokens; the sole hex exception is chart/data-viz JS configs (see mds-dashboard skill)

---

## Procedure

### Step 1 — Choose the right heading level and typography class

Always pair a semantic HTML element with an MDS class. Never skip heading levels.

```html
<!-- Page title -->
<h1 class="mds-headline mds-headline--x-large">Active Shipments</h1>

<!-- Section title -->
<h2 class="mds-headline mds-headline--large">Booking Overview</h2>

<!-- Subsection / card heading (standalone, not inside mc-card) -->
<h3 class="mds-headline mds-headline--medium">Container Details</h3>

<!-- KPI number — data value, not a heading; use span not hN -->
<span class="mds-headline mds-headline--x-large">1,248</span>
<span class="mds-text mds-text--small-normal mds-neutral--weak__text-color">Active containers</span>

<!-- Body text -->
<p class="mds-text mds-text--medium-normal">Showing results for the last 30 days.</p>

<!-- Caption / metadata -->
<span class="mds-text mds-text--x-small-normal">Last updated 10 minutes ago</span>
```

**Text size + weight class pattern:** `mds-text--{size}-{weight}`

- sizes: `x-small` | `small` | `medium` | `large`
- weights: `normal` | `light` | `medium` | `semibold` | `bold` | `italic` | `lightitalic` | `mediumitalic` | `semibolditalic` | `bolditalic`

**Headline size class pattern:** `mds-headline--{size}`

- sizes: `x-small` | `small` | `medium` | `large` | `x-large`

---

### Step 2 — Apply semantic colour with MDS colour classes

Use MDS colour CSS classes instead of hardcoded colours or inline `style` attributes. The full class list is in the auto-generated [color reference](./references/color.md).

**Naming pattern:**

```
mds-{appearance}__{type}-color             ← default variant
mds-{appearance}--{variant}__{type}-color  ← non-default variant
```

- **Appearances:** `neutral` | `primary` | `secondary` | `info` | `success` | `warning` | `error`
- **Types:** `text` | `background` | `border` | `on-background`
- **Variants (neutral):** `weakest` | `weak` | `strong` | `strongest` | `inverse`
- **Variants (others):** `weak`

**Text colour:**

```html
<span class="mds-error__text-color">Shipment delayed</span>
<span class="mds-success__text-color">On time</span>
<span class="mds-neutral--weak__text-color">Last updated 10 min ago</span>
```

**Background + on-background — always use both together.** The `on-background` class sets the text colour guaranteed to pass WCAG contrast on that background:

```html
<div class="mds-info--weak__background-color mds-info--weak__on-background-color">In Transit</div>
<div class="mds-warning--weak__background-color mds-warning--weak__on-background-color">Port delays expected</div>
```

**Border colour:**

```html
<div class="mds-warning__border-color" style="border-left: 3px solid; padding-left: 12px;">At Risk</div>
```

---

### Step 3 — Build content cards with `mc-card`

Use props for heading, subheading, body, and footer. Use named slots for rich content.

```html
<!-- Basic content card -->
<mc-card
  heading="Booking #BK-2025-001"
  subheading="MSKU 1234567"
  body="Container scheduled for departure on 15 March 2025 from Rotterdam."
  footer="Updated 5 minutes ago"
></mc-card>

<!-- Card with image (vertical layout) -->
<mc-card
  heading="Supply Chain Logistics"
  body="End-to-end container shipping solutions."
  image="/img/logistics.jpg"
  orientation="vertical"
></mc-card>

<!-- Card with rich body slot + actions slot -->
<mc-card heading="Container MSKU-123456" footer="Last updated: 5 min ago">
  <p class="mds-text mds-text--medium-normal">3 containers ready for departure.</p>
  <mc-tag appearance="success">On Time</mc-tag>
  <mc-button slot="actions" label="View details" appearance="neutral" variant="outlined"></mc-button>
</mc-card>

<!-- Clickable card — URL navigation -->
<mc-card heading="Booking Summary" href="/bookings/123" target="_blank"></mc-card>

<!-- Clickable card — JS action (no URL) -->
<mc-card heading="Booking Summary" clickable></mc-card>
```

**`mc-card` slot rules:**

- `default` slot — rich body content (when `body` prop is not enough)
- `subheading` slot — rich subheading content
- `actions` slot — buttons/links at card bottom (hidden when `href` is set)
- `footer` slot — rich footer content
- `image` slot — custom image markup

---

### Step 4 — Status labels with `mc-tag` and `mc-badge`

```html
<!-- Status tags — use semantic appearance -->
<mc-tag appearance="success">On Time</mc-tag>
<mc-tag appearance="warning">At Risk</mc-tag>
<mc-tag appearance="error">Delayed</mc-tag>
<mc-tag appearance="info">In Transit</mc-tag>
<mc-tag appearance="neutral-weak">Draft</mc-tag>

<!-- Removable filter tags -->
<mc-tag appearance="neutral-weak" withaction>Port: Rotterdam</mc-tag>
<mc-tag appearance="neutral-weak" withaction>Status: Active</mc-tag>
<!-- Listen for dismiss: -->
<!-- tagEl.addEventListener('dismiss', handler) -->

<!-- Count badge overlaid on a button -->
<mc-badge label="5" appearance="error">
  <mc-button icon="bell" hiddenlabel label="Notifications"></mc-button>
</mc-badge>

<!-- Status dot badge -->
<mc-badge variant="dot" appearance="error">
  <mc-icon icon="envelope"></mc-icon>
</mc-badge>

<!-- Inline count badge (standalone, no child wrapping) -->
<mc-badge label="150" max="99" display="inline" appearance="info"></mc-badge>
<!-- Renders: "99+" -->
```

**`mc-tag` appearance values:** `neutral-default` | `neutral-weak` | `neutral-inverse` | `info` | `success` | `warning` | `error` | `primary` | `secondary`

---

### Step 5 — Tabbed content with `mc-tab-bar`

One `<mc-tab slot="tab">` must be paired with exactly one `<div slot="panel">`.

```html
<mc-tab-bar>
  <mc-tab slot="tab" label="Overview" icon="info-circle"></mc-tab>
  <div slot="panel">
    <p class="mds-text mds-text--medium-normal">Overview content.</p>
  </div>

  <mc-tab slot="tab" label="Cargo"></mc-tab>
  <div slot="panel">
    <p class="mds-text mds-text--medium-normal">Cargo details.</p>
  </div>

  <mc-tab slot="tab" label="Schedule"></mc-tab>
  <div slot="panel">
    <p class="mds-text mds-text--medium-normal">Schedule information.</p>
  </div>
</mc-tab-bar>
```

To react to tab switches: listen for `tabchange` event on `mc-tab-bar` (`e.detail = number` = new index).

---

### Step 6 — Collapsible sections with `mc-accordion`

Use `heading` prop on `mc-accordion-item` (NOT `label`). Use `body` prop for plain text or `<div slot="body">` for rich HTML.

```html
<!-- Basic accordion -->
<mc-accordion>
  <mc-accordion-item heading="Shipping details" expanded>
    <p class="mds-text mds-text--medium-normal">Details about the shipment origin and destination.</p>
  </mc-accordion-item>
  <mc-accordion-item heading="Cargo information">
    <div slot="body">
      <p class="mds-text mds-text--medium-normal">2 × 20ft containers, total weight 18,000 kg.</p>
      <mc-tag appearance="success">Cleared</mc-tag>
    </div>
  </mc-accordion-item>
  <mc-accordion-item heading="Billing information">
    <p class="mds-text mds-text--medium-normal">Invoice and payment details.</p>
  </mc-accordion-item>
</mc-accordion>

<!-- Accordion with borders, single-expand, icon on item -->
<mc-accordion withborder singleexpand>
  <mc-accordion-item
    heading="Booking details"
    icon="book-open"
    body="Booking number and contract ID."
  ></mc-accordion-item>
  <mc-accordion-item heading="Documents" icon="file-text" body="Bill of lading and customs forms."></mc-accordion-item>
</mc-accordion>
```

**`mc-accordion` key props:** `singleexpand`, `withborder`, `expandiconposition` (`left|right`), `fit`

**`mc-accordion-item` key props:** `heading` (string | slot), `body` (string | slot), `expanded`, `icon`, `expandiconposition`, `fit`

---

### Step 7 — Overlay dialogs with `mc-modal`

```html
<!-- Trigger -->
<mc-button onclick="document.querySelector('mc-modal').open = true">Open modal</mc-button>

<!-- Basic modal -->
<mc-modal heading="Confirm action" dimension="small">
  <p class="mds-text mds-text--medium-normal">Are you sure you want to delete this booking?</p>
  <mc-button slot="secondaryAction" appearance="neutral" variant="outlined" dialogaction="cancel">Cancel</mc-button>
  <mc-button slot="primaryAction" appearance="primary" dialogaction="ok">Delete booking</mc-button>
</mc-modal>

<!-- Modal with form content -->
<mc-modal heading="Edit booking reference" dimension="medium">
  <mc-input label="Booking reference" name="ref" value="BK-2025-001"></mc-input>
  <mc-select label="Status" name="status">
    <mc-option value="active">Active</mc-option>
    <mc-option value="pending">Pending</mc-option>
  </mc-select>
  <mc-button slot="secondaryAction" appearance="neutral" variant="outlined" dialogaction="cancel">Cancel</mc-button>
  <mc-button slot="primaryAction" appearance="primary" dialogaction="ok">Save changes</mc-button>
</mc-modal>

<!-- Modal with footer note (additional content below actions) -->
<mc-modal heading="Terms and Conditions" dimension="large">
  <p class="mds-text mds-text--medium-normal">Please review the full terms before proceeding.</p>
  <mc-checkbox slot="footer" label="I have read and accept the terms and conditions"></mc-checkbox>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Decline</mc-button>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Accept</mc-button>
</mc-modal>
```

**`mc-modal` key props:** `heading` (string | `slot="heading"`), `dimension` (`small|medium|large`), `fit` (`small|medium`), `padding` (`default|none`), `open`, `width`, `height`, `hiddenclose`, `backdropcloseactiondisabled`, `escapecloseactiondisabled`

**`mc-modal` slots:** default (body content), `heading`, `primaryAction`, `secondaryAction`, `footer`

**Built-in close actions:** add `dialogaction="ok"` or `dialogaction="cancel"` to any button inside the modal — it closes the modal automatically and fires the `closed` event with the action value.

---

## Hard Constraints

| ✅ Do                                                        | ❌ Never                                                                |
| ------------------------------------------------------------ | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
| Use `heading` prop on `mc-card` and `mc-accordion-item`      | Put `<h2>`, `<h3>` or custom heading HTML inside `mc-card` default slot |
| Use `heading` prop on `mc-accordion-item`                    | Use `label` on `mc-accordion-item` — the prop does not exist            |
| Use semantic `mc-tag appearance` values                      | Use `style="color: green"` or hardcoded hex for status colours          |
| Use `mc-badge` by wrapping the child element                 | Put badge as a sibling next to the element — it must wrap it            |
| Use `mds-{appearance}__text-color` for semantic text colour  | Use `style="color: #..."` or `color: var(--mds_brand_...)` inline       |
| Pair `__background-color` + `__on-background-color` together | Use `__background-color` alone — text may fail contrast check           |
| Use `mc-tab-bar` for in-page content sections                | Use `mc-tab-bar` for page-level navigation between routes               |
| Use `body` as the default slot of `mc-modal`                 | Try to use a `body` prop on `mc-modal` — it only accepts default slot   |
| Use `dialogaction="ok                                        | cancel"` for modal close buttons                                        | Manually remove the modal from DOM or set `open = false` via JS |
| Use `withaction` on `mc-tag` and listen for `dismiss` event  | Implement custom click handler on a `<span>` for removable tags         |

---

## Common Mistakes

| Mistake                                                                    | Fix                                                                                 |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `<mc-card><h2>Title</h2></mc-card>`                                        | `<mc-card heading="Title">`                                                         |
| `<mc-accordion-item label="FAQ">`                                          | `<mc-accordion-item heading="FAQ">`                                                 |
| `<mc-badge><mc-icon></mc-icon></mc-badge>` rendered as sibling, not pinned | Wrap the target: `<mc-badge variant="dot"><mc-icon></mc-icon></mc-badge>`           |
| `<span style="color: green">On Time</span>`                                | `<mc-tag appearance="success">On Time</mc-tag>`                                     |
| `<mc-tab-bar>` used for page navigation between routes                     | Use `mc-top-bar`, `mc-side-bar`, or router links instead                            |
| Every tab paired correctly but panel missing for one tab                   | Each `<mc-tab slot="tab">` needs exactly one `<div slot="panel">` immediately after |
| `mc-tab` outside of `mc-tab-bar`                                           | `mc-tab` must be slotted inside `mc-tab-bar` via `slot="tab"`                       |
| `<h1 style="font-size: 32px">`                                             | `<h1 class="mds-headline mds-headline--x-large">`                                   |
| `style="color: #141414"` on text                                           | `class="mds-neutral__text-color"`                                                   |
| `mds-neutral--weak__background-color` used alone                           | Always add `mds-neutral--weak__on-background-color` for proper text contrast        |
| Custom `<ul><li>` list with CSS for selection                              | Use `mc-list` with `type="single"` or `type="multiple"`                             |
| ALL-CAPS tab labels, heading text, or button labels                        | Use sentence case everywhere                                                        |
| `$ 1,500` or `€ 500` for prices                                            | `USD 1,500.00` — ISO currency code with space before amount                         |
| `March 15, 2025` (American format)                                         | `15 March 2025` (British format, no comma)                                          |
| `2:30 PM` in UI                                                            | `14:30` — always use 24-hour clock                                                  |
| `title="full text"` on truncated content                                   | `mc-tooltip` with full text — native `title` is not accessible                      |
| `mc-modal` body as a `body` prop                                           | Body is the default slot only: `<mc-modal heading="..."><p>...</p></mc-modal>`      |

---

## Reference Files

- [Color CSS classes](./references/color.md) — auto-generated full list of all `mds-{appearance}--{variant}__{type}-color` classes
- [Content component API reference](./references/content-components.md) — mc-card, mc-tag, mc-badge, mc-tab-bar, mc-tab, mc-accordion, mc-accordion-item, mc-modal, mc-list, mc-list-item quick-reference
- [Typography guidelines](./references/typography.md) — headline scale, text scale, weights, alignment, spacing
- [Content formatting guidelines](./references/content-formatting.md) — date format, ISO currency codes, number localisation, truncation rules
- [UX writing guidelines](./references/ux-writing.md) — tone of voice, relative timestamps, number/unit formatting

### Foundation CSS References

- [color](./references/color.md)
- [content](./references/content.md)
- [horizontal-rule](./references/horizontal-rule.md)
- [typography](./references/typography.md)
