### 介绍

- javascipt语言中没有读取或操作二进制数据流的机制
- Node.js中引入了Buffer类型使我们可以操作TCP流或文件流
- Buffer类型的对象类似于整数数组，但是Buffer的大小是固定的，在V8堆外分配物理内存。其大小在创建的时候确定，无法调整
- 是全局的，不需要require()方式加载

### 创建

- ```javascript
  //1.Buffer.from()创建对象
  var buf = Buffer.from(array);//字节数组
  console.log(buf.toString('utf8'));
  var buf = Buffer.from('字符串');
  console.log(buf);
  console.log(buf.toString());
  ```

- ```javascript
  //2.Buffer.concat()拼接多个buffer对象为一个对象
  var bufferList = [];
  var buf = Buffer.concat(bufferList);
  ```

- ```javascript
  //3.Buffer.byteLength()获取字符串对应的字节个数
  var len = Buffer.byteLength('你好世界nodejs','utf8');
  console.log(len);
  ```

- ``` javascript
  //4.Buffer.isBuffer(obj)判断一个对象是否是Buffer类型的对象
  ```

- ``` javascript
  //5.根据索引获取Buffer中的某个字节（byte、octet）
  //buf[index]
  ```

- ``` javascript
  //6.获取Buffer对象中的字节的个数
  buf.length
  ```

#### node.js支持的编码如下

- ascll
- utf8
- utf16le(ucs2)
- base64
- latin1(binary)
- hex(用两位16进制来表示每个字节)



