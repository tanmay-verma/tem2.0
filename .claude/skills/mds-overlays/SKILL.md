---
name: mds-overlays
description: 'Add modals, dialogs, drawers, popovers, and tooltips with MDS. Use for: modal, dialog, drawer, popup, overlay, confirmation, alert, side panel, popover, tooltip, contextual info, lightbox.'
related-skills: ['mds-a11y', 'mds-navigation', 'mds-feedback', 'mds-components']
related-components: ['mc-dialog', 'mc-modal', 'mc-drawer', 'mc-popover', 'mc-tooltip']
---

# Add Overlays with MDS Components

## When to Use

- Confirming a destructive action before proceeding
- Displaying a form or multi-step flow in a centered overlay
- Opening a side panel for filters, record details, or settings
- Showing contextual actions or info anchored to a trigger element
- Explaining an icon or abbreviation on hover or focus

## Decision Table

| Need                                                  | Component    | Notes                                                                                      |
| ----------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------ |
| Yes/no or OK/cancel confirmation                      | `mc-dialog`  | Blocks page; use `primaryAction` + `secondaryAction` slots                                 |
| Complex form, multi-step flow, or preview             | `mc-modal`   | Larger than dialog; `footer` slot for disclaimers; `backdropcloseactiondisabled` available |
| Filters, details panel, or settings                   | `mc-drawer`  | Slides from side; `position` prop: `right` (default), `left`, `top`, `bottom`              |
| Contextual actions or mini-form anchored to a trigger | `mc-popover` | Requires `trigger` slot; events are `show`/`hide` — not `opened`/`closed`                  |
| Brief text explanation on hover or focus              | `mc-tooltip` | Text-only, non-interactive; requires `trigger` slot; events are `show`/`hide`              |

## When NOT to Use

- **`mc-modal` for simple yes/no decisions** — use `mc-dialog`; modal is designed for rich, complex content
- **`mc-dialog` for forms** — forms need `mc-modal`'s larger size, scroll support, and `footer` slot
- **`display: none` to hide overlays** — use the `open` property; toggling display bypasses focus trapping, keyboard handling, and animation
- **Custom `<div>` popups** — use `mc-popover` or `mc-tooltip`; custom overlays don't handle focus trapping, Escape key, or z-index stacking correctly
- **`mc-tooltip` for interactive content** — tooltip is text-only and non-interactive; use `mc-popover` for anything clickable

## Procedure

### 1. Open and Close with the `open` Property

All overlay components share the same open/close pattern: set `open` to `true` to show, listen to the close event to reset state.

```html
<!-- Vanilla -->
<mc-button onclick="document.getElementById('dlg').open = true">Delete item</mc-button>

<mc-dialog id="dlg" heading="Delete item?">
  <p>This action cannot be undone.</p>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Delete</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Cancel</mc-button>
</mc-dialog>

<script>
  document.getElementById('dlg').addEventListener('closing', (e) => {
    if (e.detail === 'ok') handleDelete();
  });
</script>
```

```tsx
// React
import { McDialog } from '@maersk-global/mds-react-wrapper/components-core/mc-dialog';
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';

const [open, setOpen] = useState(false);

<McButton onClick={() => setOpen(true)}>Delete item</McButton>

<McDialog
  heading="Delete item?"
  open={open}
  closed={() => setOpen(false)}
  closing={(e) => { if ((e as CustomEvent).detail === 'ok') handleDelete(); }}
>
  <p>This action cannot be undone.</p>
  <McButton slot="primaryAction" dialogaction="ok" appearance="primary">Delete</McButton>
  <McButton slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Cancel</McButton>
</McDialog>
```

### 2. mc-dialog — Confirmations

**Slots:** `primaryAction`, `secondaryAction`, default (body text or HTML)  
**Events:** `closed`, `closing` → `CustomEvent<'ok' | 'cancel'>`, `opened`, `opening`  
**Props:** `heading`, `open`, `dimension` (small|medium|large), `fit` (small|medium), `escapecloseactiondisabled`

Place `dialogaction="ok"` or `dialogaction="cancel"` on buttons inside the dialog. The `closing` event fires with `e.detail` set to `'ok'` or `'cancel'` so you can act on the user's choice before the dialog closes.

```html
<mc-dialog heading="Unsaved changes">
  <p>Do you want to save before leaving?</p>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Save</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Discard</mc-button>
</mc-dialog>
```

### 3. mc-modal — Forms and Rich Content

**Slots:** `primaryAction`, `secondaryAction`, `footer` (disclaimer text), default (body)  
**Events:** `closed`, `closing` → `CustomEvent<'ok' | 'cancel'>`, `opened`, `opening`  
**Props:** `heading`, `open`, `dimension` (small|medium|large), `hiddenclose`, `backdropcloseactiondisabled`, `escapecloseactiondisabled`

```html
<mc-modal heading="Edit shipment" open>
  <mc-input label="Reference number" required></mc-input>
  <mc-select label="Status"></mc-select>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Save</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Cancel</mc-button>
  <span slot="footer">Changes are saved immediately to the live system.</span>
</mc-modal>
```

### 4. mc-drawer — Side Panels

**Slots:** `heading` (HTML, use for rich heading), `footer`, default (body)  
**Events:** `closed`, `closing`, `opened`, `opening`  
**Props:** `open`, `position` (right|left|top|bottom, default: `right`), `dimension`, `fit`

```html
<mc-drawer open>
  <span slot="heading">Filter shipments</span>
  <mc-select label="Status"></mc-select>
  <mc-input label="Port of loading"></mc-input>
  <mc-button slot="footer" dialogaction="ok" appearance="primary">Apply filters</mc-button>
  <mc-button slot="footer" dialogaction="cancel" appearance="neutral" variant="outlined">Clear</mc-button>
</mc-drawer>
```

### 5. mc-popover — Contextual Overlays

**Requires `trigger` slot** — without it, nothing opens the popover.  
**Events:** `show`, `hide` (not `opened`/`closed`)  
**Props:** `trigger` (click|hover|focus, default: `click`), `position`, `open`, `modalmode`, `preventcloseonblur`

```html
<mc-popover>
  <mc-button
    slot="trigger"
    icon="ellipsis-vertical"
    hiddenlabel
    label="More options"
    variant="plain"
    appearance="neutral"
  ></mc-button>
  <mc-list>
    <mc-list-item label="Edit"></mc-list-item>
    <mc-list-item label="Download"></mc-list-item>
    <mc-list-item label="Delete"></mc-list-item>
  </mc-list>
</mc-popover>
```

### 6. mc-tooltip — Hover/Focus Labels

**Requires `trigger` slot.** Content goes in the default slot (plain text).  
**Events:** `show`, `hide`  
**Props:** `position`, `fit`, `trigger` (default: `hover focus click`), `opendelay`

```html
<mc-tooltip>
  <mc-button
    slot="trigger"
    icon="info-circle"
    hiddenlabel
    label="More info"
    variant="plain"
    appearance="neutral"
  ></mc-button>
  Vessel ETA at Rotterdam: May 20, 14:00 local time.
</mc-tooltip>
```

## Hard Constraints

### ❌ mc-modal for a simple confirmation vs ✅ mc-dialog

```html
<!-- ❌ — mc-modal is overkill for a yes/no decision -->
<mc-modal heading="Delete item?">
  <p>This action cannot be undone.</p>
  <mc-button slot="primaryAction" appearance="primary">Delete</mc-button>
</mc-modal>

<!-- ✅ — mc-dialog is the right choice for critical decisions -->
<mc-dialog heading="Delete item?">
  <p>This action cannot be undone.</p>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Delete</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Cancel</mc-button>
</mc-dialog>
```

### ❌ No trigger slot on mc-popover/mc-tooltip vs ✅ trigger slot required

```html
<!-- ❌ — nothing triggers the popover to open -->
<mc-popover>
  <mc-button appearance="neutral" variant="plain">Options</mc-button>
  <mc-list>...</mc-list>
</mc-popover>

<!-- ✅ — trigger slot tells mc-popover which element to anchor and listen to -->
<mc-popover>
  <mc-button slot="trigger" appearance="neutral" variant="plain">Options</mc-button>
  <mc-list>...</mc-list>
</mc-popover>
```

### ❌ `display: none` to hide overlays vs ✅ the `open` property

```js
// ❌ — bypasses focus trap, keyboard handling, and close animation
dialog.style.display = 'none';

// ✅ — triggers proper close lifecycle, focus restoration, and animation
dialog.open = false;
```

### ❌ `opened`/`closed` events on mc-popover and mc-tooltip vs ✅ `show`/`hide`

```js
// ❌ — these events don't exist on mc-popover or mc-tooltip
popover.addEventListener('opened', handler);
popover.addEventListener('closed', handler);

// ✅ — mc-popover and mc-tooltip emit show and hide
popover.addEventListener('show', handler);
popover.addEventListener('hide', handler);
```

### ❌ Interactive content in mc-tooltip vs ✅ mc-popover

```html
<!-- ❌ — tooltip is text-only; buttons inside won't be reachable -->
<mc-tooltip>
  <mc-button slot="trigger" label="Help"></mc-button>
  <mc-button>Learn more</mc-button>
</mc-tooltip>

<!-- ✅ — mc-popover supports any interactive content -->
<mc-popover>
  <mc-button slot="trigger" label="Help"></mc-button>
  <mc-button appearance="primary">Learn more</mc-button>
</mc-popover>
```

## Common Mistakes

- Using `mc-modal` for a yes/no confirmation — use `mc-dialog`
- Using `mc-dialog` for a form — use `mc-modal` for its scroll support and `footer` slot
- Forgetting `slot="trigger"` on `mc-popover` or `mc-tooltip` — without it, nothing opens the overlay
- Listening to `opened`/`closed` on `mc-popover` or `mc-tooltip` — those emit `show`/`hide` instead
- Omitting `dialogaction` from buttons inside `mc-dialog` or `mc-modal` — the `closing` event won't carry `'ok'`/`'cancel'` detail
- Using `display: none` instead of the `open` property — breaks focus trapping and the close lifecycle
- Not syncing state on the `closed` event — the overlay stays "open" in the app state after the user dismisses it
- Placing interactive elements inside `mc-tooltip` — tooltip is non-interactive; use `mc-popover`

## Reference Files

- [Component skill](../mds-components/SKILL.md) — overview of all components with references to detail component's API
- [Content skill](../mds-content/SKILL.md) — content structure inside overlays
