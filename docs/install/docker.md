---
sidebar_position: 5
---

# 使用Docker

初始密码请查看日志输出：
```bash
docker logs alist
# 或者
docker exec -it alist ./alist -password
```

### 稳定版
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

### 开发版 
不推荐，这有可能无法正常使用
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:v2
```

### 指定版本
具体见 https://hub.docker.com/r/xhofe/alist