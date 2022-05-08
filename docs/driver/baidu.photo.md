---
sidebar_position: 30
---

# 一刻相册

:::tip
由于没有目录结构，所以使用相册作为一级目录，不支持多级
考虑到列出所有文件不现实（存有百万张图片），未设置相册ID时根目录只列出所有相册
由于相册文件具有关联所有只移除相册内文件不删除源文件
上传只允许上传到**相册**
:::


### 刷新令牌（同百度网盘的一样）

[点此](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://tool.nn.ci/baidu/callback&scope=basic,netdisk&qrcode=1)获取刷新令牌。

### album_id

- **默认为空时,直接显示根目录全部相册.**
- 如果挂载单个相册时需填写如下内容

- album_id 应填：{album_id}|{tid}     示例：4021858707431029901|316519298447849660

- {album_id} ：进入你需要挂载的相册后,查看顶部链接/album 后的ID就是 {album_id}

  - https://photo.baidu.com/photo/web/album/**4021858707431029901**   <-----粗体就是 {album_id} 

- {tid}:访问 **  https://photo.baidu.com/youai/album/v1/list **  获取
  - 进入界面后`Ctrl+F`搜索上面的ID,在下面数几行就可以看到对应的 {tid} 

![1](/img/driver/baidu.photo/tid.png)


### 填写示例
![2](/img/driver/baidu.photo/YikeDemo.png)