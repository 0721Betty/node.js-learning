
// 加载 b.js模块
// var b = require('./b.js');
// 运行a.js时控制台会输出b.js中的result（15）
// 说明被加载的模块会先执行一次，执行之后会缓存，所以后面无论在执行多少次，只会输出一个15

// 下面这些加载模块都是从缓存里面获取的，所以不会再去执行b.js文件了
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');



// 一个模块，默认被require()加载后，返回的是一个对象{}
var b = require('./b.js');
console.log(b);

// b('呵呵呵呵呵呵');
b.show();