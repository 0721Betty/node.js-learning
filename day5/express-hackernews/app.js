// 负责启动服务

// 1.加载express模块
var express = require('express');
// 加载config.js模块 
var config = require('./config.js');
// 加载路由模块
var router = require('./router.js');

// 2.创建app对象
var app = express();

// 3.注册路由,设置app与router相关联,'/'表示访问该根目录
//app.use('/',router);
// 等价于下面的写法
app.use(router);


// 4.启动服务
app.listen(config.port,function(){
    console.log('http://localhost:' + config.port);
});