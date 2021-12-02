---
sidebar_position: 1
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

<details>
  <summary>Windows</summary>
  <div>
    Decompress the obtained zip package directly and start alist-xxxx.exe.
  </div>
</details>

When you see the output of `start server @ 0.0.0.0:5244` and no error is reported, it means that the operation is successful. The program listens to port 5244 by default. Now you can see the login page by opening `http://ip:5244`. The default password is `alist`, and the webdav path is `/dav`, currently read-only.

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