const chalk = require('chalk')
const log = console.log
module.exports = {
  log: function (message) {
    return log(chalk.yellow(message))
  },
  success: function (message) {
    return log(chalk.green(message))
  },
  error: function (message) {
    return log(chalk.red(message))
  }
}
