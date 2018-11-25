import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      name: "libraryName",
      format: "umd"
    },
    plugins: [
      // we have to remove flow types first, other plugins crash!!!
      babel({
        exclude: ["node_modules/**"]
      }),
      resolve(), // so Rollup can find imported modules from node_modules
      commonjs() // so Rollup can convert commonjs to an ES module
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // the `targets` option which can specify `dest` and `format`)
  {
    input: "src/index.js",
    output: [
      { file: pkg.main2, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    external: ["react"], // add other dependencies imported from node_modules
    plugins: [
      babel({
        exclude: ["node_modules/**"]
      })
    ]
  }
];
