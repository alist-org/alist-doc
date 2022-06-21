---
sidebar_position: 10
---

# 功能限制

一些功能的限制条件：



### office在线预览

- 外网可访问
- 文档访问地址不能直接使用 ip，需要通过域名访问，并且端口必须是 80 / 443 端口
- 文档的格式（必须为以下格式之一）：
- Word：docx、docm、dotm、dotx
- Excel：xlsx、xlsb、xls、xlsm
- PowerPoint：pptx、ppsx、ppt、pps、pptm、potm、ppam、potx、ppsm
- 文档的大小：Word 和 PowerPoint 文档必须小于 10 兆字节;Excel 必须小于五兆字节
  



### 媒体播放

- 需要是浏览器支持的编码
- 一般浏览器不支持h265编码视频
- 一般浏览器不支持ac3编码音频

特别的，对于Safari：
- 对于跨域媒体，content-type必须是媒体类型，而不是通用的`application/octet-stream`，所以如果直链返回的content-type是`application/octet-stream`（比如阿里云盘），那么Safari将无法播放。（ps：为什么阿里云盘官网在safari可以播放？因为官网的视频播放并不是使用的下载链接，而是经过了阿里云盘转码之后的链接）



### PDF预览

- 除了阿里云盘之外，其他的网盘需要https+cors才可以预览
- https为自己开启，反向代理或在配置文件中提供证书均可
- cors为相关的云盘提供支持，自己无法修改，除非打开代理使用程序中转



### 打包下载

同pdf预览，需要https+cors支持



### 文件夹/文件名

本程序遵循合法url规则：
![url](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL/mdn-url-all.png)
- 不能包含`?`，这表示一个parameters参数
- 不能包含`#`，这表示一个anchor参数
- 不能包含`/`，这用于定位路径
- 不能包含`\`，错误的转义字符会导致程序陷入死循环
具体可参考https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL



### 文件上传

- 本程序上传全部使用服务器中转
- 若你使用了反向代理，可能需要在配置中指定上传文件最大大小以及超时时间
- 否则可能出现以及上传成功但是前端超时无响应的情况
