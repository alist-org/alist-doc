---
sidebar_position: 1
---

# 手动安装

### 获取Alist
打开[AList Release](https://github.com/Xhofe/alist/releases)下载要部署的系统对应的文件，最新的版本前端已经与后端打包在一起，无需再次下载前端文件。

### 运行起来

#### Linux
```bash
# 解压下载对文件得到可执行文件：
tar -zxvf alist-xxxx.tar.gz
# 赋予程序执行权限：
chmod +x alist-xxxx
# 运行程序
./alist-xxxx
```

<details>
  <summary>Windows</summary>
  <div>
    直接解压获取到的 zip 压缩包，启动 alist-xxxx.exe 即可。
  </div>
</details>

当看到输出`start server @ 0.0.0.0:5244`且之后没有报错后，就表示运行成功了，程序默认监听5244端口，现在打开`http://ip:5244`就可以看见登陆页面了，默认密码为`alist`，webdav路径为`/dav`，目前只有只读。

### 守护进程
`vim /usr/lib/systemd/system/alist.service`添加以下内容，其中path_alist为alist所在的路径
```ini
[Unit]
Description=alist
After=network.target
 
[Service]
Type=simple
WorkingDirectory=path_alist
ExecStart=path_alist/alist-xxxx -conf data/config.json
Restart=on-failure
 
[Install]
WantedBy=multi-user.target
```
然后`systemctl daemon-reload`，现在你就可以使用这些命令来管理程序了：
- 启动: `systemctl start alist`
- 关闭: `systemctl stop alist`
- 自启: `systemctl enable alist`
- 状态: `systemctl status alist`
- 重启: `systemctl restart alist`
