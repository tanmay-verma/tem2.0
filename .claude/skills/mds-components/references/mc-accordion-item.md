# mc-accordion-item

A customizable item for the mc-accordion component that can be expanded or collapsed to show or hide content.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Accordion, Collapsible Panel, Expandable Section
**Keywords:** 
**✅ When to use:** FAQs, Nested content, Disclosure sections
**❌ When not to use:** Always expanded content, Simple lists

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
npm install @maersk-global/mds-components-core-accordion-item
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-accordion-item
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-accordion-item';
// minimal example usage
<mc-accordion-item></mc-accordion-item>
// basic example usage
<mc-accordion-item id="field" heading="Accordion Item" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit." expandiconposition="right" icon="" trailingicon="" fit="medium" variant="default"></mc-accordion-item>
```

### Advanced Examples

#### BodyAsSlot

```html
<div style="width: 500px">
    <mc-accordion-item
      heading="What is the Gemini Cooperation?"
      body="In January 2024, Hapag-Lloyd AG (Hapag-Lloyd) and Maersk A/S (Maersk) announced a new long-term operational collaboration under the name of Gemini – referred to as the Gemini Cooperation. The operational collaboration covers the Ocean freight network on East West trades from February 1st, 2025."
      expandiconposition="left"
      expanded
    >
    <div slot="body" class="btn">
      <mc-button
        id="readMoreBtn"
        appearance="neutral"
        variant="outlined"
      >
        Read more
      </mc-button>
    </div>
  </mc-accordion-item>
</div>
```

#### HeadingAsSlot

```html
<div style="width: 500px">
  <mc-accordion-item
    heading="Booking details and references"
    body="Booking number, Contract ID & related information."
    expandiconposition="right"
    icon="book-open"
  >
    <mc-tooltip slot="heading">
      <mc-icon slot="trigger" icon="question-circle" variant="plain"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>

    <main class="mds-container" slot="body">
      <div class="grid-3">
        <div>
          <div class="field-label">Booking number</div>
          <div>KAO639920</div>
        </div>
        <div>
          <div class="field-label">Booked by reference</div>
          <div>-</div>
        </div>
        <div>
          <div class="field-label">Booking date</div>
          <div>02 Apr 2025, 06:01 UTC</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid-3">
        <div>
          <div class="field-label">Contract ID</div>
          <div>299562202</div>
        </div>
        <div>
          <div class="field-label">Price calculation date</div>
          <div>10 Nov 2025</div>
        </div>
        <div>
          <div class="field-label">Product type</div>
          <div>-</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid-3">
        <div>
          <div class="field-label">Service mode</div>
          <div>Merchant Haulage (CY) - (CY)</div>
        </div>
      </div>
    </main>
  </mc-accordion-item>
</div>
```

#### CustomLeadingIcon

```html
<div style="width: 500px">
  <mc-accordion-item 
    heading="Github" 
    body="GitHub is a platform for developers to collaborate, share code, and manage projects. It hosts millions of repositories and offers tools for version control, issue tracking, and CI/CD workflows."
    expandiconposition="right" 
  >
    <span slot="icon">
      <img src="github.svg" width="20" height="20" />
    </span>
  </mc-accordion-item>
</div>
```

#### CustomTrailingIcon

```html
<div style="width: 500px">
  <mc-accordion-item 
    heading="Github" 
    body="GitHub is a platform for developers to collaborate, share code, and manage projects. It hosts millions of repositories and offers tools for version control, issue tracking, and CI/CD workflows."
    expandiconposition="left" 
  >
    <span slot="trailingicon">
      <img src="github.svg" width="20" height="20" />
    </span>
  </mc-accordion-item>
</div>
```

#### InlineTrailingIcon

```html
<div style="width: 300px">
  <mc-accordion-item 
    body="GitHub is a platform for developers to collaborate, share code, and manage projects. It hosts millions of repositories and offers tools for version control, issue tracking, and CI/CD workflows."
    expandiconposition="left" 
  >
    <span slot="heading" class="heading-with-icon">
      Accordion Item with very long text that goes to two lines 
      <mc-icon icon="question-circle"></mc-icon>
    </span>
  </mc-accordion-item>
</div>
```

#### CustomisedAppearance

```html
<mc-accordion-item
  heading="Customised Appearance"
  body="This example demonstrates how to use CSS parts to customise the accordion item's appearance."
  expandiconposition="left"
  icon="apple"
></mc-accordion-item>
```

## API

### Properties and attributes

#### id

- **Type:** string
- **Default:** field
- **Description:** Id passed to the field and used with label.

#### heading

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Accordion Item
- **Description:** The heading of the accordion item, can be passed as a prop or a defaulted slot

#### body

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- **Description:** Body can be passed as simple argument like: `body="simple text"` or as a slot

#### expanded

- **Type:** boolean
- **Default:** false
- **Description:** Whether the accordion item is expanded

#### expandiconposition

- **Type:** left | right
- **Typescript Type:** ExpandIconPosition
- **Default:** right
- **Description:** Position of the expand icon

#### icon

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Icon displayed at the end (trailing) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### variant

- **Type:** default | plain
- **Typescript Type:** McAccordionItemVariant
- **Default:** default
- **Description:** Visual variant of the accordion item. `plain` removes the bottom border and reduces the bottom padding.

### Events

#### accordionitemtoggle

- **Type:** CustomEvent
- **Description:** Description missing

### Types

- ExpandIconPosition: type
- IMcAccordionItem: interface
- McAccordionItemVariant: type

### Slots

#### heading

- **Description:** Use the heading named slot, when you want to pass the heading as HTML or custom elements.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-accordion-item>
  <span slot="heading">
    <span>Custom <strong>heading</strong> with HTML</span>
  </span>
</mc-accordion-item>
```

#### body

- **Description:** Use the body named slot, when you want to pass body content with HTML elements or custom elements.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-accordion-item>
  <span slot="body">
    <mc-button appearance="primary" label="Click Me"></mc-button>
  </span>
</mc-accordion-item>
```

#### icon

- **Description:** Use the icon named slot, when you want to pass an icon to display before the heading.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-accordion-item>
  <span slot="icon">
    <mc-icon icon="star"></mc-icon>
  </span>
</mc-accordion-item>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, when you want to pass an icon to display after the heading.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-accordion-item>
  <span slot="trailingicon">
    <mc-icon icon="star"></mc-icon>
  </span>
</mc-accordion-item>
```

## CSS parts

#### heading

- **Description:** Using this CSS part you can change the look of the heading element inside the mc-accordion-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-accordion-item::part(heading) {
  color: #40ab35
}
```

#### body

- **Description:** Using this CSS part you can change the look of the body element inside the mc-accordion-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-accordion-item::part(body) {
  color: #40ab35
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-accordion-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-accordion-item::part(icon) {
  fill: #40ab35
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

