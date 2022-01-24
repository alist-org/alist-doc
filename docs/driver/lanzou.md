---
sidebar_position: 8
---

# 蓝奏云

由于每个人的链接可能不一样，所以cookie挂载也需要填写share url，随便一个分享链接就可以。

### cookie
通过cookie获取账号内的文件夹，cookie有效期未知，测试一直未失效。

打开浏览器开发者工具，切至网络tab，然后登陆蓝奏云，并打开要分享的文件夹，找到最新的`https://pc.woozooo.com/doupload.php`请求：
![doupload.php](https://store.heytapimage.com/cdo-portal/feedback/202112/01/d46acbac6f61094529656359fd406161.png)
就可以看到cookie和要分享的文件夹id。
不填文件夹id则默认为根目录。
### share url
只填写外链分享地址与分享密码即可。
蓝奏云的分享只能分享一个文件夹内的文件，所以看不到文件夹是正常现象。