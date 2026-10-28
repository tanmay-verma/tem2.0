# mc-tab

A tabbed interface that allows users to navigate between different views or sections of content within the same page.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Tabbed Navigation, Tabbed Interface, Tab Control, Tab Panel, Tab View
**Keywords:** 
**✅ When to use:** When you need to display multiple views or sections of content in a compact space.
**❌ When not to use:** For single-view interfaces or when a simple dropdown menu suffices.

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
npm install @maersk-global/mds-components-core-tab
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-tab
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-tab';
// minimal example usage
<mc-tab label="Tab text"></mc-tab>
// basic example usage
<mc-tab label="Tab text" prefix="" suffix="" fit="medium" icon="" trailingicon="" width="auto"></mc-tab>
```

### Advanced Examples

#### WithTag

```html
<mc-tab label="Overdue">
  <span slot="suffix"><mc-tag appearance="error" fit="small" label="3"></mc-tag></span>
</mc-tab>
```

#### PrefixAndSuffix

```html
<mc-tab label="Prices">
  <span class="prefix" slot="prefix"></span>
  <span slot="suffix">$</span>
</mc-tab>
```

#### CustomisedAppearance

```html
<mc-tab icon="apple">
    Apple
</mc-tab>
  
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Tab text
- **Description:** Label has to be passed as a property. It is required attribute as it will be used as aria-label

#### prefix

- **Type:** slot
- **Description:** The prefix can be passed as named slot and can be any HTML element, i.e. `<div slot="prefix"><span class="my-element">prefix</span></div>` You can apply any custom styling to the HTML element that is being passed to the slot.

#### suffix

- **Type:** slot
- **Description:** The suffix can be passed as named slot and can be any HTML element, i.e. `<div slot="suffix"><span class="my-element">suffix</span></div>` You can apply any custom styling to the HTML element that is being passed to the slot.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### icon

- **Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string
- **Description:** Icon displayed at the end (trailing) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### active

- **Type:** boolean
- **Default:** false
- **Description:** Sets tab to active state

#### width

- **Type:** auto | full-width
- **Typescript Type:** Width
- **Default:** auto
- **Description:** Auto width style depends on the text length, full-width style will adjust to the parent container width

### Events

#### disabledchange

- **Type:** CustomEvent
- **Description:** Fired when disabled status of a tab changes.

### Types

- Fit: re-export
- IMcTab: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tab>
  Label as HTML
</mc-tab>
```

#### prefix

- **Description:** Use the prefix named slot, to specify the prefix graphic such as an icon, image or pictogram.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tab>
  <span slot="prefix">
    <mc-icon slot="prefix" icon="heart"></mc-icon>
  </span>
</mc-tab>
```

#### suffix

- **Description:** Use the suffix named slot, to specify the suffix graphic such as an icon, image or pictogram.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tab>
  <span slot="suffix">
    <mc-icon slot="suffix" icon="heart"></mc-icon>
  </span>
</mc-tab>
```

#### badge

- **Description:** Use the badge slot, when you want to attach badge to the list item. Check stories under badge <b>Examples</b> folder to see live example.

```html
<mc-list-item>
  <mc-badge 
    slot="badge" 
    label="99" 
    variant="error">
  </mc-badge>
</mc-list-item>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-tab component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tab::part(button) {
  color: #40AB35;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-tab component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tab::part(icon) {
  fill: #000000
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the container element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tab::part(text-and-icon) {
  gap: 24px;
}
```

## Related

- [undefined](undefined)

