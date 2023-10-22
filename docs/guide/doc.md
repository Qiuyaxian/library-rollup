---
title: 组件文档
---

## 1. 本地运行组件库文档

```bash
npm run serve:docs

# OR

yarn serve:docs
```

## 2. 打包组件库文档

```bash
npm run build:docs

# OR

yarn build:docs
```
::: warning 构建提示
构建好后的组件库文档直接输出在根目录的 <font color="red">docs-dist</font>，可直接用于部署
:::

## 3. 如何开发组件文档

该文档基于 vuepress 构建，详细用法请前往 [vuepress官网](http://firstappear.com/zh/guide/markdown.html#header-anchors)

### 1. 打开根目录下的 docs 文件夹，选择业务线，再打开对应组件md文件

```
|-- guide（组件库教程文档）
    |-- component.md
    |-- doc.md
    |-- publish.md
    |-- release.md
|-- common（公共组件说明文档）
    |-- demo.md
```

### 2. 在 docs.json 中配置文档文件路径

```js
[
  {
    "title": "公共组件",
    "name": "common",
    "collapsable": false,
    "children": [
      "/common/demo"
    ]
  }
]

```

### 3. 为组件编写使用示例

::: tip
在 docs 的 .vuepress 文件夹下的 components 中的 example 存放本组件库的组件示例文件
:::

```
|-- .vuepress
|   |-- .DS_Store
|   |-- config.js
|   |-- enhanceApp.js
|   |-- components
|   |   |-- .DS_Store
|   |   |-- demo-block
|   |   |   |-- index.js
|   |   |-- example（组件说明文档案例）
|   |       |-- .DS_Store
|   |       |-- demo
|   |           |-- 1.vue

```