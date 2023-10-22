module.exports = {
  rootDir: './',
  testEnvironment: 'jsdom',
  // 启动jest需要的文件
  setupFiles: ['<rootDir>/tests/setup.js'],
  testMatch: ['**/spec/**/*.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    // 用 `vue-jest` 处理 `*.vue` 文件
    '.*\\.(vue)$': 'vue-jest',
    // 用 `babel-jest` 处理 js
    '.*\\.(js)$': 'babel-jest'
  },
  collectCoverage: true, // 是否创建报告
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'], // 创建报告的文件来源
  coverageReporters: ['html', 'text-summary'], // 报告的格式
  coverageDirectory: '<rootDir>/tests/coverage'
}
