import vuePlugin from 'rollup-plugin-vue'
import rollupConfig, { resolve, packageName } from './rollup.config'

rollupConfig.plugins.push(vuePlugin({ css: false }))

export default {
  ...rollupConfig,
  output: {
    name: packageName,
    file: resolve(`../dist/${packageName}.esm.js`),
    type: 'esm',
    format: 'esm',
    globals: {
      vue: 'Vue'
    }
  }
}
