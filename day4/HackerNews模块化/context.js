// 扩展模块，对req和res对象进行扩展

// 希望在该模块中做什么：
// 1.为req增加一个query属性，该属性中保存的就是用户get请求提交过来的数据
// - req.query
// 2.为req增加一个pathname属性
// - req.pathname
// 3.为res增加一个render函数



var url = require('url');
var fs = require('fs');
var mime = require('mime');
var _ = require('underscore');

// 让当前模块对外暴露一个函数，通过这个函数将index.js中的req和res 传递到当前context.js这个模块中
module.exports = function(req,res){
    var urlObj = url.parse(req.url.toLowerCase(),true);

    // 1.为req增加query属性
    req.query = urlObj.query;
    // 2.为req增加pathname属性
    req.pathname = urlObj.pathname;
    // 3.把请求方法req.method转换为小写
    req.method = req.method.toLowerCase();
    // 4.为res增加一个render函数
    res.render = function(filename,tplData){
        fs.readFile(filename,function(err,data){
            if(err){
                res.writeHead(404,'Not Found',{'Content-Type':'text/html;charset = utf-8'});
                res.end('404,not found');
                return;
            }
            // 如果用户传递了模板数据，那么就使用underscore的template方法进行替换
            // 如果用户没有传递模板数据，那么就不进行替换
            if(tplData){
                // 如果用户传递了模板数据，表示要进行模板替换
                var fn = _.template(data.toString('utf8'));
                data = fn(tplData);
            }
            res.setHeader('Content-Type',mime.getType(filename));
            res.end(data);  
        });
    };
}
