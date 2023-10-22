const fs = require('fs')
const { kebabCase, fileSave, getAbsolutePath } = require('./utils')
module.exports = function (name) {
  const lessName = kebabCase(name)
  const themePath = getAbsolutePath('src/theme/src')
  // 更新引用
  const themeEntryPath = getAbsolutePath('src/theme/src/index.less')
  const importText = `${fs.readFileSync(
    themeEntryPath
  )}@import "./${lessName}.less";`
  fileSave(themeEntryPath, importText)
  // 创建文件
  fileSave(`${themePath}/${lessName}.less`, '')
}
