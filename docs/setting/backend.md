---
sidebar_position: 3
---

# 后端设置

### 密码
后台登陆密码

### 检查父文件夹密码
启用后，如果当前文件夹未设置密码，会递归检查父文件夹是否有密码，直至检查到第一个密码或到根目录停止。

### check down link
用于加密直链，开启后直链会携带一个名为pw或sign（管理员）的query参数

### d_proxy types
单独的文件类型只走代理

### ocr api
用于识别验证码

### Aria2 RPC url
Aria2 RPC 地址，用于调用Aria2下载，支持Motrix

### Aria2 RPC secret
Aria2 RPC token，Aria2 rpc 设置的密码，可为空

### Casdoor登录
启用后，可以通过Casdoor的方式进行单点登录

### Casdoor组织名称
Casdoor组织的名称，用于配置Casdoor的认证

### Casdoor应用名称
Casdoor应用程序名称，用于配置Casdoor的认证

### Casdoor服务URL
Casdoor的服务URL，例如：`https://door.casdoor.com` 或者 `http://localhost:8000`

### Casdoor Client ID
Casdoor应用程序的客户端 ID

### Casdoor Client Secret
Casdoor应用程序的客户端密钥

### Casdoor Jwt Public Key
Casdoor应用程序证书的公钥
