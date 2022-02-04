---
sidebar_position: 3
---

# Manual installation

### Get Alist
Open [AList Release](https://github.com/Xhofe/alist/releases) to download the files corresponding to the system to be deployed. The latest version of the front-end has been packaged with the back-end, so there is no need to download the front-end files again.

### Running

#### Linux
```bash
# Unzip the downloaded file to get the executable file:
tar -zxvf alist-xxxx.tar.gz
# Grant program execution permissions:
chmod +x alist-xxxx
# Run the program
./alist-xxxx
```
*The xxxx refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is alist-linux-amd64*

<details>
  <summary>Windows</summary>
  <div>
    Decompress the obtained zip package directly and start alist-xxxx.exe.
  </div>
</details>

When you see the output of `start server @ 0.0.0.0:5244` and no error is reported afterwards, it means that the operation is successful. The initial password will be output when running for the first time. The program listens to port 5244 by default. Now open `http://ip:5244` You can see the login page, please see [WebDav](../webdav.md) for webdav.

### Daemon
`vim /usr/lib/systemd/system/alist.service` add the following content, where path_alist is the path where alist is located
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
Then `systemctl daemon-reload`, now you can use these commands to manage the program:
- Start: `systemctl start alist`
- Shut down: `systemctl stop alist`
- Self-start: `systemctl enable alist`
- Status: `systemctl status alist`
- Restart: `systemctl restart alist`