// 入口文件 

// ------------实现了一个基本的helloworld程序--------------------------------------------
// 1.加载express 模块
//var express = require('express');

// 2.创建一个app对象（类似于创建一个server对象）
//var app = express();

// 通过中间件function(req,res){}监听指定路由的请求,
//app.get('/index',function(req,res){//表明必须===/index
    //res.end('hello world');
    //res.send('你好Hello World!!!!!!');
//});

// 3.启动服务
// app.listen(8080,function(){
//     console.log('请访问:http://localhost:8080');
// });

// ------------express中注册路由的方法---------------------------------------------
var express = require('express');
var app = express();

// app.get('/index',function(req,res){
//     res.send('hello world 你好世界');
// });

// app.use('/index',function(req,res){
//     res.send('hello world 你好世界');
// });

// 通过正则表达式注册路由
// app.get(/^\/index(\/.+)*$/,function(req,res){
//     res.send('hello world 你好世界');
// });

// 通过req.params获取路由中的参数
app.get('/news/:year/:month/:day',function(req,res){
    res.send(req.params);
})

// 注册一个请求/的路由
// app.get('/',function(req,res){
//     res.send('Index');
// });
// 含义：
// 1.请求的方法必须是get
// 2.请求路径的pathname必须等于(===)/submit
// app.get('/submit',function(req,res){
//     res.send('Submit');
// });
// app.get('/item',function(req,res){
//     res.send('Item');
// });
// app.get('./add',function(req, res){
//     res.send('get请求/add');
// });
// app.post('./add',function(req, res){
//     res.send('post请求/add');
// });

app.listen(8080,function(){
    console.log('请访问:http://localhost:8080');
});