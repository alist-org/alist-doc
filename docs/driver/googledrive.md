---
sidebar_position: 6
---

# 谷歌云盘
支持团队盘
### 获取client_id,client_secret,refresh_token
使用https://tool.nn.ci/google/request

### 根目录file_id
与阿里云盘类似，官网url最后面一串，如：
![google](https://store.heytapimage.com/cdo-portal/feedback/202111/24/c0874174c0363207c2b67653d6e9e68c.png)



## 图文教程（视频版在下面）

-----
注：搭建Alist服务的机器首先要能连接到Google网盘(科学连接到不行,得程序能连接到)，或者直接用国外服务器才可以喔~
注：搭建Alist服务的机器首先要能连接到Google网盘(科学连接到不行,得程序能连接到)，或者直接用国外服务器才可以喔~
注：搭建Alist服务的机器首先要能连接到Google网盘(科学连接到不行,得程序能连接到)，或者直接用国外服务器才可以喔~

-----

**先打开 https://tool.nn.ci/google/request   点击 `1. 创建应用或者直接使用默认应用`**

![1](/img/driver/google/Google-0.png)

**如果没有登录谷歌账号,先登录谷歌账号，点击 `已启用的API和服务` 或者 `库` 二选一 都可以**

![1](/img/driver/google/Google-1.png)

**点击 `已启用的API和服务` 或者 `库` 进去后下拉找到 `Google Driver API`**

![1](/img/driver/google/Google-2.png)

点击 **`Google Driver API` **进去后，看下图示意图，将API服务启用

![1](/img/driver/google/Google-3.png)

 **`Google Driver API`** 启用后我们进行一个 应用创建 - 仔细看~~~

如果是第一次创建 那么应该会出现 **` ❗如需创建 OAuth 客户端ID,您必须先配置统一屏幕`**，我们就去配置即可,点击页面的  **`配置同意屏幕`** 即可跳转到配置界面，配置教程看下图，配置好后再回来看这张图~

![1](/img/driver/google/Google-5-1.png)

**`OAuth`** 配置教程，如已配置好 忽略本图即可(如果看不清楚可以放大)

![1](/img/driver/google/Google-6.png)

我们创建好 **`OAuth 客户端ID`** 后点击我们刚刚创建的 **`OAuth 客户端ID`**随便写~ 进去后有  `客户端ID`  和  `客户端秘钥 `

![1](/img/driver/google/Google-7.png)

获取到 `客户端ID`  和  `客户端秘钥 ` 后

我们回到最开始 **https://tool.nn.ci/google/request** 把 `客户端ID`  和  `客户端秘钥 ` 填进去

![1](/img/driver/google/Google-8.png)

填好`客户端ID`  和  `客户端秘钥 ` 后点击 `2.获取Code然后粘贴`进行如下一系列操作即可

![1](/img/driver/google/Google-11.png)

上述操作后我们也拿到了 `刷新令牌`我们去 **`Alist后台`**添加账号里面进行添加吧~

![1](/img/driver/google/Google-12.png)

后台添加账号保存后我们就挂载成功啦~我们来看下吧

左侧是Alist挂载的 右侧是谷歌网盘里面的内容~ **o(*^＠^*)o**

![1](/img/driver/google/Google-13.png)





# 视频教程



<video controls src="https://video-direct-link.vercel.app/bili.mp4?aid=601329909&bvid=BV1YB4y1h7cn&cid=782769191" width="100%" />

**https://www.bilibili.com/video/BV1YB4y1h7cn**
