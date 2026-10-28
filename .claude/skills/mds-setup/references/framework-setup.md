# Framework Setup Reference

Full configuration details for integrating MDS into each supported framework.

## React

- Import components from `@maersk-global/mds-react-wrapper/components-core/mc-{name}`
- Use lowercase prop names: `iconposition`, `hiddenlabel`, `clearactionlabel`
- Use MDS event props: `onClick`, `onChange`, `onOptionselected`

```tsx
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';

export function MyComponent() {
  return <McButton label="Submit" appearance="primary" />;
}
```

## Vue

- Import side-effect packages per component: `@maersk-global/mds-components-core-button`
- Listen to events with `@eventname` and read data from `event.detail`
- Configure the Vue compiler to treat `mc-*` tags as custom elements:

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('mc-'),
        },
      },
    }),
  ],
};
```

## Angular

- Import side-effect packages per component: `@maersk-global/mds-components-core-button`
- Use property binding for arrays and objects: `[.options]="options"`
- Every Angular component or module using MDS must declare `CUSTOM_ELEMENTS_SCHEMA`

**Standalone component (Angular 14+):**

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@maersk-global/mds-components-core-button';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyPageComponent {}
```

**NgModule-based:**

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

## Next.js

- Add `'use client'` directive to any component file that imports or renders MDS components
- Follow the React setup otherwise

```tsx
'use client';

import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';
```
