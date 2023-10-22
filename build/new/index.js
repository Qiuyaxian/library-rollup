const question = require('./question')
const newComponent = require('./new-component')
// const newStyleLess = require('./new-styleless')
const newDoc = require('./new-doc')
const createEntry = require('./create-entry')

question().then((answers) => {
  const { componentName, componentChineseName } = answers
  // 生产组件
  newComponent(componentName, () => {
    // 更新入口
    createEntry()
  })
  // 生成样式
  // newStyleLess(componentName)
  // 生产doc
  newDoc(componentName, componentChineseName, answers)
})
