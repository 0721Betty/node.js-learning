// 构建http服务程序，根据不同请求做出不同响应

// 1.加载http模块
var http = require('http');
// 2.创建http服务
// var server = http.createServer();
// server.on('request',function(req,res){
//     res.setHeader('Content-Type','text/html;charset=utf-8');
//     res.write('hello<h1>nodejs</h1>世界加油');
//     res.end();
// });
// server.listen(8080,function(){
//     console.log("服务器启动了，请访问：http://localhost:8080");
// });


// 2.创建http服务链式编程
http.createServer(function(req,res){

    // 获取用户的请求路径req.url
    //console.log(req.url);

    // 结束响应
    //res.end();

    // 解决中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8');
    // 通过req.url获取用户请求的路径，根据不同的请求路径，服务器做出不同的响应 
    if(req.url === '/' || req.url === '/index'){
        res.end('hello index');//是res.write('hello index')与res.end()的简写
    }else if(req.url === '/login'){
        res.end('hello login');
    }else if(req.url === '/list'){
        res.end('hello list');
    }else if(req.url === '/register'){
        res.end('hello register');
    }else{
        res.end('404,not found,客户端错误，没有该路径的信息');
    }
    
}).listen(8080,function(){
    console.log('服务器已启动，请访问http://localhost:8080');
});