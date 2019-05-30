// 根据用户不同请求返回不同html文件（带图片）

var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function(req,res){
    if(req.url === '/' || req.url === '/index'){
        var filename = path.join(__dirname,'02index-1.html');
        fs.readFile(filename,function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        });
    }else if(req.url === '/list'){//该url只是一个标识，随便取个名字然后在浏览器输入就可以返回下面的html文件
        fs.readFile(path.join(__dirname,'03index-1.html'),function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
            // 直接这样图片加载不出来，因为图片的那个路径也需要再写一个条件语句
        });
    }else if(req.url === '/images/6.4.png'){
        fs.readFile(path.join(__dirname,'images','6.4.png'),function(err,data){
            if(err){
                throw err;
            }
            // 告诉浏览器其是一张图片
            res.setHeader('Content-Type','image/png');
            res.end(data);
        });
    }else{
        fs.readFile(path.join(__dirname,'02index-4.html'),function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        });
    }

}).listen(8080,function(){
    console.log('服务器已启动，请访问：http://localhost:8080');
});