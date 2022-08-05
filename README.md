<p align="center">
  <a href="https://jambonz.org/docs/jambonz-ui/">
    <img src="https://www.jambonz.org/icon192.png" height="128">
    <h1 align="center">Jambonz UI</h1>
  </a>
</p>

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/jambonz-ui">
    <img alt="" src="https://img.shields.io/npm/v/jambonz-ui.svg?style=for-the-badge&labelColor=000000&color=da1c5c">
  </a>
  <a aria-label="License" href="./LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/jambonz-ui.svg?style=for-the-badge&labelColor=000000&color=30beb0">
  </a>
</p>

## Overview

The Jambonz UI library is a minimal, light-weight UI design system for 
developing frontends for jambonz apps. It's a kit-of-parts including fonts, 
a small set of CSS styles, a source set of SASS styles and JavaScript components. 
Whether you're developing a custom dev stack with tools like [webpack](https://webpack.js.org/) 
or using a framework (like [vite](https://vitejs.dev/)) you should have no 
issues utilizing the resources available in the Jambonz UI library package. 
You can view the available UI elements from the library on [jambonz.org](https://jambonz.org/jambonz-ui/).

Jambonz UI aims to provide foundational design materials like colors, fonts 
and typography as well as [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) 
materials like buttons, icons etc. A primary goal of the library is to 
have a small footprint. Current sizes:

View on [bundlephobia](https://bundlephobia.com/package/jambonz-ui)

| Output format | CSS size | JS size |
|---------------|----------|---------|
| Minified and Gzipped | `2 KB` | `725 bytes` |
| Minified | `11 KB` | `2 KB` |
| Compiled | `15 KB` | `4 KB` |

## Installation

Installing the package is easy. You can use any typical package manager 
for frontend stacks.

```shell
npm i jambonz-ui # or yarn add jambonz-ui
```

## Test-app

To build and serve the `test-app`:

```shell
# changes are rebuilt but no HMR or live reload currently...
npm run watch
```

## Publishing

Always follow these steps to publish this package: 
[jambonz-ui](https://www.npmjs.com/package/jambonz-ui).

```shell
# build and package
# generates the `pkg` directory
npm run build

# publish the `pkg`
cd pkg && npm publish
```

## Documentation

Best to just check out the [jambonz-ui docs](https://jambonz.org/docs/jambonz-ui/) 
for a more in-depth resource.