## 简介

> 移动端项目模版

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

## 依赖

- [tailwindcss](https://www.tailwindcss.cn/)
- [licia](https://licia.liriliri.io/docs.html)

## TODO

- vue 打包配置线测环境-ab 环境-正式环境
- vw & postcss 适配
- Event Bus
- deploy
- vuex-persistedstate 持久化
- 装饰器 (防抖,节流)
- 常用正则
