# mc-text-and-icon

mc-text-and-icon component

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
npm install @maersk-global/mds-components-core-text-and-icon
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-text-and-icon
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-text-and-icon';
// minimal example usage
<mc-text-and-icon label="Label"></mc-text-and-icon>
// basic example usage
<mc-text-and-icon label="Label" sublabel="" fit="medium" icon="" trailingicon=""></mc-text-and-icon>
```

### Advanced Examples

#### LabelAndIconsAsSlot

```html
<mc-text-and-icon>
  <span slot="icon"><mc-icon icon="heart"></mc-icon></span>
  Text
  <span slot="sublabel">Sub-label as HTML</span>
  <span slot="trailingicon"><mc-icon icon="info-circle"></mc-icon></span>
</mc-text-and-icon>
```

#### CustomLeadingIcon

```html
<mc-text-and-icon>
  <span slot="icon"><img src="github.svg" width="20" height="20"></span>
  GitHub
</mc-text-and-icon>
```

#### CustomisedAppearance

```html
<mc-text-and-icon
  icon="apple"
  trailingicon="banana"
>
  <b>Fruits</b>
  <span slot="sublabel" class="mds-neutral--weak__text-color">Most common ones</span>
</mc-text-and-icon>
  
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** Label
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to text-and-icon. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### sublabel

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Sublabel can be passed as a simple argument like: `sublabel="Apple"` or as a slot. Use argument style for passing short sublabels, use slot when you want to pass sublabel with HTML text.

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
- **Typescript Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Icon displayed at the end (trailing) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

### Types

- AriaRoles: re-export
- FitToIconSize: type
- IMcTextAndIcon: re-export

## Related


