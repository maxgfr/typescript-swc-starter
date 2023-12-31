# typescript-swc-starter

A simple node boilerplate made in typescript using swc which generates `cjs` and `esm` modules.

## Clone repository and install dependencies

```sh
git clone https://github.com/maxgfr/typescript-swc-starter # For cloning the repository
cd typescript-swc-starter # To navigate to the repository root
yarn # Install dependencies
```

:warning: You have to use at least `node@20` to run this project.

## Commands

```sh
yarn dev # For running the code in development thanks to swc and nodemon

yarn test # For running unit test
yarn test:watch # For watching unit test

yarn lint # For linting the code
yarn lint:fix # For linting the code and fix issues

yarn bundle # For generating bundling in cjs and esm

yarn start:cjs # For running the code builded in cjs
yarn start:esm # For running the code builded in esm
```

## Publish to npm

Set `NPM_TOKEN` in your Github actions secret, and that's it :)

![Alt Text](https://raw.githubusercontent.com/maxgfr/typescript-swc-starter/main/.github/assets/token.png)

To test this package, just do that :

```ts
import { sayHello } from 'typescript-swc-starter';
sayHello();
```
