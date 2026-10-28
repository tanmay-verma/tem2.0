# mc-typeahead

Helps the user to quickly find and select a value from a long list of options.

**Url:** https://designsystem.maersk.com/components/typeahead/
**Alternative names:** Autocomplete, Search Suggestions, Predictive Search, Smart Search, Dropdown Search, Filtered Select
**Keywords:** component, form, field, input, choice, option, autocomplete, autosuggest, suggestions, combobox, combo box, select, search, filter
**✅ When to use:** When you need to provide users with suggestions based on their input.
**❌ When not to use:** When you have a fixed set of options that do not change based on user input.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Follow the best practice from the Input component.
- Use the label and help text to guide people on how to find the relevant results.
- Use typeahead when you have a long list of selectable values. (e.g. finding a location) For short and simpler lists consider using Select and Multi Select components.
- Present recent search queries in zero states before the user has started typing in the query.
- Always provide a way for users to clear the selected option(s).
- Whenever possible account for common misspellings and typos to assist further the users with finding the relevant results.
- Whenever possible use usage data to help rank relevant results for the user in the future.
- We recommend reading the Forms and Label Guidelines.
- Both components allow users to search and select an option from a list, but they serve different use cases and user behaviour. Read about the difference in the Selection Components Guidelines.

### Usage
- Typeahead is best used when input accuracy and standardisation are important, and you want to assist people in finding specific information from a large set of data. The autosuggestions assist the input process and help people narrow down the available information until a final selection can be made.

#### Supplementary information and grouping
- Use secondary text under the main value in the options list to provide further context for people. It is helpful when the main displayed values might be called the same and you want to avoid having very long descriptions for each value.
- Example: Typeahead showing secondary text.
- Grouping the available options in a logical way can provide additional context when users are browsing the dropdown list if only a partial query is entered.
- Example: Typeahead grouped options.

### Label
- By default, the component has a top-positioned label. It is possible to change the position of the label to be left-positioned. We recommend that you use the top-positioned labels wherever possible, especially in forms. You can read more about why we recommend top-positioned labels in our form guidelines.
- For information on how to write good and consistent labels - see our Label Guidelines.

### Hint text & error state
- Please see the Input component for details on hint text and error state.

### Vanity variant
- The component supports the “vanity” style variant.
- Please read more about this variant on our form guidelines page.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-typeahead
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-typeahead
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-typeahead';
// minimal example usage
<mc-typeahead label="Fruit"></mc-typeahead>
// basic example usage
<mc-typeahead data="[{"label":"apple","value":"apple"},{"label":"apricot","value":"apricot"}]" maxoptions="10" minchars="1" debounce="500" listlabel="" optionswidth="trigger" optionsheight="" optionsposition="bottom-left" label="Fruit" placeholder="Type a fruit name" hint="" variant="default" fit="medium" labelposition="top" width="auto" icon="" trailingicon="" id="field" prefix="" suffix="" errormessage="" name="username" value="" autocomplete="off" clearbutton></mc-typeahead>
```

### Advanced Examples

#### StaticDataAsProp

```html
<mc-typeahead 
  name="typeahead"
  label="Icon (single selection)"
  clearbutton
  placeholder="Start typing icon name or category"
></mc-typeahead>
<p id="selectedOption"></p>
```

#### StaticDataAsSlot

```html
<mc-typeahead 
  name="typeahead"
  label="Icon (single selection)"
  clearbutton
  placeholder="Start typing icon name or category"
></mc-typeahead>
```

#### DynamicDataAsProp

```html
<mc-typeahead 
  name="typeahead"
  label="City (single selection)"
  clearbutton
  placeholder="Type min 3 characters"
  minchars="3"
  disablefilter
></mc-typeahead>
<p id="selectedOption"></p>
```

#### DynamicDataAsSlot

```html
<mc-typeahead 
  name="typeahead"
  label="City (single selection)"
  placeholder="Type min 3 characters"
  minchars="3"
  disablefilter
  clearbutton
></mc-typeahead>
```

#### SelectedData

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-typeahead
    name="typeahead"
    label="Icon (single selection)"
    clearbutton
    placeholder="Start typing icon name or category"
  ></mc-typeahead>
  <mc-button id="submit">Submit</mc-button>
  <p id="selecteddata"></p>
</div>
```

#### LabelWithTooltip

```html
<mc-typeahead>
  <span slot="label">
    Label as HTML, i.e. 
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </span>
</mc-typeahead>
<mc-typeahead disabled>
  <span slot="label">
    Label as HTML, i.e. 
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </span>
</mc-typeahead>
```

#### DisabledItem

```html
<mc-typeahead label="Name" clearbutton hint="Type 't'">
  <mc-option value="One">One</mc-option>
  <mc-option value="Two">Two</mc-option>
  <mc-option value="Three" disabled>Three</mc-option>
  <mc-option value="Four">Four</mc-option>
  <mc-option value="Five">Five</mc-option>
</mc-typeahead>
```

#### WithCustomIcons

```html
<mc-typeahead 
  name="typeahead"
  label="Fruits"
  clearbutton
  placeholder="Start typing fruit name"
></mc-typeahead>
```

#### WithGroupsAsDataProp

```html
<mc-typeahead 
  name="typeahead"
  id="data-as-prop"
  hint="Data passed via. data prop"
  label="Fruits or vegetables"
  clearbutton
  placeholder="Start typing fruit or vegetable name"
></mc-typeahead>
```

#### WithGroupsAsSlot

```html
<mc-typeahead 
  name="typeahead"
  id="data-as-slot"
  hint="Data passed via. slot"
  label="Fruits or vegetables"
  clearbutton
  disablefilter
  placeholder="Start typing fruit or vegetable name"
></mc-typeahead>
```

#### InfiniteScrollAndDynamicDataAsProp

```html
<mc-typeahead 
  name="typeahead"
  label="City"
  placeholder="Type min 2 characters"
  clearbutton
  disablefilter
  minchars="2"
  infinitescroll
  optionsheight="300px"
></mc-typeahead>
```

#### InfiniteScrollAndDynamicDataAsSlot

```html
<mc-typeahead 
  name="typeahead"
  label="City"
  placeholder="Type min 2 characters"
  clearbutton
  disablefilter
  minchars="2"
  infinitescroll
  optionsheight="300px"
></mc-typeahead>
```

#### CustomisedAppearance

```html
<div class="input-container">
  <mc-typeahead label="Name" clearbutton>
    <mc-option value="One">One</mc-option>
    <mc-option value="Two">Two</mc-option>
    <mc-option value="Three">Three</mc-option>
    <mc-option value="Four">Four</mc-option>
    <mc-option value="Five">Five</mc-option>
  </mc-typeahead>
</div>
```

#### CustomFilterFunction

```html
<mc-typeahead
  label="Icon"
  clearbutton
  matchlabelonly
>
</mc-typeahead>
```

#### ShowListOnFocusAndDynamicData

```html
<mc-typeahead 
  name="typeahead"
  label="City (single selection)"
  clearbutton
  placeholder="Type min 3 characters"
  disablefilter
  showlistonfocus
></mc-typeahead>
<p id="selectedOption"></p>
```

#### ShowListOnFocusAndStaticData

```html
<mc-typeahead 
  name="typeahead"
  label="Fruits"
  showlistonfocus
  placeholder="Click on the input to see the list"
></mc-typeahead>
```

#### ValueAsSelectedItem

```html
<mc-typeahead
  name="typeahead"
  label="Country code"
  showlistonfocus
></mc-typeahead>
```

#### Form

```html
<form id="form" class="mds-flex mds-flex-column mds-gap-800">
  <mc-typeahead
    name="fruit"
    label="Fruit"
    placeholder="Type a fruit name"
  ></mc-typeahead>
  <mc-button type="submit" label="Submit"></mc-button>
  <p id="formOutput"></p>
</form>
```

#### BigStaticData

```html
<mc-typeahead 
  name="typeahead"
  label="Cities in Romania"
  showlistonfocus
  maxoptions="3000"
  clearbutton
></mc-typeahead>
```

#### InDialog

```html
<mc-button>Pick an icon</mc-button>
<mc-dialog height="300px" width="50%" heading="Pick an icon">
  <p>Please select the icon you want to use</p>
  <mc-typeahead name="typeahead" label="Icon" clearbutton placeholder="Start typing icon name or category"></mc-typeahead>
  <mc-button slot="secondaryAction" appearance="neutral" variant="outlined" dialogaction="cancel">Cancel</mc-button>
  <mc-button slot="primaryAction" appearance="primary" dialogaction="ok">Save</mc-button>
</mc-dialog>
```

#### CustomLabels

```html
<mc-typeahead
  id="withLang"
  name="typeahead"
  label="Try typing @ in the input cos there is no such icon"
  clearbutton
  placeholder="Start typing icon name or category"
></mc-typeahead>

<p id="selectedOption"></p>
```

#### NoSuggestionsSlot

```html
<style>
  .no-suggestions-panel {
    padding: 4px;
  }

  .no-suggestions-panel p {
    margin: 0;
  }

  .no-suggestions-panel p + p {
    margin-top: 4px;
  }

  .no-suggestions-panel ul {
    margin: 16px 0 0;
  }

  .no-suggestions-suggestion {
    color: var(--mds_foundations_link_default_text-color);
    cursor: pointer;
    text-decoration: underline;
  }
</style>

<mc-typeahead
  id="no-suggestions-slot-demo"
  name="facility"
  label="Find an APM Terminals facility"
  placeholder="Search facility or location code"
  icon="crane"
  clearbutton
  showlistonfocus
>
  <div slot="nosuggestions" class="no-suggestions-panel">
    <p>We found no results for "%%SEARCH_TEXT%%"</p>
    <p>Did you mean <span class="no-suggestions-suggestion" onclick="selectSuggestion('Kalundborg')">Kalundborg</span>?</p>
    <ul>
      <li>Check your spelling</li>
      <li>Try using location code instead</li>
      <li>Need more help? <a href="#">Contact page</a></li>
    </ul>
  </div>
</mc-typeahead>
```

#### RightPopoverAlignment

```html
<style>
  .location-details-example__fields {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
</style>

<div class="location-details-example__fields">
  <mc-typeahead
    clearbutton
    icon="pin"
    label="From (City, Country/Region)"
    name="from"
    placeholder="Enter city or port"
    optionswidth="100%"
  ></mc-typeahead>
  <mc-typeahead
    clearbutton
    icon="pin"
    label="To (City, Country/Region)"
    name="to"
    placeholder="Enter city or port"
    optionsposition="bottom-right"
    optionswidth="100%"
    showlistonfocus
  ></mc-typeahead>
</div>
```

#### ScrollRepo

```html
<style>
  .scroll-repo {
    background: #f2f2f2;
    border: 1px solid #d6d6d6;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0 auto;
    max-height: 700px;
    max-width: 460px;
    overflow-y: auto;
    padding: 20px;
  }

  .scroll-repo h3 {
    font-size: 32px;
    margin: 0 0 16px;
  }

  .scroll-repo__form {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .scroll-repo__full {
    grid-column: 1 / -1;
  }
</style>

<section class="scroll-repo">
  <h3>Create your account</h3>
  <form class="scroll-repo__form">
    <mc-input label="First name" placeholder="Jane"></mc-input>
    <mc-input label="Last name" placeholder="Doe"></mc-input>
    <mc-input class="scroll-repo__full" label="Work email" placeholder="name@company.com"></mc-input>
    <mc-input class="scroll-repo__full" label="Phone number" placeholder="+45 12 34 56 78"></mc-input>
    <mc-input label="Company name" placeholder="Acme Inc."></mc-input>
    <mc-input label="Job title" placeholder="Logistics Manager"></mc-input>
    <mc-input class="scroll-repo__full" label="Department" placeholder="Supply Chain"></mc-input>
    <mc-typeahead
      class="scroll-repo__full"
      clearbutton
      label="Country"
      placeholder="Start typing a country"
      optionswidth="100%"
      showlistonfocus
    ></mc-typeahead>
    <mc-input label="City" placeholder="Copenhagen"></mc-input>
    <mc-input label="Postal code" placeholder="2100"></mc-input>
    <mc-input class="scroll-repo__full" label="Address" placeholder="Esplanaden 50"></mc-input>
    <mc-input class="scroll-repo__full" label="Website" placeholder="https://example.com"></mc-input>
    <mc-input-date label="Date of birth" placeholder="dd/mm/yyyy"></mc-input-date>
    <mc-input-time label="Preferred contact time" placeholder="Select a time"></mc-input-time>
  </form>
</section>
```

## API

### Properties and attributes

#### data

- **Type:** array | slot
- **Typescript Type:** IMcTypeaheadData[] | null
- **Default:** [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
- **Description:** The data to be displayed as typeahead results. It can be an array of objects`<IMcTypeaheadData>` or as a slot of `<mc-select>` options. You pass pass static data or you can listen to a `search` event to get data from Rest API. If not provided, the typeahead will not display any results.

#### selecteddata

- **Type:** IMcTypeaheadData
- **Typescript Type:** any | null
- **Description:** Read-only. Holds the last valid option selected by the user from the dropdown. Returns `null` if no option has been selected yet, or after the user clears or modifies the input. Use this to distinguish between a user typing free text and an actual valid selection.

#### maxoptions

- **Type:** number
- **Default:** 10
- **Description:** The maximum number of options to be displayed in the popover. If not provided, max. 10 options will be displayed. It is recommended not to show more than 10-15 options at a time.

#### minchars

- **Type:** number
- **Default:** 1
- **Description:** The minimum number of characters to be typed before the popover is displayed. If not provided, the popover will be displayed after typing 1 character.

#### debounce

- **Type:** number
- **Default:** 500
- **Description:** The debounce time in milliseconds after which the `search` event is dispatched. If not provided, the default value of 500 milliseconds will be used.

#### highlight

- **Type:** boolean
- **Default:** false
- **Description:** Specifies whether the matching text should be highlighted in the matched options.

#### matchlabelonly

- **Type:** boolean
- **Default:** false
- **Description:** Specifies if internal or custom filter function should match and filter the results in the label text only based on the typed text. Match will not apply to sublabel or value of the data item

#### disablefilter

- **Type:** boolean
- **Default:** false
- **Description:** Specifies whether the typeahead should use internal match function to filter the results based on the typed text.

#### customfilter

- **Type:** function
- **Typescript Type:** ((text: string, value: string) => string[]) | undefined
- **Description:** Specifies custom match function that should filter the results in the typeahead based on the typed text.

#### listlabel

- **Type:** string
- **Description:** The label text to be displayed above matching options. If not provided, the label will not be shown.

#### showlistonfocus

- **Type:** boolean
- **Default:** false
- **Description:** Specifies whether the typeahead should display the list of options when the component is initialized and input is focused. If not provided, the default value of false will be used.

#### optionswidth

- **Type:** trigger | auto
- **Typescript Type:** string
- **Default:** trigger
- **Description:** Specifies the width of the popover. If set to trigger, the width will be set to the width of the select. If set to auto, the popover width will depend on the width of the items inside select. It can be also passed as specific value in CSS units i.e. 200px.

#### optionsheight

- **Type:** string
- **Description:** Specifies the maximum height of the popover in CSS units i.e. 200px. If not provided, the height will be automatically calculated based on the space available.

#### optionsposition

- **Type:** bottom-left | bottom-right
- **Typescript Type:** 'bottom-left' | 'bottom-right'
- **Default:** bottom-left
- **Description:** Sets which edge of the popover aligns with the input. Use 'bottom-right' with a wide optionswidth to anchor the popover's right edge to the trigger, making it span leftward.

#### label

- **Type:** string | slot
- **Default:** Fruit
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-typeahead. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### placeholder

- **Type:** string
- **Default:** Type a fruit name
- **Description:** The `placeholder` attribute specifies a short hint that describes the expected value of a field (e.g. a sample value or a short description of the expected format)

#### hint

- **Type:** string | slot
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-typeahead><span slot="hint">hint text as HTML</span></mc-typeahead>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

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

#### trailingicon

- **Type:** string
- **Description:** Icon displayed at the end (trailing) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingiconlabel

- **Type:** boolean
- **Typescript Type:** string
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
- **Description:** You can either render prefix or an icon on the same side of the input. Preferably, the prefix should not be longer than 5 characters.

#### suffix

- **Type:** string
- **Description:** You can either render suffix or an icon on the same side of the input. Preferably, the suffix should not be longer than 5 characters. 

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
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-typeahead><span slot="errormessage">error message as HTML</span></mc-typeahead>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

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
- **Default:** username
- **Description:** Name is required if the component is used inside a `form` element

#### value

- **Type:** string
- **Description:** The initial value of the input

#### autocomplete

- **Type:** off | on | name | given-name | family-name | ...
- **Typescript Type:** string
- **Default:** off
- **Description:** The HTML autocomplete attribute lets web developers specify what if any permission the user agent has to provide automated assistance in filling out form field values. The full list of possible values for this attribute are listed on MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete 

#### labels

- **Type:** IMcTypeaheadLabels
- **Typescript Type:** Partial<IMcTypeaheadLabels> | undefined
- **Description:** Custom labels for mc-typeahead component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-typeahead/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> and the <a href="?path=/story/components-typeahead-examples--custom-labels">Custom Labels story example</a> to see how to use custom labels property.

#### clearbutton

- **Type:** boolean
- **Default:** true
- **Description:** Description missing

### Events

#### listscroll

- **Type:** CustomEvent
- **Description:** Fires when user scrolls to the bottom of the list.

#### input

- **Type:** InputEvent
- **Description:** Fired when the character is entered.

#### optionselected

- **Type:** CustomEvent<IMcTypeaheadOptionSelectedDetail>
- **Description:** Fires when an option is selected.

#### search

- **Type:** CustomEvent<string>
- **Description:** Fires when user starts typing (after specified number of minchar and debounce).

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

#### clearbuttonclick

- **Type:** CustomEvent
- **Description:** Fires when the clear button is pressed.

### Types

- IMcInput: re-export
- IMcSelectOption: re-export
- IMcTypeahead: interface
- IMcTypeaheadData: interface
- IMcTypeaheadLabels: interface
- IMcTypeaheadOptionSelectedDetail: type

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-typeahead>
  <span slot="label">
    Label as HTML
  </span>
</mc-typeahead>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-typeahead>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-typeahead>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-typeahead>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-typeahead>
```

#### nosuggestions

- **Description:** Use the nosuggestions named slot, when you want to provide a custom message when no options match the search. Use <code>%%SEARCH_TEXT%%</code> as a placeholder to embed the current search value in the message. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-typeahead>
  <span slot="nosuggestions">
    <p>No results for <strong>%%SEARCH_TEXT%%</strong>. Check your spelling and try again.</p>
  </span>
</mc-typeahead>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-typeahead::part(label-container) {
  display: flex;
  justify-content: flex-end;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-typeahead::part(label) {
  color: #000000;
}
```

#### input

- **Description:** Using this CSS part you can change the look of the input field. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-typeahead::part(input) {
  color: #000000;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-typeahead::part(icon) {
  fill: #000000
}
```

## Related

- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input](https://designsystem.maersk.com/components/input/)
- [Labels](https://designsystem.maersk.com/content/labels/)
- [Multi Select](https://designsystem.maersk.com/components/multi-select/)
- [Select](https://designsystem.maersk.com/components/select/)
- [Selection components](https://designsystem.maersk.com/guidelines/selection-components/)

