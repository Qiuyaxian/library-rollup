import vuePlugin from 'rollup-plugin-vue'
import rollupConfig, { resolve, packageName } from './rollup.config'

rollupConfig.plugins.push(
  vuePlugin({ css: false, template: { optimizeSSR: true } })
)

export default {
  ...rollupConfig,
  output: {
    name: packageName,
    file: resolve(`../dist/${packageName}.umd.js`),
    type: 'umd',
    format: 'umd',
    exports: 'named', // !解决Mixing named and default exports
    globals: {
      vue: 'Vue',
      'element-ui': 'ELEMENT',
      'lodash-es': '_'
    }
  }
}
