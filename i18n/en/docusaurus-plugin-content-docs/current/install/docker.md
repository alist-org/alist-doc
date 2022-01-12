---
sidebar_position: 5
---

# Use Docker

The default password is `alist`.

### stable version
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:latest
```

### beta version
```bash
docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 --name="alist" xhofe/alist:v2
```

### Specify version
See https://hub.docker.com/r/xhofe/alist for details