# mc-option

To represent an option item within a list dropdown or select menu.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Option Item, Select Item, Dropdown Item
**Keywords:** 
**✅ When to use:** When you need to display a selectable item within a dropdown or select menu.
**❌ When not to use:** When you need to display a non-selectable item or a different layout.

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
npm install @maersk-global/mds-components-core-option
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-option
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-option';
// minimal example usage
<mc-option label="Apple"></mc-option>
// basic example usage
<mc-option label="Apple" fit="medium" href="" target="" sublabel="Apple is a fruit" icon="" trailingicon="" type="button" value=""></mc-option>
```

### Advanced Examples

#### LabelAsASlot

```html
<mc-option
  icon="apple"
  sublabel="Apple is a fruit">
    Apple
</mc-option>
  
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Default:** Apple
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-list-item. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### href

- **Type:** string
- **Description:** Passing a href value will render the list item as a HTML anchor element.

#### target

- **Type:** string
- **Description:** Where to display the linked URL, as the name for a browsing context (a tab, window, or &lt;iframe&gt;).

#### sublabel

- **Type:** string | slot
- **Default:** Apple is a fruit
- **Description:** Sublabel can be passed as a simple argument like: `sublabel="Apple"` or as a slot. Use argument style for passing short sublabels, use slot when you want to pass sublabel with HTML text.

#### icon

- **Type:** string | slot
- **Description:** Icon displayed at the start (front) of the component. Set to `empty` if you want the icon's space to be preserved but it should appear blank.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string | slot
- **Description:** Icon displayed at the end (trailing) of the component. Set to `empty` if you want the icon's space to be preserved but it should appear blank.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### type

- **Type:** button | checkbox
- **Default:** button
- **Description:** Determines the rendering style of the list item. When set to `button`, the item renders as a standard clickable list item. When set to `checkbox`, the item renders with an embedded checkbox for multi-selection scenarios.

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### value

- **Type:** Value associated with the option, which is submitted when the form is submitted.
- **Typescript Type:** string
- **Description:** value


### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-option>
  Label as HTML
</mc-option>
```

#### sublabel

- **Description:** Use the sublabel named slot, when you want to pass the legend as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-option>
  <span slot="sublabel">
    Sub-label as HTML
  </span>
</mc-option>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-option>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-option>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-option>
  <span slot="trailingicon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-option>
```

#### badge

- **Description:** Use the badge slot, when you want to attach badge to the list item. Check stories under badge <b>Examples</b> folder to see live example.

```html
<mc-option>
  <mc-badge 
    slot="badge" 
    label="99" 
    variant="error">
  </mc-badge>
</mc-option>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-option component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-option::part(button) {
  color: #40AB35;
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the text and icon wrapper inside the mc-option component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-option::part(text-and-icon) {
  flex-direction: column;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-option component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-option::part(icon) {
  fill: #40AB35;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

