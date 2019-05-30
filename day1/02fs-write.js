// 执行文件操作

// -----------实现文件写入操作---------------------
// 1.加载文件操作模块，fs模块
var fs = require('fs');

console.log("000");
// 2.实现文件写入操作
var msg = 'Hello World ,你好世界！';

// 调用fs.writeFlie()方法进行写入
// fs.writeFile(file,data[,options],callback);
fs.writeFile('./hello.txt',msg,'utf8',function(err){
    console.log("111");
    // body...
    // 如果 err === null,表示写入文件成功，没有错误
    // 只要err里面不是null，就表示写入文件失败了
    if(err){
        console.log("写文件出错啦！具体错误："+err);
    }else{
        console.log("ok");
    }
}); 

console.log("222");
// 上面console.log输出的顺序为000--->222--->111--->ok
// 因为写操作是异步的，nodejs执行完000后往下执行不等writeFile执行完就先执行了222那个输出
