# mc-split-button

A split button combines a primary action button with a menu of secondary actions

**Url:** https://designsystem.maersk.com/components/split-button/
**Alternative names:** Dropdown Button, Action Menu Button
**Keywords:** component, form, action, toolbar, menu, popup, popover, select, choice, option
**✅ When to use:** Use when you want to present a main action (e.g., "Save", "Download") and offer additional options via a dropdown, reducing clutter and grouping related actions together.
**❌ When not to use:** Avoid when only one action is needed, or when all actions should be equally visible and accessible as separate buttons.

## Do's

- Use sentence case for labels.
- Only add related actions to the menu.

## Don'ts

- Don't use ALL CAPS in labels.
- Don't repeat the main action in the menu.

## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Ensure the main action is the most commonly used action.
- The actions in the menu should be secondary but related to the main action.
- Both the main action and the menu items should have concise and descriptive labels.
- Limit the number of menu items - ideally no more than 4-5.
- Use the same split button appearance across the product for the same actions.

### Usage
- A split button helps streamline workflows by offering quick access to the most common action while still providing alternatives.
- Use the split button when:
- There is a clear main action, but users sometimes need other related actions.
- You want to reduce clutter by grouping related actions.
- You want to guide users toward a preferred action while still offering flexibility.
- Don’t use split button:
- For actions that are equally important.
- If the menu has too many options.

### Labels
- All split buttons should have Labels using English capitalization where we capitalize the first word and also capitalize proper nouns. We do not use ALL CAPS. You can read more about how to write good labels in our Label Guidelines.

### Icons
- A split button can contain an icon. By default, the icon is displayed before the label but can be configured to be placed after the label. It is also possible to have an icon-only split button.
- Example: Split button with icon.
- Example: Icon-only split button.

### Loading
- Like the normal Button the split button has a loading state that should be used for a short indeterminate wait time between 2-5 seconds. The loading state reassures the user that the action is being processed. The loading state also prevents the user from activating or sending something more than one time and thereby reduces mistakes.
- Example: Split button in loading state.

### Menu
- The menu list should only contain actions that are related to the main action and should not contain too many actions. Don’t repeat the main action in the menu list.

### Variants and appearances
- Like the normal button, the split button comes in three variants - filled, outlined and plain. Each variant has the following appearances: primary, secondary, neutral, inverse and error.
- For more information on button variants and appearances and how to use them, please read our Button Documentation.

### Placement
- The split button can be placed in many difference areas of the UI and be use for many different purposes. For example, you can use the plain split button next to other plain buttons to create a text editing toolbar.
- Example: Create a toolbar using the plain variant split button alongside other plain buttons.

### Accessibility
- The split button supports users with assistive technology in both interacting with and understanding the component.
- The following describes how to navigate the split button using a keyboard:
- Navigate to the component using the TAB-key.
- Navigate from the main action to the menu using TAB-key.
- Open the menu by pressing ENTER or SPACE.
- Navigate into the menu list using the TAB-key.
- Navigate up and down the list using the ARROW-DOWN and ARROW-UP.
- Close the menu by pressing ESCAPE.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-split-button
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-split-button
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-split-button';
// minimal example usage
<mc-split-button label="Button"></mc-split-button>
// basic example usage
<mc-split-button label="Button" fit="medium" icon="" appearance="primary" variant="filled" menuposition="bottom-right"></mc-split-button>
```

### Advanced Examples

#### IconOnlyButton

```html
<mc-split-button
  appearance="neutral"
  variant="outlined"
  label="floppy-disk"
  hiddenlabel
  icon="floppy-disk"
>
  <mc-list slot='menu'>
    <mc-list-item label="Save as Template"></mc-list-item>
  </mc-list>
</mc-split-button>
```

#### CustomisedAppearance

```html
 <mc-split-button icon="heart">
   Save Content
    <mc-list slot="menu">
       <mc-list-item label="Save as draft"></mc-list-item>
       <mc-list-item label="Save as template"></mc-list-item>
       <mc-list-item label="Export"></mc-list-item>
    </mc-list>
</mc-split-button>
```

#### LabelAsASlot

```html
 <mc-split-button appearance="neutral" variant="filled">
  Create
    <mc-list slot="menu">
      <mc-list-item label="Create with Reference"></mc-list-item>
      <mc-list-item label="Create with Defaults"></mc-list-item>
    </mc-list>
</mc-split-button>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Default:** Button
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-button. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### icon

- **Type:** string | slot
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### loading

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, it'll set the button state to loading and a loading spinner will be shown. The leading/trailing icon (if exists) is replaced by the spinner. This state also prevents the user from clicking and activating or submitting something more than one time.

#### labels

- **Type:** IMcButtonLabels
- **Description:** Custom labels for mc-button component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-button/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### appearance

- **Type:** primary | secondary | neutral | inverse | error
- **Typescript Type:** primary|secondary|neutral|inverse|error
- **Default:** primary
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>primary</b>.

#### variant

- **Type:** filled | outlined | plain
- **Default:** filled
- **Description:** Defines the visual style of the button.

#### rounded

- **Type:** boolean
- **Default:** false
- **Description:** Whether the button should have fully rounded corners.

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### menuposition

- **Type:** top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | left-top | left-center | left-bottom | right-top | right-center | right-bottom
- **Typescript Type:** Position
- **Default:** bottom-right
- **Description:** Position of the dropdown menu relative to the trigger button. Use `bottom-right` to align the menu to the right edge, useful when the component is near the right side of the viewport.

### Events

#### click

- **Type:** MouseEvent
- **Description:** Emitted when the button is clicked

#### focus

- **Type:** FocusEvent
- **Description:** Emitted when the button receives focus

#### blur

- **Type:** FocusEvent
- **Description:** Emitted when the button loses focus

### Types

- IMcButton: re-export
- IMcSplitButton: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-split-button>
  Label as HTML
</mc-split-button>
```

#### icon

- **Description:** Use the icon named slot, if a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-split-button>
  <span slot="icon"><mc-icon icon="star"></mc-icon></span>
</mc-split-button>
```

#### menu

- **Description:** Use the menu named slot, when you want to pass content for the dropdown menu. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-list>
  <span slot="menu">
    <mc-list-item></mc-list-item>
  </span>
</mc-list>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the main button. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-split-button::part(button) {
  background-color: #40ab35;
}
```

#### split-button-menu

- **Description:** Using this CSS part you can change the look of the menu button. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-split-button::part(split-button-menu) {
  background-color: #40ab35;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the main button. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-split-button::part(icon) {
  fill: #000000
}
```

#### split-button-icon

- **Description:** Using this CSS part you can change the look of the chevron icon element inside the menu button. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-split-button::part(split-button-icon) {
  fill: #000000
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the container element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-split-button::part(text-and-icon) {
  gap: 24px;
}
```

## Related

- [Button](https://designsystem.maersk.com/components/button/)
- [Labels](https://designsystem.maersk.com/content/labels/)

