---
sidebar_position: 10
---

# Common question
### When adding a Tianyi cloud disk: the device ID does not exist, and a secondary device verification is required
It may be that the prevention and control has been triggered. After changing the password, add it again.
### Aliyundrive video cannot be played, and the download shows InvalidArgument?
Due to referrer restrictions, mobile tokens must be used
### Can't play the video?
Check if the encoding is not supported. Generally, browsers do not support encoded video such as h.265 (hevc), and encoded audio such as ac3. Safari does not support more. It is recommended to use software to play.
### Where are the front-end files?
To facilitate the installation, the front-end file and the program are packaged together. If you need to modify it, please modify and compile by yourself according to run from the source code or fill in the custom style/script field.
### What should I do if I forgot my password?
Command line ./alist-xxxx -password to view.(Where xxxx refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is alist-linux-amd64, if you use script installation, the name is directly alist)
> Corresponding to the installation method:
> - Script installation: the initial password will be output during installation, get it again: `cd /opt/alist && ./alist -password`
> - binary manual installation: execute in the directory where the program is located: `./alist -password` (where alist refers to the binary file name)
> - Docker: use the command `docker exec -it alist ./alist -password` to view the password
> - PaaS: How to find and view the password in the corresponding warehouse

### Custom styles/scripts don’t take effect?
Are the front and rear ends separated? The custom part is the back-end processing and only works when it is not separated.
### The uploaded file is not displayed/the deleted file is still there/does the modification of the root directory take effect?
The program cache will automatically expire within an hour. After logging in in the background, return to the list, and then right-click on the directory you changed to refresh. **Not recommended** Clear all caches.
### How to modify the listening port
The configuration file under the data folder of the directory where the program is located: `config.json`, just modify the port value.
### The webdav browser opens and displays Internal Server Error?
Is webdav for the browser?
### How to update?
Except for the incompatible version marked in the `changelog`, you can directly replace the binary file to update.
For docker update, please refer to: https://store.heytapimage.com/cdo-portal/feedback/202112/12/1e64956f796e95070bed2d7f2c61bdd5.png
### Onedrive: The property xx is not supported for OrderBy?
Note that in OneDrive for Business and SharePoint Server 2016, the orderby query string only works with name and url.
### About browser support
Please search by yourself: `vite`, `chakra-ui`, `react`, etc. [dependencies used by `alist-web`](https://github.com/alist-org/alist-web/blob/v2/package.json), the browser support of this program is determined by the upper-level dependencies.
### Add account prompt: `UNIQUE constraint failed: x_accounts.name`
Virtual paths are unique and cannot be repeated.
### Upload background processing?
The upload process of this program is: client->server->corresponding storage. If your server upload bandwidth is small, it will take a long time. If you use nginx to reverse the generation, there may be a timeout, but in fact, the background is still in upload.
Therefore, the web upload function is generally only recommended when the server bandwidth is large enough or it is used locally.
> Why not use web-side direct transmission? Because it is compatible with the webdav protocol, webdav can only be transferred by the server, and some network disks have various restrictions when uploading, which cannot be processed only in the front end. So it is unified to upload from the backend.

### How to remove `Powered by Alist` at the bottom?
Please respect the developer's labor, thank you
### How to remove the `manage` at the top?
This doesn't make any sense other than causing you trouble getting to the manage page.

:::tip
If your problem has not been resolved after reading the document, please give priority to [ask/discuss in Discussions](https://github.com/Xhofe/alist/discussions/new) or [issue](https://github .com/Xhofe/alist/issues/new/choose).
:::