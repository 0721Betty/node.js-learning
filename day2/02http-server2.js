// 根据用户不同请求，读取不同HTML文件响应

// 加载http模块
var http = require('http');

// 加载fs模块
var fs = require('fs');

// 加载path模块
var path = require('path');

// 创建http服务,并启动该服务
http.createServer(function(req,res){
    // 此时不需要设置响应报文头解决乱码，因为html文件中已经有写charset = utf-8
    if(req.url === '/' || req.url === '/index'){
        // 读取文件
        // var filename = path.join(__dirname,'02index-1.html');
        fs.readFile(path.join(__dirname,'02index-1.html'),function(err,data){
            if(err){
                throw err;
            }
            // 把读取到的内容直接发送给浏览器
            res.end(data);
        });
    }else if(req.url === '/login'){
        // 读取文件
        // var filename = path.join(__dirname,'02index-2.html');
        fs.readFile(path.join(__dirname,'02index-2.html'),function(err,data){
            if(err){
                throw err;
            }
            // 把读取到的内容直接发送给浏览器
            res.end(data);
        });
    }else if(req.url === '/list'){
        // 读取文件
        // var filename = path.join(__dirname,'02index-3.html');
        fs.readFile(path.join(__dirname,'02index-3.html'),function(err,data){
            if(err){
                throw err;
            }
            // 把读取到的内容直接发送给浏览器
            res.end(data);
        });
    }else{
        // 读取文件
        // var filename = path.join(__dirname,'02index-4.html');
        fs.readFile(path.join(__dirname,'02index-4.html'),function(err,data){
            if(err){
                throw err;
            }
            // 把读取到的内容直接发送给浏览器
            res.end(data);
        });
    }

}).listen(8080,function(){
    console.log('服务器已启动，请访问：http://localhost:8080');
});