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

- check https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c
- use Rollup if library is tree-shakeable to export esm bundle referenced in "module" in package.json

# Rollup setup