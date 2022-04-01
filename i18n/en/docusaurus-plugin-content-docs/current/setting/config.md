---
sidebar_position: 1
---

# Configuration file

config.json

### address

Listening address

### port

Listening port

### assets

The static resource location used. This is dynamic and changeable. Existing static resources are hosted on both npm and GitHub, and their locations are:

- https://www.npmjs.com/package/alist-web
- https://github.com/alist-org/assets

So you can use any npm or github cdn as the path. By default, Ele.me's unpkg cdn (Alibaba cloud cdn) is used by default: https://npm.elemecdn.com/alist-web@$version/dist/ , `$version` will be automatically replaced by the front-end in the program release version. Here are some other available assets:

#### npm

- `jsdelivr npm`: https://cdn.jsdelivr.net/npm/alist-web@$version/dist/
- `unpkg npm`: https://unpkg.com/alist-web@$version/dist/
- ~~`pigax jsdelivr npm (Tencent Cloud cdn)`: https://u.pigax.cn/npm/alist-web@$version/dist/~~
- ~~`pigax unpkg npm (Tencent Cloud cdn)`: https://unpkg.pigax.cn/alist-web@$version/dist/~~
- `tianli jsdelivr npm (Tencent Cloud cdn)`: https://cdn1.tianli0.top/npm/alist-web@$version/dist/

#### GitHub

- `jsdelivr github`: https://cdn.jsdelivr.net/gh/alist-org/assets@$version/dist/
- ~~`pigax jsdelivr github (Tencent cloud cdn)`: https://u.pigax.cn/gh/alist-org/assets@$version/dist/~~
- `tianli jsdelivr github (Tencent cloud cdn)`: https://cdn1.tianli0.top/gh/alist-org/assets@$version/dist/

#### local

- `local`: /

#### customize
Two methods:
- Reverse jsdelivr, and then replace the host in jsdelivr's npm or github's cdn with your own
- Download the compiled file at https://github.com/alist-org/alist-web/releases and put it in your space, and then fill in the link to the location where you store the assets (to the dist/ level)

### database

Database related settings

#### type

Database type, optional `sqlite3`, `mysql`, `postgres`

#### user

database username

#### password

Database password

#### host

Database address

#### port

Database port

#### name

Name database

#### table_prefix

Database table prefix (use one database for multiple applications)

#### db_file

Database file, for sqlite3

#### ssl_mode
- sqlite3: ignore this parameter
- mysql: equivalent to <https://github.com/go-sql-driver/mysql#tls>
- postgres: the parameter with the same name, see <https://github.com/jackc/pgconn/blob/b7a85d1a6fc58df695e8cf0571ebf4e7dab921d5/config.go#L576>

### scheme

protocol

#### https

Whether to open https

#### cert_file

Certificate file

#### key_file

Key file

### cache

Cache related

#### expiration

Cache invalidation time (unit: minutes)

#### cleanup_interval

Clear the invalidation cache interval