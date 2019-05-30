// 模拟apache服务器
// 将所有的静态资源放在一个public目录中，这样就不用写很多if语句

var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
// 使用mime模块时在cmd窗口下切换到当前js文件所在目录，然后输入npm install mime安装即可使用，下面用mime调用getType方法
http.createServer(function(req,res){
    // 1.获取用户的请求路径req.url

    // 2.获取public目录的完整路径
    var publicDir = path.join(__dirname,'public');

    // 3.根据public的路径和用户请求得路径，最终计算出用户请求的静态资源的完整路径
    var filename = path.join(publicDir,req.url);
    //console.log(filename);

    // 4.根据文件的完整路径去读取该文件，如果读到了，则把文件返回给用户，没读到就返回404
    fs.readFile(filename,function(err,data){
        if(err){
            res.end('文件不存在 404');
        }else{
            // 通过第三方模块mime,来判断不同的资源对应的Content-Type类型
            res.setHeader('Content-Type',mime.getType(filename));
            res.end(data);
        }
    }); 
    //res.end('over');
}).listen(8080,function(){
    console.log('服务器已启动，请访问：http://localhost:8080');
});