# mc-hint

Component for displaying hint messages in forms and other user inputs.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Hint Message, Form Hint
**Keywords:** 
**✅ When to use:** When you need to provide additional context or guidance related to form fields or user input.
**❌ When not to use:** When the information is already clear and does not require additional hints.

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
npm install @maersk-global/mds-components-core-hint
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-hint
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-hint';
// minimal example usage
<mc-hint></mc-hint>
// basic example usage
<mc-hint hint="Hint text" fit="medium"></mc-hint>
```

### Advanced Examples

#### Slot

```html
<mc-hint>Hint text as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></mc-hint>
```

## API

### Properties and attributes

#### hint

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Hint text
- **Description:** Hint text can be passed as simple argument like: `hint="hint text"` or as a named slot. Use argument style for passing short messages, use named slot when you want to pass hint with HTML text

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

### Types

- Fit: re-export
- IMcHint: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass hint message with HTML text. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-hint>
  hint text as HTML
</mc-hint>
```

## CSS parts

#### hint

- **Description:** Using this CSS part you can change the look of the hint. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-hint::part(hint) {
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

