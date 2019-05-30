// 业务模块
var path = require('path');

// 处理新闻列表类 index
module.exports.index = function(req,res){
    // sendFile()方法虽然可以读取对应的文件并返回，但是我们不使用该方法
    // 原因是：将来我们要对index.html中的模板代码进行执行并替换
    //res.sendFile(path.join(__dirname,'views','index.html'));

    // 默认render方法是不能使用的，需要为express配置一个模板引擎，然后才可以使用
    res.render(path.join(__dirname,'views','index.html'));//可以进行模板替换，前提：需要设置模板引擎

}

