import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';



export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: "libs/index.js",
                format: 'es',
                sourcemap: true
            }
        ],
        external: ['react'],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),

        ],
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'libs/index.d.ts', format: "es" }],
        plugins: [dts()],
    },
]
