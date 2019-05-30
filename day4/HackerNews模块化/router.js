// 路由模块负责路由判断

// 步骤：
// 1.思考：该模块中要封装什么代码
// 2.思考：这些代码有用到外部数据么，是否需要通过参数将这些数据传递到当前这个模块中
// 3.当前模块对外需要暴露的东西
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var handler = require('./handler.js');
module.exports = function(req,res){
    if(req.url === '/' || req.url === '/index' && req.method === 'get'){
        handler.index(req,res);
    }else if(req.pathname === '/item' && req.method === 'get'){
        handler.item(req,res);
    }else if(req.url === '/submit' && req.method === 'get'){
        handler.submit(req,res);
    }else if(req.url.startsWith('/add') &&req.method === 'get'){
        handler.addGet(req,res);
    }else if(req.url === '/add' &&req.method === 'post'){
        handler.addPost(req,res);
    }else if(req.url.startsWith('/resources')&& req.method === 'get'){
        handler.static(req,res);
    }else{
        handler.handlerErrors(req,res);
    }
}




