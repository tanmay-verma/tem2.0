# Jest Setup Reference

Full configuration files for setting up Jest + Testing Library in a project that uses MDS components.

## Installation

```bash
npm i -D @testing-library/react @testing-library/jest-dom @babel/preset-env babel-jest ts-jest jest-environment-jsdom shadow-dom-testing-library
```

## babel.config.js

```js
module.exports = {
  presets: ['@babel/preset-env'],
};
```

## jest.config.js

```js
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // Required: allows Jest to transpile MDS and Lit ESM packages
  transformIgnorePatterns: [
    'node_modules/(?!(@maersk-global)|(@material)|(lit)|(@lit)|(@lit-labs)|(lit-element)|(lit-html)|(.*\\.mjs$))',
  ],
};
```

## jest.setup.js

```js
import '@testing-library/jest-dom';

// Required: MDS components use IntersectionObserver internally
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

// Required: MDS dialog/modal components use the native HTMLDialogElement API
HTMLDialogElement.prototype.show = jest.fn(function () {
  this.open = true;
});
HTMLDialogElement.prototype.showModal = jest.fn(function () {
  this.open = true;
});
HTMLDialogElement.prototype.close = jest.fn(function () {
  this.open = false;
});

// Suppress jsdom CSS parse errors caused by modern CSS (container queries, etc.)
// See https://github.com/jsdom/jsdom/issues/3236
const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (message.toString().includes('Could not parse CSS stylesheet')) {
    return;
  }
  originalConsoleError(message, ...optionalParams);
};
```

## \_\_mocks\_\_/fileMock.js

```js
module.exports = 'test-file-stub';
```

## \_\_mocks\_\_/styleMock.js

```js
module.exports = {};
```

## tsconfig.json additions

```json
{
  "compilerOptions": {
    "types": ["jest", "@testing-library/jest-dom"],
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "__tests__/**/*.tsx"]
}
```

`skipLibCheck: true` prevents TypeScript errors from MDS package type definitions conflicting with your project's type versions.

Always import MDS types with the `type` keyword so they are erased at compile time and do not affect the bundle:

```ts
import type { IMcButton } from '@maersk-global/mds-components-core-button/types';
import type { TableColumn } from '@maersk-global/mds-components-core/mc-table/types';
```

## Webpack 4: imask transpile error

If you see `"Module parse failed: Unexpected token"` for the `imask` library, add it to the list of transpiled dependencies:

```js
// vue.config.js or webpack.config.js
module.exports = {
  transpileDependencies: ['imask'],
};
```
