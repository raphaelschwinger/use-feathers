import { RollupOptions } from 'rollup';
import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';

const configs: RollupOptions[] = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
      },
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
    ],
    external: ['vue', '@feathersjs/feathers', '@feathersjs/adapter-commons', 'sift'],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
    external: ['vue', '@feathersjs/feathers', '@feathersjs/adapter-commons', 'sift'],
  },
];

export default configs;
