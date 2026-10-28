# mc-checkbox

Checkboxes allow users to select one or more choices from a list of options.

**Url:** https://designsystem.maersk.com/components/checkbox/
**Alternative names:** Checkbox, Tickbox, Selection Box
**Keywords:** component, form, field, input, toggle, tick, checkmark, checked, unchecked, multi-select, validation, fieldset, radio, filter, selection, boolean
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
- Use checkbox groups for 6 or less selectable options. Check our recommendations for all selection components.
- Do not pre-select checkbox options, this might cause users to submit a wrong answer.
- If the user can only choose one option of a selection, use radio buttons instead.
- Use <fieldset> and <legend> to group checkboxes and give them a label.
- Be explicit when the user can select more than one option e.g. use hint text “Select all that apply”.
- The legend (or label with a single checkbox) should describe what to input and not how.
- Use natural language and use the terms that the user would expect.
- Don’t use verbs like enter, add, input etc in the legend/label.
- Don’t add a colon ( : ) at the end of the legend.
- Use the hint text to provide additional context and explanation.
- We recommend reading the forms, selection components and label guidelines.

### Grouping
- By default, the checkbox group is vertically aligned, but the component also supports a horizontally aligned checkbox group. Since horizontal groups are more difficult to scan we always recommend using vertically aligned checkbox groups wherever possible. Always use the vertical group in forms. Read more about grouping in forms in our Form Guidelines.
- Example: Vertical checkbox group.
- Example: Vertical checkbox group.

### Hint text
- Use the hint text to provide information that makes it easier for the user to select the right options.
- Example: Using a single select button group to collect user feedback from your application.
- For a group of checkboxes the hint text is placed above the checkboxes and below the label (<legend>).
- Example: Using a single select button group to collect user feedback from your application.
- For more information on hint text and help in general see our form design guidelines.

### Error state
- Example: An invalid checkbox is highlighted with a red border and a red error message below.
- Example: A group of checkboxes are highlighted with a red error message above the checkboxes. Error messages should be clear, concise and provide actionable remedies to resolve the errors.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-checkbox
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-checkbox
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-checkbox';
// minimal example usage
<mc-checkbox label="I agree to the terms"></mc-checkbox>
// basic example usage
<mc-checkbox label="I agree to the terms" hint="" fit="medium" errormessage="" name="disclaimer" value=""></mc-checkbox>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-checkbox>
  <span slot="label">Label as HTML with custom <a href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-checkbox>
```

#### LabelWithTooltip

```html
<div class="mds-flex mds-gap-800 mds-flex-column">
  <mc-checkbox>
    <div slot="label">
      Label as HTML, i.e.
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </div>
  </mc-checkbox>

  <mc-checkbox disabled>
    <div slot="label">
      Label as HTML, i.e.
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </div>
  </mc-checkbox>
</div>
```

#### HintAsSlot

```html
<mc-checkbox>
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-checkbox>
```

#### ErrorAsSlot

```html
<mc-checkbox invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-checkbox>
```

#### CustomisedAppearance

```html
<mc-checkbox label="Label text"></mc-checkbox>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** I agree to the terms
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-checkbox. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### hint

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-checkbox><span slot="hint">hint text as HTML</span></mc-checkbox>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

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

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the checkbox is displayed in its red error state and the error message is shown if provided.

#### errormessage

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-checkbox><span slot="errormessage">error message as HTML</span></mc-checkbox>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

#### indeterminate

- **Type:** boolean
- **Default:** false
- **Description:** Indeterminate state gets precedence over the `checked` state and the checkbox `does not` consider to be `checked` when is in `indeterminate` state. There are not many use cases for this property. The most common is when a checkbox "owns" a number of sub-options (which are also checkboxes). If all of the sub-options are checked, the owning checkbox is also checked, and if they're all unchecked, the owning checkbox is unchecked. If any one or more of the sub-options have a different state than the others, the owning checkbox is in the `indeterminate` state.

#### name

- **Type:** string
- **Default:** disclaimer
- **Description:** Name is required if the component is used inside a `form` element

#### value

- **Type:** string
- **Description:** Pass the value for the input if it is used inside a `form` element

### Events

#### change

- **Type:** CustomEvent<boolean>
- **Description:** Fired when mc-checkbox in checked/unckecked.

#### click

- **Type:** MouseEvent
- **Description:** Fired when mc-checkbox is clicked.

#### focus

- **Type:** FocusEvent
- **Description:** Fired when mc-checkbox is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when mc-checkbox is going out of focus.

### Types

- AriaRoles: re-export
- Fit: re-export
- IMcCheckbox: interface

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-checkbox>
  <span slot="label">
    Label as HTML
  </span>
</mc-checkbox>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-checkbox>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-checkbox>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-checkbox>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-checkbox>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-checkbox::part(label-container) {
  align-items: center;
  flex-direction: column;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-checkbox::part(label) {
  color: #328529;
}
```

#### checkmark

- **Description:** Using this CSS part you can change the look of the checkmark. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-checkbox::part(checkmark) {
  background-color: #328529;
}
```

## Related

- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Labels](https://designsystem.maersk.com/content/labels/)
- [Radio](https://designsystem.maersk.com/components/radio/)
- [Selection components](https://designsystem.maersk.com/guidelines/selection-components/)

