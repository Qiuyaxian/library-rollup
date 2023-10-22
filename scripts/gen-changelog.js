const execa = require('execa')
const conventionalChangelog = require('conventional-changelog')
const legoChangelogConfig = require('./changelog')

const releaseStart = async (version) => {
  const fileStream = require('fs').createWriteStream(`CHANGELOG.md`)
  conventionalChangelog({
    config: legoChangelogConfig,
    releaseCount: 0,
    pkg: {
      transform(pkg) {
        pkg.version = `v${version}`
        return pkg
      }
    }
  })
    .pipe(fileStream)
    .on('close', async () => {
      await execa('git', ['add', 'CHANGELOG.md'], { stdio: 'inherit' })
      await execa(
        'git',
        ['commit', '-m', `chore: ${version} changelog [ci skip]`],
        {
          stdio: 'inherit'
        }
      )
    })
    .on('error', (err) => {
      console.log(err)
    })
}

module.exports = function (version) {
  releaseStart(version).then(() => {
    console.log('执行完毕')
  })
}
