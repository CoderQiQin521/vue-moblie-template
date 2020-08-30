## 简介

> 移动端 vue 项目模版

## 特点

1. 网络请求封装&异常处理
2. mock 数据(无线上数据也可以 debug)
3. api 模块化管理
4. 常用 utils
5. 请求传参加密
6. 单元测试
7. restclient 接口测试
8. tailwindcss
9. px2rem 自动适配
10. commitizen 规范 git 提交

## 目录说明

|--mock mock 服务器
|--public 静态资源
|--src 源码
|--test 单元测试

## 提交规范

1. feat: 新功能(feature)
2. fix: 修复 bug
3. docs: 文档更新
4. style: 代码格式化(不影响代码含义)
5. refactor: 重构,不修复 bug 也不添加新特性
6. perf: 提高性能的代码更改 test: 增加测试
7. build: 影响构建系统或外部依赖(gulp,npm)
8. ci: 更改 CI 配置文件和脚本
9. chore: 不修改 src 或测试文件的修改
10. revert: 恢复之前的提交

## 常用命令

测试接口`https://www.fastmock.site/mock/de8258e7b013fd4589f4d7ed66c78b75/testmock/demo`

`npm get registry`

`npm config set registry https://registry.npm.taobao.org`

`git remote add orgin git@gitee.com:CoderQiQin/scaffold-vue.git`

`git remote set-url origin URL`

`git tag onlinetest-v1.0.0`

`git push --tag`
.gitkeep 文件保持目录

## 依赖

-   [tailwindcss](https://www.tailwindcss.cn/)
-   [licia](https://licia.liriliri.io/docs.html)

## TODO

-   vue 打包配置线测环境-ab 环境-正式环境
-   vw & postcss 适配 postcss-px-to-viewport
-   Event Bus
-   deploy
-   vuex-persistedstate 持久化
-   装饰器 (防抖,节流)
-   常用正则

```
'postcss-px-to-viewport': {
  // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
  viewportWidth: 375,
  // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
  // viewportHeight: 1334,
  // 指定`px`转换为视窗单位值的小数位数
  unitPrecision: 3,
  // 指定需要转换成的视窗单位，建议使用vw
  viewportUnit: 'vw',
  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
  selectorBlackList: ['.ignore'],
  // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
  minPixelValue: 1,
  // 允许在媒体查询中转换`px`
  mediaQuery: false
}
```

## prettierrc

与 eslint 集成 --dev eslint-plugin-prettier
cli:命令行方式操作 prettierrc,通常配合 git hook 使用
文件忽略 .prettierignore(语法同 gitignore)
代码中忽略 // prettier-ignore

参考: https://zhuanlan.zhihu.com/p/87586114\
https://zhuanlan.zhihu.com/p/81764012?from_voters_page=true
插件: https://github.com/prettier/prettier-vscode
