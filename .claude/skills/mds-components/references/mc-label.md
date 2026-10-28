# mc-label

Component for displaying labels for form elements and other UI components.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Form Label, Input Label
**Keywords:** 
**✅ When to use:** When you need to display a label for a form element or UI component.
**❌ When not to use:** When you don't need a label or when using a different labeling approach.

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
npm install @maersk-global/mds-components-core-label
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-label
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-label';
// minimal example usage
<mc-label label="Label"></mc-label>
// basic example usage
<mc-label label="Label" fit="medium" labelposition="top"></mc-label>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-label>Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></mc-label>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** Label
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to . Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

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

### Types

- Fit: re-export
- IMcLabel: interface
- LabelPosition: re-export

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass label with HTML text. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-label>
  label text as HTML
</mc-label>
```

## CSS parts

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-label::part(label) {
  color: #000000;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

