# react-library-template
Starter for creating React library

- npm init
- add react to peerDependencies

# Webpack setup + Babel (except babel-loader, Babel setup is the same for Rollup or any other tool)
- add library code to src dir 
- Add webpack + webpack-cli (devDependencies assumed if not specified)
- create webpack.config.js + add "entry", "output", "mode"
- add "prepare" or "build" script to package.json, i.e. "prepare": "webpack"
- install "babel-loader" and "@babel/core"
- add babel loader to webpack config { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
- create .babelrc
- add "@babel/preset-env", "@babel/preset-react", "@babel/preset-flow"(optional) presets
- add .browserslistrc to enable "@babel/preset-env" preset's advanced optimizations (by default it transpailes to ES5 level)
- check https://webpack.js.org/guides/author-libraries/
- externalize react (don't bundle it), externals option in webpack config
- set library and libraryTarget options in webpack config (uses "umd" but for react lib "commonjs" is probably enough)

# Rollup setup
- check https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c
- use Rollup if library is tree-shakeable to export esm bundle referenced in "module" in package.json
- add rollup.config.js
- check https://github.com/rollup/rollup-starter-lib (config file format is little bit changed than in this example)
- install plugins "rollup-plugin-node-resolve", "rollup-plugin-commonjs" and "rollup-plugin-babel"
- "rollup-plugin-node-resolve" is used to resolve 3rd party modules (from node_modules) imported by library
- "rollup-plugin-commonjs" is used to convert commonjs modules to ES modules
- Those 2 plugins are basically required if library has any npm dependency
- "rollup-plugin-babel" could use setup from .babelrc if Babel 7+ is used
- add name (library name), external and globals (React, ReactDOM, PropTypes asnd similar) options for umd build
- for "es" build we don't use "commonjs" and "resolve" plugins, only ES modules are used! 

* setup eslint: https://www.npmjs.com/package/eslint-config-react-app https://reactjs.org/docs/hooks-rules.html
* setup jest: https://jestjs.io/docs/en/getting-started.html
