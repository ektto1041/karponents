import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

export default ["xmas"].flatMap((directory) => [
  {
    input: `packages/${directory}/src/index.ts`,
    output: [
      {
        dir: `packages/${directory}/dist`,
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: `packages/${directory}/src`,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      resolve({
        extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
      }),
      commonjs(),
      postcss({
        modules: true,
        extensions: [".css"],
        // extract: "styles.css",
      }),
      typescript({
        check: true,
        tsconfig: "./tsconfig.json",
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
      }),
    ],
  },
  {
    input: `packages/${directory}/src/index.ts`,
    output: {
      dir: `packages/${directory}/dist`,
      format: "esm",
    },
    plugins: [dts()],
  },
]);
