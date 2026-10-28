# mc-date-range

Lets users pick a range of dates.

**Url:** https://designsystem.maersk.com/components/date-range/
**Alternative names:** Date Range Picker, Date Range Selector, Date Range Input
**Keywords:** component, form, field, input, date, month, year, week, past, future, day, weekday, weekend, week number
**✅ When to use:** When you need to select a range of dates
**❌ When not to use:** When you only need to select a single date

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Make it clear what kind of date format you are asking for e.g. YYYY-MM-DD or DD-MM-YYYY
- Use min and max dates to help prevent user error. The selectable date should be realistic for the context and application capabilities
- Display only week numbers in the calendar popover when the context requires it and when users expect to see them by default.
- For labels use natural language and use the terms that the user would expect.
- The label should describe what to input and not how.
- Don’t use verbs like enter, add, input etc in the label.
- Don’t add a colon ( : ) at the end of the label.
- Use the hint text if additional context and explanation are needed.
- Error messages should be clear, concise and provide actionable remedies to resolve the errors.
- We recommend that you read our Form Guidelines. The Guidelines cover many basic recommendations to be taken into consideration when working with forms.

### Orientation
- By default, the component is responsive and adapts to the immediate container it is placed within, but it is also possible to force either horisontal or vertical orientation.
- Example: Date Range in horizontal orientation
- Example: Date Range in vertical orientation

### Date format & placeholder text
- The placeholder texts should communicate which date format the component accepts. Do not use placeholder texts to replace labels.
- The date format can be changed to meet local requirements and user expectations. As default, the component uses the ISO standard: YYYY-MM-DD (Year-Month-Day).
- Example: Date Range showing the default ISO standard: YYYY-MM-DD placeholder

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-date-range
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-date-range
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-date-range';
// minimal example usage
<mc-date-range value="{"from":null,"to":null}"></mc-date-range>
// basic example usage
<mc-date-range min="" max="" startofweek="1" locale="en-US" dayperiod="short" customstyles="" yearcap="10" calendarposition="bottom-left" format="YYYY-MM-DD" placeholder="YYYY-MM-DD" autocomplete="on" variant="default" fit="medium" labelposition="top" width="auto" icon="" prefix="" name="checkin-date" legend="" orientation="horizontal" value="{"from":null,"to":null}"></mc-date-range>
```

### Advanced Examples

#### CustomizingBothToAndFromInputDates

```html
<mc-date-range>
  <mc-input-date slot="from" label="Check-in date"></mc-input-date>
  <mc-input-date slot="to" label="Check-out date">
    <span slot="hint">Look at our <a target="_blank" href="https://designsystem.maersk.com">website</a> for available slots</span>
  </mc-input-date>
</mc-date-range>
```

#### CustomizingOnlyFromInputDate

```html
<mc-date-range>
  <mc-input-date slot="from" label="From">
    <span slot="hint">Vessel arrival time</span>
  </mc-input-date>
</mc-date-range>
```

#### LegendSlot

```html
<mc-date-range>
  <span slot="legend">Choose the schedule arrival time</span>
</mc-date-range>
```

#### LabelSlot

```html
<mc-date-range>
  <mc-input-date slot="to">
    <span slot="label">Check-out date <a target="_blank" href="https://designsystem.maersk.com">look here for more info</a></span>
  </mc-input-date>
</mc-date-range>
```

#### Invalid

```html
<mc-date-range>
  <mc-input-date slot="from" invalid label="Check-in date" errormessage="The checkin date is required!"></mc-input-date>
  <mc-input-date slot="to" invalid label="Check-out date" errormessage="The checkout date is required!"></mc-input-date>
</mc-date-range>
```

#### CustomLabels

```html
<mc-date-range id="withLang">
  <mc-input-date label="Check-in date"></mc-input-date>
  <mc-input-date label="Check-out date"></mc-input-date>
</mc-date-range>
```

## API

### Properties and attributes

#### min

- **Type:** string
- **Typescript Type:** Min | undefined
- **Description:** Define minimal selectable date, unlimited if empty (ISO format YYYY-MM-DD)

#### max

- **Type:** string
- **Typescript Type:** Max | undefined
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
- **Typescript Type:** "long" | "short" | "narrow"
- **Default:** short
- **Description:** Format for displaying weekday names in the calendar header.

#### labels

- **Type:** IMcDateRangeLabels
- **Typescript Type:** Partial<IMcDateRangeLabels> | undefined
- **Description:** Custom labels for mc-date-range component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-date-range/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> and the <a href="?path=/story/components-date-range-examples--custom-labels">Custom Labels story example</a> to see how to use custom labels property.

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
- **Default:** false
- **Description:** Whether to open the calendar on render.

#### usemask

- **Type:** boolean
- **Default:** false
- **Description:** Whether to use input mask on the input field. The mask will be based on the provided format YYYY-MM-DD by default.

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
- **Typescript Type:** string
- **Default:** on
- **Description:** The HTML autocomplete attribute lets web developers specify what if any permission the user agent has to provide automated assistance in filling out form field values. The full list of possible values for this attribute are listed on MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete P.S. Check Examples -> Password autocompletion story to see a live demo on enabling password autocompletion behavior.

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
- **Default:** auto
- **Description:** The width of the inner input container in percentage. If not provided the width will be `auto`.

#### icon

- **Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

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

#### hiddenlegend

- **Type:** boolean
- **Default:** false
- **Description:** Hides the group legend. The legend text will still be used as aria-label

#### legend

- **Type:** string | slot
- **Typescript Type:** string | null | undefined
- **Description:** Fieldset legend can be passed as a property or slot.

#### autolayoutdisabled

- **Type:** boolean
- **Default:** false
- **Description:** By default, on `small` screens (max-width: 640px), the component's `orientation` is switched to vertical, regardless of the set orientation. However, setting `disabledautolayout` to `true` prevents this and preserves the current `orientation` setting.

#### orientation

- **Type:** horizontal | vertical
- **Typescript Type:** Orientation
- **Default:** horizontal
- **Description:** Determines whether elements are arranged horizontally or vertically.

#### value

- **Type:** object
- **Typescript Type:** IDateRangeValue | null | undefined
- **Default:** [object Object]
- **Description:** The value object, where `to` and `from` stand in for the beginning and ending dates.

### Events

#### input

- **Type:** InputEvent
- **Description:** Fired when the character is entered.

#### inputdateselected

- **Type:** CustomEvent<string>
- **Description:** Fired only when date is selected in the calendar.

#### focus

- **Type:** FocusEvent
- **Description:** Fired when an input in mc-date-range is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when an input in mc-date-range is going out of focus.

#### click

- **Type:** MouseEvent
- **Description:** Fired on mc-date-range click.

#### keydown

- **Type:** KeyboardEvent
- **Description:** Fired when a key on keydown is pressed.

### Types

- IDateRangeValue: interface
- IMcDateRange: interface
- IMcDateRangeLabels: interface

### Slots

#### from

- **Description:** Use the from named slot, when you want to customize, or have control over the details in the "from" input. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-date-range>
  <mc-input-date slot="from">
        <span slot="label">
            Label as HTML
        </span>
        <span slot="hint">
            Hint as HTML
        </span>
        <span slot="errormessage">
            Error message as HTML
        </span>
    </mc-input-date>
</mc-date-range>
```

#### to

- **Description:** Use the to named slot, when you want to customize, or have control over the details in the "to" input. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-date-range>
  <mc-input-date slot="to">
        <span slot="label">
            Label as HTML
        </span>
        <span slot="hint">
            Hint as HTML
        </span>
        <span slot="errormessage">
            Error message as HTML
        </span>
    </mc-input-date>
</mc-date-range>
```

#### legend

- **Description:** Use the legend named slot, when you want to pass the legend as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-date-range>
  <span slot="legend">
    Legend as HTML
  </span>
</mc-date-range>
```

## Related

- [Calendar](https://designsystem.maersk.com/components/calendar/)
- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input Date](https://designsystem.maersk.com/components/input-date/)

