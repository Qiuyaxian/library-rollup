---
title: 组件开发
---

## 1. 组件库目录说明

```
|-- .DS_Store
|-- .cz-config.js
|-- .czrc
|-- .editorconfig
|-- .eslintignore
|-- .eslintrc.js
|-- .gitignore
|-- .npmignore
|-- .prettierignore
|-- .prettierrc
|-- .stylelintignore
|-- .stylelintrc.js
|-- CHANGELOG.md
|-- Dockerfile
|-- Jenkinsfile
|-- README.md
|-- babel.config.js
|-- changelog-option.js
|-- commitlint.config.js
|-- components.json
|-- directoryList.md
|-- features.js
|-- husky.config.js
|-- jest.config.js
|-- lint-staged.config.js
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- stats.html
|-- versionrc.js
|-- yarn-error.log
|-- yarn.lock
|-- .husky
|   |-- _
|       |-- .gitignore
|       |-- husky.sh
|-- .vscode
|   |-- settings.json
|-- build（构建目录）
|   |-- common-config.js
|   |-- create-entry.js
|   |-- rollup.common.config.js
|   |-- rollup.config.js
|   |-- rollup.esm.config.js
|   |-- rollup.umd.config.js
|   |-- new
|       |-- create-entry.js
|       |-- index.js
|       |-- new-component.js
|       |-- new-doc.js
|       |-- new-styleless.js
|       |-- question.js
|       |-- utils.js
|-- docs（组件库文档）
|   |-- .DS_Store
|   |-- README.md
|   |-- docs.json
|   |-- .vuepress
|   |   |-- .DS_Store
|   |   |-- config.js
|   |   |-- enhanceApp.js
|   |   |-- components
|   |   |   |-- .DS_Store
|   |   |   |-- demo-block
|   |   |   |   |-- index.js
|   |   |   |-- example（组件说明文档案例）
|   |   |       |-- .DS_Store
|   |   |       |-- demo
|   |   |           |-- 1.vue
|   |   |-- public（组件库静态资源）
|   |   |-- styles
|   |       |-- palette.styl
|   |-- common（公共组件说明文档）
|   |   |-- .DS_Store
|   |   |-- demo.md
|   |-- guide（组件库教程文档）
|       |-- component.md
|       |-- doc.md
|       |-- git.md
|       |-- publish.md
|       |-- release.md
|-- packages（组件库组件）
|   |-- .DS_Store
|   |-- demo
|       |-- index.js
|       |-- src
|           |-- index.vue
|-- scripts（自动化脚本）
|   |-- gen-changelog.js
|   |-- package-publish.js
|   |-- release.js
|   |-- utils.js
|   |-- changelog
|       |-- conventional-changelog.js
|       |-- conventional-recommended-bump.js
|       |-- index.js
|       |-- parser-opts.js
|       |-- writer-opts.js
|       |-- templates
|           |-- commit.hbs
|           |-- footer.hbs
|           |-- header.hbs
|           |-- template.hbs
|-- src（组件库公共资源）
|   |-- .DS_Store
|   |-- index.js（组件库入口）
|   |-- assets（组件库图片，字体等）
|   |   |-- logo.png
|   |-- styles（组件库样式）
|       |-- element-theme.scss
|-- tests（组件库单元测试）
    |-- setup.js
    |-- spec
        |-- component.spec.js
```

## 2. 如何开发组件

#### 1.通过命令快速创建组件

```bash
npm run new

# OR

yarn new
```

#### 2.根据提示输入组件名

::: tip
推荐使用驼峰大小写方式声名，如 <font color="red">Demo</font> 等
:::

#### 3.选择组件所属业务类型

::: tip
默认公共组件组，也可手动输入一个新的组，如 <font color="red">财务业务</font> 等
:::

#### 4.自动生成组件以及组件文档

命令执行成功后在项目中自动创建以下文件

::: tip 创建组件
在 src 下的 packages 目录中创建 xx 组件
:::

::: tip 创建组件文档
在 src 下的 docs 中创建  xx 组件文档 xx.md
:::

::: tip 创建组件使用示例
在 src 下的 docs 中创建组件使用示例 xx.vue
:::
