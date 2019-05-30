// 通过path模块进行路径拼接，解决在文件读取中./相对路径的问题
// __dirname和__filename表示虽然可以解决./的问题，但是不知道需不需要拼接转义的\（__dirname里面可能有也可能没有），在不同的系统中\表示不同

var fs = require('fs');

//加载path模块
var path = require('path');
var filename = path.join(__dirname,'hello.txt');
// console.log(filename);
fs.readFile(filename,'utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});