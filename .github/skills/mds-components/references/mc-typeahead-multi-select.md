# mc-typeahead-multi-select

Helps users quickly find and select the right values from a large set of options.

**Url:** https://designsystem.maersk.com/components/typeahead-multi-select/
**Alternative names:** Autocomplete, Search Suggestions, Predictive Search, Smart Search, Dropdown Search, Filtered Select
**Keywords:** component, form, field, input, choice, option, autocomplete, autosuggest, suggestions, combobox, combo box, select, search, filter, tag
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
- Use Typeahead Multi Select in cases where the user can select multiple options from a large data set.
- For shorter and simpler lists, consider using the Multi Select component.
- Account for common misspellings and typos to assist users with finding the relevant results.
- Use usage data to help rank relevant results for the user in the future.
- If data shows that the users repeatedly use the same search queries, then expose the recent searches.
- For info on label, placeholder, help and error text - see the Input Component best practice.
- Both components allow users to search and select multiple options from a list, but they serve different use cases and user behaviours. Read about the differences in the Selection Components Guidelines.

### Usage
- Typeahead Multi Select is best used when you want to assist people in finding specific information from a large set of data. The autosuggestions assist the typing process and help people narrow down the available options.
- Example: When the user starts typing the options that matches what is entered is displayed below in a dropdown list.

#### Recent searches
- It is possible to display a list of recent search queries when the user clicks into the input, before the user starts typing. This is valuable in cases where you know, based on usage data, that the users repeatedly use the same search queries.
- Example: Recent searches are be display when the user click into the input.

#### No suggestions found
- In cases where there is no matching value in the data set to the typed search query, the typeahead returns “No suggestions found”. The user can, of course, quickly modify the query and get another result.
- Example: No suggestions found is return when there is no match between what is typed and the list of options.

### Tags
- The selected options are displayed as tags below the input. This way the user can easily see which options that has already been selected. When the user has selected more than 2 options, then a “Clear all” button is shown after the tags. This makes it easy for the user to remove the selected options e.g. in a filtering scenario where you quickly want to reset the filters.
- Example: Selected options are added as tags below the input.

#### Free text tagging
- In code you can also enable free text tagging, which makes it possible for the user to create their own tags not just selecting from existing options. This can be used in cases where user-generated metadata is needed e.g. custom labels, tags for articles or blog posts.
- Example: Enabling the freetexttagging property allows users to add their own tags, as well as choose from the list of options.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-typeahead-multi-select
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-typeahead-multi-select
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-typeahead-multi-select';
// minimal example usage
<mc-typeahead-multi-select label="Fruit"></mc-typeahead-multi-select>
// basic example usage
<mc-typeahead-multi-select clearalllabel="Clear all" selecteddata="[]" data="[{"label":"apple","value":"apple"},{"label":"apricot","value":"apricot"}]" maxoptions="10" minchars="1" debounce="500" nosuggestions="No suggestions found" listlabel="" optionswidth="trigger" optionsheight="" label="Fruit" placeholder="Type a fruit name" hint="" variant="default" fit="medium" labelposition="top" width="auto" icon="" trailingicon="" id="field" prefix="" suffix="" errormessage="" name="username" value="" autocomplete="off" clearbutton></mc-typeahead-multi-select>
```

### Advanced Examples

#### StaticDataAsProp

```html
<mc-typeahead-multi-select 
  name="typeahead"
  label="Icon (multi selection)"
  clearbutton
  placeholder="Start typing icon name or category"
></mc-typeahead-multi-select>
<p id="selectedOption"></p>
```

#### StaticDataAsSlot

```html
<mc-typeahead-multi-select 
  name="typeahead"
  label="Icon (multi selection)"
  clearbutton
  placeholder="Start typing icon name or category"
></mc-typeahead-multi-select>
```

#### DynamicDataAsProp

```html
<mc-typeahead-multi-select 
  name="typeahead"
  label="City (multi selection)"
  clearbutton
  placeholder="Type min 3 characters to select multiple cities"
  minchars="3"
  disablefilter
></mc-typeahead-multi-select>
<p id="selectedOption"></p>
```

#### DynamicDataAsSlot

```html
<mc-typeahead-multi-select 
  name="typeahead"
  label="City (multi selection)"
  placeholder="Type min 3 characters to select multiple cities"
  minchars="3"
  disablefilter
  clearbutton
></mc-typeahead-multi-select>
<p id="selectedOption"></p>
```

#### TagsPlacement

```html
<div class="wrapper">
  <mc-input-date label="From"></mc-input-date>
  <mc-input-date label="To"></mc-input-date>
  <mc-typeahead-multi-select
    name="typeahead"
    label="Ports"
    hiddentags
    clearbutton
    placeholder="Start typing port name"
  ></mc-typeahead-multi-select>
</div>
<div id="selection" class="tag-wrapper"><span>No selections made</span></div>
```

#### InDrawer

```html
<mc-drawer>
  <mc-typeahead-multi-select
    name="typeahead"
    label="Ports"
    clearbutton
    placeholder="Start typing port name"
  ></mc-typeahead-multi-select>
</mc-drawer>
<div class="wrapper">
  <mc-button
    trailingicon="mouse"
    variant="outlined"
    appearance="neutral"
    >Open drawer</mc-button
  >
  <div id="selection" class="tag-wrapper"><span>No selections made</span></div>
</div>
```

#### SelectedData

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-typeahead-multi-select
    name="typeahead"
    clearbutton
    label="Ports"
    placeholder="Start typing port name"
  ></mc-typeahead-multi-select>
  <mc-button id="submit">Submit</mc-button>
  <p id="selecteddata"></p>
</div> 
```

#### ShowListOnFocus

```html
<mc-typeahead-multi-select 
  name="typeahead"
  label="City (multi selection)"
  clearbutton
  placeholder="Select multiple cities"
  minchars="0"
  showlistonfocus
  disablefilter
></mc-typeahead-multi-select>
<p id="selectedOption"></p>
```

#### CustomisedAppearance

```html
<mc-typeahead-multi-select 
  name="typeahead"
  label="Icon (multi selection)"
  clearbutton
  placeholder="Start typing icon name or category"
></mc-typeahead-multi-select>
```

#### Form

```html
<form id="form" class="mds-flex mds-flex-column mds-gap-800">
  <mc-typeahead-multi-select
    name="fruit"
    label="Fruit"
    placeholder="Type a fruit name"
  ></mc-typeahead-multi-select>
  <mc-button type="submit" label="Submit"></mc-button>
  <p id="formOutput"></p>
</form>
```

## API

### Properties and attributes

#### clearalllabel

- **Type:** string
- **Default:** Clear all
- **Description:** Label for the clear all filters button that appears when there are more than 2 selected options.

#### selecteddata

- **Type:** IMcTypeaheadData[]
- **Typescript Type:** IMcTypeaheadMultiSelectData[]
- **Default:** 
- **Description:** Array of selected data that will be rendered as tags. Can be set initially to pre-populate the component with selected options. Each item should match the structure of data items (IMcTypeaheadData).

#### freetexttagging

- **Type:** boolean
- **Default:** false
- **Description:** Allows users to create custom tags by pressing Enter when the input doesn't match any dropdown option. Custom tags can be dismissed without affecting the dropdown suggestion list.

#### hiddentags

- **Type:** boolean
- **Default:** false
- **Description:** Hides the tags of selected options. You can then use callback function `optionselected` which will give a list of all selected options, and render tags somewhere else on the page. Please check out `Examples` folder to see how this can be implemented.

#### data

- **Type:** array | slot
- **Default:** [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
- **Description:** The data to be displayed as typeahead results. It can be an array of objects`<IMcTypeaheadData>` or as a slot of `<mc-select>` options. You pass pass static data or you can listen to a `search` event to get data from Rest API. If not provided, the typeahead will not display any results.

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

#### nosuggestions

- **Type:** string
- **Default:** No suggestions found
- **Description:** The text to be displayed when no results are found. If not provided, the default text "No suggestions found" will be displayed.

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
- **Typescript Type:** trigger | auto | string
- **Default:** trigger
- **Description:** Specifies the width of the popover. If set to trigger, the width will be set to the width of the select. If set to auto, the popover width will depend on the width of the items inside select. It can be also passed as specific value in CSS units i.e. 200px.

#### optionsheight

- **Type:** string
- **Description:** Specifies the maximum height of the popover in CSS units i.e. 200px. If not provided, the height will be automatically calculated based on the space available.

#### label

- **Type:** string | slot
- **Default:** Fruit
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-typeahead-multi-select. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

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
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-typeahead-multi-select><span slot="hint">hint text as HTML</span></mc-typeahead-multi-select>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

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
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-typeahead-multi-select><span slot="errormessage">error message as HTML</span></mc-typeahead-multi-select>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

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
- **Default:** off
- **Description:** The HTML autocomplete attribute lets web developers specify what if any permission the user agent has to provide automated assistance in filling out form field values. The full list of possible values for this attribute are listed on MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete 

#### clearbutton

- **Type:** boolean
- **Default:** true
- **Description:** Description missing

### Events

#### optionselected

- **Type:** CustomEvent<IMcTypeaheadOptionSelectedDetail>
- **Description:** Fires when an option is selected.

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
- **Description:** Fired on mc-input click.

#### keydown

- **Type:** KeyboardEvent
- **Description:** Fired when a key on keydown is pressed.

#### clearbuttonclick

- **Type:** CustomEvent
- **Description:** Fires when the clear button is pressed.

#### search

- **Type:** CustomEvent<string>
- **Description:** Fires when user starts typing (after specified number of minchar and debounce).

#### listscroll

- **Type:** CustomEvent
- **Description:** Fires when user scrolls to the bottom of the list.

### Types

- IMcTypeaheadMultiSelect: interface
- IMcTypeaheadMultiSelectData: type

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-typeahead-multi-select>
  <span slot="label">
    Label as HTML
  </span>
</mc-typeahead-multi-select>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-typeahead-multi-select>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-typeahead-multi-select>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-typeahead-multi-select>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-typeahead-multi-select>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-typeahead-multi-select::part(label-container) {
  display: flex;
  justify-content: flex-end;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-typeahead-multi-select::part(label) {
  color: #000000;
}
```

#### input

- **Description:** Using this CSS part you can change the look of the input field. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-typeahead-multi-select::part(input) {
  color: #000000;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-typeahead-multi-select::part(icon) {
  fill: #000000
}
```

## Related

- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input](https://designsystem.maersk.com/components/input/)
- [Multi Select](https://designsystem.maersk.com/components/multi-select/)
- [Select](https://designsystem.maersk.com/components/select/)
- [Selection components](https://designsystem.maersk.com/guidelines/selection-components/)

