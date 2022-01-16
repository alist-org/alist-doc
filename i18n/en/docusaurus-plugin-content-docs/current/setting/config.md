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

The static resources used, optional local/zhimg/jsdelivr, the default is zhimg (zhihu's unpkg mirror in China, the fastest)

### database

Database related settings

#### type

Database type, optional `sqlite3`, `mysql`, `Postgres`

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