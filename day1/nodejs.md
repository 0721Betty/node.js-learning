[TOC]

#### 概念

- node.js是一个开发平台
- 该平台使用的编程语言是JavaScript
- node.js 平台是基于 Chrome V8 JavaScript 引擎构建
- 基于 node.js 可以开发控制台程序 （命令行程序、CLI程序）、桌面应用程序(GUI) (借助 node-webkit、electron等框架实现)、Web应用程序(网站)
- nodejs本身就是Web服务器，无需Apache 、IIS等

#### 特点

- 事件驱动（当事件被触发时，执行传递过去的回调函数）
- 非阻塞 I/O 模型（当执行 I/O操作时，不会阻塞线程）
- 单线程
- 拥有世界最大的开源库生态系统 ----npm

#### node.js网站

- 官方网站：https://nodejs.org
- 中文网：http://nodejs.cn/
- 中文社区：https://cnodejs.org/

#### nvm-windows

- https://github.com/coreybutler/nvm-windows
- 常用命令：
  + nvm version
  + nvm install latest
  + nvm install 版本号
  + nvm uninstall 版本号
  + nvm list
  + nvm use 版本号

### 在nodejs上编写程序

#### REPL介绍

1. REPL 全称：Read-Eval-Print-Loop(交互式解释器)
   - R 读取 - 读取用户输入，解析输入了JavaScript数据结构并存储在内存中
   - E 执行 - 执行输入的数据结构
   - P 打印 - 输出结果
   - L 循环 - 循环操作以上步骤直到用户两次按下 ctrl -c 按钮退出
2. 在REFL中编写程序（类似于浏览器开发人员工具中的控制台功能）
   + 直接在控制台（cmd里面）输入 `node`命令进入REFL环境
3. 按两次ctrl+c退出REFL界面或者输入`.exit`退出REFL界面
   - 按住ctrl键不要放然后按两下c键

##### err first 错误优先，回调函数里面的第一个参数为err

##### 在请求服务器的时候，url就是一个标识





