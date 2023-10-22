import DemoBlock from './components/demo-block'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default ({ Vue, isServer }) => {
  if (!isServer) {
    Vue.use(Element)
    window.global = window
    return import('../../src/index')
      .then((module) => {
        Vue.use(DemoBlock, {
          jsRes: ['//unpkg.com/vue/dist/vue.js']
        })
        Object.entries(module).forEach(([name, component]) => {
          Vue.use(component)
        })
      })
      .catch((e) => {
        console.error(e, 'enhanceApp')
      })
  }
}
