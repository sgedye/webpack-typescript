# webpack-typescript

**View the [live version](https://webpack-ts-react-boilerplate.netlify.app/) hosted on netlify.**

>This project is intended to be used as a boilerplate project.  It uses Webpack 5, Babel 7, React 17 and Typescript 4.


| ![alttext](/public/fav_dev.png) | ![alttext](/public/fav_prod.png) |
| :-------------: |:-------------:|
| Dev Favicon | Prod Favicon |


## Purpose:

The purpose of this project was to increase my familiarity with webpack 5, while at the same time creating a production ready project skeleton.
Some features of this project are:
- Code splitting in the production build to reduce package size
- Content hashes, to update required files as new versions are pushed out
- Hot reloading in the development setting (which maintaining state)
- Different coloured favicons to easily distinguish developer and production environments
- Already setup with bootstrap 5 and custom scss variables

## Scripts:

- "yarn start": - open the developer server in a new tab.
- "yarn build": - creates a production build in /build (to run this, change into the /build foler (cd build) and run "npx serve")
- "yarn clean": remove the build folder and everything it contains
- "yarn lint": runs eslint to automatically fix what it can, and alert you to what it can't
- "yarn format": runs prettier to automatically format your project if it can.
