# mc-top-bar

A top bar component for displaying a product name, logo, and additional actions.

**Url:** https://designsystem.maersk.com/
**Alternative names:** App Bar, Header Bar, Navigation Bar, Masthead, Banner
**Keywords:** 
**✅ When to use:** When you need a consistent header area for your application with branding and navigation elements.
**❌ When not to use:** n/a

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
npm install @maersk-global/mds-components-core-top-bar
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-top-bar
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-top-bar';
// minimal example usage
<mc-top-bar></mc-top-bar>
// basic example usage
<mc-top-bar product="" productshort="" href="" rel="" target=""></mc-top-bar>
```

### Advanced Examples

#### WithHeaderActions

```html
<mc-top-bar product="Maersk Design System" productshort="MDS" href="https://designsystem.maersk.com" target="_blank">
  <div slot="actions">
    <mc-menu trigger="click">
      <mc-button 
        slot="trigger" 
        icon="cog" 
        variant="plain" 
        appearance="neutral" 
        fit="small"
        hiddenlabel>Menu</mc-button>
      <mc-list>
        <mc-list-item label="One"></mc-list-item>
        <mc-list-item label="Two"></mc-list-item>
        <mc-list-item label="Three"></mc-list-item>
        <mc-list-item label="Four"></mc-list-item>
        <mc-list-item label="Five"></mc-list-item>
      </mc-list>
    </mc-menu>
    <mc-avatar
      info="info"
      initials="JD"
      hiddentooltip
      fit="small"
      appearance="color-3">
    </mc-avatar>
  </div>
</mc-top-bar>
```

#### MaersklineLogo

```html
<mc-top-bar href="https://www.maersklinelimited.com/" target="_blank"></mc-top-bar>
```

#### WithRouterLink

```html
// TopBarRouter.vue
<template>
  <mc-top-bar product="Maersk Design System" productshort="MDS">
    <router-link slot="link" to="/home">Home</router-link>
    <div slot="actions" style="display: flex; gap: 16px;">
      <router-link class="mds-neutral--weak__text-color" to="/develop">Getting started for developers</router-link>
      <router-link class="mds-neutral--weak__text-color" to="/design">Getting started for designers</router-link>  
    </div>
  </mc-top-bar>
</template>

<script lang="ts">
import '@maersk-global/mds-components-core-top-bar';
export default {};
</script>

// router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;

```

#### WithAnnouncement

```html
<mc-top-bar product="Maersk Design System" productshort="MDS">
  <mc-button slot="link" icon="bars-horizontal" variant="plain" appearance="neutral" fit="small" hiddenlabel>Menu</mc-button>
  <mc-notification
    slot="announcement"
    appearance="warning"
    icon="megaphone"
    body="Two-Factor Authentication (2FA) are required from August 2nd, 2026"
    closable
    disableroundedcorners
  ></mc-notification>
</mc-top-bar>
```

## API

### Properties and attributes

#### product

- **Type:** string
- **Description:** The product is the name of your product that will be shown next to the Maersk logo.

#### productshort

- **Type:** string
- **Description:** The product short name is the name of your product that will be shown in the mobile view next to the Maersk logo.

#### href

- **Type:** string
- **Description:** Passing a href value will render the logo as a HTML anchor element.

#### rel

- **Type:** string
- **Description:** The relationship of the linked URL as space-separated <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank">link types</a>.

#### target

- **Type:** _blank | _parent | _self | _top
- **Typescript Type:** Target | undefined
- **Description:** Where to display the linked URL, as the name for a browsing context (a tab, window, or &lt;iframe&gt;).

#### labels

- **Type:** IMcTopBarLabels
- **Typescript Type:** Partial<IMcTopBarLabels> | undefined
- **Description:** Custom labels for mc-top-bar component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-top-bar/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

### Types

- IMcTopBar: interface
- IMcTopBarLabels: interface
- Target: re-export
- TopBarLogoSize: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to add mega menu or search box.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-top-bar>
  content
</mc-top-bar>
```

#### actions

- **Description:** Use the actions named slot, when you want to add header actions.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-top-bar>
  <span slot="actions">
    actions
  </span>
</mc-top-bar>
```

#### link

- **Description:** Slot where you can drop a router link to the home page in a SPA application.

```html

```

#### announcement

- **Description:** Use the announcement named slot, when you want to display a persistent announcement banner above the top bar.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-top-bar>
  <span slot="announcement">
    announcement
  </span>
</mc-top-bar>
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

