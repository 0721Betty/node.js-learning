#### request（http.IncomingMessage） & response(ServerResponse)

- ***request*** ：服务器解析用户提交的http请求报文，将结果解析到request对象中,凡是要获取和用户请求相关的数据都可以通过request对象获取
  - **req.headers** 返回的是一个对象，这个对象中包含了所有的请求报文头
  - **req.rawHeaders**返回的是一个数组，数组中保存的都是请求报文头的字符串
  - **req.httpVersion**:获取请求客户端所使用的http版本
  - **req.method**：获取客户端请求使用的方法（POST、GET...）
  - **req.url**:获取这次请求的路径（获取请求报文中的请求路径，不包含主机名称，端口号，协议）
- ***response*** 在服务器端用来向用户做出响应的，凡是要向用户（客户端）响应的操作，都需要通过response对象进行
  - **res.write()**
  - **res.end()**通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成，每次响应都必须调用该方法
  - **res.setHeader()** 设置响应报文头，放在res.write()和res.end()之前,因为即便我们不设置响应报文头，系统也会默认有响应报文头，并且默认发送给浏览器，当已经发送过响应报文头后，就不能通过res.setHeader()设置了，否则就会出错
  - **res.statusCode**设置http响应状态码
  - **res.statusMessage**设置http响应状态码对应的消息
  - **res.writeHead()** 直接向客户端响应（写入）http 响应报文头，建议在res.write()和res.end()之前写