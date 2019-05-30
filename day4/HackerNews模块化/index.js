// 模块一（服务模块）：负责启动服务
// 模块二（扩展模块）：负责扩展req和res对象，为req和res增加一些更加方便好用的api
// 模块三（路由模块）：负责路由判断
// 模块四（业务模块）：负责处理具体路由的业务的代码
// 模块五（数据操作模块）：负责进行数据库操作
// 模块六（配置模块）：负责保存各种项目中用到的配置信息

// 1.加载http模块
var http = require('http');
var context = require('./context.js');
var router = require('./router.js');
var config = require('./config.js');
// 2.创建服务
http.createServer(function(req,res){
    // 调用context.js模块的返回值（函数），并将req和res对象传递给context.js模块
    context(req,res);
    // 调用router.js模块的返回值（函数），并将req和res对象传递给router.js模块
    router(req,res);
}).listen(config.port,function(){
    console.log('http://localhost'+config.port);
});

