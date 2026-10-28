# mc-switch

The Switch component - also known as a Toggle - allows the user to choose between two mutually exclusive options.

**Url:** https://designsystem.maersk.com/components/switch/
**Alternative names:** Toggle Switch, Toggle Button, On/Off Switch
**Keywords:** component, form, field, input, select, choice, option, single, multiple, toggle, filter, tick
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
- Use the switch component when choosing an option produce an immediate result e.g. on/off.
- Use a checkbox instead if additional clicks are needed for changes to take effect e.g. if the user has to click “Submit” to apply the changes.
- The legend (or label with a single switch) should describe what to input and not how.
- Use natural language and use the terms that the user would expect.
- Don’t use verbs like enter, add, input etc in the legend/label.
- Don’t add a colon ( : ) at the end of the legend.
- Use the help text to provide additional context and explanation.
- We recommend that you read our form design guidelines. The Guidelines cover many basic recommendations to be taken into consideration when working with forms.
- Users rely on good and consistent labels when interacting with digital products. See our label guidelines for more information on how to write good labels.

### Grouping
- By default, the switch group is vertically aligned, but the component also supports a horizontally aligned switch group. Since horizontal groups are more difficult to scan, we always recommend using vertically aligned switch groups wherever possible. Always use the vertical group in forms. Read more about forms and vertical alignment here.
- Example: Vertical switch group.
- Example: Horizontal switch group.

### Hint text
- Use the hint text to provide information that makes it easier for the user to select the right options. For a single switch, there is no hint text. For a group of switches, the hint text is placed above the switches and below the group label.
- Example: Switch with hint text.
- For more information on hint text and help in general see our form design guidelines.

### Error state
- For a group of switches, a red error message is placed above the switches and below the label. Error messages should be clear, concise and provide actionable remedies to resolve the errors.
- Example: Switch in an error state.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-switch
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-switch
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-switch';
// minimal example usage
<mc-switch label="I am transporting vegetables"></mc-switch>
// basic example usage
<mc-switch label="I am transporting vegetables" name="agreement" value="" fit="medium"></mc-switch>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-switch>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-switch>
```

#### LabelWithTooltip

```html
<mc-switch>
  <div slot="label">
    Label as HTML, i.e.
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </div>
</mc-switch>
<mc-switch disabled checked>
  <div slot="label">
    Label as HTML, i.e.
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </div>
</mc-switch>
```

#### CustomisedAppearance

```html
<mc-switch label="Label text"></mc-switch>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** I am transporting vegetables
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-switch. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### name

- **Type:** string
- **Default:** agreement
- **Description:** Name is required if the component is used inside a `form` element

#### value

- **Type:** string
- **Description:** Pass the value for the input if it is used inside a `form` element

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

### Events

#### change

- **Type:** CustomEvent<boolean>
- **Description:** Fired when mc-switch in checked/unckecked.

#### click

- **Type:** MouseEvent
- **Description:** Fired when mc-switch is clicked.

#### focus

- **Type:** FocusEvent
- **Description:** Fired when mc-switch is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when mc-switch is going out of focus.

### Types

- Fit: re-export
- IMcSwitch: interface

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-switch>
  <span slot="label">
    Label as HTML
  </span>
</mc-switch>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-switch::part(label-container) {
  align-items: center;
  flex-direction: column;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-switch::part(label) {
  color: #328529;
}
```

#### checkmark

- **Description:** Using this CSS part you can change the look of the checkmark. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-switch::part(checkmark) {
  background-color: #328529;
}
```

## Related

- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Labels](https://designsystem.maersk.com/content/labels/)

