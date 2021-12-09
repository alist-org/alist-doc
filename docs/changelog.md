---
sidebar_position: 8
---

# 更新日志

### next
:::caution
之前的自定义样式和自定义脚本会失效，但在后台设置里还会看得到，可在自定义头部与自定义body里重新设置。
:::
- 直链密码加入文件名进行加盐
- 优化直链加密部分代码结构
- 修复overlay组件被markdown组件盖住的问题
- 去除之前的自定义样式和自定义脚本，改为自定义头部和自定义body
- 移除首页的100%限高
- 修改vite的构建target为es2015，提升浏览器兼容性
- 对后台密码加盐
- 登陆后台后文件列表不再需要密码
- 修复文件名含有%时的编码问题（尽量不要包含%，刷新会报错）
- 允许删除过时的设置
- WebDAV：新增阿里云盘支持上传、移动、创建文件夹、删除
- 支持将Alist抽象为一个driver添加
- 支持使用cloudflare worker中转下载文件
- 修复无法预览本地名为`index.html`的文件
- 支持`webm`后缀视频预览
- 优化了代码结构，抽象多个方法

### v2.0.0
- 修复Windows上的检查父文件夹密码失效
- 优化代码结构
- onedrive增加缩略图
- 修复Windows Sharepoint目录问题
- 增加Googledrive默认根目录
- 支持蓝奏云（cookie和URL）
- 修复onedrive排序问题
- https支持
- 增加WebDAV中转可选项
- 修复文件名过长时样式问题
- 前端密码输入监听回车事件

### v2.0.0-beta7
- 修复可能产生的http连接无法结束的问题
- 修复onedrive文件数量大于200时缺失的问题
- 尝试修复189云盘获取登陆页面为空的问题 [#169](https://github.com/Xhofe/alist/issues/169)
- 增加本地文件排序 [#170](https://github.com/Xhofe/alist/issues/170)
- 修复Windows下检查父目录密码陷入死循环的问题
- 升级markdown组件，解决标题中的链接渲染问题 [#165](https://github.com/Xhofe/alist/issues/165)
- 增加切换主题的同时切换logo的功能 [#163](https://github.com/Xhofe/alist/issues/163)
- 优化一些后端样式
- 重新编写文档，没错，就是本文档
- 修复当前文件夹与父文件夹密码不同并开启检查文件夹密码时，产生的密码错误问题
- 重构Driver部分，结构更加清晰
- WebDAV支持（仅查看）

### v2.0.0-beta6
- 修复重启时添加账号产生的指针指向错误
- 删除账号时从内存账号表中同时删除
- 修复多个网盘的状态显示
- 增加天翼云盘支持
- 修复Windows下onedrive的路径问题
- 增加gbk格式的文本预览
- 增加忘记密码时后端查看当前密码
- 取消无用的文件缓存
- 修改代理接口
- 增加GoogleDrive支持
- 增加123云盘支持
- 增加直链密码检查 [#160](https://github.com/Xhofe/alist/issues/160)

### v2.0.0-beta5
:::caution
由于数据库更改了主键，此版本与之前不兼容，需要重新安装。
:::
- 音频添加m4a播放 [#155](https://github.com/Xhofe/alist/issues/155)
- 简化设置修改方式
- docker添加数据目录映射
- 后端由`go-fiber`切换到`gin`
- 修复中转下载问题
- 修改数据库主键
- 添加检查父目录密码 [#157](https://github.com/Xhofe/alist/issues/157)
- 增加自定义样式/脚本
- 修复播放音乐时列表未过滤的bug
- 给组件添加类名，方便进行自定义样式

### v2.0.0-beta4
- 删除账号时同时删除定时任务
- 添加markdown主题设置
- 修复路径包含+时直链无法下载
- 添加docker自动构建
- 修复清除缓存时发生错误的提醒
- 添加文件下载按钮
- 修复翻页时的提醒
- 修复mysql key关键字问题 [#151](https://github.com/Xhofe/alist/issues/151)

### v2.0.0-beta3
- 修复beta1时添加的meta无法删除的bug
- 取消获取文件夹为空时的缓存
- 修复onedrive的状态显示问题
- 添加前端静态文件cdn
- 一些组件懒加载
- 修复由于设置加载慢首次不生效的bug
- 修复http协议时无法复制的bug
- 添加复制目录下所有文件直链
- 给按钮添加一些tooltip

### v2.0.0-beta2
- 修复添加meta时路径未格式化
- 添加多个账号时主页的readme设置
- 修复设置修改无法输入的bug
- 修复后台管理title错误

### v2.0.0-beta
- v2初次发布