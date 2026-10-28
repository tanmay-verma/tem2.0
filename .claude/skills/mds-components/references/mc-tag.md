# mc-tag

Tags are metadata keywords associated with or assigned to a piece of information.

**Url:** https://designsystem.maersk.com/components/tag/
**Alternative names:** Label, Badge, Pill, Chip
**Keywords:** component, metadata, keyword, label, categorise, categorize, filter, taxonomy, badge
**✅ When to use:** When you need to represent a keyword or category in a compact form.
**❌ When not to use:** For large blocks of text or complex data representations.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### With a closing action
- A closing action can be applied to the tag. Tags can be permanent or removable depending on the context. For example, removable tags can be used to show the user which filters that has already been applied and thereby also let the user remove individual filters. Permanent tags can be used to communicate the status of a piece of information e.g. “In progress” and “Completed”.
- Example: Tag with closing action

### Appearances
- The tag component comes in the following appearances:
- Neutral = Grey
- Info (general information) = Blue
- Success (positive information) = Green
- Warning (important information demanding the user’s attention) = Yellow
- Error (critical messages requiring user action) = Red
- The info, success, warning and error tags should be applied according to our guidelines for notifications.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-tag
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-tag
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-tag';
// minimal example usage
<mc-tag label="Label"></mc-tag>
// basic example usage
<mc-tag label="Label" fit="medium" icon="" trailingicon="" appearance="neutral-weak" width="auto"></mc-tag>
```

### Advanced Examples

#### Slot

```html
<mc-tag>Tag</mc-tag>
```

#### IconAsSlot

```html
<mc-tag appearance="success"><span slot="icon">✨</span>Success</mc-tag>
<mc-tag appearance="info"><span slot="trailingicon">❤️</span>Success</mc-tag>
```

#### CustomLeadingIcon

```html
<mc-tag withaction>
  <span slot="icon"><img src="github.svg" width="20" height="20" /></span>
  GitHub
</mc-tag>
```

#### WithAvatar

```html
<mc-tag withaction fit="medium">
  <span slot="icon">
    <mc-avatar fit="x-small" info="avatar should be 24 x 24 is 24 x 24 (x-small)" initials="JD" appearance="color-1"></mc-avatar>
  </span>
  Jane Doe
</mc-tag>
```

#### CustomisedAppearance

```html
<mc-tag label="CSS part" withaction></mc-tag>
```

#### InlineTags

```html
<div class="col">
  <mc-tag withaction>Default</mc-tag>
  <mc-tag appearance="info" icon="star" withaction>Info</mc-tag>
  <mc-tag appearance="success" trailingicon="heart">Success</mc-tag>
  <mc-tag appearance="warning" withaction>Warning</mc-tag>
  <mc-tag label="Error" appearance="error" withaction></mc-tag>
</div>
```

#### HandlingAction

```html
<mc-tag label="remove" withaction></mc-tag>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Default:** Label
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to text-and-icon. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

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

#### trailingicon

- **Type:** string | slot
- **Description:** Icon displayed at the end (trailing) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### appearance

- **Type:** TagAppearanceNew | TagAppearanceOld
- **Typescript Type:** TagAppearance
- **Default:** neutral-weak
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>neutral-weak</b>.

#### width

- **Type:** auto | full-width
- **Typescript Type:** Width
- **Default:** auto
- **Description:** Auto width style depends on the text length, full-width style will adjust to the parent container width

#### labels

- **Type:** IMcTagLabels
- **Typescript Type:** Partial<IMcTagLabels> | undefined
- **Description:** Custom labels for mc-tag component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-tag/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### withaction

- **Type:** false | true
- **Typescript Type:** boolean
- **Default:** false
- **Description:** `true` if it should be removable and in that case the clear button appears on the tag. Clicking on clear button will dispatch `dismiss` event.

### Events

#### dismiss

- **Type:** CustomEvent<string>
- **Description:** Emitted when the tag is dismissed. Works only if `withaction` is set to true.

### Types

- IMcTag: interface
- IMcTagLabels: interface
- IMcTextAndIcon: re-export
- TagAppearance: type
- Width: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tag>
  Label as HTML
</mc-tag>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tag>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-tag>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tag>
  <span slot="trailingicon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-tag>
```

## CSS parts

#### tag

- **Description:** Using this CSS part you can change the look of the tag. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tag::part(tag) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### action-button

- **Description:** Using this CSS part you can change the look of the tag's action button. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tag::part(action-button) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [Badge](https://designsystem.maersk.com/components/badge/)
- [Notification](https://designsystem.maersk.com/components/notification/)

