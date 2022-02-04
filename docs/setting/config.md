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

使用的静态资源，可选local/zhimg/unpkg，默认为jsdelivr.

### database

数据库相关设置

#### type

数据库类型，可选`sqlite3`、`mysql`、`Postgres`

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

数据库文件，对于sqlite3

### scheme

协议

#### https

是否开启https

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