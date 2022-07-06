import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',
  output: {
    file: './dist/react-sfc-rollup-demo.esm.js',
    format: 'esm',
    exports: 'named',
  },
  plugins: [babel()],
  external: ['react'],
}
