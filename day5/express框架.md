### express

##### res.end()与res.send()区别

- 参数类型区别：
  - res.send()参数可以是a Buffer object、a String、an object、an array    。
  - res.end()的参数只能是a Buffer object、a String
  - res.end()里面用中文会出现乱码，而res.send()不会出现乱码
- res.send()  会自动发送更多的响应报文头，其中就包括Content-Type: text/html; charset=utf-8，所以没有乱码

##### app.get()和app.use()注册路由的区别

- app.use()
  - 在进行路由匹配的时候不限定方法，什么请求方法都可以
  - 请求路径中的第一部分只要与/index相等即可（如/index/aaa/bbb，不能/indexaaabbb），并不要求请求路径完全相等
- app.all()不限定请求方法，但是需要路径pathname完全匹配
- 当需要get请求方法，而路径不===/index的时候，此时路径需要使用正则表达式

##### req.params()获取路由中的参数

```javascript
// 通过req.params获取路由中的参数
app.get('/news/:year/:month/:day',function(req,res){
    res.send(req.params);
})
```

#### express中的方法

- res.json()与res.send()一样
- res.redirect()重定向
- res.sendFile()
- res. status(code).end()







