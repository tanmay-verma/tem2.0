# mc-code-preview

A code preview displays reusable code that can be copied and used elsewhere.

**Url:** https://designsystem.maersk.com/components/code-preview/
**Alternative names:** Code Block, Code Viewer, Code Example, Code Snippet
**Keywords:** component
**✅ When to use:** Use when you need to present code examples, API payloads, or configuration snippets in a readable, interactive format.
**❌ When not to use:** Not for displaying large files, unformatted text, or non-code content.

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
npm install @maersk-global/mds-components-core-code-preview
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-code-preview
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-code-preview';
// minimal example usage
<mc-code-preview code="[{"label":"Vanilla","language":"javascript","template":"import '@maersk-global/mds-components-core-code-preview';\n  \nconst codePreviewComponent = document.querySelector('mc-code-preview');\ncodePreviewComponent.code = [\n  { label: 'Vanilla', template: \"console.log('The Vanilla code!');\", language: 'javascript' },\n  { label: 'Angular', template: 'console.log(\"The Angular code\")', language: 'javascript' },\n];\n<mc-code-preview></mc-code-preview>"},{"label":"Angular","language":"javascript","template":"import '@maersk-global/mds-components-core-code-preview';\n  \n<mc-code-preview [code]=\"the code array\"></mc-code-preview>"}]"></mc-code-preview>
// basic example usage
<mc-code-preview fit="medium" code="[{"label":"Vanilla","language":"javascript","template":"import '@maersk-global/mds-components-core-code-preview';\n  \nconst codePreviewComponent = document.querySelector('mc-code-preview');\ncodePreviewComponent.code = [\n  { label: 'Vanilla', template: \"console.log('The Vanilla code!');\", language: 'javascript' },\n  { label: 'Angular', template: 'console.log(\"The Angular code\")', language: 'javascript' },\n];\n<mc-code-preview></mc-code-preview>"},{"label":"Angular","language":"javascript","template":"import '@maersk-global/mds-components-core-code-preview';\n  \n<mc-code-preview [code]=\"the code array\"></mc-code-preview>"}]" appearance="default" variant="tab-bar"></mc-code-preview>
```

### Advanced Examples

#### HeadingAndFooterAsSlot

```html
<mc-code-preview variant="none">
  <div slot="heading">Heading</div>
  <div slot="footer">Footer</div>
</mc-code-preview>
```

#### SupportedLanguages

```html
<mc-code-preview></mc-code-preview>
```

#### TextWrap

```html
<mc-code-preview variant="none">
  <div slot="heading">Server Logs</div>
</mc-code-preview>
```

#### CustomisedAppearance

```html
<mc-code-preview
  variant="none"
  heading="Heading"
  footer="Footer"
></mc-code-preview>
```

#### nowraping

```html
<mc-code-preview nowrap variant="none"></mc-code-preview>
```

## API

### Properties and attributes

#### fit

- **Type:** Exclude<Fit, large>
- **Typescript Type:** CodePreviewFit
- **Default:** medium
- **Description:** Controls the code preview size.

#### labels

- **Type:** IMcCodePreviewLabels
- **Typescript Type:** Partial<IMcCodePreviewLabels> | undefined
- **Description:** Custom labels for mc-code-preview component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-code-preview/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### heading

- **Type:** string | slot
- **Typescript Type:** string | null
- **Default:** null
- **Description:** Heading to be displayed above the code preview. Can be passed as simple text or as a named slot `heading`.

#### footer

- **Type:** string | slot
- **Typescript Type:** string | null
- **Default:** null
- **Description:** Footer to be displayed below the code preview. Can be passed as simple text or as a named slot `footer`.

#### code

- **Type:** array
- **Typescript Type:** IMcCode[]
- **Default:** [object Object],[object Object],[object Object],[object Object],[object Object]
- **Description:** An array of objects that contain the code to be displayed in the code preview. Each object should have a tab, copy, language, and template property.

#### appearance

- **Type:** default | inverse
- **Typescript Type:** Appearance
- **Default:** default
- **Description:** Controls the visual theme of the code preview.

#### variant

- **Type:** none | tab-bar | select
- **Typescript Type:** Variant
- **Default:** tab-bar
- **Description:** Defines the presentation style of the selector.

#### hidetoggle

- **Type:** boolean
- **Default:** false
- **Description:** If the attribute is set, then the toggle button will be hidden.

#### hideheader

- **Type:** boolean
- **Default:** false
- **Description:** Hides the header panel entirely. The copy button moves to the top-right corner of the code panel. Useful for compact, inline code snippets (e.g. AI chat responses).

#### nowrap

- **Type:** boolean
- **Default:** false
- **Description:** When set, long lines of code scroll horizontally instead of wrapping. Improves readability on small screens.

#### maxheight

- **Type:** string
- **Typescript Type:** string | null
- **Default:** null
- **Description:** Sets the maximum height of the code panel. When provided, the panel becomes vertically scrollable when content exceeds this height. Accepts any valid CSS length value (e.g. "200px", "10rem").

### Types

- Appearance: type
- CodePreviewFit: type
- Fit: re-export
- IMcCode: interface
- IMcCodePreview: interface
- IMcCodePreviewLabels: interface
- IMcCodePreviewMyEventDetail: interface
- McCodeLanguage: type
- Variant: type

### Slots

#### heading

- **Description:** Use the heading named slot, when you want to pass heading as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-code-preview>
  <span slot="heading">
    heading as HTML
  </span>
</mc-code-preview>
```

#### actions

- **Description:** Slot for additional action buttons in the header, placed before the copy button.

```html

```

#### footer

- **Description:** Use the footer named slot, when you want to pass footer as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-code-preview>
  <span slot="footer">
    footer as HTML
  </span>
</mc-code-preview>
```

## CSS parts

#### code-panel

- **Description:** Using this CSS part you can change the look of the code display panel. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-code-preview::part(code-panel) {
  
    background-color: #f5f7fa;
    
}
```

#### header-panel

- **Description:** Using this CSS part you can change the look of the header. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-code-preview::part(header-panel) {
  color: #328529;
}
```

#### footer-panel

- **Description:** Using this CSS part you can change the look of the footer. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-code-preview::part(footer-panel) {
  color: #328529;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

