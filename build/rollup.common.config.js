import vuePlugin from 'rollup-plugin-vue'
import rollupConfig, { resolve, packageName } from './rollup.config'

rollupConfig.plugins.push(
  vuePlugin({ css: false, template: { optimizeSSR: true } })
)

export default {
  ...rollupConfig,
  output: {
    name: packageName,
    file: resolve(`../dist/${packageName}.common.js`),
    type: 'common',
    format: 'cjs',
    exports: 'default',
    globals: {
      vue: 'Vue'
    }
  }
}
