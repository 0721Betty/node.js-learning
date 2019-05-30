// 当前项目（包）的入口文件
// 封装一个render函数
//将render函数挂载到res对象上,可以通过res.render()来访问
// 通过使用url模块的parse方法获取用户get提交的数据
// 实现get方式添加路由
// 实现在原来的list数组上追加新闻而不是覆盖新闻get方式提交新闻防止新闻被覆盖掉
// 1.加载http模块
var http = require('http');

var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
// 2.创建服务
http.createServer(function(req,res){

    // 为res对象添加一个render()函数，方便后续使用
    res.render = function(filename){
        fs.readFile(filename,function(err,data){
            if(err){
                res.writeHead(404,'Not Found',{'Content-Type':'text/html;charset = utf-8'});
                res.end('404,not found');
                return;
            }
            res.setHeader('Content-Type',mime.getType(filename));
            res.end(data);  
        });
    };

    // 设计路由
    // 当用户请求/或/index时，显示新闻列表---get请求
    // 当用户请求/item时显示新闻详情---get请求
    // 当用户请求/submit时，显示添加新闻页面---get请求
    // 当用户请求/add时，将用户提交的新闻保存到data.json文件中---get请求
    // 当用户请求/add时，将用户提交的新闻保存到data.json文件中---post请求
    req.url = req.url.toLowerCase();//将大写转为小写
    req.method = req.method.toLowerCase();
    // 通过url模块，调用url.parse()方法解析用户请求的url(req.url)
    var urlObj = url.parse(req.url,true);
    // console.log(urlObj);
    // urlObj.query.title得到用户提交的标题
    // urlObj.query.text得到用户提交的text
    // urlObj.query.url得到用户提交的url
    // 先根据用户请求的路径（路由），将对应的HTML页面显示出来
    if(req.url === '/' || req.url === '/index' && req.method === 'get'){
        res.render(path.join(__dirname,'views','index.html'));
        //1.读取index.html并返回
    }else if(req.url === '/item' && req.method === 'get'){
        res.render(path.join(__dirname,'views','item.html'));
        // 2.读取item.html并返回
    }else if(req.url === '/submit' && req.method === 'get'){
        res.render(path.join(__dirname,'views','submit.html'));
        // 3.读取submit.html并返回
    }else if(req.url.startsWith('/add') &&req.method === 'get'){
        // 表示get方法提交一条新闻
        // 要获取用户get提交的数据，需要用到url()模块（这个模块是nodejs内置模块，不是第三方模块）
        // 既然是get提交数据，所以通过req.url就可以直接获取这些数据，但是不方便，需要自己去截取字符串，然后获取想要的数据
        // 通过url模块可以将用户get提交的数据解析成一个json对象，使用起来很方便
        
        // 1.获取用户get提交过来的新闻数据
        // urlObj.query.title得到用户提交的标题
        // urlObj.query.text得到用户提交的text
        // urlObj.query.url得到用户提交的url

        // 1.1读取data.json文件中的数据，并将读取到的数据转换为一个数组
        // 此处读取文件的时候可以直接写一个utf8编码，这样的话，回调函数中的data就是一个字符串了
        fs.readFile(path.join(__dirname,'data','data.json'),'utf8',function(err,data){
            // 因为第一次访问网站，data.json文件本身就不存在，所以肯定是由错误的
            // 但是这种错误，我们并不认为是网站出错了，所以不需要抛出异常
            if(err && err.code!=='ENOENT'){
                throw err;
            }

            // 如果读取到数据了，那么就把读取到的数据data转换为list数组
            // 如果没有读取到数据，那么就把'[]'准换为数组
            var list = JSON.parse(data || '[]');
            // 向list数组中push一条新闻
            list.push(urlObj.query);

            // 把list数组中的数据写入到data.json文件中JSON.stringify(list)将数组转成字符串，因为writeFile方法第二个参数data只能是字符串或buffer对象
            fs.writeFile(path.join(__dirname,'data','data.json'),JSON.stringify(list),function(err){
                if(err){
                    throw err;
                }

                console.log('ok');
                // 设置响应报文头，通过响应报文头告诉浏览器，执行一次页面跳转操作
                // 3.跳转到新闻列表页
                // 重定向
                res.statusCode = 302;//该状态码表示临时移动到某个页面，301也行（301表示永久跳转）
                res.statusMessage = 'Found';
                res.setHeader('Location','/');
                res.end();
            });
        });
        // 2.把用户提交的新闻数据保存到data.json文件中  
    }else if(req.url === '/add' &&req.method === 'post'){
        // 表示post方法提交一条新闻
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