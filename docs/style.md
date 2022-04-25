---
sidebar_position: 20
---

# 示例样式
### 自定义主体宽度
```html
<style>
  @media screen and (min-width: 62em) {
    .root-box {
      width: 1300px !important;
    }
  }
</style>
```
### 无边框阴影
```html
<style>
.chakra-ui-light{
  background-color: #edddfd;
}
.main-box {
  border-radius: 15px !important;
  box-shadow: unset !important;
}
.chakra-ui-light .main-box {
  background-color: rgba(255,255,255,0.9) !important;
}
.chakra-ui-light .readme-box {
  background-color: rgba(255,255,255,0.9) !important;
}
.readme-box {
  border-radius: 15px !important;
  box-shadow: unset !important;
}
</style>
```
### 仿大白样式
```html
<style>
.chakra-ui-light{
  background-image: linear-gradient(120deg,#e0c3fc 0%,#8ec5fc 100%) !important;
  background-attachment: fixed;
}
.main-box {
  border-radius: 15px !important;
}
.chakra-ui-light .main-box {
  background-color: white !important;
}
.chakra-ui-light .readme-box {
  background-color: white !important;
}
.readme-box {
  border-radius: 15px !important;
}
</style>
```

### 随机二次元背景图样式
```html
<style>
.chakra-ui-light{
  background-image: url("https://www.dmoe.cc/random.php") !important;
  background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position-x:center;
}
.main-box {
  border-radius: 15px !important;
}
.chakra-ui-light .main-box {
  background-color: #ffffff70 !important;
}
.chakra-ui-light .readme-box {
  background-color: white !important;
}
.readme-box {
  border-radius: 15px !important;
}
</style>

<script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"></script>

<script>
    L2Dwidget.init({
        "model": {
            jsonPath: "https://blog.imlete.cn/live2d/assets/weier.model.json",<!--这里改模型，前面后面都要改-->
            "scale": 0.8
        },
        "display": {
            "position": "right",<!--设置看板娘的上下左右位置-->
            "width": 50,
            "height": 100,
            "hOffset": 50,
            "vOffset": -10
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 1,<!--设置透明度-->
            "opacityOnHover": 0.2
        }
    });
</script>
```

### 猛男风格
```html
<!--head-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
<style>
*{font-family:'ZCOOL XiaoWei',serif}#root,.App,body,html{min-height:70vh;margin:0;padding:0;margin-top:1%!important}.chakra-ui-light{background-color:#fff}.main-box{border-radius:15px!important;box-shadow:unset!important}.chakra-ui-light .main-box,.chakra-ui-light .readme-box{background-color:rgba(255,255,255,.8)!important}.readme-box{border-radius:15px!important;box-shadow:unset!important}body{background-size:cover!important;background-position:center top!important;background-attachment:fixed!important}.chakra-breadcrumb__list li,.chakra-breadcrumb__list li a{color:#000!important}.css-neion{color:#ffb6c1!important}.chakra-stack button{color:#fff!important}.chakra-stack .list-title p,.overlay button{color:#ffb6c1!important}a:hover{color:#f9cfec!important}.foot{line-height:40px;position:fixed;bottom:0;width:100%;text-align:center;letter-spacing:1px}dibu{border-top:0;position:absolute;bottom:0;width:100%;margin:0;padding:0}#bg{-moz-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-backface-visibility:hidden;position:fixed;top:0;left:0;width:100%;height:100vh;z-index:-1}#bg:after,#bg:before{content:'';display:block;position:absolute;top:0;left:0;width:100%;height:100%}#bg:before{-moz-transition:background-color 2.5s ease-in-out .75s;-webkit-transition:background-color 2.5s ease-in-out .75s;-ms-transition:background-color 2.5s ease-in-out;transition:background-color 2.5s ease-in-out .75s;-ms-transition-delay:.75s;background-image:linear-gradient(to top,rgba(255,255,255,.7),rgba(255,255,255,.7)),url(https://jitsu.oss-cn-beijing.aliyuncs.com/home/img/overlay.png);background-size:auto,256px 256px;background-position:center,center;background-repeat:no-repeat,repeat;z-index:2}#bg:after{-moz-transform:scale(1.125);-webkit-transform:scale(1.125);-ms-transform:scale(1.125);transform:scale(1.125);-moz-transition:-moz-transform 325ms ease-in-out,-moz-filter 325ms ease-in-out;-webkit-transition:-webkit-transform 325ms ease-in-out,-webkit-filter 325ms ease-in-out;-ms-transition:-ms-transform 325ms ease-in-out,-ms-filter 325ms ease-in-out;transition:transform 325ms ease-in-out,filter 325ms ease-in-out;background-image:url(https://iw233.cn/api.php?sort=pc);background-position:center;background-size:cover;background-repeat:no-repeat;z-index:1}@media screen and (max-width:960px){#bg:after{-moz-transform:scale(1.125);-webkit-transform:scale(1.125);-ms-transform:scale(1.125);transform:scale(1.125);-moz-transition:-moz-transform 325ms ease-in-out,-moz-filter 325ms ease-in-out;-webkit-transition:-webkit-transform 325ms ease-in-out,-webkit-filter 325ms ease-in-out;-ms-transition:-ms-transform 325ms ease-in-out,-ms-filter 325ms ease-in-out;transition:transform 325ms ease-in-out,filter 325ms ease-in-out;background-image:url(https://iw233.cn/api.php?sort=mp);background-position:center;background-size:cover;background-repeat:no-repeat;z-index:1}}
</style>

<!--body-->
<div id="bg">

<!--如需修改请自行将代码格式化-->
```
或者
```html
<!--head-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/anosu/anosu.github.io@main/cdn/css/alist/style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!--body-->
<div id="bg">
```

:::tip
如果你有好看的样式想要分享出来，可以点击下方的[Edit this page](https://github.com/Xhofe/alist-doc/edit/main/docs/style.md)发起pr将你的样式添加到本页面。
:::
