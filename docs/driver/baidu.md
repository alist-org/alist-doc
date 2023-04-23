---
sidebar_position: 19
---

# 百度网盘

:::tip
由于百度网盘API的限制，下载较大的文件（目测>20M）需要携带header："User-Agent":"pan.baidu.com"，所以在下载大于20M的文件时，需要自行设置请求头，如使用curl：
```bash
curl -L -X GET 'YOUR_LINK' -H 'User-Agent: pan.baidu.com' 
```
或使用本程序中的代理功能进行中转。
:::

### 刷新令牌

[点此](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://alist.nn.ci/tool/baidu/callback&scope=basic,netdisk&qrcode=1)获取刷新令牌。

### 根目录路径

要挂载的根目录，默认为`/`

### Download api

- official: 官方接口，非常稳定，但是对于较大文件需要修改UA且速度慢
- crack：非官方接口，无需修改UA且部分文件**可能**不限速，但是**可能**会不稳定



## 视频教程

注：以下视频介绍的仅限于已有 **`百度网盘超级会员`** 用户下载速度快，普通会员自测。
注：以下视频介绍的仅限于已有 **`百度网盘超级会员`** 用户下载速度快，普通会员自测。
注：以下视频介绍的仅限于已有 **`百度网盘超级会员`** 用户下载速度快，普通会员自测。

<video controls src="https://video-direct-link.vercel.app/bili.mp4?aid=895509076&bvid=BV1UA4y1X7J8&cid=571144292" width="100%" />

**https://www.bilibili.com/video/BV1UA4y1X7J8**

