---
sidebar_position: 44
---

# Contribute new storage

Duplicate `driver/template` to extend the new store. Please read [CONTRIBUTING](https://github.com/Xhofe/alist/blob/v2/CONTRIBUTING.md)

> Some interfaces have been updated, please check the code for details.

The design of the driver part of alist is easy to extend, no need to modify other files, just create a new package under the back-end project `drivers` package and reference this package in the all.go file, the package needs to contain at least two files :
- driver.go
- {name}.go

*{name} represents the storage name*

You can extend a new storage strategy.

### driver.go
The following things need to be done in this file:
- Create a new struct
- Implement the `Driver` interface under `drivers/base` for this struct:
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
	// The following method is used for WebDAV writing, you don’t need to implement it, just return base.ErrNotImplement
	MakeDir(path string, account *model.Account) error
	Move(src string, dst string, account *model.Account) error
	Copy(src string, dst string, account *model.Account) error
	Delete(path string, account *model.Account) error
	Upload(file *model.FileStream, account *model.Account) error
}
```
### {name}.go
The following things need to be done in this file:
- Implement some functions needed in the previous file
- Create an init function, and register the struct in the previous file in the init function by calling `RegisterDriver`

### Driver interface
#### Config() DriverConfig
Return an instance of `DriverConfig`:
```go
type DriverConfig struct {
Name string // storage name, unique identification
  OnlyProxy bool // Whether it can only be transferred through the server
}
```
#### Items() []Item
Return a `[]Item`, representing the information needed for this storage, all optional information is defined in `model.Account`, Item:
```go
type Item struct {
  Name string `json:"name"` //Name, must match the json identifier in Account
  Label string `json:"label"` // The label displayed on the front end
  Type string `json:"type"` // Type, optional string/select/bool, defined in drivers/types.go
  Values ​​string `json:"values"` // Optional, use, and split when the type is select
  Required bool `json:"required"` // Is it a required option
  Description string `json:"description"` // description of this item
}
```
#### Save(account *model.Account, old *model.Account) error
It is called when the stored account is added/updated. If it is updated, the old account will be passed in, and each account will be initialized in this function, such as
- Add timed tasks
- Check if the account is correct
- Assign default values ​​to empty values

Return an error when an error occurs
#### File(path string, account *model.Account) (*model.File, error)
Returns the `File` instance pointer or error corresponding to the passed path, which is defined in `model.File`. In the functions at the beginning of this letter and later, the path passed in is already the calculated value, and the prefix for multiple accounts has been removed. All common errors are defined in the `drivers/types.go` file.
#### Files(path string, account *model.Account) ([]model.File, error)
Returns all slices or errors in the `File` list under the directory corresponding to the passed path.
#### Link(path string, account *model.Account) (*Link, error)
Returns the direct link of the file corresponding to the incoming path (except local), and contains the request headers that need to be carried.
#### Path(path string, account *model.Account) (*model.File, []model.File, error)
Judge whether it is a file or a folder by calling the above-mentioned File and Files function, and return it. When it is a file, a direct link of the file is attached.
#### Proxy(c *gin.Context, account *model.Account)
When transiting through the server, the processing of the request context, such as:
- Add/modify/remove Authorization/Origin/Referrer
#### Preview(path string, account *model.Account) (interface{}, error)
When this store provides a preview interface, it can be implemented selectively, and if the front-end is implemented, it needs to be modified accordingly. like:
- Office preview of Alibaba Cloud Disk.
#### MakeDir(path string, account *model.Account) error
Create folder
#### Move(src string, dst string, account *model.Account) error
Move and rename
#### Copy(src string, dst string, account *model.Account) error
copy
#### Delete(path string, account *model.Account) error
delete
#### Upload(file *model.FileStream, account *model.Account) error
upload files