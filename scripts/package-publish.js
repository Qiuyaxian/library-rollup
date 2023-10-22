const path = require('path')
const exec = require('child_process').exec
const utils = require('./utils')
const packageName = require('../package.json').name
const packageVersion = require('../package.json').version
const publishConfig = require('../package.json').publishConfig

const publishStart = async () => {
  const args = process.argv
  const publishType = args[2]
  console.warn(`开始发布：${packageName} 组件库 v${packageVersion}`)
  console.warn(`发布环境：${publishType === 'prod' ? '正式' : '本地'}`)
  const publishCommand =
    publishType === 'prod'
      ? `npm publish --registry=${publishConfig.registry}`
      : 'yalc publish'
  publishRun(publishCommand)
}

function publishRun(cmdStr) {
  exec('cd ../', (error, stdout, stderr) => {
    if (error) {
      utils.error(`发布失败: ${error}`)
      return
    }
    if (stdout) {
      utils.success(`发布成功: ${stdout}`)
    }
    if (stderr) {
      utils.error(`发布失败: ${stderr}`)
    }
    publishProcess(cmdStr)
  })
}

function publishProcess(cmdStr) {
  exec(cmdStr, (error2, stdout, stderr) => {
    if (error2) {
      utils.error(`publish 发布失败 error: ${error2}`)
      return
    }
    if (stdout) {
      utils.success(`publish 发布成功: ${stdout}`)
    }
    if (stderr) {
      utils.error(`publish 发布失败: ${stderr}`)
    }
    utils.success(`${packageName} 组件库 v${packageVersion} 发布执行完毕`)
  })
}

publishStart().then(() => {
  utils.log('执行发布')
})
