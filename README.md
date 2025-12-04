# typescript-swc-starter

A simple node boilerplate made in typescript using swc which generates `cjs` and `esm` modules.

## Clone repository and install dependencies

```sh
git clone https://github.com/maxgfr/typescript-swc-starter # For cloning the repository
cd typescript-swc-starter # To navigate to the repository root
pnpm install # Install dependencies
```

:warning: You have to use at least `node@20` to run this project.

## Commands

```sh
pnpm dev # For running the code in development thanks to swc and nodemon

pnpm test # For running unit test
pnpm test:watch # For watching unit test

pnpm lint # For linting the code
pnpm lint:fix # For linting the code and fix issues

pnpm bundle # For generating bundling in cjs and esm

pnpm start:cjs # For running the code builded in cjs
pnpm start:esm # For running the code builded in esm
```

## Publish to npm

Thanks to OIDC, you no longer need the `NPM_TOKEN`.

Go to your npm package's access page https://www.npmjs.com/package/my-repo-name/access, , set your details and trust publisher, and you're all set!

![Alt Text](https://raw.githubusercontent.com/maxgfr/typescript-swc-starter/main/.github/assets/token.png)

To test this package, just do that :

```ts
import { sayHello } from 'typescript-swc-starter';
sayHello();
```
