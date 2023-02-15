# typescript-swc-starter

A simple node boilerplate made in typescript using swc.

👻 A version without rust compiler [swc](https://swc.rs/) is available [here](https://github.com/maxgfr/boilerplate-typescript-node).

🤖 A more complex repository is available for creating npm package [here](https://github.com/maxgfr/typescript-boilerplate-package).

👾 You can also use a branch which use dotenv [here](https://github.com/maxgfr/typescript-swc-starter/tree/with-dotenv).

👽 Finally, there is a branch which generate commonjs file [here](https://github.com/maxgfr/typescript-swc-starter/tree/cj).

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
