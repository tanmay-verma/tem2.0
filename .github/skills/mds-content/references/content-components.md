# Content Component API Quick Reference

## mc-card

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `heading` | string | — | Card heading text (renders as `<h2>` internally) |
| `subheading` | string | — | Text below heading |
| `body` | string | — | Main body text |
| `footer` | string | — | Footer text |
| `variant` | `'bordered' \| 'borderless'` | `'bordered'` | |
| `orientation` | `'vertical' \| 'horizontal' \| 'horizontal-reverse'` | `'vertical'` | |
| `fit` | `'small' \| 'medium' \| 'large'` | `'medium'` | |
| `image` | string | — | Image URL |
| `imagepercent` | number | 56.25 (vertical) / 33 (horizontal) | Image height/width % |
| `href` | string | — | Makes card a link (`<a>`) — hides `actions` slot. Mutually exclusive with `clickable` |
| `clickable` | boolean | false | Adds hover/focus styling for JS-driven clicks. Mutually exclusive with `href` |
| `target` | `'_blank' \| '_parent' \| '_self' \| '_top'` | — | Link target (only used with `href`) |
| `rel` | string | — | Link relationship (only used with `href`) |

**Slots:** default (rich body content), `subheading`, `actions` (hidden when `href` is set), `image`, `footer`

**Key rules:**
- Use `heading` prop for card titles — do NOT put `<h2>`/`<h3>` inside the default slot
- Never combine `href` and `clickable` on the same card

---

## mc-tag

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `appearance` | TagAppearance | `'neutral-weak'` | Semantic color: neutral-default, neutral-weak, neutral-inverse, info, success, warning, error, primary, secondary |
| `withaction` | boolean | false | Shows dismiss (×) button |
| `label` | string | — | Tag text (or use default slot) |
| `width` | `'auto' \| 'full-width'` | `'auto'` | |
| `fit` | Fit | — | Size variant |

**Slots:** default (label), `icon`, `trailingicon`

**Events:** `dismiss` (CustomEvent<string>) — fires when × button clicked

---

## mc-badge

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `appearance` | `'info' \| 'success' \| 'warning' \| 'error'` | `'error'` | |
| `variant` | `'default' \| 'dot'` | `'default'` | Dot shows indicator without label |
| `display` | `'pinned' \| 'inline'` | `'pinned'` | Pinned overlaps parent; inline is standalone |
| `label` | number \| string | — | Badge text/count |
| `max` | number | — | Shows "max+" when label exceeds this |
| `fit` | `'small' \| 'medium'` | `'medium'` | |

**Usage:** Wrap target element inside `<mc-badge>` for pinned mode.

---

## mc-tab-bar

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `currentindex` | number | 0 | Active tab index (0-based) |
| `fit` | Fit | `'medium'` | |
| `variant` | `'default' \| 'stretched'` | `'default'` | Stretched tabs fill their container |

**Slots:** `tab` (for mc-tab elements), `panel` (for panel content — 1:1 with tabs)

**Events:** `tabchange` (CustomEvent<number>) — fires when user switches tab

## mc-tab

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `label` | string | — | **Required** — tab label text and aria-label |
| `icon` | string | `''` | Leading icon name |
| `trailingicon` | string | `''` | Trailing icon name |
| `disabled` | boolean | false | |

**Slots:** default (label text), `prefix`, `suffix`, `badge`

---

## mc-list

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `data` | IMcListDataItem[] | — | Data-driven items (alternative to slotting) |
| `type` | `'none' \| 'single' \| 'multiple' \| 'typeahead'` | `'none'` | Selection mode |
| `listsearch` | boolean | false | Show search/filter input |
| `listsearchplaceholder` | string | `'Search in the list'` | |
| `value` | McListValueType \| McListValueType[] | — | Selected value(s) |
| `fit` | Fit | `'medium'` | |

**Events:** `listchange` (CustomEvent<{item}>) — fires on item selection

## mc-list-item

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `label` | string | — | Item text |
| `value` | McListValueType | — | Selection value |
| `icon` | string | — | Leading icon |
| `trailingicon` | string | — | Trailing icon |
| `selected` | boolean | false | |
| `disabled` | boolean | false | |
| `href` | string | — | Renders as link |

**Slots:** default (label), `sublabel`, `icon`, `trailingicon`, `badge`, `actions`

---

## mc-accordion

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `singleexpand` | boolean | false | Collapses other items when one is opened |
| `withborder` | boolean | false | Adds borders around the accordion container |
| `expandiconposition` | `'left' \| 'right'` | `'right'` | Position of the expand chevron |
| `fit` | Fit | `'medium'` | |

**Events:** `change` (CustomEvent<IMcAccordionChangeDetail>) — fires when an item's expanded state changes

**Slot:** default (mc-accordion-item elements)

## mc-accordion-item

⚠️ The heading prop is `heading`, NOT `label`.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `heading` | string \| slot | — | **Required** — accordion section title. Use `<span slot="heading">` for rich HTML |
| `body` | string \| slot | — | Panel content. Use `body="text"` for plain text, `<div slot="body">` for rich HTML |
| `expanded` | boolean | false | Whether the item is open on initial render |
| `expandiconposition` | `'left' \| 'right'` | `'right'` | Overrides accordion-level setting per item |
| `icon` | string \| slot | — | Leading icon name |
| `trailingicon` | string \| slot | — | Trailing icon name |
| `disabled` | boolean | false | |
| `fit` | Fit | `'medium'` | |

**Slots:** `heading` (rich heading), `body` (rich panel content), `icon`, `trailingicon`

```html
<!-- Prop-based (simple) -->
<mc-accordion-item heading="FAQ" body="Plain text answer."></mc-accordion-item>

<!-- Slot-based (rich content) -->
<mc-accordion-item heading="Cargo details">
  <div slot="body">
    <p class="mds-text mds-text--medium-normal">2 × 20ft containers</p>
    <mc-tag appearance="success">Cleared</mc-tag>
  </div>
</mc-accordion-item>
```

---

## mc-modal

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `heading` | string \| slot | — | Modal title. Use `<span slot="heading">` for rich HTML heading |
| `dimension` | `'small' \| 'medium' \| 'large'` | `'medium'` | small: 400×225px, medium: 800×400px, large: 1200×600px |
| `fit` | `'small' \| 'medium'` | `'medium'` | Controls internal sizing |
| `padding` | `'default' \| 'none'` | `'default'` | Use `none` for full-bleed image layouts |
| `open` | boolean | false | Controls visibility. Set via JS: `modal.open = true` |
| `width` | string | — | Custom width, e.g. `'50%'`, `'600px'` — overrides `dimension` |
| `height` | string | — | Custom height, e.g. `'400px'` — overrides `dimension` |
| `hiddenclose` | boolean | false | Hides the built-in × close button |
| `backdropcloseactiondisabled` | boolean | false | Prevents backdrop click from closing the modal |
| `escapecloseactiondisabled` | boolean | false | Prevents Escape key from closing the modal |
| `entercloseactiondisabled` | boolean | false | Prevents Enter key from closing the modal |

**Slots:**
- default — body content (no `body` prop — always use default slot)
- `heading` — rich HTML heading
- `primaryAction` — primary CTA button (right-aligned)
- `secondaryAction` — secondary button(s) (left of primary)
- `footer` — additional content below actions (e.g. checkbox disclaimer)

**Events:** `closed` (CustomEvent<McModalAction>), `closing` (CustomEvent<McModalAction>)

**Built-in close:** Add `dialogaction="ok"` or `dialogaction="cancel"` to any `mc-button` inside the modal — closes automatically and fires `closed` with the action value.

```html
<mc-button onclick="document.querySelector('mc-modal').open = true">Open modal</mc-button>

<mc-modal heading="Confirm deletion" dimension="small">
  <p class="mds-text mds-text--medium-normal">This action cannot be undone.</p>
  <mc-button slot="secondaryAction" appearance="neutral" variant="outlined" dialogaction="cancel">Cancel</mc-button>
  <mc-button slot="primaryAction" appearance="primary" dialogaction="ok">Delete</mc-button>
</mc-modal>
```
