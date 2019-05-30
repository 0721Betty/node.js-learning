// 路由模块，主要负责路由判断

// 1.创建一个router对象（router对象既是一个对象，也是一个函数）
var express = require('express');
// 加载业务模块
var handle = require('./handle.js');
var router = express.Router();


// 2.通过router对象设置（挂载）路由
router.get('/', handle.index);
router.get('/index', handle.index);
// router.get('/submit', handle.submit);
// router.get('/item', handle.item);
router.get('./add', function (req, res) {
    res.send('get请求/add');
});
router.post('./add', function (req, res) {
    res.send('post请求/add');
});

// 3.返回router对象
module.exports = router;
















// 不安全
// module.exports = function(app){
//     app.get('/',function(req,res){
//         res.send('Index');
//     });
//     app.get('/index',function(req,res){
//         res.send('Index');
//     });
//     app.get('/submit',function(req,res){
//         res.send('Submit');
//     });
//     app.get('/item',function(req,res){
//         res.send('Item');
//     });
//     app.get('./add',function(){
//         res.send('get请求/add');
//     });
//     app.post('./add',function(){
//         res.send('post请求/add');
//     });
// }

