# mc-input

Input is a single-line text field for letters, numbers, and symbols.  Use it for short freeform entry or lightly constrained values, not for multi-line entry or predefined selections.

**Url:** https://designsystem.maersk.com/components/input/
**Alternative names:** Text Input, Form Input, Text Field, Input Box, Text Entry
**Keywords:** component, form, field, text
**✅ When to use:** When you need to collect user input in a form.
**❌ When not to use:** When you need to display non-input content.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use natural language when writing form labels.
- Use the length of form fields to indicate the “format” of a proper answer.
- Use hint text to provide more context to the question being asked.
- Before adding an icon, affix or clear button to the input, consider carefully if it is appropriate for the specific use case and if it actually helps the user.
- Error messages should be clear, concise and should provide actionable remedies to resolve the errors.
- The label should describe what to input and not how.
- Use natural language and use the terms that the user would expect.
- Don’t use verbs like enter, add, input etc in the label.
- Don’t add a colon ( : ) at the end of the label.
- Use the help text to provide additional context and explanation.
- We recommend that you read our Form Guidelines. The Guidelines cover many basic recommendations to be taken into consideration when working with forms.

### Input types
- The input component supports different input types. Specifying the input type gives you out-of-the box validation in modern browsers and prompt the most suitable keyboard on mobile devices e.g. number keyboard for the input type telefone. The component support the following input types:
- text
- telephone
- url
- email
- number
- password

### Icons
- The input can show an icon and a trailing icon (to the left and to the right respectively).
- Example: Inputs with an icon and trailing icon

#### Clickable trailing icon
- If you place an icon to the right, then you also have the option to make it clickable. The most common use case is for password inputs where the user can show and hide the typed password and check whether the password is typed correctly.
- Example: Input with a clickable trailing icon

### Prefix and suffix
- A prefix or suffix can be added to provide the user with additional help and affordance when filling out the text input.
Typically suffixes and prefixes are used to indicate a unit that goes together with a numerical value.
- Only use the prefix or suffix for symbols and standard abbreviations, and units of measurement.
e.g. USD, kg, m², m³, ft³/h, °C, etc.
- In addition to suffixes and prefixes use labels, tooltips, and hints to provide more context and guidance on what information is required from people.
- Example: Inputs with a prefix and suffix

### Clear button
- A clear button can be added to the input and is a shortcut action allowing the user to clear the current value. It is useful for clearing search fields and on mobile devices where entering information can be a cumbersome task.
- Avoid having an icon to the right or suffix and a clear button as this make the user experience rather complex.
- Example: Input with clear button

### Label
- By default, the component has a top-positioned label. It is possible to change the position of the label to be left-positioned. We recommend that you use the top-positioned labels wherever possible, especially in forms. You can read more about why we recommend top-positioned labels in our form guidelines.
- Learn how to write good and consistent labels - see our Label Guidelines.

### Placeholder
- Placeholder text can help users understand what kind of information they need to provide, and how to format it correctly. If the expected information has a standard format, it is better to use Input mask to assist the user.
- Placeholder text should be used with care since it disappears when the user starts typing.
- Example: Placeholder text should guide the user what can be the input value.

### Input mask
- Use an input mask when you require users to enter information in a standardised format. It will assist users in entering the correct information in the right format and will help prevent invalid input.
- Example: Input mask can help format credit card numbers in the full range of expected values from 10 to 19 digits.
- Learn when to use Input mask and when to avoid it.

### Hint text
- Use the hint text to provide additional information that can assist the user to fill out the field. Hint text is placed to the left below the input and stays permanently there while the user is typing.
- Example: Input with a hint text
- We recommend reading the forms guidelines.

### Error state
- Highlight an invalid text input with a red border and a red error message placed beneath the input field. Error messages should be clear, concise and provide actionable remedies to resolve the errors.
- Example: Input in an error state

### Vanity variant
- The component supports the “vanity” style variant.
- Please read more about this variant on our form guidelines page.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-input
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-input
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-input';
// minimal example usage
<mc-input label="Username"></mc-input>
// basic example usage
<mc-input label="Username" placeholder="Insert your username" autocomplete="on" hint="" variant="default" fit="medium" labelposition="top" width="auto" type="text" icon="" trailingicon="" id="field" prefix="" suffix="" errormessage="" name="username" value="" mask=""></mc-input>
```

### Advanced Examples

#### LabelAsASlot

```html
<mc-input>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" 
  href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input>
```

#### LabelWithTooltip

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-input>
    <span slot="label">
      Label as HTML, i.e.
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </span>
  </mc-input>

  <mc-input disabled>
    <span slot="label">
      Label as HTML, i.e.
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </span>
  </mc-input>
</div>
```

#### HintSlot

```html
<mc-input>
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input></div>
```

#### ErrorSlot

```html
<mc-input invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input></div>
```

#### LeftLabel

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-input
    class="text-align-right"
    label="Name"
    labelposition="left">
  </mc-input>
  <mc-input
    label="Name"
    labelposition="left">
  </mc-input>
  <mc-input
    class="text-align-right"
    label="Long label text that goes over 1 line"
    labelposition="left">
  </mc-input>
  <mc-input
    label="Long label text that goes over 1 line"
    labelposition="left">
  </mc-input>
</div>
```

#### CustomisedAppearance

```html
<div class="input-container">
  <mc-input label="Label text" icon="info-circle"></mc-input></div>
</div>
```

#### Form

```html
<form
  id="form"
  class="mds-flex mds-flex-columns mds-gap-400"
>
  <mc-input name="name" label="Name"></mc-input></div>
  <mc-input name="address" label="Address"></mc-input></div>
  <div class="mds-flex mds-gap-400">
    <mc-button name="submit" type="submit" label="Submit"></mc-button>
    <mc-button appearance="neutral" label="Not a submit"></mc-button>
  </div>
</form>
<p id="formValues"></p>
```

#### Mask

```html
<div class="mds-flex mds-flex-column mds-gap-200">
  <div>
    <mc-input
      name="creditCardNumber"
      label="Credit card number"
      id="creditCardNumber"
      oninput="handleInput(event)"
      mask="0000 0000 0000 0000"
      placeholder="1234 1234 1234 1234"
      hint="Mask as a string: '0000 0000 0000 0000'"
    ></mc-input>
    <div id="creditCardNumberUnmasked" class="mds-neutral--weak__text-color"></div>
    <div id="creditCardNumberMasked" class="mds-neutral--weak__text-color" style="margin-bottom: 16px;"></div>
  </div>

  <div>
    <mc-input
      name="containerNumber"
      label="Container number"
      id="containerNumber"
      oninput="handleInput(event)"
      mask="{MKRU} 0000 000 000"
      value="MKRU 1111 222 333"
      hint="Mask as a string with fixed characters: {MKRU} 0000 000 000 (e.g. MKRU 1234 123 123)"
    ></mc-input>
    <div id="containerNumberUnmasked" class="mds-neutral--weak__text-color"></div>
    <div id="containerNumberMasked" class="mds-neutral--weak__text-color" style="margin-bottom: 16px;"></div>
  </div>

  <div>
    <mc-input
      name="optionalInput"
      label="Optional input"
      id="optionalInput"
      oninput="handleInput(event)"
      mask="00-aa-*[**]"
      hint="Mask as a string with optional input: 00-aa-*[**]"
    ></mc-input>
    <div id="optionalInputUnmasked" class="mds-neutral--weak__text-color"></div>
    <div id="optionalInputMasked" class="mds-neutral--weak__text-color" style="margin-bottom: 16px;"></div>
  </div>

  <div>
    <mc-input
      name="digitsInput"
      label="Digits"
      id="digitsInput"
      oninput="handleInput(event)"
      value="1"
      hint="Mask as a RegExp: /^\\d+$/ (allows only digits to be typed in)"
    ></mc-input>
    <div id="digitsInputUnmasked" class="mds-neutral--weak__text-color"></div>
    <div id="digitsInputMasked" class="mds-neutral--weak__text-color" style="margin-bottom: 16px;"></div>
  </div>

  <div>
    <mc-input
      name="creditCardNumberObj"
      label="Credit card number"
      id="creditCardNumberObj"
      oninput="handleInput(event)"
      hint="Mask as an object: { mask: '0000 0000 0000 0000' }"
    ></mc-input>
    <div id="creditCardNumberObjUnmasked" class="mds-neutral--weak__text-color"></div>
    <div id="creditCardNumberObjMasked" class="mds-neutral--weak__text-color" style="margin-bottom: 16px;"></div>
  </div>

</div>
```

#### Autocomplete

```html
<mc-input>
  <label slot="label" for="password-input">Enter your password</label>
  <input slot="input" type="password" id="password-input" />
</mc-input></div>
```

#### Password

```html
<mc-input
  label="Password"
  placeholder="Insert strong password phrase"
  trailingicon="eye"
  trailingiconlabel="Show password"
  clearbutton
  clickabletrailingicon
  name="password"
  type="password"
>
</mc-input></div>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** Username
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-input. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### placeholder

- **Type:** string
- **Default:** Insert your username
- **Description:** The `placeholder` attribute specifies a short hint that describes the expected value of a field (e.g. a sample value or a short description of the expected format)

#### autocomplete

- **Type:** off | on | name | given-name | family-name | ...
- **Typescript Type:** string
- **Default:** on
- **Description:** The HTML autocomplete attribute lets web developers specify what if any permission the user agent has to provide automated assistance in filling out form field values. The full list of possible values for this attribute are listed on MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete P.S. Check Examples -> Password autocompletion story to see a live demo on enabling password autocompletion behavior.

#### hint

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-input><span slot="hint">hint text as HTML</span></mc-input>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

#### loading

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, it'll set the input state to loading and a loading spinner will be shown. The leading/trailing icon, suffix/prefix or clear button (if exists) will be replaced by the spinner.

#### autofocus

- **Type:** boolean
- **Default:** false
- **Description:** The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load, or when the <dialog> that it is part of is displayed.

#### variant

- **Type:** default | vanity | borderless
- **Typescript Type:** Variant
- **Default:** default
- **Description:** Controls the visual style of the component.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### labelposition

- **Type:** top | left
- **Typescript Type:** LabelPosition
- **Default:** top
- **Description:** Position of the label. On small screens, label will always appear on top. See examples under input component on how to set label with and align text within the label. 

#### width

- **Type:** auto | number
- **Typescript Type:** string
- **Default:** auto
- **Description:** The width of the inner input container in percentage. If not provided the width will be `auto`.

#### type

- **Type:** text | search | tel | url | email | file | password | date | month | week | time | datetime-local | number | color
- **Typescript Type:** InputType
- **Default:** text
- **Description:** Supported types are: text, tel, url, email, number and password. For number input, please have a look at `mc-number-stepper` documentation and examples stories. For date input, please have a look at `mc-input-date` documentation and examples stories.

#### icon

- **Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string
- **Description:** Icon displayed at the end (trailing) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingiconlabel

- **Type:** boolean
- **Typescript Type:** string | undefined
- **Default:** undefined
- **Description:** The label and title of the trailing icon, which will be shown on icon hover, and used as hidden label in the button. It's important for user experience and accessibility to provide the prop when using `clickabletrailingicon`

#### clickabletrailingicon

- **Type:** boolean
- **Default:** false
- **Description:** Trailingicon will be clickable. If you want to handle the click event, please listen to the `iconclick` event.

#### id

- **Type:** string
- **Default:** field
- **Description:** Id passed to the field and used with label.

#### prefix

- **Type:** string
- **Typescript Type:** Prefix
- **Description:** You can either render prefix or an icon on the same side of the input. Preferably, the prefix should not be longer than 5 characters.

#### suffix

- **Type:** string
- **Typescript Type:** Suffix
- **Description:** You can either render suffix or an icon on the same side of the input. Preferably, the suffix should not be longer than 5 characters. 

#### clearbutton

- **Type:** boolean
- **Default:** false
- **Description:** Controls whether a clear (×) action button is shown within the input field.

#### keepclearbuttonvisible

- **Type:** boolean
- **Default:** false
- **Description:** Clearbutton will be visible at all times when user typed something in the field (not only during input focus)

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the component border is displayed in red and the `errormessage` is shown if provided.

#### errormessage

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-input><span slot="errormessage">error message as HTML</span></mc-input>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

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
- **Typescript Type:** boolean | undefined
- **Default:** false
- **Description:** Indicates that the component requires a value before submission.

#### name

- **Type:** string
- **Default:** username
- **Description:** Name is required if the component is used inside a `form` element

#### value

- **Type:** string
- **Typescript Type:** any
- **Description:** The initial value of the input

#### mask

- **Type:** text
- **Typescript Type:** Mask | string | undefined
- **Description:** The mask can be a string or a regular expression i.e. `000 000`. For more information, please have a look at the `with a mask` example or check More examples on mask can be found on https://imask.js.org/.

### Events

#### input

- **Type:** InputEvent
- **Description:** Fired when the character is entered.

#### clearbuttonclick

- **Type:** CustomEvent
- **Description:** Fires when the clear button is pressed.

#### trailingiconclick

- **Type:** CustomEvent
- **Description:** Fires when the icon or trailing icon is clicked.

#### focus

- **Type:** FocusEvent
- **Description:** Fired when mc-input is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when mc-input is going out of focus.

#### click

- **Type:** MouseEvent
- **Description:** Fired on mc-input click.

#### keydown

- **Type:** KeyboardEvent
- **Description:** Fired when a key on keydown is pressed.

### Types

- AffixType: type
- Fit: re-export
- IMcInput: interface
- InputMode: type
- InputType: type
- LabelPosition: re-export
- Mask: re-export
- Max: type
- Min: type
- Prefix: type
- Size: type
- Step: type
- Suffix: type
- Variant: type

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input>
  <span slot="label">
    Label as HTML
  </span>
</mc-input>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-input>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-input>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input::part(label-container) {
  display: flex;
  justify-content: flex-end;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input::part(label) {
  color: #000000;
}
```

#### input

- **Description:** Using this CSS part you can change the look of the input field. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input::part(input) {
  color: #000000;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input::part(icon) {
  fill: #000000
}
```

## Related

- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input masks](https://designsystem.maersk.com/guidelines/input-masks/)
- [Labels](https://designsystem.maersk.com/content/labels/)

