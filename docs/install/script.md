---
sidebar_position: 1
---

# 一键脚本

仅支持Linux-x86_64/aarch64平台。

### 安装
```bash
curl -fsSL "https://alist.nn.ci/v2.sh" | bash -s install
```
:::danger
已经安装过再次执行安装会删除之前的数据，更新请使用更新命令。
:::

### 更新
```bash
curl -fsSL "https://alist.nn.ci/v2.sh" | bash -s update
```

### 卸载
```bash
curl -fsSL "https://alist.nn.ci/v2.sh" | bash -s uninstall
```

### 自定义路径
默认安装在`/opt/alist`，要自定义安装路径，添加安装路径为第二个参数，必须是绝对路径（路径以alist结尾时直接安装到给定路径，否则会安装在给定路径alist目录下），如安装到`/root`：
```bash
# 安装
curl -fsSL "https://alist.nn.ci/v2.sh" | bash -s install /root
# 更新
curl -fsSL "https://alist.nn.ci/v2.sh" | bash -s update /root
# 卸载
curl -fsSL "https://alist.nn.ci/v2.sh" | bash -s uninstall /root
```