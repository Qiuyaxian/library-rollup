const limitTypeMap = {
  init: 'init 🎉: 初始化',
  feat: 'feat 🍄: 新增新的特性',
  fix: 'fix 🐛: 修复 BUG',
  docs: 'docs 📄: 修改文档、注释',
  refactor: 'refactor 🎸: 代码重构，注意和特性、修复区分开',
  perf: 'perf ⚡: 提升性能',
  test: 'test 👀: 添加一个测试',
  tool: 'tool 🚗: 开发工具变动(构建、脚手架工具等)',
  style: 'style ✂: 对代码格式的修改不影响逻辑',
  revert: 'revert 🌝: 版本回滚',
  update: 'update 🚀: 第三方库升级 ',
  build: 'build 📦: 打包构建',
  ci: 'ci👷: 打包流程配置',
  chore: 'chore: 其他类型(提交changelog说明文档等)'
}
const limitTypeList = []
Object.keys(limitTypeMap).forEach((key) => {
  limitTypeList.push({
    value: key,
    name: `${key}:${limitTypeMap[key]}`
  })
})
module.exports = {
  types: limitTypeList,
  typeMaps: limitTypeMap
}
