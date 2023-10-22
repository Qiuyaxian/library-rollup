const execa = require('execa')
const semver = require('semver')
const inquirer = require('inquirer')

const curVersion = require('../package.json').version

const genChangelog = require('./gen-changelog')
const release = async () => {
  console.log(`当前版本: ${curVersion}`)
  // todo(https://blog.csdn.net/gtLBTNq9mr3/article/details/125252366)
  const bumps = ['patch', 'minor', 'major', 'prerelease']
  const versions = {}

  bumps.forEach((b) => {
    versions[b] = semver.inc(curVersion, b)
  })

  const bumpChoices = bumps.map((b) => ({
    name: `${b} (${versions[b]})`,
    value: b
  }))

  const { bump, customVersion } = await inquirer.prompt([
    {
      name: 'bump',
      message: '请选择需要发布的版本:',
      type: 'list',
      choices: [...bumpChoices, { name: 'custom', value: 'custom' }]
    },
    {
      name: 'customVersion',
      message: '请输入需要发布的版本:',
      type: 'input',
      when: (answers) => answers.bump === 'custom'
    }
  ])

  const version = customVersion || versions[bump]
  process.env.VERSION = version

  const { genDocs } = await inquirer.prompt([
    {
      name: 'genDocs',
      message: `是否构建 v${version} 版本文档?`,
      type: 'confirm'
    }
  ])

  const { yes } = await inquirer.prompt([
    {
      name: 'yes',
      message: `是否确定要构建 v${version}?`,
      type: 'confirm'
    }
  ])

  if (yes) {
    // 执行构建打包
    await execa('npm', ['run', 'build'], { stdio: 'inherit' })
    await execa('git', ['add', '.'], { stdio: 'inherit' })
    // 提交打包代码
    try {
      await execa('git', ['commit', '-m', `build: build ${version}`], {
        stdio: 'inherit'
      })
    } catch (e) {
      // console.error('npm run build error：', e)
    }
    // 打包文档
    if (genDocs) {
      await execa('npm', ['run', 'build:docs'], { stdio: 'inherit' })
      await execa('git', ['add', '.'], { stdio: 'inherit' })
      try {
        await execa('git', ['commit', '-m', `build: docs ${version}`], {
          stdio: 'inherit'
        })
      } catch (e) {
        console.error('npm run build:docs error：', e)
      }
    }
    if (version !== curVersion) {
      // 使用npm version 更新package.json 的版本号
      await execa('npm', ['--no-git-tag-version', 'version', version], {
        stdio: 'inherit'
      })
      await execa('git', ['add', '.'], { stdio: 'inherit' })
      try {
        await execa('git', ['commit', '-m', `build: release ${version}`], {
          stdio: 'inherit'
        })
        // 获取当前提交的hash值，并打上版本tag
        console.log('git tag: ', version)
        const { stdout: commitid } = await execa('git', ['rev-parse', 'HEAD'])
        await execa('git', ['tag', '-a', version, '-m', commitid], {
          stdio: 'inherit'
        })
      } catch (e) {
        console.error('npm version error：', e)
      }
    }
  }
  // 生成change-log
  genChangelog(version)
}

release().catch((err) => {
  console.error(err)
  process.exit(1)
})
