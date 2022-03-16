---
sidebar_position: 20
---

# 示例样式
### 无边框阴影
```css
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
```
### 仿大白样式
```css
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
```

### 随机二次元背景图样式
```css
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
```

:::tip
如果你有好看的样式想要分享出来，可以点击下方的[Edit this page](https://github.com/Xhofe/alist-doc/edit/main/docs/style.md)发起pr将你的样式添加到本页面。
:::
