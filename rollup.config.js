import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import { globby } from "globby";
import alias from "@rollup/plugin-alias";

export default [
  {
    input: {
      app: "src/server/app.js",
      router: "src/server/components/router.js",
    },
    output: {
      dir: "dist",
      format: "es",
      preserveModules: true,
    },
    plugins: [
      babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
      alias({
        entries: [
          {
            find: "styled-components",
            replacement:
              "node_modules/styled-components/dist/styled-components.esm.js",
          },
        ],
      }),
    ],
  },
  {
    input: (await globby("src/client/*.js"))
      .concat(await globby("src/client/components/*.js"))
      .reduce(
        (acc, entryFile) => ({
          ...acc,
          [entryFile.replace(".js", "")]: entryFile,
        }),
        {}
      ),
    output: {
      dir: "public",
      format: "es",
      entryFileNames: "[name].js",
      preserveModules: true,
    },
    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      alias({
        entries: [
          {
            find: "styled-components",
            replacement: "styled-components/dist/styled-components.js",
          },
        ],
      }),
      peerDepsExternal(),
      commonjs(),
      nodeResolve(),
      json(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
      }),
    ],
  },
];
