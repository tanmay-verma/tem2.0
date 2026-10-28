# mc-multi-choice-fieldset

mc-multi-choice-fieldset component

**Url:** https://designsystem.maersk.com/
**Alternative names:** 
**Keywords:** 
**✅ When to use:** 
**❌ When not to use:** 

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

No specific best practices documented.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-multi-choice-fieldset
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-multi-choice-fieldset
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-multi-choice-fieldset';
// minimal example usage
<mc-multi-choice-fieldset legend="Please select" name="containers"></mc-multi-choice-fieldset>
// basic example usage
<mc-multi-choice-fieldset legend="Please select" orientation="vertical" fit="medium" name="containers" value=""></mc-multi-choice-fieldset>
```

## API

### Properties and attributes

#### legend

- **Type:** string
- **Default:** Please select
- **Description:** Fieldset legend has to be passed as a property. Legend is required

#### hiddenlegend

- **Type:** boolean
- **Default:** false
- **Description:** Hides the group legend. The legend text will still be used as aria-label

#### orientation

- **Type:** horizontal | vertical
- **Typescript Type:** Orientation
- **Default:** vertical
- **Description:** Determines whether elements are arranged horizontally or vertically.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### autolayoutdisabled

- **Type:** boolean
- **Default:** false
- **Description:** By default, on `small` screens (max-width: 640px), the component's `orientation` is switched to vertical, regardless of the set orientation. However, setting `disabledautolayout` to `true` prevents this and preserves the current `orientation` setting.

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### name

- **Type:** string
- **Default:** containers
- **Description:** Name is required for the group component

#### value

- **Type:** string | number | boolean | Array<string | unknown>
- **Typescript Type:** Value | undefined | undefined
- **Description:** The initial value of the component. It can be passed as a string (i.e. "2"), comma-separated string (i.e. "1,2") or as an array (i.e. ["1", "2"])

### Events

#### change

- **Type:** CustomEvent<McMultiChoiceFieldsetChangeDetail>
- **Description:** Fired when any item in the group is checked/unckecked.

### Types

- Fit: re-export
- IMCMultiChoiceFieldset: interface
- McMultiChoiceFieldsetChangeDetail: type
- Orientation: re-export
- Value: type

### Slots

#### Default slot

- **Description:** One or more HTMLelements to display in the group.

```html
<mc-component>Label</mc-component>
```

#### legend

- **Description:** The legend HTML to use for the fieldset.

```html

```

#### hint

- **Description:** The hint HTML to use for the fieldset.

```html

```

#### errormessage

- **Description:** The errormessage HTML to use for the fieldset.

```html

```

## CSS parts

#### fieldset-container

- **Description:** The container of the fieldset.

```css

```

## Related


