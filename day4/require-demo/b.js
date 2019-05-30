

function add(x,y){
    return x + y;
}
var result = add(5,10);
console.log(result);

// module.exports暴露该模块想要给的东西，用于两个模块之间的通信
// 当别的文件加载该文件时，会得到下面的返回值console.log(b);输出下面的hello world
// module.exports = 'hello world';

// module.exports = 6666;

// module.exports = function(msg){
//     console.log(msg);
// }


// module.exports.name = '小白';
// module.exports.age = 19;

// module.exports.show = function(){
//     console.log(this.name+this.age);
// }



// --------------exports介绍----------------------------

// 1.exports与module.exports混用结果与上面的只用module.exports一致
// module.exports.name = '小白';
// exports.age = 19;
// exports.show = function(){
//     console.log(this.name + this.age);
// }

// 2.exports和module.exports指向的是同一个对象
// 最终 require()函数返回的是module.exports中的数据
// return module.exports;
// 下面的输出hello world
module.exports.name = '小白';
exports.age = 19;
exports.show = function(){
    console.log(this.name + this.age);
}

module.exports = 'hello world';