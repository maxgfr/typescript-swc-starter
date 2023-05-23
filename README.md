# typescript-swc-starter

A simple node boilerplate made in typescript using swc.

👻 A version without rust compiler [swc](https://swc.rs/) is available [here](https://github.com/maxgfr/boilerplate-typescript-node).

🤖 A version without [`semantic-release`](https://github.com/semantic-release/semantic-release) is available [here](https://github.com/maxgfr/typescript-swc-starter/tree/without-package).

👾 You can also use a branch which use dotenv [here](https://github.com/maxgfr/typescript-swc-starter/tree/with-dotenv).

👽 Finally, there is a branch which generate commonjs file [here](https://github.com/maxgfr/typescript-swc-starter/tree/commonjs).

## Clone repository and install dependencies

```sh
git clone https://github.com/maxgfr/typescript-swc-starter # For cloning the repository
cd typescript-swc-starter # To navigate to the repository root
yarn # Install dependencies
```

## Running the code

```sh
yarn build # For building the code with typechecking
yarn build:swc # For building without typechecking
yarn start # For running the code builded
```

Or in `development` mode:

```sh
yarn dev # For running the code in development thanks to swc and nodemon
```

> **:warning: No typechecking made in dev mode**

## Testing the code

```sh
yarn test # For running unit test
yarn test:watch # For watching unit test
```

## Publish to npm

Set `NPM_TOKEN` in your Github actions secret, and that's it :)

![Alt Text](https://raw.githubusercontent.com/maxgfr/typescript-swc-starter/main/.github/assets/token.png)

To test this package, just do that :

```ts
import { sayHello } from 'typescript-swc-starter';
sayHello();
```
