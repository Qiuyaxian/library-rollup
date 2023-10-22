---
title: 组件库发布
---

## 1. 构建组件库版本

```bash
npm run release

# OR

yarn release
```

## 2. 将组件库发布到 npm 内网私服

::: warning 发布事项
发布前需登录npm账号，按照指示输入对应账号密码
```bash
npm login
```
:::

```bash
npm publish
```

::: warning
如果将组件库发布到 npm 内网私服，需要指定好发布源 registry
```bash
npm publish --registry=xxx
```
:::

## 3.提交组件库

```bash
git push origin xxx
```

## 4.提交 tag

::: warning
在构建组件库版本的时候，内置自动命令进行 git tag 生成，需手动提交到远端代码仓
:::

```bash
git push origin v1.0.0
```
