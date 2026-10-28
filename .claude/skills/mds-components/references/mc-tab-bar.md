# mc-tab-bar

A tabbed interface that allows users to navigate between different views or sections of content within the same page.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Tabbed Navigation, Tabbed Interface, Tab Control, Tab Panel, Tab View
**Keywords:** 
**✅ When to use:** When you need to display multiple views or sections of content in a compact space.
**❌ When not to use:** For single-view interfaces or when a simple dropdown menu suffices.

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
npm install @maersk-global/mds-components-core-tab-bar
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-tab-bar
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-tab-bar';
// minimal example usage
<mc-tab-bar></mc-tab-bar>
// basic example usage
<mc-tab-bar currentindex="0" variant="default" fit="medium"></mc-tab-bar>
```

### Advanced Examples

#### SmallViewport

```html
<div style="width: 500px">
<mc-tab-bar>
  <!-- tab 0: -->
  <mc-tab slot="tab" label="Info" icon="info-circle"></mc-tab>
  <div slot="panel">Info page with lots of information about us.</div>
  <!-- tab 1: -->
  <mc-tab slot="tab" label="Work" icon="globe"></mc-tab>
  <div slot="panel">Work page that showcases our work.</div>
  <!-- tab 2: -->
  <mc-tab slot="tab" label="Hobby" icon="heart"></mc-tab>
  <div slot="panel">Hobby page that shows our interests.</div>
  <!-- tab 3: -->
  <mc-tab slot="tab" label="Contact" icon="envelope"></mc-tab>
  <div slot="panel">Contact page that shows our contacts.</div>
  <!-- tab 4: -->
  <mc-tab slot="tab" label="Address" icon="warehouse"></mc-tab>
  <div slot="panel">Address page that shows our addresses.</div>
</mc-tab-bar>
</div>
```

#### PrefixAndSuffix

```html
<mc-tab-bar>
  <!-- tab 0: -->
  <mc-tab slot="tab" label="Info" icon="info-circle"></mc-tab>
  <div slot="panel">Info page with lots of information about us.</div>
  <!-- tab 1: -->
  <mc-tab slot="tab" label="Prices">
    <span class="prefix" slot="prefix">prefix</span>
    <span slot="suffix">$</span>
  </mc-tab>
  <div slot="panel">Prices info</div>
  <!-- tab 2: -->
  <mc-tab slot="tab" label="Overdue">
    <span slot="suffix"><mc-tag fit="small" label="3"></mc-tag></span>
  </mc-tab>
  <div slot="panel">Overdue info</div>
</mc-tab-bar>
```

#### DefaultPageStyles

```html
<mc-tab-bar>
  <mc-tab slot="tab" label="Default page styles"></mc-tab>
  <div slot="panel">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor consequat id porta. Sit amet mattis vulputate enim nulla aliquet porttitor. Magna etiam tempor orci eu lobortis. Sit amet consectetur adipiscing elit. Sagittis id consectetur purus ut faucibus. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Cursus in hac habitasse platea dictumst. Donec ac odio tempor orci dapibus. Amet venenatis urna cursus eget nunc scelerisque viverra. Nibh mauris cursus mattis molestie a. Quis hendrerit dolor magna eget est lorem ipsum.</p>
    <p>This is another paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.</p>
    <hr />
    <p>Here is a link to the <a href="https://designsystem.maersk.com">Maersk Design System's website</a>.</p>
    <hr />
    <p><strong>Strong</strong> and <em>Emphasise</em>.</p>
    <hr />
    <ol>
      <li>Ordered list item</li>
      <li>Ordered list item</li>
      <li>Ordered list item</li>
    </ol>
    <hr />
    <ul>
      <li>Unordered list item</li>
      <li>Unordered list item</li>
      <li>Unordered list item</li>
    </ul>
  </div>
</mc-tab-bar>
```

#### DisabledTab

```html
<mc-tab-bar>
  <!-- tab 0: -->
  <mc-tab slot="tab" label="Info" icon="info-circle"></mc-tab>
  <div slot="panel">Info page with lots of information about us.</div>
  <!-- tab 1: -->
  <mc-tab slot="tab" label="Prices"></mc-tab>
  <div slot="panel">Prices info</div>
  <!-- tab 2: -->
  <mc-tab slot="tab" disabled label="Overdue"></mc-tab>
  <div slot="panel">Overdue info</div>
  <!-- tab 3: -->
  <mc-tab slot="tab" label="Overview"></mc-tab>
  <div slot="panel">Overview Info</div>
</mc-tab-bar>
```

#### WithRouterLinks

```html
// TabBarRouter.vue
<template>
  <mc-tab-bar :currentindex="$route && $route.params && $route.params.id ? +$route.params.id : 0">
    <mc-tab slot="tab"><router-link to="/tab-bar-router/0">Tab 1</router-link></mc-tab>
    <div slot="panel">Tab 1</div>
    <mc-tab slot="tab"><router-link to="/tab-bar-router/1">Tab 2</router-link></mc-tab>
    <div slot="panel">Tab 2</div>
    <mc-tab slot="tab"><router-link to="/tab-bar-router/2">Tab 3</router-link></mc-tab>
    <div slot="panel">Tab 3</div>
  </mc-tab-bar>
</template>

<script lang="ts">
import '@maersk-global/mds-components-core-tab-bar';
import '@maersk-global/mds-components-core-tab';
export default {};
</script>

// router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TabBarRouter from '../views/TabBarRouter.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tab-bar-router/:id',
    name: 'TabBarRouter',
    component: TabBarRouter,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;

```

#### WithoutPanelSlot

```html
<mc-tab-bar>
  <!-- tab 0: -->
  <mc-tab slot="tab" label="Info" icon="info-circle"></mc-tab>
  <!-- tab 1: -->
  <mc-tab slot="tab" label="Work" icon="globe"></mc-tab>
  <!-- tab 2: -->
  <mc-tab slot="tab" label="Hobby" icon="heart"></mc-tab>
  <!-- tab 3: -->
  <mc-tab slot="tab" label="Contact" icon="envelope"></mc-tab>
  <!-- tab 4: -->
  <mc-tab slot="tab" label="Address" icon="warehouse"></mc-tab>
</mc-tab-bar>
```

#### CustomisedAppearance

```html
<div class="story">
  <mc-tab-bar>
    <!-- tab 0: -->
    <mc-tab slot="tab" label="Info" icon="info-circle"></mc-tab>
    <div slot="panel">Info page with lots of information about us.</div>
    <!-- tab 1: -->
    <mc-tab slot="tab" label="Work" icon="globe"></mc-tab>
    <div slot="panel">Work page that showcases our work.</div>
  </mc-tab-bar>
</div>
```

#### SetCurrentIndex

```html
<mc-tab-bar id="mcTabBar">
  <!-- tab 0: -->
  <mc-tab slot="tab" label="Info" icon="info-circle"></mc-tab>
  <div slot="panel">Info page with lots of information about us.</div>
  <!-- tab 1: -->
  <mc-tab slot="tab" label="Prices"></mc-tab>
  <div slot="panel">Prices info</div>
  <!-- tab 2: -->
  <mc-tab slot="tab" label="Overdue"></mc-tab>
  <div slot="panel">Overdue info</div>
  <!-- tab 3: -->
  <mc-tab slot="tab" label="Overview"></mc-tab>
  <div slot="panel">Overview Info</div>
</mc-tab-bar>
<mc-button onclick="setCurrentIndex()">Set current index</mc-button>
<mc-button onclick="toggleFirstTab()">Toggle first tab</mc-button>
```

## API

### Properties and attributes

#### currentindex

- **Type:** number
- **Default:** 0
- **Description:** The index number of the current `active` item. Index starts from 0

#### variant

- **Type:** default | stretched
- **Typescript Type:** Variant
- **Default:** default
- **Description:** Description missing

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

### Events

#### tabchange

- **Type:** CustomEvent<number>
- **Description:** Emitted when the any of the tabs is selected.

### Types

- ComponentEvents: re-export
- Fit: re-export
- HTMLElementEventName: type
- IMcTabBar: interface
- Variant: type

### Slots

#### tab

- **Description:** Use the tab named slot, when you want to pass individual tab buttons to the tab-bar. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tab-bar>
  <span slot="tab">
    <mc-tab slot="tab">First</mc-tab>
  </span>
</mc-tab-bar>
```

#### panel

- **Description:** Use the panel named slot, when you want to specify the HTML content that will be shown when a tab button is clicked. Keep in mind that it must be positioned as a node next to the corresponding tab button.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tab-bar>
  <span slot="panel">
    The HTML content of the first tab.
  </span>
</mc-tab-bar>
```

## CSS parts

#### tabs

- **Description:** Using this CSS part you can change the look of the buttons wrapper inside the mc-tab-bar component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tab-bar::part(tabs) {
  max-width: 300px;
}
```

#### panels

- **Description:** Using this CSS part you can change the look of the panels wrapper inside the mc-tab-bar component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tab-bar::part(panels) {
  max-width: 300px;
}
```

## Related

- [undefined](undefined)

