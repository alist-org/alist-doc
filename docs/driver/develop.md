---
sidebar_position: 44
---

# 贡献新的存储

alist的driver部分的设计是易于扩展的，无需修改其他文件，只需在后端项目`drivers`包下创建一个新的包并在all.go文件中引用这个包，包至少需要包含两个文件：
- driver.go
- {name}.go

*{name}表示存储名称*

就可以扩展一种新的存储策略。

### driver.go
在这个文件中需要做以下几件事：
- 创建一个新的struct
- 为这个struct实现`drivers/base`下的`Driver`接口：
```go
type Driver interface {
	Config() DriverConfig
	Items() []Item
	Save(account *model.Account, old *model.Account) error
	File(path string, account *model.Account) (*model.File, error)
	Files(path string, account *model.Account) ([]model.File, error)
	Link(path string, account *model.Account) (*Link, error)
	Path(path string, account *model.Account) (*model.File, []model.File, error)
	Proxy(c *gin.Context, account *model.Account)
	Preview(path string, account *model.Account) (interface{}, error)
	// 下面的方法是用于WebDAV写的，可以不实现，返回base.ErrNotImplement即可
	MakeDir(path string, account *model.Account) error
	Move(src string, dst string, account *model.Account) error
	Copy(src string, dst string, account *model.Account) error
	Delete(path string, account *model.Account) error
	Upload(file *model.FileStream, account *model.Account) error
}
```
### {name}.go
在这个文件中需要做以下几件事：
- 实现上一个文件中所需要的一些函数
- 创建init函数，并在init函数中将上一文件中的struct通过调用`RegisterDriver`注册

### Driver接口
#### Config() DriverConfig
返回一个`DriverConfig`实例：
```go
type DriverConfig struct {
	Name string // 存储名称，唯一标识
	OnlyProxy bool // 是否只能通过服务器中转
}
```
#### Items() []Item
返回一个`[]Item`，表示这个存储所需要的信息，所有可选信息在`model.Account`中定义，Item：
```go
type Item struct {
	Name        string `json:"name"` //名称，必须和Account中的json标识匹配
	Label       string `json:"label"` // 前端显示的标签
	Type        string `json:"type"` // 类型，可选 string/select/bool，在drivers/types.go中定义
	Values      string `json:"values"` // 类型为select时的可选项，使用,分割
	Required    bool   `json:"required"` // 是否为必选项
	Description string `json:"description"` // 此项的描述
}
```
#### Save(account *model.Account, old *model.Account) error
新增/更新此存储的账号时被调用，若是更新，会传入旧的账号，在这个函数中为每个账号做初始化，如
- 增加定时任务
- 检查账号是否正确
- 为空值赋默认值

出现错误时返回错误
#### File(path string, account *model.Account) (*model.File, error)
返回传入路径对应的`File`实例指针或错误，其在`model.File`定义。此函初及之后的函数其中传入的path已经是计算之后的值，已经去除了多账号时的前缀，所有通用错误定义在`drivers/types.go`文件中。
#### Files(path string, account *model.Account) ([]model.File, error)
返回传入路径对应的目录下的所有`File`实列的slice或错误。
#### Link(path string, account *model.Account) (*Link, error)
返回传入路径对应的文件的直链（本地除外），并包含需要携带的请求头。
#### Path(path string, account *model.Account) (*model.File, []model.File, error)
通过调用上述的File与Files函数判断是文件还是文件夹，并进行返回，当是文件时附带文件的直链。
#### Proxy(c *gin.Context, account *model.Account)
通过服务器进行中转时，对请求上下文的处理，如：
- 增加/修改/去除 Authorization/Origin/Referrer
#### Preview(path string, account *model.Account) (interface{}, error)
当此存储提供了预览接口时，可选择性实现，若实现前端也需要对应修改。如：
- 阿里云盘的office预览。
#### MakeDir(path string, account *model.Account) error
创建文件夹
#### Move(src string, dst string, account *model.Account) error
移动与重命名
#### Copy(src string, dst string, account *model.Account) error
复制
#### Delete(path string, account *model.Account) error
删除
#### Upload(file *model.FileStream, account *model.Account) error
上传文件