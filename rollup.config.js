import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const { TARGET_ENV } = process.env;

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
    ],
    external: [/@babel\/runtime/, 'react', 'styled-components'],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(
          TARGET_ENV === 'production' ? 'production' : 'development'
        ),
        preventAssignment: true,
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      external(),
      resolve(),
      typescript(),
      terser(),
    ],
  },
];
