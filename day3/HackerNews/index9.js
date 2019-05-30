// 当前项目（包）的入口文件
// 封装一个render函数
//将render函数挂载到res对象上,可以通过res.render()来访问
// 通过使用url模块的parse方法获取用户get提交的数据
// 实现get方式添加路由
// 实现在原来的list数组上追加新闻而不是覆盖新闻get方式提交新闻防止新闻被覆盖掉
// post方式提交一条新闻
// 实现首页显示新闻列表 
// 添加underscore模块
// 实现显示新闻详情页
// 封装读取data.json文件（回调函数封装异步函数）
// 封装写入data.json文件的方法

// 1.加载http模块
var http = require('http');

var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
var querystring = require('querystring');
var _ = require('underscore');
// 2.创建服务
http.createServer(function(req,res){

    // 为res对象添加一个render()函数，方便后续使用
    // 因为现在要渲染的index.html中需要用户模板数据，所以给render增加了第二个参数
    // 第二个参数的作用就是用来传递html页面中要使用的模板数据
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

    req.url = req.url.toLowerCase();//将大写转为小写
    req.method = req.method.toLowerCase();
    // 通过url模块，调用url.parse()方法解析用户请求的url(req.url)
    var urlObj = url.parse(req.url,true);
    if(req.url === '/' || req.url === '/index' && req.method === 'get'){
        // 1.读取data.json文件中的数据，并将读取到的数据转换为list数组
        readNewsData(function(list){
            // 2.在服务器端使用模板引擎，将list中的数据和index.html文件中的内容结合渲染给浏览器（客户端）
            res.render(path.join(__dirname,'views','index.html'),{list:list_news});
            //1.读取index.html并返回
        });
    }else if(urlObj.pathname === '/item' && req.method === 'get'){
        // 1.获取当前用户请求的新闻的id
        // urlObj.query.id
        // 2.读取data.json文件中的数据，根据id找到对应新闻
        // 2.读取item.html并返回
        readNewsData(function(list_news){
            var model = null;
            // 循环list_news中的数据，找到和id值相等的数据
            for(var i = 0;i <list_news.length;i++){
                // 判断集合中是否有与用户提交的id相等的新闻
                if(list_news[i].id.toString() === urlObj.query.id){
                    // 如果找到了相等的新闻，则将其记录下来
                    model = list_news[i];
                    break;
                }
            }
            if(model){
                res.render(path.join(__dirname,'views','item.html'),{item: model});
            }else{
                res.end('No such Item');
            }
        });
    }else if(req.url === '/submit' && req.method === 'get'){
        res.render(path.join(__dirname,'views','submit.html'));
        // 3.读取submit.html并返回
    }else if(req.url.startsWith('/add') &&req.method === 'get'){
        readNewsData(function(list){
            urlObj.query.id = list.length;
            // 向list数组中push一条新闻
            list.push(urlObj.query);
            // 把list数组中的数据写入到data.json文件中JSON.stringify(list)将数组转成字符串，因为writeFile方法第二个参数data只能是字符串或buffer对象
            writeNewsData(JSON.stringify(list),function(){
                res.statusCode = 302;//该状态码表示临时移动到某个页面，301也行（301表示永久跳转）
                res.statusMessage = 'Found';
                res.setHeader('Location','/');
                res.end();
            });
        });
        // 2.把用户提交的新闻数据保存到data.json文件中  
    }else if(req.url === '/add' &&req.method === 'post'){
        // 表示post方法提交一条新闻
        // 1.读取data.json文件中的数据
        readNewsData(function(list){
            var array = [];
            req.on('data',function(chunk){
                array.push(chunk);
            });
            req.on('end',function(){
                var postBody = Buffer.concat(array);
                postBody = postBody.toString('utf8');
                postBody = querystring.parse(postBody);
                postBody.query.id = list.length;
                list.push(postBody);
                // 将新的list数组再写入到data.json中
                writeNewsData(JSON.stringify(list),function(){
                    res.statusCode = 302;//该状态码表示临时移动到某个页面，301也行（301表示永久跳转）
                    res.statusMessage = 'Found';
                    res.setHeader('Location','/');
                    res.end();
                });
            });
        });
    }else if(req.url.startsWith('/resources')&& req.method === 'get'){
        // 如果请求是以/resources开头，并且是get请求，就认为用户是要请求静态资源
        // resources/images/x.png
        res.render(path.join(__dirname,req.url));
    }else{
        res.writeHead(404,'Not Found',{
            'Content-Type':'text/html;charset = utf-8'
        });
        res.end('404,Page Not Found');
    }
}).listen(8080,function(){
    console.log('服务器已启动，请访问：http://localhost:8080');
});

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

// 封装一个读取data.json文件的函数
function readNewsData(callback){
    fs.readFile(path.join(__dirname,'data','data.json'),'utf8',function(err,data){
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
    fs.writeFile(path.join(__dirname,'data','data.json'),data,function(err){
        if(err){
            throw err;
        }
        // 调用callback()来执行当写入数据完毕后的操作
        callback();
    });
}