import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/main.js',
    output: {
        file: 'bundle.js',
        format: 'umd',
        name: 'clark'
    },
    plugins: [
        uglify()
    ]
}