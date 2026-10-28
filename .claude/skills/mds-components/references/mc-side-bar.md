# mc-side-bar

A sidebar component that can be toggled open or closed, providing easy access to navigation links or other important content.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Side Navigation, Collapsible Menu, Sidebar Menu, Navigation Drawer, Slide-out Menu
**Keywords:** 
**✅ When to use:** When you need a collapsible sidebar for navigation or additional content.
**❌ When not to use:** For static content that doesn't require a toggleable interface.

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
npm install @maersk-global/mds-components-core-side-bar
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-side-bar
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-side-bar';
// minimal example usage
<mc-side-bar></mc-side-bar>
// basic example usage
<mc-side-bar></mc-side-bar>
```

### Advanced Examples

#### WithCard

```html
<mc-side-bar>
  <nav class="mds-tree-nav" role="navigation" aria-label="side navigation">
    <ul>
      <li>
        <details open>
            <summary>Item 1</summary>
            <ul>
              <li>
                <details>
                  <summary>Sub Item 1</summary>
                  <ul>
                    <li>
                      <a href="#">Item 1.1.1</a>
                    </li>
                    <li>
                      <a href="#">Item 1.1.2</a>
                    </li>
                    <li>
                      <a href="#">Item 1.1.3</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#" class="mds-tree-nav__active" aria-current="page">Sub Item 2</a>
              </li>
              <li>
                <a href="#">Sub Item 3</a>
              </li>
            </ul>
          </details>
      </li>
      <li>
        <a href="#">Item 2</a>
      </li>
      <li class="mds-tree-nav--separator"></li>
      <li>
        <a href="#" class="mds-tree-nav__external">External link</a>
      </li>
    </ul>
  </nav>
  <mc-card 
    heading="Supply Chain and Logistics"
    subheading="Integrated logistics"
    variant="borderless">
    We focus on solving your supply chain needs from end to end, taking the complexity out of container shipping for you.
  </mc-card>
</mc-side-bar>
```

## API

### Properties and attributes

#### labels

- **Type:** IMcSideBarLabels
- **Typescript Type:** Partial<IMcSideBarLabels> | undefined
- **Description:** Custom labels for mc-side-bar component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-side-bar/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

### Types

- IMcSideBarLabels: interface

### Slots

#### Default slot

- **Description:** Use the default slot, for passing the content to be rendered in the side bar. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-side-bar>
  <nav role="navigation" aria-label="side navigation"></nav>
</mc-side-bar>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-side-bar component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-side-bar::part(button) {
  color: #40AB35;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-side-bar component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-side-bar::part(icon) {
  fill: #000000
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the container element inside the mc-side-bar component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-side-bar::part(text-and-icon) {
  gap: 24px;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)

