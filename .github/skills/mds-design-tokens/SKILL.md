---
name: mds-design-tokens
description: 'Style with MDS design tokens. Use for: design tokens, colors, typography, spacing, theming, dark mode, light mode, brand colors, CSS custom properties, SCSS mixins, font styles, text colors, background colors, borders, shadows, multi-brand.'
related-skills: ['mds-layout', 'mds-setup', 'mds-components', 'mds-feedback', 'mds-theming']
related-components: []
---

# Style with MDS Design Tokens

## When to Use

- Applying colors, backgrounds, borders, or shadows to custom elements
- Adding typography styles (headings, body text, captions)
- Implementing light/dark theme support
- Using brand-specific styling (Maersk, APM Terminals, Alianca, etc.)
- Writing CSS/SCSS for custom layouts alongside MDS components

## Decision Table

| Need                                 | Approach                                             | Notes                                                                                    |
| ------------------------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Color, background, border            | MDS CSS class (e.g. `mds-primary__background-color`) | Prefer CSS classes over direct token use                                                 |
| Typography                           | `mds-headline--*` / `mds-text--*` CSS classes        | Never hardcode font-size or font-weight                                                  |
| Spacing / gap                        | MDS gap and flex utility classes                     | e.g. `mds-gap-400` for 16px gap                                                          |
| Custom element needing a token value | `var(--mds_brand_appearance_...)`                    | Wrap in a local CSS variable for future-proofing                                         |
| Chart / data viz color config        | Hardcoded hex from official Maersk brand palette     | CSS vars cannot be used in ECharts `color` arrays — use palette hex only, never invented |
| Light / dark theme switching         | See [mds-theming skill](../mds-theming/SKILL.md)     | Token names are identical across themes; values differ                                   |
| Multi-brand support                  | See [mds-theming skill](../mds-theming/SKILL.md)     | `maersk`, `apmterminals`, `alianca`, `captainpeter`, `stillstrom`                        |

## When NOT to Use

- **Hardcoded hex, rgb, or hsl colors in UI CSS** — always use an MDS token or CSS class instead. **Exception:** chart/data visualisation JavaScript configs (e.g. ECharts `color` arrays) may use hardcoded hex values, but **only** from the official Maersk brand palette — see [`brand-colors.md`](./references/brand-colors.md)
- **Custom font-size, font-weight, font-family** — always use `mds-headline--*` or `mds-text--*` classes
- **Raw pixel spacing** (`padding: 40px`, `gap: 24px`) — use MDS gap utilities or layout classes
- **Raw border-radius or box-shadow values** — use the border/shadow tokens from the brand reference
- **Tailwind or Bootstrap classes** for color, typography, or spacing — use MDS tokens and classes instead
- **`!important` to override MDS token values** — indicates a structural problem; fix the root cause

## Procedure

### 1. Install and Import Tokens

```bash
npm install @maersk-global/mds-design-tokens
```

Replace `<BRAND>` with your brand (`maersk`, `apmterminals`, `alianca`, `captainpeter`, `stillstrom`) and `<THEME>` with `light` or `dark`:

```html
<!-- HTML link tag -->
<link
  rel="stylesheet"
  href="./node_modules/@maersk-global/mds-design-tokens/<BRAND>/<THEME>/css/design-tokens-px.css"
/>
```

```js
// JS / TS import
import '@maersk-global/mds-design-tokens/<BRAND>/<THEME>/css/design-tokens-px.css';
```

```css
/* CSS / SCSS */
@import url('@maersk-global/mds-design-tokens/<BRAND>/<THEME>/css/design-tokens-px.css');
```

Add `class="mds"` to `<body>` and `class="mds-content"` to your main content container — these activate MDS base styles.

Token names are **identical across all brands and themes**. Only the values differ. Switching theme or brand requires only changing the import.

### 2. Use Color Tokens

Prefer MDS foundation CSS classes — they handle both light and dark values automatically:

```html
<!-- Text colors -->
<p class="mds-neutral__text-color">Default text</p>
<p class="mds-primary__text-color">Primary text</p>
<p class="mds-error__text-color">Error text</p>

<!-- Background colors -->
<div class="mds-neutral--weakest__background-color">Subtle background</div>
<div class="mds-primary__background-color">Primary background</div>

<!-- Borders -->
<div class="mds-neutral--weak__border-color">Bordered element</div>
```

When a CSS class does not exist for your use case, use the token directly — but wrap it in a local variable to isolate your code from future token renames:

```css
:root {
  --app-card-bg: var(--mds_brand_appearance_neutral_weakest_background-color);
  --app-card-text: var(--mds_brand_appearance_neutral_default_text-color);
}

.my-card {
  background-color: var(--app-card-bg);
  color: var(--app-card-text);
}
```

Token naming pattern:

```
--mds_brand_appearance_{appearance}_{variant}_{property}
```

- **appearance**: `neutral`, `primary`, `secondary`, `info`, `error`, `success`, `warning`
- **variant**: `default`, `weakest`, `weak`, `strong`, `strongest`, `inverse`
- **property**: `background-color`, `on-background-color`, `border-color`, `text-color`, etc.

For all token values (including light vs dark differences), see the brand reference files listed below.

### 3. Use Typography

Prefer CSS classes — include both a base class and a modifier:

```html
<h1 class="mds-headline mds-headline--large">Page Title</h1>
<h2 class="mds-headline mds-headline--medium">Section Title</h2>
<p class="mds-text mds-text--medium-normal">Body text</p>
<p class="mds-text mds-text--small-bold">Bold small text</p>
<span class="mds-text mds-text--x-small-normal">Caption</span>
```

**Headline class pattern:** `mds-headline--{size}` — sizes: `x-small | small | medium | large | x-large`

**Text class pattern:** `mds-text--{size}-{weight}` — sizes: `x-small | small | medium | large`; weights: `normal | medium | bold | italic | mediumitalic | bolditalic`

For SCSS projects, use the typography mixin:

```scss
@import '@maersk-global/mds-foundations/scss/mixins/_typography.scss';

.my-heading {
  @include mds-apply-font('headline', 'medium', 'normal');
}

.my-body {
  @include mds-apply-font('text', 'small', 'normal');
}
```

## Hard Constraints

### ❌ Hardcoded color vs ✅ MDS token or class

```html
<!-- ❌ -->
<button style="background-color: #0071b9; color: #fff;">Sign in</button>

<!-- ✅ — use MDS component (handles colors automatically) -->
<mc-button label="Sign in" appearance="primary"></mc-button>
```

```css
/* ❌ */
.badge {
  background-color: #42b0d5;
}

/* ✅ */
.badge {
  background-color: var(--mds_brand_appearance_secondary_default_background-color);
}
```

### ❌ Hardcoded typography vs ✅ MDS class

```html
<!-- ❌ -->
<h1 style="font-size: 28px; font-weight: 700;">Shipment details</h1>

<!-- ✅ -->
<h1 class="mds-headline mds-headline--large">Shipment details</h1>
```

### ❌ Hardcoded spacing vs ✅ MDS utility classes

```css
/* ❌ */
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

```html
<!-- ✅ -->
<form class="mds-flex mds-flex-column mds-gap-800">...</form>
```

### ❌ Raw border-radius / box-shadow vs ✅ tokens

```css
/* ❌ */
.card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ✅ */
.card {
  border-radius: var(--mds_brand_border_radius_medium);
  box-shadow: var(--mds_brand_appearance_shadow_low_first-layer_offset-x)
    var(--mds_brand_appearance_shadow_low_first-layer_offset-y)
    var(--mds_brand_appearance_shadow_low_first-layer_blur-radius)
    var(--mds_brand_appearance_shadow_low_first-layer_color);
}
```

### ❌ Direct token use vs ✅ local wrapper variable

```css
/* ❌ — fragile: if the token renames in a major release, every usage must be updated */
.my-element {
  color: var(--mds_brand_appearance_neutral_default_text-color);
}

/* ✅ — one place to update if the token renames */
:root {
  --app-body-text: var(--mds_brand_appearance_neutral_default_text-color);
}
.my-element {
  color: var(--app-body-text);
}
```

## Common Mistakes

- Hardcoding hex/rgb colors (`#0071b9`, `rgb(0,82,180)`) in UI CSS instead of tokens or CSS classes
- Using invented hex colors in chart configs instead of official Maersk brand palette hex — see `brand-colors.md`
- Using extended brand palette hex (teal, green, orange, red families) in regular UI CSS — those have semantic tokens (`mc-tag appearance="success"`, etc.)
- Writing custom `font-size`, `font-weight`, `font-family` instead of `mds-headline--*` / `mds-text--*`
- Hardcoding spacing (`padding: 40px`, `gap: 24px`) instead of MDS gap utilities
- Using raw `border-radius` or `box-shadow` values instead of shadow/border tokens
- Using Tailwind or Bootstrap for color, typography, or spacing alongside MDS
- Overriding MDS component styles with `!important`
- Using tokens directly without a local wrapper — makes future token renames more painful
- Using `mds-neutral--weak__background-color` as background without also setting a matching `mds-neutral--weak__on-background-color` for text — contrast must be maintained
- Forgetting `class="mds"` on `<body>` — required for MDS base styles to activate

## Reference Files

- [Maersk Brand extended colour palette](./references/brand-colors.md) — official Maersk hex values, data visualisation palettes, chart styling rules, and when hardcoded hex is permitted

Brand design token references — complete list of all token names and values (light + dark) per brand:

### Brand and Theme Design Tokens References

- [maersk-design-tokens](./references/maersk-design-tokens.md)
- [alianca-design-tokens](./references/alianca-design-tokens.md)
- [apmterminals-design-tokens](./references/apmterminals-design-tokens.md)
- [captainpeter-design-tokens](./references/captainpeter-design-tokens.md)
- [stillstrom-design-tokens](./references/stillstrom-design-tokens.md)
