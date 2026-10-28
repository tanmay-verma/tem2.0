# mc-icon

Display a Maersk Design System icon

**Url:** https://designsystem.maersk.com/components/icon/
**Alternative names:** Icon, SVG Icon
**Keywords:** component, symbol, glyph, pictogram, vector, svg, graphic, image, iconography
**✅ When to use:** When you need to display icons in your application with specific styles.
**❌ When not to use:** When you need to display non-SVG icons, pictograms or images.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

No specific best practices documented.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-icon
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-icon
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-icon';
// minimal example usage
<mc-icon></mc-icon>
// basic example usage
<mc-icon icon="heart" size="20" color="" iconsDynamicImportPath="" title=""></mc-icon>
```

### Advanced Examples

#### CustomisedAppearance

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <div>
    <span>Custom color by using a color property</span>
    <mc-icon color="#42b0d5" icon="heart-solid"></mc-icon>
  </div>
  <div class="part">
    <span>Custom color by using a CSS part</span>
    <mc-icon icon="heart-solid"></mc-icon>
  </div>
</div>
```

#### SolidIcon

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <div>
    <span>not liked:</span>
    <mc-icon color="#ff0000" icon="heart"></mc-icon>
  </div>
  <div>
    <span>liked:</span>
    <mc-icon color="#ff0000" icon="heart-solid"></mc-icon>
  </div>
</div>
```

#### Sizes

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <div>
    <span>small - 16px:</span>
    <mc-icon size="16" icon="heart"></mc-icon>
  </div>
  <div>
    <span>small - 20px:</span>
    <mc-icon icon="heart"></mc-icon>
  </div>
  <div>
    <span>large - 24px:</span>
    <mc-icon size="24" icon="heart"></mc-icon>
  </div>
  <div>
    <span>custom width of 48px:</span>
    <mc-icon class="size48" size="24" icon="heart"></mc-icon>
  </div>
</div>
```

#### DynamicImportPath

```html
import { MdsConfig } from '@maersk-global/mds-config';

MdsConfig.iconsDynamicImportPath = '/node_modules/';
if (import.meta.env.PROD) {
  MdsConfig.iconsDynamicImportPath = './';
}
```

#### CustomTitle

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <div>
    <span>The title on this icon reads "My empty heart"</span>
    <mc-icon color="red" icon="heart" title="My empty heart"></mc-icon>
  </div>

  <div>
    <span>The title for this icon reads "My heart is full"</span>
    <mc-icon color="red" icon="heart-solid" title="My heart is full"></mc-icon>
  </div>

  <p>
    If no title is provided, the name of the icon is used. Without that,
    a screen reader announces the icon as "image"
  </p>
</div>
```

## API

### Properties and attributes

#### icon

- **Type:** string
- **Default:** heart
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### size

- **Type:** 16 | 20 | 24
- **Typescript Type:** IconSize
- **Default:** 20
- **Description:** Size of the icon.

#### color

- **Type:** string
- **Typescript Type:** string | undefined
- **Description:** Fill color of the icon. If not supplied, the default color token `--mds_brand_appearance_neutral_default_text-color` will be picked up.

#### iconsDynamicImportPath

- **Type:** unknown
- **Typescript Type:** N/A
- **Description:** For optimization purposes, we've introduced a dynamic import of icons (we use `import()` function). Please read more about MDS <a href="https://designsystem.maersk.com/develop/#icons-import-path-configuration" target="_blank">configuration class</a>, applying all these is required in order to get the dynamic import of icons working with i.e. `Vite` bundler.

#### title

- **Type:** string
- **Description:** The screen-reader accessible title of the icon. If not supplied, the icon name will be used.

### Types

- IconSize: type
- IMcIcon: interface

## CSS parts

#### icon

- **Description:** Using this CSS part you can change the look of the svg icon. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-icon::part(icon) {
  fill: #328529
}
```

#### icon-wrapper

- **Description:** Using this CSS part you can change the look of the svg icon. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-icon::part(icon-wrapper) {
  width: 32px; height: 32px;
}
```

## Related

- [Designing icons](https://designsystem.maersk.com/foundations/iconography/)
- [Maersk icon library](https://designsystem.maersk.com/icons/)

