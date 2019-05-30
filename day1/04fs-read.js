// 实现文件读取操作
// 1.加载fs模块
var fs = require('fs');


// 调用fs.readFile() 方法来读取文件
// fs.readFile(file[,options],callback)
// 方法一，readFile方法不传参数utf8时
// fs.readFile('./hello.txt',function(err,data){
//     if(err){
//         throw err;
//     }
//     // data 参数的数据类型是一个Buffer对象，里面保存的是一个一个的字节（理解为字节数组）
//     // 把Buffer对象转换为字符串，调用toString()方法
//     console.log(data.toString('utf8'));//toString()方法中参数没写编码格式时，默认为utf8
// });

// 方法二，传参数utf8,回调函数中的编码默认转换为字符串
// 此处的./相对路径，相对的是执行 node 命令的路径
fs.readFile('./hello.txt','utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});
