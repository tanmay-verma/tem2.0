# mc-radio

Radio buttons are mutual exclusive, which means that there should always be at least two radio buttons grouped together.

**Url:** https://designsystem.maersk.com/components/radio/
**Alternative names:** Radio Button, Option Button, Selection Button
**Keywords:** component, form, field, input, select, choice, option, single, toggle, filter
**✅ When to use:** Forms, Surveys, User preferences
**❌ When not to use:** Decorative purposes, Non-interactive elements

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use radio buttons when the user can only select one option out of 6 or less options.
- For doing multi-selection from 6 or less options use checkboxes. Check our recommendations for all selection components.
- Use <fieldset> and <legend> to group radio buttons and give them a label.
- The legend should describe what to input and not how.
- Use natural language and use the terms that the user would expect.
- Don’t use verbs like enter, add, input etc in the legend.
- Don’t add a colon ( : ) at the end of the legend.
- Use the hint text to provide additional context and explanation.
- We recommend reading the forms, selection components and label guidelines.

### Grouping
- By default, the radio button group is vertically aligned, but the component also supports a horizontally aligned radio button group. Since horizontal groups are more difficult to scan, we always recommend using vertically aligned radio button groups wherever possible. Always use the vertical group in forms. Read more about forms here.
- Example: Vertical radio button group.
- Example: Horizontal checkbox group.

### Hint text
- Use the hint text to provide information that makes it easier for the user to select the right option. For a group of radio buttons help text is placed above the radio buttons and below the label (<legend>).
- Example: Radio group with hint text
- For more information on help text and help in general see our form design guidelines.

### Error state
- An invalid group of radio buttons is highlighted with a red error message placed above the radio buttons and below the label (<legend>). Error messages should be clear, concise and provide actionable remedies to resolve the errors.
- Example: Radio group in an error state

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-radio
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-radio
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-radio';
// minimal example usage
<mc-radio label="Label"></mc-radio>
// basic example usage
<mc-radio label="Label" fit="medium" name="fruit" value=""></mc-radio>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-radio>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-radio>
```

#### LabelWithTooltip

```html
<mc-radio>
  <span slot="label">
    Label as HTML, i.e.
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </span>
</mc-radio>
<mc-radio disabled>
  <span slot="label">
    Label as HTML, i.e.
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </span>
</mc-radio>
```

#### CustomisedAppearance

```html
<mc-radio label="Label text"></mc-radio>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** Label
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-radio. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### checked

- **Type:** boolean
- **Default:** false
- **Description:** Indicates whether the component is in a checked (selected) state.

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### readonly

- **Type:** boolean
- **Default:** false
- **Description:** Indicates that the component is read-only and cannot be modified by the user.

#### name

- **Type:** string
- **Default:** fruit
- **Description:** Name is required if the component is used inside a `form` element

#### value

- **Type:** string
- **Typescript Type:** string | number | boolean
- **Description:** Pass the value for the input if it is used inside a `form` element

### Events

#### click

- **Type:** MouseEvent
- **Description:** Fired when mc-radio is clicked.

#### change

- **Type:** CustomEvent<boolean>
- **Description:** Fired when mc-radio in checked/unckecked.

#### focus

- **Type:** FocusEvent
- **Description:** Fired when mc-radio is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when mc-radio is going out of focus.

### Types

- Fit: re-export
- IMcRadio: interface

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-radio>
  <span slot="label">
    Label as HTML
  </span>
</mc-radio>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-radio::part(label-container) {
  align-items: center;
  flex-direction: column;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-radio::part(label) {
  color: #328529;
}
```

#### checkmark

- **Description:** Using this CSS part you can change the look of the checkmark. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-radio::part(checkmark) {
  background-color: #328529;
}
```

## Related

- [Checkbox](https://designsystem.maersk.com/components/checkbox/)
- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Labels](https://designsystem.maersk.com/content/labels/)
- [Selection components](https://designsystem.maersk.com/guidelines/selection-components/)

