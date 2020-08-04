# egg-vue-framework

egg与vue-cli组合共同构建项目

## QuickStart

1. 使用创建egg项目
```
$ mkdir egg-example && cd egg-example
$ npm init egg --type=simple
$ npm i
```
2. 安装egg-vue-framework框架，并配置
```
$ npm install egg-vue-framework
```

```
// package.json中
{
  ...
  "egg": {
    "framework": "egg-vue-framework"
  },
  ...
  "scripts": {
    // script 参考如下
    // 在本地运行npm run start 命令时，必须明确指定NODE_ENV 或 EGG_SERVER_ENV 为非local的值，另外，执行start前，必须先执行过build
    "start": "cross-env EGG_SERVER_ENV=prod && egg-scripts start --daemon --title=egg-server-test",
    "stop": "egg-scripts stop --title=egg-server-test",
    "dev": "egg-bin dev",
    // 添加build命令，用于构建vue代码
    "build": "node node_modules/egg-vue-framework/lib/build.js"
  }
}

```
3. 集成vue项目目录

- 目前只支持vue项目的默认的单页构建模式
- 在项目目录/app中，创建web目录，可以直接拷贝已有的vue项目或在此目录下用vue-cli初始化vue应用
- 将vue目录的babel.config.js 和 postcss.config.js 从web目录移到项目根目录，web目录中基本只保留vue.config.js 和eslintrc的配置文件
- 在app/web目录中的vue.config.js中指定，publicPath: 'web/'，另外，当前版本不支持手动配置：outputDir、assetsDir、indexPath、pages 这些对编译资源结构有较大影响的选项。

4. 调试运行
```
npm run dev
// 项目启动端口为8001，本地调试运行另外会同时启动8002作为devServer服务器
```

5. 部署项目
```
npm run build   // 在执行start命令前，必须先build
npm run start
```
