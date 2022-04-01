---
sidebar_position: 1
---

# 配置文件

config.json

### address

监听地址

### port

监听端口

### assets

使用的静态资源位置。这是动态可变化的，现有的静态资源在 npm 和 GitHub 上都有托管，它们的位置分别是：

- https://www.npmjs.com/package/alist-web
- https://github.com/alist-org/assets

所以你可以使用任何 npm 或者 github 的 cdn 来作为路径。默认使用饿了么反代的 unpkg 的 cdn(阿里云 cdn)：https://npm.elemecdn.com/alist-web@$version/dist/ ，`$version`在程序中会自动替换为前端的发行版本。在这里列举一些其他的可用的 assets：

#### NPM

- `jsdelivr npm`: https://cdn.jsdelivr.net/npm/alist-web@$version/dist/
- `unpkg npm`: https://unpkg.com/alist-web@$version/dist/
- ~~`pigax jsdelivr npm(腾讯云cdn)`: https://u.pigax.cn/npm/alist-web@$version/dist/~~
- ~~`pigax unpkg npm(腾讯云cdn)`: https://unpkg.pigax.cn/alist-web@$version/dist/~~
- `tianli jsdelivr npm(腾讯云cdn)`: https://cdn1.tianli0.top/npm/alist-web@$version/dist/

#### GitHub

- `jsdelivr github`: https://cdn.jsdelivr.net/gh/alist-org/assets@$version/dist/
- ~~`pigax jsdelivr github(腾讯云cdn)`: https://u.pigax.cn/gh/alist-org/assets@$version/dist/~~
- `tianli jsdelivr github(腾讯云cdn)`: https://cdn1.tianli0.top/gh/alist-org/assets@$version/dist/

#### 本地

- `本地`: /

#### 自定义
两种方法：
- 反代jsdelivr，然后将jsdelivr的npm或者github的cdn中的host换成自己的
- 在https://github.com/alist-org/alist-web/releases 下载编译好的文件放到你的空间上，然后此处的assets填写你存放的位置的链接（到dist/这一级）

### database

数据库相关设置

#### type

数据库类型，可选`sqlite3`、`mysql`、`postgres`

#### user

数据库用户名

#### password

数据库密码

#### host

数据库地址

#### port

数据库端口

#### name

数据库名称

#### table_prefix

数据库表前缀（针对多个应用程序使用一个数据库）

#### db_file

数据库文件，对于 sqlite3

#### ssl_mode
- sqlite3：忽略该参数
- mysql：等同于<https://github.com/go-sql-driver/mysql#tls>
- postgres： 即同名参数，具体见<https://github.com/jackc/pgconn/blob/b7a85d1a6fc58df695e8cf0571ebf4e7dab921d5/config.go#L576>

### scheme

协议

#### https

是否开启 https

#### cert_file

证书文件

#### key_file

密钥文件

### cache

缓存相关

#### expiration

缓存失效时间(单位:分钟)

#### cleanup_interval

清理失效缓存间隔
