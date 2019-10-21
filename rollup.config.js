import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const peerDependencies = Object.keys(pkg.peerDependencies);
const dependencies = Object.keys(pkg.dependencies);

export default [
  // ES module (for bundlers) build.
  //( seems like rollup works the same with and without externals for es build!?)
  {
    input: "src/index.js",
    output: [{ file: pkg.module, format: "es" }],
    // https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396
    // external is what we use to tell Rollup what modules to exclude from our bundle.
    // Since pkg.dependencies will get installed by the module consumer’s yarn or npm,
    // and since pkg.peerDependencies are expected to be installed by the consumer,
    // we can safely exclude those from the bundle.
    external: [...peerDependencies, ...dependencies],
    plugins: [
      babel({
        exclude: ["node_modules/**"]
      })
    ]
  }
];
