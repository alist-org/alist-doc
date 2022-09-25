---
sidebar_position: 1
---

# One-click script

Only for Linux-x86_64 platform.

### Install
```bash
curl -fsSL "https://nn.ci/alist-v2.sh" | bash -s install
```
:::danger
If it has already been installed, executing the installation again will delete the previous data. To update, please use the update command.
:::

### update
```bash
curl -fsSL "https://nn.ci/alist.sh-v2" | bash -s update
```

### Uninstall
```bash
curl -fsSL "https://nn.ci/alist-v2.sh" | bash -s uninstall
```

### Custom path
The default installation is in `/opt/alist`. To customize the installation path, add the installation path as the second parameter, which must be an absolute path (if the path ends in alist, install directly to the given path, otherwise it will be installed in the given path alist Directory), such as installing to `/root`:
```bash
# Install
curl -fsSL "https://nn.ci/alist-v2.sh" | bash -s install /root
# update
curl -fsSL "https://nn.ci/alist-v2.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://nn.ci/alist-v2.sh" | bash -s uninstall /root
```