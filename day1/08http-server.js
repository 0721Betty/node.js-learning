// 通过node.js编写http服务程序-极简版本
// 步骤：
// 1.加载http模块
var http = require('http');
// 2.创建http服务
var server = http.createServer();

// 3.为http服务对象添加request事件处理程序监听用户的请求事件
// request简写req，该对象包含了用户请求报文中的所有内容，通过该对象可以获取所有用户提交过来的数据。
// response简写res，该对象用来向用户响应一些数据，当服务器要向客户端响应数据的时候必须使用response对象
// 有了request对象和response对象，就既可以获取用户提交的数据，也可以向用户响应数据
server.on('request',function(req,res){
    // body...

    // 解决乱码的思路（中文会出现乱码）：
    // 服务器通过设置http响应报文头，告诉浏览器使用相应的编码解析来网页
    // text/plain表示纯文本 text/html表示html文件
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.write('hello,<h1>nodejs</h1>世界你好');

    // 对于每一个请求服务器必须结束响应，否则客户端（浏览器）会一直等待服务器响应结束
    res.end();
});
// 4.开启http服务监听，准备接收客户端请求
server.listen(8080,function(){
    console.log('服务器启动了，请访问:http://localhost:8080');
});