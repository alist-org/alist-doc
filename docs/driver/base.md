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
是否开启代理，开启之后，此账号的所有下载流量走代理服务器，包括WebDAV请求。
如果没有此选项，则说明改存储只能走代理，即由服务器中转。

### WebDAV proxy

开启之后，只有WebDAV请求的流量走代理服务器。

### down_proxy_url（下载代理地址）
不填此字段开启代理时，默认使用本机进行中转。

#### cloudflare workers
可以使用`cloudflare workers`进行代理，此处填写`cloudflare workers`地址即可。
workers代码可以在https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js 找到。其中：

- HOST: 你的Alist地址
- TOKEN：参见[Alist](./alist.md#token)部分的Token

#### 通用二进制
在https://github.com/alist-org/alist-proxy/releases 下载程序

`./alist-proxy -help`查看使用方法。

你也可以自己开发代理程序，一般的步骤为：
- 下载时会请求`PROXY_URL/path?sign=sign_value`
- 在代理程序中验证sign，sign的计算方式为:
```js
const name = path.split('/').pop();
const sign = md5(`alist-${TOKEN}-${name}`).slice(8, 24)
```
- 验证sign无误后，请求`HOST/api/admin/link`，可以得到文件的URL与需要携带的请求头
- 使用得到的信息请求并返回

### api_proxy_url（API代理地址）

同down_proxy_url，请求API使用的代理，专门为GoogleDrive和PikPak等国内无法直接访问的存储准备。