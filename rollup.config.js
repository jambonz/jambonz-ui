import scss from 'rollup-plugin-scss';
import gzipPlugin from 'rollup-plugin-gzip';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import sucrase from '@rollup/plugin-sucrase';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  // Compiled and bundled
  {
    input: './pkg/dist/esm/index.js',
    output: {
      file: './pkg/public/js/index.js',
      format: 'cjs',
    },
    external: ['react', 'react-dom', 'react-feather'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },

  // Minified and Gzipped version of ESM output
  {
    input: './pkg/dist/esm/index.js',
    output: {
      file: './pkg/public/js/index.min.js',
      format: 'cjs',
    },
    external: ['react', 'react-dom', 'react-feather'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      terser(),
      gzipPlugin(),
    ],
  },

  // Build static dist for test-app, which is a React/TypeScript thing
  {
    input: './test-app/src/app.tsx',
    output: {
      file: './test-app/dist/app.js',
      format: 'iife',
    },
    plugins: [
      sucrase({
        exclude: ['node_modules/**', '**/*.scss'],
        transforms: ['typescript', 'jsx'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      resolve(),
      commonjs(),
      scss({
        output: './test-app/dist/styles.css',
      })
    ],
  }
];
