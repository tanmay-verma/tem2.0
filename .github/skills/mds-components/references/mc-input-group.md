# mc-input-group

Combining components to support a well-defined user task.

**Url:** https://designsystem.maersk.com/components/input-group/
**Alternative names:** 
**Keywords:** component, form, field, combine, interdependent, phone, currency, select, button
**✅ When to use:** 
**❌ When not to use:** 

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Only combine inputs that are contextually related, and that support a well-defined task.
- Avoid combining too many inputs together - ideally between 2-3 inputs.
- Validate inputs independently unless they are interdependent.
- Ensure each input has a unique and descriptive label to communicate the purpose.
- Avoid relying on placeholder text only.

### Usage
- Use Input Groups when inputs are contextually related, and they support a well-defined user task, e.g. selecting a currency and entering an amount.
- Example: Use the Input Group to combine components to support a well-defined task.

#### Supported components
- The most common components to be used in the input group are Input, Select and Button, but the component suppport the following components:
- Button
- Input
- Input Date
- Input Time
- Link Button
- Multi Select
- Select
- Typeahead

#### Use cases
- The Input Group can be used to support many different use cases, the following are just a few examples.

##### Search
- Example: Combine input and button to create a search component.

##### Phone number
- Example: Combine select and input to create a phone component.

##### Route
- Example: Combine two typeaheads to create a route component.

### Placement
- The Input Group can contain different combinations of the supported components and can therefore be used in many different contexts, but they are often placed in:
- Forms and Data Entry
- Search and Filtering options
- Modals and Drawers
- Cards

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-input-group
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-input-group
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-input-group';
// minimal example usage
<mc-input-group legend="Legend"></mc-input-group>
// basic example usage
<mc-input-group fit="medium" hint="" legend="Legend"></mc-input-group>
```

### Advanced Examples

#### SearchWithButton

```html
<mc-input-group hiddenlegend>
  <mc-input placeholder="Search..." hiddenlabel></mc-input>
  <mc-button
    variant="filled"
    appearance="primary"
    label="search"
    hiddenlabel
    icon="magnifying-glass"
  ></mc-button>
</mc-input-group>
```

#### PriceWithCurrency

```html
<mc-input-group legend="Price">
  <mc-input hiddenlabel></mc-input>
  <mc-select value="1" hiddenlabel>
    <mc-option value="1">USD</mc-option>
    <mc-option value="2">EUR</mc-option>
    <mc-option value="3">GBP</mc-option>
    <mc-option value="4">JPY</mc-option>
    <mc-option value="5">CNY</mc-option>
  </mc-select>
</mc-input-group>
```

#### RouteSelector

```html
<div style="min-width: 300px;">
<mc-input-group hiddenlegend>
  <mc-typeahead label="From" value="Copenhagen" clearbutton>
    <mc-option value="1">Copenhagen</mc-option>
    <mc-option value="2">Amsterdam</mc-option>
    <mc-option value="3">Berlin</mc-option>
    <mc-option value="4">London</mc-option>
    <mc-option value="5">New York</mc-option>
  </mc-typeahead>
  <mc-button
    variant="outlined"
    appearance="neutral"
    hiddenlabel
    icon="arrows-left-right"
    onclick="swapInputs()"
  ></mc-button>
  <mc-typeahead label="To" value="Shanghai" clearbutton>
    <mc-option value="1">Shanghai</mc-option>
    <mc-option value="2">Toronto</mc-option>
    <mc-option value="3">Tokyo</mc-option>
    <mc-option value="4">Dubai</mc-option>
    <mc-option value="5">Singapore</mc-option>
  </mc-typeahead>
</mc-input-group>
</div>
```

#### ShipmentTrackerWithErrorMessage

```html
<div style="min-width: 300px;">
<mc-input-group legend="Destination" hint="Use B/L, container number or parcel">
  <mc-select value="1" label="Service">
    <mc-option value="1">Ocean cargo</mc-option>
    <mc-option value="2">Air freight</mc-option>
    <mc-option value="3">Road freight</mc-option>
    <mc-option value="4">Customs</mc-option>
    <mc-option value="5">Warehousing</mc-option>
    <mc-option value="6">Other logistics services</mc-option>
  </mc-select>
  <mc-input
    label="B/L, container number"
    invalid
    style="min-width: 190px;">
    <span slot="errormessage">
    <mc-icon icon="exclamation-triangle" color="#B80012"> </mc-icon>Port cannot be left blank</span>
    </mc-input>
  <mc-button appearance="neutral" variant="outlined" label="Track" trailingicon="arrow-right"></mc-button>
</mc-input-group>
</div>
```

## API

### Properties and attributes

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### hint

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-input-group><span slot="hint">hint text as HTML</span></mc-input-group>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

#### legend

- **Type:** string
- **Default:** Legend
- **Description:** The legend of the component. Can be passed as a simple string or as a slot for HTML content.

#### hiddenlegend

- **Type:** boolean
- **Default:** false
- **Description:** Determines whether the legend is visually hidden.

### Types

- Fit: re-export
- IMcInputGroup: interface

## Related

- [Button](https://designsystem.maersk.com/components/button/)
- [Input](https://designsystem.maersk.com/components/input/)
- [Input Date](https://designsystem.maersk.com/components/input-date/)
- [Input Time](https://designsystem.maersk.com/components/input-time/)
- [Link Button](https://designsystem.maersk.com/components/link-button/)
- [Multi Select](https://designsystem.maersk.com/components/multi-select/)
- [Select](https://designsystem.maersk.com/components/select/)
- [Typeahead](https://designsystem.maersk.com/components/typeahead/)

