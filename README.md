## library-rollup中后台组件库

## 主旨

用于收集日常前端工作中的通用基础组件，业务组件，业务模板等，以便后期快速通过组件的方式提高前端开发效率，减少前端一些非必要问题

## 快速上手

```js
import Vue from 'vue'
import LibraryUI from 'library-ui'
import 'library-ui/theme/index.css'

Vue.use(LibraryUI)
```

## TODO

- [ ] 待抽离可配置项至 library.config.js 下
- [ ] 集成 jest 单元测试

## 开发

```shell
npm run docs:serve
```

## 本地安装调试

---

> 推荐使用 [yalc](https://npmmirror.com/package/yalc) 或 [npm link](https://juejin.cn/post/6987716839639875591)

#### 全局安装 yalc

```shell
npm install yalc -g
#或者
yarn install yalc -g
```

#### 在 npm 组件库项目中执行发布命令

```shell
yalc publish
```

#### 在依赖该组件的项目中执行安装命令

```shell
yalc add library-ui
```

#### 本地联调完成后执行下面命令移除本地依赖

```shell
yalc remove --all
```

#### 本地更改组件库代码重新执行 build 构建，构建成功后执行以下命令更新 yalc 缓存中的代码

```shell
yalc push
```

## 构建

```shell
npm run build
```

## 发布

```shell
npm run release
```

构建成功后执行 npm publish 发布流程

## 构建文档

```shell
npm run build:docs
```

## 开发相关 Q&A

---

> 执行 _npm run install_ 命令之前，请先添加 npm 仓库源，具体步骤请查阅 [Nexus npm 使用说明](https://blog.csdn.net/weixin_44781409/article/details/109163996)

### 如何新增组件

#### 快速新增

```shell
npm run new
```

按照相关提示输入 组件名称（大驼峰命名）、组件中文名称、组件类型，组件类型中文名称

命令执行完毕后，会新增以下文件

```
project
├── docs
│   └── .vuepress
│      └── components
│          └── example
│              └── $component
│                  └── 1.vue
│
│
│
├── packages
│   └── src
│       └── $component
│           ├── src
|           │   └── main.vue
│           └── index.js
│
│
```

以下文件会修改，添加新增的组件及文档入口

```
project
├── docs
│   └── docs.json
│
└── src
    └── indes.js
```

命令执行完毕后，请重新执行 _npm run serve:docs_ 或者 _npm run build:docs_ 以使文档代码更新

#### 手动新增

> 我们不推荐手动新增组件的方式，如果一定要手动新增的话，请按照[快速新增](#快速新增)添加的文件列表自行添加

### 如何提交代码（代码规范）

项目使用 [commitlint + husky](https://github.com/conventional-changelog/commitlint) 进行提交规范检查，具体的代码提交规范，请查看 [config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

> 本地已实现 commitlint.config.js 按需设置提交规范，如有差异请检查文件内配置

为了方便代码提交，我们加上了 @commitlint/cz-commitlint 插件帮助我们快速提交代码，使用方法

```shell
npm run commit
```

然后按照代码规范依次选择/输入提交信息即可，执行完成后将代码推送至远程仓库

```shell
git push origin xxx
```

---

如果你在使用 _sourcetree_ 工具进行 commit 时 husky 钩子报错，请参考 [SourceTree : Hook failing because paths don't seem to be set correctly](https://community.atlassian.com/t5/Bitbucket-questions/SourceTree-Hook-failing-because-paths-don-t-seem-to-be-set/qaq-p/274792)

_不规范的提交信息将导致 changelog 生成有误，并影响代码回滚/发布，也影响其他开发成员的开发体验，请严格按照提交规范提交代码_
