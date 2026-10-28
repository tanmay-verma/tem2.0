# mc-textarea

The textarea component is similar to the text input but allows user to enter multiple lines of text.

**Url:** https://designsystem.maersk.com/components/textarea/
**Alternative names:** Text Area, Multi Line Input, Text Box
**Keywords:** component, form, field, input, text, multiline
**✅ When to use:** When you need to capture a larger block of text from the user.
**❌ When not to use:** For single-line text inputs or when a more compact input is needed.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use natural language when writing form labels.
- Use the help text to show the character count and place it to the right.
- Error messages should be clear, concise and should provide actionable remedies to resolve the errors.
- The label should describe what to input and not how.
- Use natural language and use the terms that the user would expect.
- Don’t use verbs like enter, add, input etc in the label.
- Don’t add a colon ( : ) at the end of the label.
- Use the help text to provide additional context and explanation.
- We recommend that you read our form design guidelines. The Guidelines cover many basic recommendations to be taken into consideration when working with forms.

### Label
- By default, the component has a top-positioned label. It is possible to change the position of the label to be left-positioned. We recommend that you use the top-positioned labels wherever possible, especially in forms. You can read more about why we recommend top-positioned labels in our form guidelines.
- For information on how to write good and consistent labels - see our Label Guidelines.

### Placeholder
- Do not use the placeholder to replace labels. Unlike labels, placeholder text is optional and should be used with care since it disappears when the user starts typing. If the information is crucial, then use the hint text instead.

### Max length counter
- Use the max length counter to provide the user with information on how many characters the textarea accepts as well as giving the user immediate feedback on how many characters that has been entered as they type.
- Example: Textarea with showing the max length counter.

### Hint text & error state
- Please see the Input component for details on hint text and error state.
- For more information on hint text and help in general see our form design guidelines.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-textarea
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-textarea
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-textarea';
// minimal example usage
<mc-textarea label="Explanation"></mc-textarea>
// basic example usage
<mc-textarea label="Explanation" placeholder="Write short explanation" hint="" fit="medium" autofocus="" width="auto" maxlength="" rows="5" labelposition="top" id="field" name="explanation" value="" errormessage=""></mc-textarea>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-textarea>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-textarea>
```

#### CustomisedAppearance

```html
<mc-textarea>
</mc-textarea>
  
```

#### WithoutResizeControl

```html
<mc-textarea label="message"></mc-textarea>
```

#### HintAsSlot

```html
<mc-textarea>
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-textarea>
```

#### ErrorAsSlot

```html
<mc-textarea invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-textarea>
```

#### LabelToTheLeft

```html
<div class="mds-flex mds-flex-column mds-gap-800 container">
  <mc-textarea class="text-align-right" label="Description" labelposition="left"></mc-textarea>
  <mc-textarea class="text-align-right" label="Long label text that goes over 1 line" labelposition="left"></mc-textarea>
  <mc-textarea label="Description" labelposition="left"></mc-textarea>
  <mc-textarea label="Long label text that goes over 1 line" labelposition="left"></mc-textarea>
</div>
```

#### LabelWithTooltip

```html
<mc-textarea>
  <div slot="label">
    Label as HTML, i.e. 
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </div>
</mc-textarea>
<mc-textarea disabled>
  <div slot="label">
    Label as HTML, i.e. 
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </div>
</mc-textarea>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** Explanation
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-textarea. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### placeholder

- **Type:** string
- **Default:** Write short explanation
- **Description:** The `placeholder` attribute specifies a short hint that describes the expected value of a field (e.g. a sample value or a short description of the expected format)

#### hint

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-textarea><span slot="hint">hint text as HTML</span></mc-textarea>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### autofocus

- **Type:** attribute
- **Typescript Type:** boolean
- **Description:** Add `autofocus` attiribute to an element inside of mc-textarea to set focus on it when mc-textarea is opened

#### width

- **Type:** auto | number
- **Typescript Type:** string
- **Default:** auto
- **Description:** The width of the inner input container in percentage. If not provided the width will be `auto`.

#### maxlength

- **Type:** number
- **Description:** Setting this property will activate a character counter and limit the number of characters that can be entered in the `textarea`

#### rows

- **Type:** number
- **Default:** 5
- **Description:** The height of the textarea will depend on the number of rows

#### labelposition

- **Type:** top | left
- **Typescript Type:** LabelPosition
- **Default:** top
- **Description:** Position of the label. On small screens, label will always appear on top. See examples under input component on how to set label with and align text within the label. 

#### id

- **Type:** string
- **Default:** field
- **Description:** Id passed to the field and used with label.

#### name

- **Type:** string
- **Default:** explanation
- **Description:** Name is required if the component is used inside a `form` element

#### value

- **Type:** string
- **Typescript Type:** string | null | undefined
- **Description:** Pass the value for the input if it is used inside a `form` element

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the component border is displayed in red and the `errormessage` is shown if provided.

#### errormessage

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-textarea><span slot="errormessage">error message as HTML</span></mc-textarea>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### readonly

- **Type:** boolean
- **Default:** false
- **Description:** Indicates that the component is read-only and cannot be modified by the user.

#### required

- **Type:** boolean
- **Default:** false
- **Description:** Indicates that the component requires a value before submission.

### Events

#### input

- **Type:** InputEvent
- **Description:** Fired when the character is entered.

#### focus

- **Type:** FocusEvent
- **Description:** Fired when mc-input is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when mc-input is going out of focus.

#### click

- **Type:** MouseEvent
- **Description:** Fired on mc-textarea click.

#### keydown

- **Type:** KeyboardEvent
- **Description:** Fired when a key on keydown is pressed.

### Types

- Fit: re-export
- IMcTextarea: interface
- LabelPosition: re-export

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-textarea>
  <span slot="label">
    Label as HTML
  </span>
</mc-textarea>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-textarea>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-textarea>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-textarea>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-textarea>
```

## CSS parts

#### textarea

- **Description:** Using this CSS part you can change the look of the textarea. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-textarea::part(textarea) {
  background-color: #FFFBF5;
  color: #000000;
}
```

#### field

- **Description:** Using this CSS part you can change the look of the field. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-textarea::part(field) {
  background-color: #F0F0F0;
  color: #000000;
}
```

## Related

- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input](https://designsystem.maersk.com/components/input/)
- [Labels](https://designsystem.maersk.com/content/labels/)

