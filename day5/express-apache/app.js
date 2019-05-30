// 入口文件
// 模拟静态资源服务器（Apache服务器）

// 加载express模块
var express = require('express');
var path = require('path');

// 创建app对象
var app = express();
// 处理静态资源的方法
// var fn = express.static(path.join(__dirname,'public'));
// // 注册路由
// app.use('/',fn);

// 等价于上面的写法，'/'参数一：虚拟路径
app.use('/',express.static(path.join(__dirname,'public')));

// 启动服务
app.listen(8080,function(){
    console.log('http://localhost:8080');
});