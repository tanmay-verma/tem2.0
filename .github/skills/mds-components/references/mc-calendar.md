# mc-calendar

The calendar allows people to interact with and select a specific date, month, and year.

**Url:** https://designsystem.maersk.com/components/calendar/
**Alternative names:** Date Picker, Date Selector, Calendar Widget
**Keywords:** component, date, month, year, time, week, past, future, day, weekday, weekend, week number
**✅ When to use:** Date selection, Scheduling, Booking systems
**❌ When not to use:** Displaying static dates, Non-interactive date views

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use a calendar when people need to understand a date in relation to nearby days or weeks, instead of simply entering a known date.
- Keep the selectable date range practical for the context (e.g. 6–24 months for booking).
- Visually mark important days (e.g. public holidays, departure dates, or capacity limits) so users can recognise patterns at a glance instead of checking each date individually.
- Show week numbers only in regions, countries, and contexts where users expect them (e.g. European planning teams that refer to “week 14”).
- This component is used in Input date component. It can be used as the basis for custom date and time selection components and patterns.

### Usage
- Use the Calendar component to let users see a whole month at a time, compare days and weeks, and quickly understand which dates are available for their task at hand.
- It is suitable for different logistics use cases where people need to understand patterns over time, such as pickup availability, cutoff dates, vessel schedules or free‑storage periods.
- Example: Calendar component within page layout should have enough vertical space to accomodate for maximum of 6 visible weeks.
- When users navigate the calendar month to month, its height changes based on the number of weeks in each month. Make sure the UI has enough vertical space to prevent the interface from shifting during month changes.

### Selectable dates
- The calendar component allows restricting what dates users can select by setting a minimum and/or maximum selectable date. This is useful when the context requires limiting the date range to only available dates, therefore preventing impossible selection. Limiting the range reduces scrolling and speeds up decisions. For example, showing booking dates from today onward for the next 6 months.
- Example: A shipper booking pickup cannot choose a date in the past or more than 6 months ahead. Reduces error messages after submission.
- Setting a yearcap and min/max properties influence the available selectable dates and also what years are disabled in the year picker interface.
- Example: Year picker is aware of the date range and limits the user selection to only the available years.

### Customising day styles
- Individual days or ranges can use customised styles or be disabled to show availability, status, or special conditions. Use visual styling consistently and explain it in the calendar footer as a legend so the visual codes are self-explanatory and accessible to new users.
- This makes business rules visible up front, so users understand what is possible before they act, instead of discovering problems only after submitting a form.
- Example: Users can quickly scan the month and choose viable dates without trial‑and‑error clicking, which reduces frustration and speeds up booking.

#### Week numbers
- The calendar can optionally display week numbers in the leftmost column. Week numbers are mainly used in Europe and parts of Asia, following the ISO‑8601 standard.
They are not widely used in the U.S., Canada, Australia, or New Zealand.

##### Use when:
- The product serves regions where week‑based planning is standard.
- Users coordinate across multiple tools or documents that reference week numbers (spreadsheets, transport plans, contracts).

##### Avoid when:
- The audience is global and not familiar with them.
- Week numbers would compete visually with other visual signals.
- Example: Showing week numbers for the right audiences reduces translation work (“week 5” vs “the week that starts on 25 January”) and fits existing planning workflows.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-calendar
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-calendar
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-calendar';
// minimal example usage
<mc-calendar></mc-calendar>
// basic example usage
<mc-calendar activedate="" value="" min="" max="" startofweek="1" locale="en-US" dayperiod="short" noshadow customstyles="" yearcap="10"></mc-calendar>
```

### Advanced Examples

#### DisableDatesUsingMinMax

```html
<mc-calendar
  value="${currentYear}-${currentMonthFormat}-10"
  min="${currentYear}-${currentMonthFormat}-08"
  max="${currentYear}-${currentMonthFormat}-12"
></mc-calendar>
```

#### DisableDatesUsingCustomize

```html
<mc-calendar value="${currentYear}-${currentMonthFormat}-10"></mc-calendar>
```

#### DisableDatesUsingCallbackFunction

```html
<mc-calendar value="${currentYear}-${currentMonthFormat}-10"></mc-calendar>
```

#### StyleUsingCustomStyles

```html
<mc-calendar value="${currentYear}-${currentMonthFormat}-10"></mc-calendar>
```

#### CustomisedAppearance

```html
<mc-calendar customstyles="${customstyles}{color: green; font-weight: 700}"></mc-calendar>
```

#### FooterSlot

```html
<mc-calendar>
  <span class="mds-text--x-small-normal" slot="footer">Use arrow keys to navigate between days</span>
</mc-calendar>
```

#### DayIndicator

```html
<mc-calendar value="${currentYear}-${currentMonthFormat}-10"></mc-calendar>
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
- **Typescript Type:** Dayjs | string | null
- **Description:** Define minimal selectable date, unlimited if empty (ISO format YYYY-MM-DD)

#### max

- **Type:** string
- **Typescript Type:** Dayjs | string | null
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

- **Type:** IMcCalendarLabels
- **Typescript Type:** Partial<IMcCalendarLabels> | undefined
- **Description:** Custom labels for mc-calendar component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-calendar/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### noshadow

- **Type:** string
- **Typescript Type:** boolean
- **Default:** true
- **Description:** When `true`, the calendar is rendered without a shadow.

#### noborder

- **Type:** string
- **Typescript Type:** boolean
- **Default:** false
- **Description:** When `true`, the calendar is displayed without a border.

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

### Events

#### dateselected

- **Type:** CustomEvent<IMcCalendarDateSelectedDetail>
- **Description:** Fired when the date is selected.

### Types

- CalendarCell: interface
- DateCustomizations: interface
- IMcCalendar: interface
- IMcCalendarDateSelectedDetail: interface
- IMcCalendarLabels: type
- Week: interface
- Weekday: interface

### Slots

#### footer

- **Description:** Use the footer named slot, when you want to pass description with HTML text at the bottom of the calendar. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-calendar>
  <span slot="footer">
    body text as HTML
  </span>
</mc-calendar>
```

## CSS parts

#### calendar

- **Description:** Using this CSS part you can change the look of the the main container inside the mc-calendar component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-calendar::part(calendar) {
  padding: 0;
}
```

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the calendar component (used together with customstyles property). Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(button) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [Date Range](https://designsystem.maersk.com/components/date-range/)
- [Input Date](https://designsystem.maersk.com/components/input-date/)

