# mc-input-date

The input date allows people to input a single date.

**Url:** https://designsystem.maersk.com/components/input-date/
**Alternative names:** Date Input, Form Date Input, Date Field, Date Picker
**Keywords:** component, form, field, calendar, date, month, year, select, week, past, future, day, weekday, weekend, week number
**✅ When to use:** When you need to collect user date input in a form.
**❌ When not to use:** When you need to display non-input content.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Make it clear what kind of date format (YYYY-MM-DD) you are asking for. e.g. by using placeholder.
- When asking for a date from official document e.g. passport, match the input format of the original, so that it is easy for the user to copy.
- Use min and max dates to help prevent user error. The selectable date should be realistic for the context and application capabilities.
- When asking for a memorable date (e.g. date of birth) consider using 3 text inputs to represent the correct format.
- Display the weeks numbers in the calendar popover only when the context requires it and when users expect to see them by default.
- If you need to combine date and time use the input time as addition to the input date.
- Use understandable and contextual language for the input label that describes what the date is for.
- Don’t use verbs like enter, add, input etc in the label.
- Don’t add a colon ( : ) at the end of the label.
- Use the hint text to provide additional context and explanation.
- We recommend that you read our Form Guidelines. The Guidelines cover many basic recommendations to be taken into consideration when working with forms.

### Label
- By default, the component has a top-positioned label. It is possible to change the position of the label to be left-positioned. We recommend that you use the top-positioned labels wherever possible, especially in forms. You can read more about why we recommend top-positioned labels in our form guidelines.
- For information on how to write good and consistent labels - see our Label Guidelines.

### Hint text & error state
- Please see the Input component for details on hint text and error state.

### Vanity variant
- The component supports the “vanity” style variant.
- Please read more about this variant on our form guidelines page.

### Examples
- Common scenarios of how this component could be used.

#### Date and time together
- The following example uses the input time component for date and time input.
- Example: When time needs to be related to a specific date.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-input-date
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-input-date
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-input-date';
// minimal example usage
<mc-input-date label="Arrival date"></mc-input-date>
// basic example usage
<mc-input-date activedate="" value="" min="" max="" startofweek="1" locale="en-US" dayperiod="short" customstyles="" yearcap="10" calendarposition="bottom-left" format="YYYY-MM-DD" label="Arrival date" placeholder="YYYY-MM-DD" autocomplete="on" hint="" variant="default" fit="medium" labelposition="top" width="auto" icon="" id="field" prefix="" errormessage="" name="checkin-date"></mc-input-date>
```

### Advanced Examples

#### Slot

```html
<mc-input-date>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input-date>
```

#### LabelWithTooltip

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-input-date>
    <span slot="label"
      >Label as HTML, i.e.
      <mc-tooltip position="bottom-center">
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </span>
  </mc-input-date>
  <mc-input-date disabled>
    <span slot="label"
      >Label as HTML, i.e.
      <mc-tooltip position="bottom-center">
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </span>
  </mc-input-date>
</div>
```

#### DisableDatesUsingMinMax

```html
<mc-input-date
  value="${currentYear}-${currentMonthFormat}-10"
  label="Shipping day"
  hiddenlabel
  min="${currentYear}-${currentMonthFormat}-08"
  max="${currentYear}-${currentMonthFormat}-12"
></mc-input-date>
```

#### DisableDatesUsingCustomize

```html
<mc-input-date
  value="${currentYear}-${currentMonthFormat}-10"
  label="Shipping day"
  hiddenlabel
></mc-input-date>
```

#### DisableDatesUsingCallbackFunction

```html
<mc-input-date
  value="${currentYear}-${currentMonthFormat}-10"
  label="Shipping day"
  hiddenlabel
></mc-input-date>
```

#### IconPositioning

```html
<mc-input-date
    icon="gift"
    label="Birthday"
    placeholder="Choose a date"
 ></mc-input-date>
```

#### HintSlot

```html
<mc-input-date>
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input-date>
```

#### ErrorSlot

```html
<mc-input-date invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input-date>
```

#### Footer

```html
<mc-input-date>
  <span class="mds-text--x-small-normal" slot="footer">Use arrow keys to navigate between days</span>
</mc-input-date>
```

#### LeftLabel

```html
<div class="mds-flex mds-gap-800 mds-flex-column">
  <mc-input-date class="text-align-right" label="Birthday" labelposition="left"></mc-input-date>
  <mc-input-date class="text-align-right" label="Long label text that goes over 1 line" labelposition="left"></mc-input-date>
  <mc-input-date label="Birthday" labelposition="left"></mc-input-date>
  <mc-input-date label="Long label text that goes over 1 line" labelposition="left"></mc-input-date>
</div>
```

#### DayIndicators

```html
<mc-input-date
  value="${currentYear}-${currentMonthFormat}-10"
></mc-input-date>
```

#### CustomStyles

```html
<mc-input-date
  value="2022-08-17"
  label="Shipping day"
  hiddenlabel
  customstyles="mc-button.holiday::part(button){ color: green; background-color: red;}"
></mc-input-date>
```

#### CustomisedAppearance

```html
<div class="input-container">
  <mc-input-date label="Label text"></mc-input-date>
</div>
```

#### WithAMask

```html
<mc-input-date
  label="Enter your birthday"
  hint="Use MM/DD/YYYY format"
  usemask
  format="MM/DD/YYYY"
></mc-input-date>
```

#### Validation

```html
<mc-input-date label="Birthdate" min="2024-11-02" max="2024-11-16"></mc-input-date>
```

## API

### Properties and attributes

#### activedate

- **Type:** string
- **Typescript Type:** string | null
- **Description:** Specifies which year and month to display. Can be used to switch between months/years without selecting a date. It should be passed in ISO format YYYY-MM-DD. If left blank, today's month and year is used by default.

#### value

- **Type:** string
- **Description:** Selected date value, defaults to current date (ISO format YYYY-MM-DD)

#### min

- **Type:** string
- **Description:** Define minimal selectable date, unlimited if empty (ISO format YYYY-MM-DD)

#### max

- **Type:** string
- **Description:** Define maximal selectable date, unlimited if empty (ISO format YYYY-MM-DD)

#### startofweek

- **Type:** number
- **Default:** 1
- **Description:** Start of the week (0 = Sunday, 1 = Monday, ...)

#### locale

- **Type:** string
- **Default:** en-US
- **Description:** Locale to render the month/day names in. By default the component will use the users browser language.

#### dayperiod

- **Type:** long | short | narrow
- **Typescript Type:** 'long' | 'short' | 'narrow'
- **Default:** short
- **Description:** Format for displaying weekday names in the calendar header.

#### labels

- **Type:** IMcInputDateLabels
- **Typescript Type:** Partial<IMcInputDateLabels> | undefined
- **Description:** Custom labels for mc-input-date component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-input-date/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### showweeknumbers

- **Type:** string
- **Typescript Type:** boolean
- **Default:** false
- **Description:** When `true`, week numbers are displayed alongside the calendar dates.

#### showadjacentmonthdays

- **Type:** string
- **Typescript Type:** boolean
- **Default:** false
- **Description:** When `true`, days from the previous and next month are displayed in the calendar view.

#### customize

- **Type:** array
- **Typescript Type:** CellCustomizationPayload[] | undefined
- **Description:** A set of dates to customize. Use to display day indicators or disable selectable days within selectable date range if `min` and `max` are specified. Check the examples for more details.

#### customstyles

- **Type:** string
- **Typescript Type:** string | undefined
- **Description:** Applies custom styles to the calendar date cells.

#### yearcap

- **Type:** number
- **Default:** 10
- **Description:** How many years backwards and forwards from the current one to render in a month-year picker

#### trapfocus

- **Type:** boolean
- **Default:** false
- **Description:** Whether to trap focus within the calendar (for use in popovers/modals). When true, Tab/Shift+Tab will cycle through focusable elements within the calendar. When false (default), Tab/Shift+Tab can move focus outside the calendar.

#### calendarposition

- **Type:** top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | top-center | top-right | left-top | left-center | left-bottom | right-top | right-center | right-bottom
- **Typescript Type:** Position
- **Default:** bottom-left
- **Description:** Specifies the position of the calendar in regards to the target element

#### format

- **Type:** string
- **Default:** YYYY-MM-DD
- **Description:** Date format to be used to populate input field (default YYYY-MM-DD). Check The [day.js website](https://day.js.org/docs/en/display/format) for available formatting options

#### open

- **Type:** boolean
- **Typescript Type:** boolean | undefined
- **Default:** false
- **Description:** Whether to open the calendar on render.

#### usemask

- **Type:** boolean
- **Default:** false
- **Description:** Whether to use input mask on the input field. The mask will be based on the provided format YYYY-MM-DD by default.

#### label

- **Type:** string | slot
- **Default:** Arrival date
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-input-date. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### placeholder

- **Type:** string
- **Default:** YYYY-MM-DD
- **Description:** The `placeholder` attribute specifies a short hint that describes the expected value of a field (e.g. a sample value or a short description of the expected format)

#### autocomplete

- **Type:** off | on | name | given-name | family-name | ...
- **Default:** on
- **Description:** The HTML autocomplete attribute lets web developers specify what if any permission the user agent has to provide automated assistance in filling out form field values. The full list of possible values for this attribute are listed on MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete P.S. Check Examples -> Password autocompletion story to see a live demo on enabling password autocompletion behavior.

#### hint

- **Type:** string | slot
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-input-date><span slot="hint">hint text as HTML</span></mc-input-date>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

#### loading

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, it'll set the input state to loading and a loading spinner will be shown. The leading/trailing icon, suffix/prefix or clear button (if exists) will be replaced by the spinner.

#### autofocus

- **Type:** boolean
- **Default:** false
- **Description:** The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load, or when the <dialog> that it is part of is displayed.

#### variant

- **Type:** default | vanity
- **Default:** default
- **Description:** Controls the visual style of the component.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### labelposition

- **Type:** top | left
- **Default:** top
- **Description:** Position of the label. On small screens, label will always appear on top. See examples under input component on how to set label with and align text within the label. 

#### width

- **Type:** auto | number
- **Default:** auto
- **Description:** The width of the inner input container in percentage. If not provided the width will be `auto`.

#### icon

- **Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### id

- **Type:** string
- **Default:** field
- **Description:** Id passed to the field and used with label.

#### prefix

- **Type:** string
- **Description:** You can either render prefix or an icon on the same side of the input. Preferably, the prefix should not be longer than 5 characters.

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
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-input-date><span slot="errormessage">error message as HTML</span></mc-input-date>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

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

#### name

- **Type:** string
- **Default:** checkin-date
- **Description:** Name is required if the component is used inside a `form` element

#### rangeUnderflow

- **Type:** validation state
- **Default:** false
- **Description:** `True` if the date is below the minimum. Check via `document.querySelector('mc-input-date').validity.rangeUnderflow` or the `invalid` event's `event.target.validity.rangeUnderflow` Pratical example <a href="/?path=/story/components-input-date-examples--validation"">here</a>

#### rangeOverflow

- **Type:** validation state
- **Default:** false
- **Description:** `True` if the date is above the maximum. Check via `document.querySelector('mc-input-date').validity.rangeOverflow` or the `invalid` event's `event.target.validity.rangeOverflow` Pratical example <a href="/?path=/story/components-input-date-examples--validation">here</a>

### Events

#### input

- **Type:** InputEvent
- **Description:** Fired when the character is entered.

#### inputdateselected

- **Type:** CustomEvent<string>
- **Description:** Fired only when date is selected in the calendar.

#### focus

- **Type:** FocusEvent
- **Description:** Fired when mc-input-date is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when mc-input-date is going out of focus.

#### click

- **Type:** MouseEvent
- **Description:** Fired on mc-input-date click.

#### keydown

- **Type:** KeyboardEvent
- **Description:** Fired when a key on keydown is pressed.

#### clearbuttonclick

- **Type:** CustomEvent
- **Description:** Fires when the clear button is pressed.

#### trailingiconclick

- **Type:** CustomEvent
- **Description:** Fires when the trailing icon (calendar) is clicked.

### Types

- IMcInputDate: interface
- IMcInputDateDefaults: interface
- IMcInputDateLabels: type

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input-date>
  <span slot="label">
    Label as HTML
  </span>
</mc-input-date>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input-date>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-input-date>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input-date>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-input-date>
```

#### footer

- **Description:** Use the footer named slot, when you want to pass description with HTML text at the bottom of the calendar. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input-date>
  <span slot="footer">
    body text as HTML
  </span>
</mc-input-date>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input-date::part(label-container) {
  display: flex;
  justify-content: flex-end;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input-date::part(label) {
  color: #000000;
}
```

#### input

- **Description:** Using this CSS part you can change the look of the input field. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input-date::part(input) {
  color: #000000;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input-date::part(icon) {
  fill: #000000
}
```

## Related

- [Calendar](https://designsystem.maersk.com/components/calendar/)
- [Date Range](https://designsystem.maersk.com/components/date-range/)
- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input](https://designsystem.maersk.com/components/input/)
- [Input Time](https://designsystem.maersk.com/components/input-time/)
- [Labels](https://designsystem.maersk.com/content/labels/)

