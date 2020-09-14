

CommonJS模块化引用, 如果不使用./开头或者../开头
例如```requrie('lodash')```
1.  首先去当前目录下的node_modules目录(没找到node_modules目录会一直往上层找，直到顶层)，找lodash.js文件
2.  找不到，则将lodash当做文件夹，寻找lodsh目下下package.json中main配置的入口地址
```js
package.json
{
  main: './index.js'
}
```
3.  没有配置入口文件则，找loadsh下的index.js





三种开发环境
1. 开发环境
2. 生产环境
3. 测试环境

node中有个全局变量叫global，类似浏览器中的window

global中有个属性叫做**process**,可以直接使用，该属性是一个对象，包含了当前运行node程序的计算机的很多信息，
其中有个属性叫env,是一个对象，包含了计算机的所有系统变量

通过我们通过系统变量NODE_ENV的值，来判断node程序处于何种变量环境下

 有两种设置NODE_ENV的值
 1. 永久设置
 通过右击我的电脑,点击高级系统设置,点击环境变量，新建系统变量即可
 2. 临时设置
 通过配置scripts脚本，在设置好了的NODE_ENV后启动程序，
 （为了避免不哦她那个系统的设置方式的差异，可以使用cross-env对环境变量进行设置）
```js
//在package.json中设置
"scripts": {
    "start": "set NODE_ENV=development&& node index.js"
  }
// 先设置当前的环境变量在 启动后面的脚本
```


**npm其他命令**

精确安装最新版本
npm install -E 包名
npm install --save-exact 包名

安装指定版本
npm install 包名@版本号


1. 查询包的安装路径
   npm root [-g]
2. 查看包信息
   npm view 包名 [子信息(例如：name、version)]
   # view / info / show 
3. 查询安装包
   npm list [-g] [--depth=依赖深度]           // 依赖深度为数字



更新

1. 查询那些包需要更新
npm outdated

2. 更新所有包
npm update

3. 更新npm本身
npm i -g npm
或者
npm update -g npm


卸载包

npm uninstall [-g] 包名
# uninstall / remove / rm /r


npm包配置

npm config ls [-l] [--json] 查看当前所有生效的配置
npm config ls -ls 列表的形式列出所有配置包括默认配置
npm config ls --json 以json的形式列出所有配置包括默认配置

1. 获取某个配置项
npm config get 配置项
2. 设置某个配置项
npm config set 配置项=值
3. 移除某个配置项
npm config delete 配置项





**发布包**

## 准备工作
1. 移除淘宝镜像源(因为需要npm注入包)
   npm config delete registry
2. 到npm官网注册一个账号，并完成邮箱认证
3. 本地使用npm cli进行登录
   1. 使用命令```npm login```登录
   2. 使用命令```npm whoami```查看当前登录的账号
   3. 使用命令```npm logout```注销
4. 创建工程根目录
   test1235
5. 使用npm init 初始化目录
   注意:**包名不能为中文和大写字母**
   
   创建一个文件LISCENSE,
   将协议内容粘贴过来(开源协议：https://choosealicense.online/appendix/)

## 发布页
1. 开发
2. 确定版本
3. 使用命令```npm publish```发布
4. 每次发布都要修改版本号





清除全局缓存包
npm clean cache