// stup1
// 该文件主要是构建src下的文件入口
const fs = require('fs')
const path = require('path')
const endOfLine = require('os').EOL
const template = require('lodash/template')
const camelCase = require('lodash/camelCase')
const upperFirst = require('lodash/upperFirst')
const upperCamelCase = (str) => upperFirst(camelCase(str))
const { getAbsolutePath } = require('./utils')
// 获取组件列表
module.exports = function () {
  const { components, styles } = require('../common-config')
  const OUTPUT_PATH = getAbsolutePath('./src/index.js')

  const COMPONENT_IMPORT_TEMPLATE =
    "import <%= name %> from '../packages/<%= pkgName %>/index.js';"
  const STYLE_IMPORT_TEMPLATE = "import './styles/<%= pkgName %>';"
  const MAIN_IMPORT_TEMPLATE = `/* Automatically generated by './build/entry.js' */
<%= importText %>
<%= importStyle %>

const components = [
  <%= installText %>
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  <%= exportText %>
}`

  const componentNames = Object.keys(components)

  const styleNames = Object.keys(styles)

  const componentTplCompiled = template(COMPONENT_IMPORT_TEMPLATE)
  const mainTplCompiled = template(MAIN_IMPORT_TEMPLATE)
  const styleTplCompiled = template(STYLE_IMPORT_TEMPLATE)

  const allImportComponents = []
  const allInstallComponents = []
  const allImportStyles = []

  componentNames.forEach((pkgName) => {
    const path = components[pkgName]
    if (!path) return
    const suffix = path.match(/index\.(tsx?|jsx?)$/)
    if (suffix[1]) {
      const compName = upperCamelCase(pkgName)
      allImportComponents.push(
        componentTplCompiled({
          name: compName,
          pkgName,
          suffix: suffix[1]
        })
      )
      allInstallComponents.push(`${compName}`)
    }
  })

  styleNames.forEach((pkgName) => {
    const path = styles[pkgName]
    if (!path) return
    allImportStyles.push(
      styleTplCompiled({
        name: pkgName,
        pkgName,
        suffix: pkgName
      })
    )
  })

  const entryFileText = mainTplCompiled({
    importText: allImportComponents.join(endOfLine),
    installText: allInstallComponents.join(',' + endOfLine),
    exportText: allInstallComponents.join(',' + endOfLine),
    importStyle: allImportStyles.join(',' + endOfLine)
  })
  // 输出模版
  fs.writeFileSync(OUTPUT_PATH, entryFileText)
}
