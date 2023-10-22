const docs = require('../docs.json')
const commonSidebar = [
  '/',
  {
    title: '开发教程',
    name: 'guide',
    collapsable: false,
    children: [
      '/guide/component',
      '/guide/doc',
      '/guide/git',
      '/guide/release',
      '/guide/publish'
    ]
  },
  ...docs
]
const package = require('../../package.json')
const packageVersion = process.env.VERSION || package.version
const packageName = package.packageName || 'library-rollup'
const docsOuput = 'docs-dist'
module.exports = {
  // 设置文档输出路径
  base: process.env.NODE_ENV === 'development' ? `/${docsOuput}/` : '/',
  dest: docsOuput,
  title: `${packageName}组件库(v${packageVersion})`,
  description: 'library-rollup中后台组件库',
  base: '/',
  themeConfig: {
    // 头部导航栏
    nav: [
    ],
    // 左侧导航
    sidebar: commonSidebar
  }
}
