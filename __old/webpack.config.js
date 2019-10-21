const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = ["dist", "lib"];

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.umd.js",
    libraryTarget: "umd",
    library: "libraryName"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean),
  ]
};
