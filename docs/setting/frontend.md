---
sidebar_position: 2
---

# 前端设置

### 标题
网页显示的标题
### logo
左上角的LOGO，可填两个使用`,`分开，分别表示light和dark的两个logo。
### favicon
浏览器标签页显示的小图标
### 图标颜色
前端显示的图标与Loding的颜色
### 文本类型
预览的时候以文本模式打开的后缀，以`,`分隔
### 隐藏文件
匹配正则表达式隐藏的文件，如果你不懂不要乱填，错误的正则表达式会导致前端页面崩溃，每行一个，默认有一个隐藏所有目录下的`README.md`的示例表达式
### 音乐封面
播放音乐的时候没有缩略图显示的封面
### 站点备案
如果是备案的站点，可以填写备案号
### home readme url
当有多个账号时，首页显示的readme的url，可以使用某个账号中的readme，操作如下：
- 复制某个账号内的markdown文件直链
- 将直链中的`/d`改为`/p`，如演示站中的：https://alist.xhofe.top/p/本地存储/README.md
### 自动播放视频
预览视频时，无需手动点击播放，自动开始
### 自动播放音频
预览音频时，无需手动点击播放，自动开始
### 自定义头部
任意内容需要自己包含标签，自动放置在网页的head开始处
### 自定义body
任意内容需要自己包含标签，自动放置在网页的body结束处
### home emoji
导航栏Home前面显示的emoji，可以不填
### 动画
文件列表弹出的动画，当文件数量居多时，显示动画会导致卡顿
### artplayer whitelist
refer to https://artplayer.org/document/options#whitelist
### artplayer autoSize
refer to https://artplayer.org/document/options#autosize
### load type
加载方式，可选四种：
- all: 加载全部
- load more: 显示一个加载更多按钮
- auto load more: 滑动到底部自动加载更多
- pagination: 显示分页
### default page size
当load type不为all时的每页数量