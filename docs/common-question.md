---
sidebar_position: 10
---

# Alist常见问题



### 添加天翼云盘时：设备ID不存在，需要二次设备校验

可能是触发了防控，修改密码后重新添加。

### 阿里云盘视频无法播放，下载显示InvalidArgument？

由于referrer的限制，必须使用移动端token

### 视频播放不了？有声无画面? 有画面无声音?

检查一下是不是编码不支持，一般浏览器不支持h.265（hevc）等编码视频，ac3等编码音频，Safari不支持的更多，**建议使用软件播放**。

> 现有主流浏览器支持度：
> - Chrome(Chromium):  版本104以上将会支持h.265（hevc）PS：[目前该版本尚未正式发布](https://www.bilibili.com/read/cv16293285)
> - Microsoft Edge:    新旧内核均支持h.265（hevc），但需额外安装插件
> - Mozilla Firefox:   不支持h.265（hevc）
> - Apple Safari:      支持h.265（hevc）

### 前端文件在哪里？

为方便安装，前端文件与程序打包在一起了，如需修改，请按照从源码运行自行修改编译或填写自定义样式/脚本字段。

### 密码忘了怎么办？

命令行 ./alist-xxxx -password查看。(其中的xxxx是指不同系统/架构对应的名称，一般Linux-x86/64是alist-linux-amd64，若使用脚本安装，则名称直接为alist)
> 具体对应到安装方式：
> - 脚本安装：安装时会输出初始密码，再次获取：`cd /opt/alist && ./alist -password`
> - 二进制手动安装：在程序所在目录执行：`./alist -password` （其中的alist指二进制文件名）
> - Docker：使用命令`docker exec -it alist ./alist -password` 查看密码
> - PaaS: 对应仓库查找查看密码的方法

### 账号复制粘贴出错

clipboard API 需要 https,并且Firefox并不完整支持它，在Firefox上该功能无法正常使用。
建议使用Microsoft Edge（版本79及以上）

### 自定义样式/脚本不生效？

是否前后端分开了？自定义部分为后端处理，只有在不分开时才起作用。

### 上传的件不显示/删除的文件还在/修改根目录不生效？

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

请自行搜索：`vite`,`chakra-ui`,`react`等[`alist-web` 所使用到的依赖](https://github.com/alist-org/alist-web/blob/v2/package.json)的浏览器的支持度，本程序浏览器支持度由上层依赖决定。

### 添加账号提示：`UNIQUE constraint failed: x_accounts.name`

虚拟路径是唯一的，不能重复。

### 上传后台处理中？

本程序的上传流程是：客户端->服务器->对应的存储，如果你的服务器上传带宽很小，则会需要很长时间，如果使用nginx反代还可能会出现超时，但其实后台仍然在上传。
所以web上传功能一般只建议在服务器带宽够大或者本地使用。
> 为什么不使用web端直传？因为要兼容webdav协议，webdav只能由服务器中转，且部分网盘上传时有各种限制，只在前端无法处理。所以统一为由后端上传。

### 怎么去掉底部的`Powered by Alist`？

请尊重开发者的劳动成果，谢谢

### 怎么去掉底部的`管理`？

这除了给你进入管理页面带来麻烦之外，并没有其他任何意义。但我们仍提供了去除它的css：
```html
<style>
.footer span,.footer a:nth-of-type(2){
  display:none;
}
</style>
```


### TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused?

诸如此类的网络问题，请自行排查解决。

### 搜索相关问题

**2022年6月23日  v2.6.1 版本**

1.  搜索目前处于实验室功能，【不推荐】使用
2.  开启方式  **Alist后台 →  设置 →  后端 →  enable search开关打开**
3.  搜索快捷键 【Ctrl + K】，需要先去后台开启按钮，开启方式参考第二条
4.  开启后搜索不到东西,因为需要缓存才可以搜索,需要你先去浏览一圈文件才能搜索到
5.  会搜索出来你  **加密、隐藏** 等未公开的文件，请看第一条
6.  已经修改了文件/文件夹名称 还是能搜索出来，点过去无效，缓存问题 ~ 请看第一条
7.  什么时候正式版上线，未知敬请期待...

### Windows(xp,w7,w8)等,Windows10以下的系统密码不对,显示乱码

低版本Windows（win10以下）不适配，密码为 **4m和←** 之间的八个字符。比如下图

![WindowsPassword](/img/driver/alist/WindowsPassword.png)



:::tip
如果阅读文档之后，还未解决你的问题，请优先[在Discussions中提问/讨论](https://github.com/Xhofe/alist/discussions)或[提issue](https://github.com/Xhofe/alist/issues/new/choose)。
:::
