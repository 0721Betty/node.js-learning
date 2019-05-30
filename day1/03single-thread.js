// 异步操作

// console.log("111");
// setTimeout(function(){
//     console.log("222");
// },1000);
// console.log("333");
// setTimeout(function(){
//     console.log("444");
// },1000);
// console.log("555");

// 上述代码输出结果111
// 333
// 555
// 222
// 444

// console.log("111");
// setTimeout(function(){
//     console.log("222");
// },0);
// console.log("333");
// setTimeout(function(){
//     console.log("444");
// },0);
// console.log("555");
// 上述代码输出结果111
// 333
// 555
// 222
// 444


console.log("111");
setTimeout(function(){
    console.log("222");
},10);
console.log("333");
setTimeout(function(){
    console.log("444");
},0);
console.log("555");
// 上述代码输出结果111
// 333
// 555
// 444
// 222