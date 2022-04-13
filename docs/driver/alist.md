---
sidebar_position: 9
---

# Alist
添加其他的Alist服务。

### alist site url
另一个Alist的地址

### Token
可以在登陆之后的请求的请求头中找到，名称为`Authorization`，也可以自己计算，计算方式为：
```js
md5(`https://github.com/Xhofe/alist-${YOUR_PASSWORD}`)
```
还可以在登录后的localStorage中找到，名称为`admin-token`。

### 根目录路径
要添加的目录的pathname，不填默认为根目录，如：
- https://alist.nn.ci -> `/`
- https://alist.nn.ci/a -> `/a`
- https://alist.nn.ci/a/b -> `/a/b`
