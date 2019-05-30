// demo1:

//var _ = require('underscore');

// 演示：
// var names = ['张三','香香','小白'];
// var ages = [18,19,20];
// var genders = ['男','女','女'];

// 压缩
// var result = _.zip(names,ages,genders);
// console.log(result);

// 解压
// result = _.unzip(result);
// console.log(result);


// demo2:

var _ = require('underscore');

// 声明了一段代码模板代码的HTML文档
var html = '<h2><%= name %></h2>';
// template()函数的返回值依然是一个函数
var fn = _.template(html);
// 调用template()返回的这个函数fn
// fn 接收一个数据对象，并用该数据对象将html中的模板内容替换生成最终的HTML代码
html = fn({name: '大大'});
console.log(html);

console.log(fn.toString());

// fn函数的源代码
function fn(data){
    return render.call(this,data, _);
}
