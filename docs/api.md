---
sidebar_position: 10
---

# API Document

> 部分接口已过时。

## /public
```text
无需登录的接口
```
## /public/path
```text
根据路径和密码请求文件或文件列表。
```

#### 接口URL
> https://{{HOST}}/api/public/path

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"path": "/阿里云盘/图片",
	"password": "test",
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
path | / | Text | 路径
password | test | Text | 密码

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "folder",
	"data": [
		{
			"name": "动漫壁纸【手机】",
			"size": 0,
			"type": 1,
			"driver": "AliDrive",
			"updated_at": "2021-11-26T09:55:08.192Z",
			"thumbnail": "",
			"url": "",
			"size_str": "",
			"time_str": ""
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | folder | Text | 消息，正确响应时返回file或folder，分别表示文件和文件夹
data | - | Text | 返回数据
data.name | 动漫壁纸【手机】 | Text | 文件名
data.size | 0 | Text | 文件大小
data.type | 1 | Text | 文件类型
data.driver | AliDrive | Text | 文件对应的盘驱动
data.updated_at | 2021-11-26T09:55:08.192Z | Text | 文件更新时间
data.thumbnail | - | Text | 文件预览图地址（如果有）
data.url | - | Text | 文件下载地址（为文件时）
data.size_str | - | Text | 文件大小字符串（对于蓝奏云）
data.time_str | - | Text | 文件更新时间字符串（对于蓝奏云）
## /public/settings
```text
获取公开设置
```

#### 接口URL
> https://{{HOST}}/api/public/settings

#### 请求方式
> GET

#### Content-Type
> form-data


#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"key": "version",
			"value": "v2.0.1-0-ga295e70-dirty",
			"description": "version",
			"type": "string",
			"group": 2,
			"values": "",
			"version": "v2.0.1-0-ga295e70-dirty"
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
data.key | version | Text | 设置键
data.value | v2.0.1-0-ga295e70-dirty | Text | 设置值
data.description | version | Text | 设置描述
data.type | string | Text | 设置类型
data.group | 2 | Text | 设置对应组
data.values | - | Text | 设置的可选值
data.version | v2.0.1-0-ga295e70-dirty | Text | 设置的版本
## /public/preview
```text
预览
```

#### 接口URL
> https://{{HOST}}/api/public/preview

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"path": "/阿里云盘/文档/配置.xlsx",
	"password": "test",
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
path | /阿里云盘/文档/配置.xlsx | Text | 路径
password | test | Text | 密码

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"access_token": "a9971330aff74c68af50c778e191fe88v3",
		"preview_url": "https://office-cn-beijing.imm.aliyuncs.com/office/s/b6688745995bab40eb548fcefacf16cb6508663c?_w_tokentype=1&hidecmb=1&simple=1"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据，预览所需要的信息，不同的文件/驱动数据不同
## /admin
```text
需要登陆的接口
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
authorization | {{authorization}} | -
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数

## /admin/path
```text
根据路径和密码请求文件或文件列表。
```

#### 接口URL
> https://{{HOST}}/api/public/path

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"path": "/阿里云盘/图片"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
path | / | Text | 路径

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "folder",
	"data": [
		{
			"name": "动漫壁纸【手机】",
			"size": 0,
			"type": 1,
			"driver": "AliDrive",
			"updated_at": "2021-11-26T09:55:08.192Z",
			"thumbnail": "",
			"url": "",
			"size_str": "",
			"time_str": ""
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | folder | Text | 消息，正确响应时返回file或folder，分别表示文件和文件夹
data | - | Text | 返回数据
data.name | 动漫壁纸【手机】 | Text | 文件名
data.size | 0 | Text | 文件大小
data.type | 1 | Text | 文件类型
data.driver | AliDrive | Text | 文件对应的盘驱动
data.updated_at | 2021-11-26T09:55:08.192Z | Text | 文件更新时间
data.thumbnail | - | Text | 文件预览图地址（如果有）
data.url | - | Text | 文件下载地址（为文件时）
data.size_str | - | Text | 文件大小字符串（对于蓝奏云）
data.time_str | - | Text | 文件更新时间字符串（对于蓝奏云）
## /admin/preview
```text
预览
```

#### 接口URL
> https://{{HOST}}/api/public/preview

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"path": "/阿里云盘/文档/配置.xlsx"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
path | /阿里云盘/文档/配置.xlsx | Text | 路径

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"access_token": "a9971330aff74c68af50c778e191fe88v3",
		"preview_url": "https://office-cn-beijing.imm.aliyuncs.com/office/s/b6688745995bab40eb548fcefacf16cb6508663c?_w_tokentype=1&hidecmb=1&simple=1"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据，预览所需要的信息，不同的文件/驱动数据不同
## /admin/login
```text
登录
```

#### 接口URL
> https://{{HOST}}/api/admin/login

#### 请求方式
> GET

#### Content-Type
> form-data


#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": null
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 登录成功消息
data | - | Text | 返回数据
#### 错误响应示例
```javascript
{
	"code": 401,
	"message": "wrong password",
	"data": null
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 401 | Text | 状态码
message | wrong password | Text | 登录失败消息
data | - | Text | 返回数据
## /admin/settings
```text
获取设置
```

#### 接口URL
> https://{{HOST}}/api/admin/settings

#### 请求方式
> GET

#### Content-Type
> form-data


#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"key": "version",
			"value": "v2.0.1-0-ga295e70-dirty",
			"description": "version",
			"type": "string",
			"group": 2,
			"values": "",
			"version": "v2.0.1-0-ga295e70-dirty"
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
data.key | version | Text | 设置键
data.value | v2.0.1-0-ga295e70-dirty | Text | 设置值
data.description | version | Text | 设置描述
data.type | string | Text | 设置类型
data.group | 2 | Text | 设置分组
data.values | - | Text | 设置可选值
data.version | v2.0.1-0-ga295e70-dirty | Text | 设置对应版本
## /admin/settings
```text
保存设置
```

#### 接口URL
> https://{{HOST}}/api/admin/settings

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
[
	{
		"key": "title",
		"value": "Alist演示站",
		"description": "title",
		"type": "string",
		"group": 0,
		"values": "",
		"version": "v2.0.1-0-ga295e70-dirty"
	}
]
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
0 |  | Text | 设置
0.key | title | Text | 设置键
0.value | Alist演示站 | Text | 设置值
0.description | title | Text | 设置描述
0.type | string | Text | 设置类型
0.group | 0 | Text | 设置分组
0.values |  | Text | 设置可选值
0.version | v2.0.1-0-ga295e70-dirty | Text | 设置对应版本

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": null
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
## /admin/drivers
```text
driver列表
```

#### 接口URL
> https://{{HOST}}/api/admin/drivers

#### 请求方式
> GET

#### Content-Type
> form-data


#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"123Pan": [
			{
				"name": "proxy",
				"label": "proxy",
				"type": "bool",
				"values": "",
				"required": true,
				"description": "web proxy"
			}
		],
		"189Cloud": [
			{
				"name": "proxy",
				"label": "proxy",
				"type": "bool",
				"values": "",
				"required": true,
				"description": "web proxy"
			}
		],
		"AliDrive": [
			{
				"name": "proxy",
				"label": "proxy",
				"type": "bool",
				"values": "",
				"required": true,
				"description": "web proxy"
			}
		],
		"Alist": [
			{
				"name": "proxy",
				"label": "proxy",
				"type": "bool",
				"values": "",
				"required": true,
				"description": "web proxy"
			}
		],
		"GoogleDrive": [
			{
				"name": "client_id",
				"label": "client id",
				"type": "string",
				"values": "",
				"required": true,
				"description": ""
			}
		],
		"Lanzou": [
			{
				"name": "proxy",
				"label": "proxy",
				"type": "bool",
				"values": "",
				"required": true,
				"description": "web proxy"
			}
		],
		"Native": [
			{
				"name": "root_folder",
				"label": "root folder path",
				"type": "string",
				"values": "",
				"required": true,
				"description": ""
			}
		],
		"Onedrive": [
			{
				"name": "proxy",
				"label": "proxy",
				"type": "bool",
				"values": "",
				"required": true,
				"description": "web proxy"
			}
		]
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
data.123Pan | - | Text | 键为驱动名称
data.123Pan.name | proxy | Text | 需要的参数的键
data.123Pan.label | proxy | Text | 需要的参数的标签
data.123Pan.type | bool | Text | 需要的参数类型
data.123Pan.values | - | Text | 需要的参数的可选值
data.123Pan.required | true | Text | 需要的参数是否必须
data.123Pan.description | web proxy | Text | 需要的参数的描述
## /admin/accounts
```text
账号列表
```

#### 接口URL
> https://{{HOST}}/api/admin/accounts

#### 请求方式
> GET

#### Content-Type
> form-data


#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"id": 6,
			"name": "123Pan",
			"index": -1,
			"type": "123Pan",
			"username": "username",
			"password": "password",
			"refresh_token": "",
			"access_token": "eyJhaccess_tokenTjJClBMqY1yryk",
			"root_folder": "root_folder_id",
			"status": "work",
			"CronId": 0,
			"DriveId": "",
			"limit": 0,
			"order_by": "updateAt",
			"order_direction": "asc",
			"updated_at": "2021-12-12T23:36:32.601954341+08:00",
			"search": false,
			"client_id": "",
			"client_secret": "",
			"zone": "",
			"redirect_uri": "",
			"site_url": "",
			"site_id": "",
			"onedrive_type": "",
			"webdav_proxy": false,
			"proxy": false,
			"proxy_url": ""
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据，账号列表
data.id | 6 | Text | 账号唯一id
data.name | 123Pan | Text | 账号名称，唯一
data.index | -1 | Text | 账号索引，用于排序
data.type | 123Pan | Text | 账号类型
data.username | username | Text | 用户名
data.password | password | Text | 密码
data.refresh_token | - | Text | 刷新令牌
data.access_token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjaccess_tokenMqY1yryk | Text | 访问令牌
data.root_folder | 1626275 | Text | 根目录
data.status | work | Text | 状态
data.CronId | 0 | Text | 定时任务id
data.DriveId | - | Text | 阿里云盘driveID
data.limit | 0 | Text | 请求限制
data.order_by | updateAt | Text | 排序
data.order_direction | asc | Text | 排序方向
data.updated_at | 2021-12-12T23:36:32.601954341+08:00 | Text | 更新时间
data.search | false | Text | 是否允许搜索，暂时未使用
data.client_id | - | Text | 应用id
data.client_secret | - | Text | 应用密钥
data.zone | - | Text | 区域
data.redirect_uri | - | Text | 回调地址
data.site_url | - | Text | 网站地址
data.site_id | - | Text | 网站id
data.onedrive_type | - | Text | 内部类型
data.webdav_proxy | false | Text | webdav代理
data.proxy | false | Text | 代理
data.proxy_url | - | Text | 代理地址
## /admin/account/create
```text
创建账号，不同的盘需要的参数不同，可以从drivers的响应中查看所需参数
```

#### 接口URL
> https://{{HOST}}/api/admin/account/create

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"name": "test",
	"type": "Native",
	"root_folder": "/www/wwwroot/alist.xhofe.top/test",
	"index": 0,
	"order_by": "name",
	"order_direction": "ASC"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
name | test | Text | 账号名称
type | Native | Text | 账号类型
root_folder | /www/wwwroot/alist.xhofe.top/test | Text | 根目录
index | 0 | Text | 索引
order_by | name | Text | 排序
order_direction | ASC | Text | 排序方向

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": null
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
## /admin/account/save
```text
创建账号，不同的盘需要的参数不同，可以从drivers的响应中查看所需参数
```

#### 接口URL
> https://{{HOST}}/api/admin/account/save

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 11,
	"name": "test",
	"index": 0,
	"type": "Native",
	"username": "",
	"password": "",
	"refresh_token": "",
	"access_token": "",
	"root_folder": "/www/wwwroot/alist.xhofe.top/test",
	"status": "work",
	"CronId": 0,
	"DriveId": "",
	"limit": 0,
	"order_by": "name",
	"order_direction": "ASC",
	"updated_at": "2021-12-14T09:26:06.604103405+08:00",
	"search": false,
	"client_id": "",
	"client_secret": "",
	"zone": "",
	"redirect_uri": "",
	"site_url": "",
	"site_id": "",
	"onedrive_type": "",
	"webdav_proxy": false,
	"proxy": true,
	"proxy_url": ""
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
id | 11 | Text | 
name | test | Text | 账号名称
index | 0 | Text | 索引
type | Native | Text | 账号类型
username |  | Text | 用户名
password |  | Text | 密码
refresh_token |  | Text | 刷新令牌
access_token |  | Text | 访问令牌
root_folder | /www/wwwroot/alist.xhofe.top/test | Text | 根目录
status | work | Text | 状态
CronId | 0 | Text | 定时任务id
DriveId |  | Text | 阿里云盘driveid
limit | 0 | Text | 限制
order_by | name | Text | 排序
order_direction | ASC | Text | 排序方向
updated_at | 2021-12-14T09:26:06.604103405+08:00 | Text | 更新时间
search | false | Text | 是否允许搜索
client_id |  | Text | 应用id
client_secret |  | Text | 应用密钥
zone |  | Text | 地区
redirect_uri |  | Text | 回调地址
site_url |  | Text | 网站url
site_id |  | Text | 网站id
onedrive_type |  | Text | 内部类型
webdav_proxy | false | Text | webdav代理
proxy | true | Text | 代理
proxy_url |  | Text | 代理地址

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": null
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
## /admin/account
```text
删除账号
```

#### 接口URL
> https://{{HOST}}/api/admin/account?id=11

#### 请求方式
> DELETE

#### Content-Type
> form-data

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 11 | Text | 是 | 账号id

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": null
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
## /admin/metas
```text
获取meta列表
```

#### 接口URL
> https://{{HOST}}/api/admin/metas

#### 请求方式
> GET

#### Content-Type
> form-data


#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"id": 1,
			"path": "/阿里云盘/密码-123456",
			"password": "123456",
			"hide": ""
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据，meta列表
data.id | 1 | Text | meta id
data.path | /阿里云盘/密码-123456 | Text | 路径
data.password | 123456 | Text | 密码
data.hide | - | Text | 隐藏
## /admin/meta/create
```text
创建meta
```

#### 接口URL
> https://{{HOST}}/api/admin/meta/create

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"path": "/test",
	"password": "123",
	"hide": "1,2,3"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
path | /test | Text | 路径
password | 123 | Text | 密码
hide | 1,2,3 | Text | 隐藏

#### 成功响应示例
```javascript
{"code":200,"message":"success","data":null}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
## /admin/meta/save
```text
编辑meta
```

#### 接口URL
> https://{{HOST}}/api/admin/meta/save

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 4,
	"path": "/test",
	"password": "123",
	"hide": "1,2,3"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
id | 4 | Text | meta id
path | /test | Text | 路径
password | 123 | Text | 密码
hide | 1,2,3 | Text | 隐藏

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": null
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据
## /admin/meta
```text
删除meta
```

#### 接口URL
> https://{{HOST}}/api/admin/meta?id=4

#### 请求方式
> DELETE

#### Content-Type
> form-data

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 4 | Text | 是 | meta id

#### 成功响应示例
```javascript
{
	"code": 200,
	"message": "success",
	"data": null
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 状态码
message | success | Text | 状态消息
data | - | Text | 返回数据