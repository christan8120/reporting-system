import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg-import';

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        postcss({
            extensions: ['.css', '.scss']
        }),
        svg({
            stringify: false
        }),
        external(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled' 
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};