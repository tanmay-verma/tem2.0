# mc-checkbox-group

Display checkbox groups with optional legends, hints, and error messages

**Url:** https://designsystem.maersk.com/
**Alternative names:** User Checkbox Group, Checkbox List, Selection Box Group
**Keywords:** 
**✅ When to use:** Forms, Surveys, User preferences
**❌ When not to use:** Decorative purposes, Non-interactive elements

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
npm install @maersk-global/mds-components-core-checkbox-group
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-checkbox-group
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-checkbox-group';
// minimal example usage
<mc-checkbox-group legend="Please select" name="containers"></mc-checkbox-group>
// basic example usage
<mc-checkbox-group legend="Please select" orientation="vertical" fit="medium" name="containers" value="" errormessage="" hint=""></mc-checkbox-group>
```

### Advanced Examples

#### LegendAsSlot

```html
 <mc-checkbox-group>
  <span slot="legend">Legend as HTML with custom <a href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-checkbox name="fruits" value="Apple" label="Apple" checked></mc-checkbox>
  <mc-checkbox name="fruits" value="Orange" label="Orange"></mc-checkbox>
  <mc-checkbox name="fruits" value="Banana" label="Banana"></mc-checkbox>
  <mc-checkbox name="fruits" value="Lemon" label="Lemon"></mc-checkbox>
</mc-checkbox-group>
```

#### LegendWithTooltip

```html
<div class="mds-flex mds-gap-800 mds-flex-column">
  <mc-checkbox-group>
    <div class="legend" slot="legend">
      Label as HTML, i.e.
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </div>

    <mc-checkbox name="fruits" value="Apple" label="Apple" checked></mc-checkbox>
    <mc-checkbox name="fruits" value="Orange" label="Orange"></mc-checkbox>
    <mc-checkbox name="fruits" value="Banana" label="Banana"></mc-checkbox>
    <mc-checkbox name="fruits" value="Lemon" label="Lemon"></mc-checkbox>
  </mc-checkbox-group>

  <mc-checkbox-group disabled>
    <div class="legend" slot="legend">
      Label as HTML, i.e.
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </div>

    <mc-checkbox name="fruits" value="Apple" checked>
      <div slot="label">
        Apple
        <mc-tooltip>
          <mc-icon slot="trigger" icon="info-circle"></mc-icon>
          <span>The HTML content of the tooltip</span>
        </mc-tooltip>
      </div>
    </mc-checkbox>

    <mc-checkbox name="fruits" value="Orange" label="Orange"></mc-checkbox>
    <mc-checkbox name="fruits" value="Banana" label="Banana"></mc-checkbox>
    <mc-checkbox name="fruits" value="Lemon" label="Lemon"></mc-checkbox>
  </mc-checkbox-group>
</div>
```

#### HintAsSlot

```html
<mc-checkbox-group legend="Legend">
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-checkbox name="fruits" value="Apple" label="Apple" checked></mc-checkbox>
  <mc-checkbox name="fruits" value="Orange" label="Orange"></mc-checkbox>
  <mc-checkbox name="fruits" value="Banana" label="Banana"></mc-checkbox>
  <mc-checkbox name="fruits" value="Lemon" label="Lemon"></mc-checkbox>
</mc-checkbox-group>
```

#### ErrorAsSlot

```html
<mc-checkbox-group legend="Legend" invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-checkbox name="fruits" value="Apple" label="Apple" checked></mc-checkbox>
  <mc-checkbox name="fruits" value="Orange" label="Orange"></mc-checkbox>
  <mc-checkbox name="fruits" value="Banana" label="Banana"></mc-checkbox>
  <mc-checkbox name="fruits" value="Lemon" label="Lemon"></mc-checkbox>
</mc-checkbox-group>
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

- **Type:** vertical | horizontal
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

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the error message is shown if provided.

#### name

- **Type:** string
- **Default:** containers
- **Description:** Name is required for the group component

#### value

- **Type:** string | array | array of objects
- **Typescript Type:** string
- **Description:** The initial value of the component. It can be passed as a string (i.e. "2"), comma-separated string (i.e. "1,2") or as an array (i.e. ["1", "2"])

#### readonly

- **Type:** boolean
- **Default:** false
- **Description:** Indicates that the component is read-only and cannot be modified by the user.

#### errormessage

- **Type:** string | slot
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-checkbox-group><span slot="errormessage">error message as HTML</span></mc-checkbox-group>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

#### hint

- **Type:** string | slot
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-checkbox-group><span slot="hint">hint text as HTML</span></mc-checkbox-group>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

### Events

#### change

- **Type:** CustomEvent
- **Description:** Fired when any checkbox in the group is checked/unchecked.


### Slots

#### Default slot

- **Description:** Use the default slot, for passing checkbox items in the group. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-checkbox-group>
   <mc-checkbox name="number" value="One" label="One"></mc-checkbox>
    <mc-checkbox name="number" value="Two" label="Two"></mc-checkbox>
</mc-checkbox-group>
```

#### legend

- **Description:** Use the legend named slot, when you want to pass the legend as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-checkbox-group>
  <span slot="legend">
    Legend as HTML
  </span>
</mc-checkbox-group>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-checkbox-group>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-checkbox-group>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-checkbox-group>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-checkbox-group>
```

## CSS parts

#### fieldset-container

- **Description:** Using this CSS part you can change the look of the The container of the fieldset that holds the checkboxes. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-checkbox-group::part(fieldset-container) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

