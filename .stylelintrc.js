module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules'
  ],
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-scss',
  overrides: [
    // 扫描 .vue/html 文件中的 <style> 标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    indentation: 4,
    'no-descending-specificity': null, // 禁止较低特异性的选择器覆盖较高特异性的选择器,
    'media-feature-range-notation': null,
    'font-family-no-missing-generic-family-keyword': null,
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment']
      }
    ],
    'scss/at-import-partial-extension': null, // 解决不能使用 @import 引入 scss 文件
    'property-no-unknown': null, // 禁止未知的属性
    'no-empty-source': null, // 禁止空源码
    'string-quotes': 'single', // 指定字符串使用单引号或双引号 "single(单引号)"|"double(双引号)"
    'selector-class-pattern': [
      // 命名规范 -
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:[.+])?$',
      {
        message: 'Expected class selector to be kebab-case'
      }
    ],
    'value-keyword-case': null, // 解决在 scss 中使用 v-bind 大写单词报错
    'selector-pseudo-element-no-unknown': null, // 禁止未知的伪元素选择器
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep']
      }
    ]
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
