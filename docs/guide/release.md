---
title: 构建组件库
---

## 1. 构建组件库

```bash
npm run build

# OR

yarn build
```

## 2. 本地调试组件库

#### 1.安装 yalc

```bash
npm install yalc -g   // 全局安装

# OR

yarn add yalc -g
```

#### 2.执行本地发布命令

```bash
yalc publish
```

#### 3.在项目中执行安装命令

```bash
yalc add library-ui
```

::: tip 调试事项
安装成功后，在项目根目录中会存在一个 .yalc 文件夹，作用类似 npm 的 node_modules
:::

::: danger
调试完成后最好移除调试依赖，避免出现不必要的问题
:::

#### 4.移除依赖

```bash
yalc remove add library-ui  // 具体的某一个包

# OR

yalc remove --all // 移除所有依赖并还原
```
