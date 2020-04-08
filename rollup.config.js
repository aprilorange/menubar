import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext'
        },
        include: ['src/**/*'],
        exclude: ['**/__mocks__/**']
      }
    }),
    commonjs({
      namedExports: {
        'electron-positioner': ['default']
      }
    })
  ]
}