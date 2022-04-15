---
sidebar_position: 10
---

# 常见问题
### 添加天翼云盘时：设备ID不存在，需要二次设备校验
可能是触发了防控，修改密码后重新添加。
### 阿里云盘视频无法播放，下载显示InvalidArgument？
由于referrer的限制，必须使用移动端token
### 视频播放不了？
检查一下是不是编码不支持，一般浏览器不支持h.265（hevc）等编码视频，ac3等编码音频，Safari不支持的更多，建议使用软件播放。
### 前端文件在哪里？
为方便安装，前端文件与程序打包在一起了，如需修改，请按照从源码运行自行修改编译或填写自定义样式/脚本字段。
### 密码忘了怎么办？
命令行 ./alist-xxxx -password查看。(其中的xxxx是指不同系统/架构对应的名称，一般Linux-x86/64是alist-linux-amd64，若使用脚本安装，则名称直接为alist)
> 具体对应到安装方式：
> - 脚本安装：安装时会输出初始密码，再次获取：`cd /opt/alist && ./alist -password`
> - 二进制手动安装：在程序所在目录执行：`./alist -password` （其中的alist指二进制文件名）
> - Docker：使用命令`docker exec -it alist ./alist -password` 查看密码
> - PaaS: 对应仓库查找查看密码的方法

### 自定义样式/脚本不生效？
是否前后端分开了？自定义部分为后端处理，只有在不分开时才起作用。
### 上传的文件不显示/删除的文件还在/修改根目录不生效？
程序缓存一小时自动失效，在后台登录之后返回列表，然后到你改动的目录右键刷新即可，**不推荐**清除所有缓存。
### 如何修改监听端口
程序所在目录的data文件夹下的配置文件：`config.json`，修改其中的port值即可。
### webdav浏览器打开显示Internal Server Error？
webdav是给浏览器用的吗？
### 如何更新？
除了在`更新日志`中标注了与之前不兼容的版本外，皆可以直接替换二进制文件进行更新。
docker更新请参考：https://store.heytapimage.com/cdo-portal/feedback/202112/12/1e64956f796e95070bed2d7f2c61bdd5.png
### Onedrive: The property xx is not supported for OrderBy?
在 OneDrive for Business 和 SharePoint Server 2016 中，orderby 查询字符串仅支持 name 和 url。
### 关于浏览器支持度
请自行搜索：`vite`,`chakra-ui`,`react`等[`alist-web`所使用到的依赖](https://github.com/alist-org/alist-web/blob/v2/package.json)的浏览器的支持度，本程序浏览器支持度由上层依赖决定。
### 添加账号提示：`UNIQUE constraint failed: x_accounts.name`
虚拟路径是唯一的，不能重复。
### 上传后台处理中？
本程序的上传流程是：客户端->服务器->对应的存储，如果你的服务器上传带宽很小，则会需要很长时间，如果使用nginx反代还可能会出现超时，但其实后台仍然在上传。
所以web上传功能一般只建议在服务器带宽够大或者本地使用。
> 为什么不使用web端直传？因为要兼容webdav协议，webdav只能由服务器中转，且部分网盘上传时有各种限制，只在前端无法处理。所以统一为由后端上传。

:::tip
如果阅读文档之后，还未解决你的问题，请优先[在Discussions中提问/讨论](https://github.com/Xhofe/alist/discussions/new)或[提issue](https://github.com/Xhofe/alist/issues/new/choose)。
:::