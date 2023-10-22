import path from 'path'
import cssnano from 'cssnano'
// import babel from '@rollup/plugin-babel'
// import vuePlugin from 'rollup-plugin-vue'
// import { terser } from 'rollup-plugin-terser'
import rollupCommonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import rollupJson from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import visualizer from 'rollup-plugin-visualizer'
import requireContext from 'rollup-plugin-require-context'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'
// https://www.npmjs.com/package/@sixian/css-url
import { cssUrl } from '@sixian/css-url'
import autoprefixer from 'autoprefixer'
const ylPackage = require('../package.json')

export const packageName = ylPackage.name

export const resolve = function (filePath) {
  return path.join(__dirname, './', filePath)
}
// !标记为通过script引入，打包的时候不用打包 这个模块
// 外部库， 使用'umd'文件时需要先引入这个外部库
const external = [
  'vue',
  'lodash',
  'element-plus',
  'core-js',
  'vue-print-nb',
  'jsbarcode'
]

const rollupConfig = {
  input: resolve('../src/index.js'),
  external: external,
  plugins: [
    requireContext(),
    rollupJson(),
    rollupCommonjs(),
    nodeResolve(),
    excludeDependenciesFromBundle({
      peerDependencies: true,
      dependencies: false
    }),
    postcss({
      extensions: ['.css', '.scss'],
      plugins: [
        cssUrl({
          imgOutput: 'dist/assets/images/',
          fontOutput: 'dist/assets/font/',
          cssOutput: 'dist/',
          hash: false,
          slash: false,
          limit: 1024
        }),
        cssnano, // 压缩
        autoprefixer({ overrideBrowserslist: ['> 0.15% in CN'] }) // 自动添加css前缀
      ],
      // use: ["sass"],  // 编译 sass
      extract: resolve(`../dist/index.css`)
    })
  ]
}

if (process.env.use_analyzer) {
  rollupConfig.plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  )
}

export default rollupConfig
