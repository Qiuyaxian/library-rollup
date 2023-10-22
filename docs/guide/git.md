---
title: 提交组件
---

## 1. 开发分支规范

- master 主分支

- feat/dev 开发分支

- feat/demo 案例组件分支

- feat/xx-xx xx组件分支

::: warning 分支合并
1. 开发新组件使用 feat/xx-xx 命名方式，后续组件修复，迭代均在此分支上完成
2. 发布时将 feat/xx-xx 分支合并到 feat/dev 开发分支进行发布测试
3. 测试完成后将 feat/xx-xx 分支合并到 master 并发布版本
:::

## 2. 提交代码到代码仓

```bash
npm run commit

# OR

yarn commit
```

::: warning 提交事项
命令运行结束后需要手动执行 git push，将本地代码推送至于远程代码（可用命令工具，也可用 svn，sourceTree 等代码管理工具）
:::
