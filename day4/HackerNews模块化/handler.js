// 模块四（业务模块）：负责处理具体路由的业务的代码
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var config = require('./config.js');

// 处理请求 /和/index的业务方法
module.exports.index = function (req, res) {
    // 1.读取data.json文件中的数据，并将读取到的数据转换为list数组
    readNewsData(function (list) {
        // 2.在服务器端使用模板引擎，将list中的数据和index.html文件中的内容结合渲染给浏览器（客户端）
        res.render(path.join(__dirname, 'views', 'index.html'), {
            list: list_news
        });
    });
}
// 处理请求 /submit的业务方法
module.exports.submit = function(req, res){
    res.render(path.join(config.viewPath,'submit.html'));
    // 3.读取submit.html并返回
}
// 处理请求 /item的业务方法
module.exports.item = function (req, res) {
    //item.html
    readNewsData(function (list_news) {
        var model = null;
        // 循环list_news中的数据，找到和id值相等的数据
        for (var i = 0; i < list_news.length; i++) {
            // 判断集合中是否有与用户提交的id相等的新闻
            if (list_news[i].id.toString() === req.query.id) {
                // 如果找到了相等的新闻，则将其记录下来
                model = list_news[i];
                break;
            }
        }
        if (model) {
            res.render(path.join(config.viewPath, 'item.html'), {
                item: model
            });
        } else {
            res.end('No such Item');
        }
    });
}
// 处理get方式添加新闻
module.exports.addGet = function(req,res){
    readNewsData(function(list){
        req.query.id = list.length;
        // 向list数组中push一条新闻
        list.push(req.query);
        // 把list数组中的数据写入到data.json文件中JSON.stringify(list)将数组转成字符串，因为writeFile方法第二个参数data只能是字符串或buffer对象
        writeNewsData(JSON.stringify(list),function(){
            // 重定向
            res.statusCode = 302;//该状态码表示临时移动到某个页面，301也行（301表示永久跳转）
            res.statusMessage = 'Found';
            res.setHeader('Location','/');
            res.end();
        });
    });
    // 2.把用户提交的新闻数据保存到data.json文件中 
}
// 处理post方式添加新闻
module.exports.addPost = function (req, res) {
    // 表示post方法提交一条新闻
    // 1.读取data.json文件中的数据
    readNewsData(function (list) {
        // 2.读取用户post提交的数据
        postBodyData(req, function (postData) {
            // 3.为用户提交的新闻添加一个id属性，并且把新闻对象push到list中
            postData.id = list.length;
            list.push(postData);
            // 4.将新的list数组再写入到data.json中
            writeNewsData(JSON.stringify(list), function () {
                // 重定向
                res.statusCode = 302; //该状态码表示临时移动到某个页面，301也行（301表示永久跳转）
                res.statusMessage = 'Found';
                res.setHeader('Location', '/');
                res.end();
            });
        });
    });
}
// 处理静态资源请求
module.exports.static = function (req, res) {
    // 如果请求是以/resources开头，并且是get请求，就认为用户是要请求静态资源
    // resources/images/x.png
    res.render(path.join(__dirname, req.url));
}
// 处理404错误请求
module.exports.handlerErrors = function(req,res){
    res.writeHead(404,'Not Found',{
        'Content-Type':'text/html;charset = utf-8'
    });
    res.end('404,Page Not Found');
}


// 封装一个读取data.json文件的函数
function readNewsData(callback){
    fs.readFile(config.dataPath,'utf8',function(err,data){
        if(err && err.code!=='ENOENT'){
            throw err;
        }
        var list = JSON.parse(data || '[]');
        
        // 通过调用回调函数callback()将读取到的数据list传递出去
        callback(list);
    });
    // 因为读取文件是异步操作的所以返回list的时候需要用回调函数，用return返回不了
}

// 封装一个写入data.json文件的方法
function writeNewsData(data,callback){
    fs.writeFile(config.dataPath,data,function(err){
        if(err){
            throw err;
        }
        // 调用callback()来执行当写入数据完毕后的操作
        callback();
    });
}

// 封装一个获取用户post提交的数据的方法
function postBodyData(req,callback){
    var array = [];
            req.on('data',function(chunk){
                array.push(chunk);
            });
            req.on('end',function(){
                var postBody = Buffer.concat(array);
                postBody = postBody.toString('utf8');
                postBody = querystring.parse(postBody);
                postBody.query.id = list.length;
                // 把用户post提交过来的数据传递出去
                callback(postBody);
            });
}
// 封装一个render函数,filename文件路径
function render(filename,res){
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,'Not Found',{'Content-Type':'text/html;charset = utf-8'});
            res.end('404,not found');
            return;
        }
        res.setHeader('Content-Type',mime.getType(filename));
        res.end(data);  
    });
}





 