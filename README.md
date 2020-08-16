# Bookmarks Cards
![build-and-test](https://github.com/rafa-borges/bookmarks-cards/workflows/build-and-test/badge.svg?branch=master)

This is a Vue 2 JavaScript app that renders Chrome bookmarks into cards. It is meant to be used as Chrome extension.

## TODO List
- CI using GitHub actions
- CD to GitHub pages
- TypeScript support
- VueX or similar for the loading of the chrome data
- Migration to Vue3

## Project commands
```
yarn install
yarn serve
yarn build
yarn test:unit
yarn lint
```

## Running the app
- As a standalone app: run the ```serve``` command and open index.html - sample data is used for displaying cards
- Inside Chrome as an extension: [load the extension unpacked](https://developer.chrome.com/extensions/getstarted)
