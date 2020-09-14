yarn 核心命令
1. 初始化
yarn init [--yes/-y] 
2. 安装
添加指定包 yarn [global] add package-name [--dev/-D] [--exact/-E] // 可选是开发依赖，和精准安装某个包

安装所有依赖： yarn install [--prod/--production]   //可选是只安装开发依赖
3. 脚本和本地CLI
运行脚本：yarn run 脚本名称
| start、 stop 、 test可以省略run
运行本地安装的CLI: yarn run CLI名



**查询**
1.查看安装bin目录
yarn [global] bin

2. 查询包信息
yarn info 包名 [子信息]

yarn [global] list
3. 更新
检测需要更新的包：yarn outdated
更新包： yarn [global] upgrade 包名
4. 移除包
yarn remove 包名 

**yarn其他有趣的命令**

1. ```yarn check``` 检测package.json和yarn.lock文件锁定的依赖的版本是否不一致
2. ```yarn audit``` 检测依赖的包是否有漏洞
3. ```yarn why 包名``` 查看为什么安装某个包
4. ```yarn create 脚手架 创建项目的名字```
该命令会下载脚手架，并且会利用构建项目
例如：yarn create react-app my-app
1. 下载脚手架create-react-app
2. 创建项目 my-app