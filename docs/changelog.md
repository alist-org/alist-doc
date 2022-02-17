---
sidebar_position: 15
---

# 更新日志
### v2.0.10
- 音乐播放列表排序与滚动 [#529](https://github.com/Xhofe/alist/discussions/529)
- 前端支持通过正则表达式隐藏文件 [#464](https://github.com/Xhofe/alist/discussions/464)
- 音乐播放记住音量 [#549](https://github.com/Xhofe/alist/issues/549)
- IPA文件安装
- 修复一些loading的问题
- 修复视频列表超出屏幕无法滚动的问题
- 账号负载均衡
- 修复初次启动不创建临时目录的问题
- Favicon重定向 [#512](https://github.com/Xhofe/alist/issues/512)
- 添加账号时增加默认数据
- 修复webdav游客隐藏账号 [#522](https://github.com/Xhofe/alist/issues/522)
- 修复百度token泄漏问题
- 修复天翼云盘上传文件包含特殊符合问题 [#527](https://github.com/Xhofe/alist/issues/527)
- 支持WebDav直接代理，以支持不支持302跟随的客户端
- api请求设置超时 [#535](https://github.com/Xhofe/alist/issues/535)
- 自定义临时目录 [#519](https://github.com/Xhofe/alist/issues/519)
- 支持空密码（防止改成空之后无法登录）
- 夸克网盘支持（仅中转）
- s3添加S3ForcePathStyle选项 [#551](https://github.com/Xhofe/alist/issues/551)
- 修复和彩云无法删除目录

### v2.0.9
- 文本文件GBK编码支持 [#469](https://github.com/Xhofe/alist/discussions/469)
- 管理密码为空时取消获取是否登录
- 修复FTP连接长时间无操作断开的问题 [#462](https://github.com/Xhofe/alist/issues/462)
- S3对象存储自定义加速域名 [#362](https://github.com/Xhofe/alist/discussions/362)
- Yandex.Disk 存储支持 [#443](https://github.com/Xhofe/alist/discussions/443)
- 修复蓝奏云下载问题（适配蓝奏云下载页面的改动）
- 百度网盘存储支持
- Windows下webdav上传空文件问题 [#376](https://github.com/Xhofe/alist/issues/376)
- 随机初始管理密码 [#467](https://github.com/Xhofe/alist/discussions/467)
- 修改默认的logo

### v2.0.8
:::caution
zhimg的cdn有问题，请切换至jsdelivr或local，参见[assets](./setting/config.md)
:::
> #### fix
> - 修复webdav
> - 修复ftp conn没有保存

- 网页端增加复制
- 修复文件夹icon的问题
- 为一些操作增加loading
- 修复天翼云盘排序问题（使用本地排序） [#407](https://github.com/Xhofe/alist/issues/407)
- Teambition上传
- 增加OCR，用于识别天翼云盘验证码
- 修复一个本地存储的安全漏洞，若使用本地存储请务必更新
- 部分存储上传文件时使用tempFile而不是TeeReader，减少内存使用，避免OOM
- 修复123云盘上传bug [#449](https://github.com/Xhofe/alist/issues/449)
- 天翼云盘chunk上传 [#358](https://github.com/Xhofe/alist/issues/358)
- 删除可能会导致OOM的Text函数

### v2.0.7
- 修复和彩云上传等操作用户不存在的错误 [#365](https://github.com/Xhofe/alist/issues/365) [#373](https://github.com/Xhofe/alist/issues/373)
- 修复使用本地代理中转时出现的memory leak
- 修复GoogleDrive无法加载Readme.md等文本文件 [#379](https://github.com/Xhofe/alist/issues/379)
- 适配蓝奏云不同域名
- 隐藏s3占位空文件
- 禁止MediaTrack新建同名文件夹
- 支持所有存储将文件夹提取至最前面
- web端新建文件夹、重命名和移动
- 为postgres 增加sslmode配置
- 修复webdav加密时文件无法获取
- 增加musl-libc的prebuilt
- 修复123云盘的移动
- 修复文件未加载完时路径改变造成的不匹配
- 显示上传速度和剩余时间
- 修复密码为空时管理员登录无法预览

### v2.0.6
- 修改一些错别字 [#348](https://github.com/Xhofe/alist/discussions/348)
- 修复和彩云的用户不存在的错误 [#338](https://github.com/Xhofe/alist/issues/338)
- 更换首页的Spinner
- 增加账号复制和粘贴
- 移除密码为空时的错误提示
- 增加unpkg.zhimg.com的cdn
- 修复分秒帧WebDAV无法新建文件夹 [#351](https://github.com/Xhofe/alist/discussions/351)
- 为登陆用户取消隐藏文件 [#343](https://github.com/Xhofe/alist/discussions/343)
- 修复FTP无法下载的问题
- 禁止删除根目录
- 修复GoogleDrive本地代理视频无法跳转播放的问题 [#334](https://github.com/Xhofe/alist/discussions/334)

### v2.0.5

- 修复复制直链时使用token或密码的判断
- 解决react-viewer带来的空div
- 增加分页支持（可选加载全部、加载更多、自动加载更多、分页）[#257](https://github.com/Xhofe/alist/discussions/257)
- 字幕添加响应式
- 修复路径导航栏名称重复时失效的问题
- epub、flv预览支持
- 增加删除确认
- 修复发生文件修改时的指定缓存清理
- 增加123盘和天翼云盘上传
- 新的driver：Teambition、Mediatrack和和彩云
- 修改配置文件结构时更新配置文件
- 修复使用其他服务器代理本地文件时的bug
- 修复重复保存天翼云盘时出现的get empty page
- 网页端多文件上传和删除
- 移除后台管理的自定义头部和body内容

### v2.0.4

> #### v2.0.4-fix2
> - markdown 图片显示问题
> - 修复alist存储的错误
> - 暗色时上传组件的背景颜色
> - 自定义Home emoji
> - 修复web上传时获取到错误的 content-type
> #### v2.0.4-fix
> - 修复是否可以上传的判读错误

- 新增wav音频预览
- 支持隐藏账号
- 去除FTP存储返回的`.`和`..`目录
- 增加WebDAV访客账号
- 设置分组
- 支持onedrive、GoogleDrive、PikPak WebDAV写
- 新增闪电盘存储支持 [#234](https://github.com/Xhofe/alist/discussions/234)
- 对不支持排序的存储使用本地排序
- GoogleDrive存储增加预览图
- S3存储协议支持 [#211](https://github.com/Xhofe/alist/discussions/211)
- 自定义缓存时间
- WebDAV存储支持
- 支持移动端使用artplayer
- 视频列表播放（可自动切换）
- 文件打包zip下载
- 增加右键菜单，支持多选
- 更换markdown组件以解决一些预览问题 [#185](https://github.com/Xhofe/alist/issues/185)
- react-viewer导航栏使用预览图 [#212](https://github.com/Xhofe/alist/issues/212)
- 优化路径组件样式
- 支持网页上传文件（可以设置目录允许访客上传，请知悉：上传全部走服务器）

### v2.0.3

- 修改pdf预览为pdfjs
- 对于有预览图的音乐cover显示为预览图
- 视频字幕支持（自动检索同目录下名称以视频文件名开头一样且拓展名为`srt, vtt, ass`中的第一个）
- 修改了国际化部分的代码
- 修复FTP下载部分的bug
- 支持API代理（对于PikPak和GoogleDrive）
- 解决123云盘的IP限制导致的403问题
- 修改了默认的自定义样式
- 修复了PikPak刷新令牌导致的死循环
- 增加了前端js文件使用本地的选项
- 修改了默认图标颜色
- 修改了代理字段，原来的代理会失效

### v2.0.2
:::caution
修改了onedrive类型字段，需要在后台重新选择onedrive类型。
此版本PikPak存在bug，请更新。
:::
- 修复多图预览时缩略图被裁切问题 [#212](https://github.com/Xhofe/alist/issues/212)
- 修复点击浏览图片后直接返回上一层，出现异常的请求 [#212](https://github.com/Xhofe/alist/issues/212)
- 修复使用错误的密码登陆后台后无法使用游客密码查看文件的问题
- 修复请求预览接口时未添加密码的问题
- 修复Alist存储策略跟文件夹不生效的问题
- 修复cloudflare workers代理签名不匹配的问题
- 支持本地文件代理
- 天翼云盘与123云盘部分WebDAV写支持
- 修复onedrive获取到的refresh_token为空的问题（未测试）
- 新的存储：FTP
- 新的存储：PikPak

### v2.0.1
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
- WebDAV：新增本地存储/阿里云盘支持上传、移动、创建文件夹、删除
- 支持将Alist抽象为一个driver添加
- 支持使用cloudflare worker中转下载文件
- 修复无法预览本地名为`index.html`的文件
- 支持`webm`后缀视频预览
- 优化了代码结构，抽象多个方法
- 修改了账号的proxy设置，开启后所有流量都会走服务器

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