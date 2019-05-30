// 加载ejs模块
var ejs = require('ejs');
var path = require('path');

// render
// var html = '<h1><%= username %></h1>';

// var result = ejs.render(html,{username: '小白'});
// console.log(result);//直接在cmd控制台输出<h1>小白</h1>

ejs.renderFile(path.join(__dirname,'index.html'),{title: '这是一个演示标题' ,msg: '你好世界'},function(err,result){
    console.log(result);
});