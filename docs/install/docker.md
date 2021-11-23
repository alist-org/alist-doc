---
sidebar_position: 2
---

# 使用Docker

### 稳定版
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

### 开发版
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:v2
```

### 指定版本
具体见 https://hub.docker.com/r/xhofe/alist