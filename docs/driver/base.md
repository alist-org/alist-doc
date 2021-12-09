---
sidebar_position: 1
---

# 基本配置
所有账号的必填项
### name（名称）
唯一标识符，也是当有多个账号时展示的路径
### index（索引）
当有多个账号时，用于排序，越小越靠前
### proxy（代理）
是否开启代理，开启之后，所有流量都会走服务器
### proxy_url（代理地址）
可以使用`cloudflare workers`进行代理，此处填写`cloudflare workers`地址即可。**不支持本地存储**
workers代码可以在https://github.com/Xhofe/alist/blob/v2/alist-proxy.js 找到。其中：
- HOST: 你的Alist地址
- TOKEN：参见[Alist](./alist.md#token)部分的Token

你也可以不使用`cloudflare workers`而是自己开发代理程序，一般的步骤为：
- 下载时会请求`PROXY_URL/path?sign=sign_value`
- 在代理程序中验证sign，sign的计算方式为:
```js
const name = path.split('/').pop();
const sign = md5(`alist-${TOKEN}-${name}`).slice(8, 24)
```
- 验证sign无误后，请求`HOST/api/admin/link`，可以得到文件的URL与需要携带的请求头
- 使用得到的信息请求并返回