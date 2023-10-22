const fs = require('fs')
const inquirer = require('inquirer')
const { docsFilePath, getComponent } = require('./utils')

// 获取类型
module.exports = function () {
  let docsConfigFile = []
  let componentTypes = []
  if (fs.existsSync(docsFilePath)) {
    docsConfigFile = require(docsFilePath)
    componentTypes = docsConfigFile.map((item) => ({
      name: item.title,
      value: item.name
    }))
  }
  const inquirerPromptList = [
    {
      type: 'input',
      name: 'componentName',
      message: '请输入组件名称，使用大驼峰命名方式，如 Button 、FilePreview',
      validate: function (answer) {
        // if (getComponent(answer)) {
        //   return '该组件已经存在，请重新输入'
        // }
        return !!answer
      },
      filter: (answer) => answer.trim()
    },
    {
      type: 'input',
      name: 'componentChineseName',
      message: '请输入组件中文名称',
      validate: (answer) => !!answer,
      filter: (answer) => answer.trim()
    },
    {
      type: 'list',
      name: 'componentType',
      message: '请选择组件类型',
      choices: [
        ...componentTypes,
        {
          name: '新组件类型',
          value: -1
        }
      ]
    },
    {
      type: 'input',
      name: 'newComponentType',
      message:
        '请输入组件类型名称，使用小驼峰命名，如 common 、financeComponent :',
      validate: (answer) => !!answer,
      filter: (answer) => answer.trim(),
      when: ({ componentType }) => componentType === -1
    },
    {
      type: 'input',
      name: 'chineseComponentType',
      message: '请输入组件类型中文名称，如 公共组件、业务组件',
      validate: (answer) => !!answer,
      filter: (answer) => answer.trim(),
      when: ({ componentType }) => componentType === -1
    }
  ]
  return inquirer.prompt(inquirerPromptList)
}
