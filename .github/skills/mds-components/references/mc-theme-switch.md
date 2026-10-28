# mc-theme-switch

Switch between light and dark themes for a brand.

**Url:** https://designsystem.maersk.com/components/theme-switch/
**Alternative names:** Theme Toggle, Dark Mode Switch, Light/Dark Mode Toggle
**Keywords:** component, light, dark, mode, visual, user preference
**✅ When to use:** When you need to provide a way for users to toggle between light and dark themes.
**❌ When not to use:** When the application only supports a single theme.

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
npm install @maersk-global/mds-components-core-theme-switch
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-theme-switch
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-theme-switch';
// minimal example usage
<mc-theme-switch></mc-theme-switch>
// basic example usage
<mc-theme-switch fit="medium"></mc-theme-switch>
```

## API

### Properties and attributes

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

### Events

#### change

- **Type:** CustomEvent<IMcThemeSwitchChangeEvent>
- **Description:** Fired when the theme is changed.

### Types

- Fit: re-export
- IMcThemeSwitch: interface
- IMcThemeSwitchChangeEvent: interface
- ThemeOptions: type

## Related

- [undefined](undefined)

