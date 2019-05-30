#### NPM（Node Package Manager）node包管理器

- node.js默认的，以JavaScript编写的软件包管理系统
- [npm官方网站](https://www.npmjs.com/)
- [npm官方文档](https://docs.npmjs.com/)
- npm:
  - npm网站
  - npm包管理库，存储了大量的JavaScript代码库
  - npm客户端，我们所使用的npm命令行工具，使用JavaScript开发的基于node.js的命令行工具，本身也是Node的一个包
- npm会随着node.js自动安装，安装完毕node.js后会自动安装npm
- 更新npm：npm install npm@latest -g
- **npm使用本地安装**
  - 在npm网站找到需要的包
  - 在项目的根目录下执行 `npm install 包名称` 安装
  - 在node.js代码中通过`require('包名');` 加载该模块
  - 注意：通过`npm install包名` 安装的包，会自动下载到当前目录下的`node_modules` 目录下，如果该目录不存在，则创建，如果已经存在则直接下载进去
  - 在代码中通过`require('包名');` 加载该模块
- **npm全局安装**（只是为了可以当做命令行使用而已）
  - `npm install 包名 -g` npm全局安装指的是把包安装成了一个命令行工具
    - 安装完后可以在命令行中直接使用，如可以通过mime a.txt 命令查看该文件的Content-Type
  - 全局安装做了两件事
    - 下载包到一个指定的目录
    - 创建一段命令行执行的代码



