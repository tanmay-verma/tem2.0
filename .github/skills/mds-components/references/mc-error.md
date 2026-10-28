# mc-error

Component for displaying error messages in forms and other user inputs.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Error Message, Form Error
**Keywords:** 
**✅ When to use:** When you need to display error messages related to form validation or user input.
**❌ When not to use:** When you need to display non-error messages or information.

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
npm install @maersk-global/mds-components-core-error
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-error
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-error';
// minimal example usage
<mc-error></mc-error>
// basic example usage
<mc-error errormessage="Error message" fit="medium"></mc-error>
```

### Advanced Examples

#### Slot

```html
<mc-error invalid>Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></mc-error>
```

## API

### Properties and attributes

#### errormessage

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Error message
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot. Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit | undefined
- **Default:** medium
- **Description:** Controls the overall size of the component.

### Types

- Fit: re-export
- IMcError: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass error message with HTML text. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-error>
  error text as HTML
</mc-error>
```

## CSS parts

#### error

- **Description:** Using this CSS part you can change the look of the error. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-error::part(error) {
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

