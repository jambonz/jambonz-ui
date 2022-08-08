import gzipPlugin from "rollup-plugin-gzip";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  // Compiled and bundled
  {
    input: "./pkg/dist/esm/index.js",
    output: {
      file: "./pkg/public/js/index.js",
      format: "cjs",
    },
    external: ["react", "react-dom", "react-feather"],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
    ],
  },

  // Minified and Gzipped version of ESM output
  {
    input: "./pkg/dist/esm/index.js",
    output: {
      file: "./pkg/public/js/index.min.js",
      format: "cjs",
    },
    external: ["react", "react-dom", "react-feather"],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      terser(),
      gzipPlugin(),
    ],
  },
];
