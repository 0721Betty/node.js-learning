// 创建目录案例

// 创建一个文件夹

// 加载文件操作模块
// var fs = require('fs');

// 创建一个目录
// fs.mkdir('test-mkdir',function(err){
//     if(err){
//         console.log('创建目录出错了，详细信息如下：');
//         console.log(err);
//     }else{
//         console.log('目录创建成功');
//     }
// });

// -------------------------------------------------------
// 创建目录father
var fs = require('fs');

fs.mkdir('./father',function(err){
    if(err){
        console.log("创建失败");
    }
    
    fs.mkdir('./father/son',function(err){
        if(err){
            console.log("创建失败");
        }
        fs.mkdir('./father/son/grandson',function(err){
            if(err){
                console.log("创建失败");
            }
        });
    });
});

// 总结：创建目录的时候子目录应该嵌套的创建在父目录里面
//      node 命令后面跟的是操作的js文件（应该先切换到需要操作的js文件所在目录下再执行node命令）