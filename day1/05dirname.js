var fs = require('fs');
var filename = __dirname + '\\' + 'hello.txt';//两个\一个表示转义
fs.readFile(filename,'utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});