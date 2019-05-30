// 当前项目（包）的入口文件

// 1.加载http模块
var http = require('http');

var fs = require('fs');
var path = require('path');
var mime = require('mime');
// 2.创建服务
http.createServer(function(req,res){

    // 设计路由
    // 当用户请求/或/index时，显示新闻列表---get请求
    // 当用户请求/item时显示新闻详情---get请求
    // 当用户请求/submit时，显示添加新闻页面---get请求
    // 当用户请求/add时，将用户提交的新闻保存到data.json文件中---get请求
    // 当用户请求/add时，将用户提交的新闻保存到data.json文件中---post请求
    req.url = req.url.toLowerCase();//将大写转为小写
    req.method = req.method.toLowerCase();

    // 先根据用户请求的路径（路由），将对应的HTML页面显示出来
    if(req.url === '/' || req.url === '/index' && req.method === 'get'){
        fs.readFile(path.join(__dirname,'views','index.html'),function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        });
        //1.读取index.html并返回
    }else if(req.url === '/item' && req.method === 'get'){
        fs.readFile(path.join(__dirname,'views','item.html'),function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        });
        // 2.读取item.html并返回
    }else if(req.url === '/submit' && req.method === 'get'){
        fs.readFile(path.join(__dirname,'views','submit.html'),function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        });
        // 3.读取submit.html并返回
    }else if(req.url === '/add' &&req.method === 'get'){
        // 表示get方法提交一条新闻
    }else if(req.url === '/add' &&req.method === 'post'){
        // 表示post方法提交一条新闻
    }else if(req.url.startsWith('/resources')&& req.method === 'get'){
        // 如果请求是以/resources开头，并且是get请求，就认为用户是要请求静态资源
        // resources/images/x.png
        fs.readFile(path.join(__dirname,req.url),function(err,data){
            if(err){
                res.writeHead(404,'Not Found',{'Content-Type':'text/html;charset = utf-8'});
                res.end('404,not found');
                return;
            }
            res.setHeader('Content-Type',mime.getType(req.url));
            res.end(data);  
        });
    }else{
        res.writeHead(404,'Not Found',{
            'Content-Type':'text/html;charset = utf-8'
        });
        res.end('404,Page Not Found');
    }
}).listen(8080,function(){
    console.log('服务器已启动，请访问：http://localhost:8080');
});

