# mc-switch-group

Display switch groups with optional legends, hints, and error messages

**Url:** https://designsystem.maersk.com/
**Alternative names:** User Switch Group, Switch List, Selection Box Group, Switch Buttons, Toggle Group, On/Off Group
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
npm install @maersk-global/mds-components-core-switch-group
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-switch-group
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-switch-group';
// minimal example usage
<mc-switch-group legend="Please select" name="containers"></mc-switch-group>
// basic example usage
<mc-switch-group legend="Please select" orientation="vertical" fit="medium" name="containers" value="" errormessage="" hint=""></mc-switch-group>
```

### Advanced Examples

#### LegendAsSlot

```html
 <mc-switch-group>
  <span slot="legend">Legend as HTML with custom <a href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-switch name="fruits" value="Apple" label="Apple" checked></mc-switch>
  <mc-switch name="fruits" value="Orange" label="Orange"></mc-switch>
  <mc-switch name="fruits" value="Banana" label="Banana"></mc-switch>
  <mc-switch name="fruits" value="Lemon" label="Lemon"></mc-switch>
</mc-switch-group>
```

#### LegendWithTooltip

```html
<mc-switch-group>
  <div slot="legend">
    Label as HTML, i.e.
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </div>
  <mc-switch name="fruits" value="Apple" label="Apple" checked></mc-switch>
  <mc-switch name="fruits" value="Orange" label="Orange"></mc-switch>
  <mc-switch name="fruits" value="Banana" label="Banana"></mc-switch>
  <mc-switch name="fruits" value="Lemon" label="Lemon"></mc-switch>
</mc-switch-group>
<mc-switch-group disabled>
  <div slot="legend">
    Label as HTML, i.e.
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </div>
  <mc-switch name="fruits" value="Apple" checked>
    <div slot="label">
      Apple
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </div>
  </mc-switch>
  <mc-switch name="fruits" value="Orange" label="Orange"></mc-switch>
  <mc-switch name="fruits" value="Banana" label="Banana"></mc-switch>
  <mc-switch name="fruits" value="Lemon" label="Lemon"></mc-switch>
</mc-switch-group>
```

#### HintAsSlot

```html
<mc-switch-group legend="Legend">
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-switch name="fruits" value="Apple" label="Apple" checked></mc-switch>
  <mc-switch name="fruits" value="Orange" label="Orange"></mc-switch>
  <mc-switch name="fruits" value="Banana" label="Banana"></mc-switch>
  <mc-switch name="fruits" value="Lemon" label="Lemon"></mc-switch>
</mc-switch-group>
```

#### ErrorAsSlot

```html
<mc-switch-group legend="Legend" invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-switch name="fruits" value="Apple" label="Apple" checked></mc-switch>
  <mc-switch name="fruits" value="Orange" label="Orange"></mc-switch>
  <mc-switch name="fruits" value="Banana" label="Banana"></mc-switch>
  <mc-switch name="fruits" value="Lemon" label="Lemon"></mc-switch>
</mc-switch-group>
```

#### TwoColumnLayout

```html
<mc-switch-group legend="Select features to enable" hint="Choose one or more">
  <mc-switch name="features" value="Notifications" label="Notifications"></mc-switch>
  <mc-switch name="features" value="DarkMode" label="Dark Mode"></mc-switch>
  <mc-switch name="features" value="AutoSave" label="Auto Save"></mc-switch>
  <mc-switch name="features" value="Analytics" label="Analytics"></mc-switch>
  <mc-switch name="features" value="Sync" label="Cloud Sync"></mc-switch>
  <mc-switch name="features" value="Backups" label="Auto Backups"></mc-switch>
</mc-switch-group>
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

#### errormessage

- **Type:** string | slot
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-switch-group><span slot="errormessage">error message as HTML</span></mc-switch-group>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

#### hint

- **Type:** string | slot
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-switch-group><span slot="hint">hint text as HTML</span></mc-switch-group>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

### Events

#### change

- **Type:** CustomEvent<string | undefined>
- **Description:** Emitted when any of the mc-switch element in the group is checked/unchecked.


### Slots

#### Default slot

- **Description:** Use the default slot, for passing switch items in the group. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-switch-group>
   <mc-switch name="number" value="One" label="One"></mc-switch>
    <mc-switch name="number" value="Two" label="Two"></mc-switch>
</mc-switch-group>
```

#### legend

- **Description:** Use the legend named slot, when you want to pass the legend as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-switch-group>
  <span slot="legend">
    Legend as HTML
  </span>
</mc-switch-group>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-switch-group>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-switch-group>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-switch-group>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-switch-group>
```

## CSS parts

#### fieldset-container

- **Description:** Using this CSS part you can change the look of the The container of the fieldset that holds the switches. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-switch-group::part(fieldset-container) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

