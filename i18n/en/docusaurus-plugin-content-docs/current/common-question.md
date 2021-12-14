---
sidebar_position: 6
---

# common question
### When adding a Tianyi cloud disk: the device ID does not exist, and a secondary device verification is required
It may be that the prevention and control has been triggered. After changing the password, add it again.
### Alibaba Cloud Disk video cannot be played, and the download shows InvalidArgument?
Due to referrer restrictions, mobile tokens must be used
### Can't play the video?
Check if the encoding is not supported. Generally, browsers do not support encoded video such as h.265 (hevc), and encoded audio such as ac3. Safari does not support more. It is recommended to use software to play.
### Get the transfer link?
After allowing the transfer, copy the corresponding file and change the /d to /p.
### Where are the front-end files?
To facilitate the installation, the front-end file and the program are packaged together. If you need to modify it, please modify and compile by yourself according to run from the source code or fill in the custom style/script field.
### What should I do if I forgot my password?
Command line ./alist-xxxx -password to view.(Where xxxx refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is alist-linux-amd64, if you use script installation, the name is directly alist)
### Custom styles/scripts don’t take effect?
Are the front and rear ends separated? The custom part is the back-end processing and only works when it is not separated.
### The uploaded file is not displayed/the deleted file is still there/does the modification of the root directory take effect?
The program cache is automatically invalidated in one hour, and the cache can be manually cleared in the upper right corner of the background.
### How to modify the listening port
The configuration file under the data folder of the directory where the program is located: `config.json`, just modify the port value.
### The webdav browser opens and displays Internal Server Error?
Is webdav for the browser?
### How to update?
Except for the incompatible version marked in the [changelog](./changelog.md), you can directly replace the binary file to update.
For docker update, please refer to: https://store.heytapimage.com/cdo-portal/feedback/202112/12/1e64956f796e95070bed2d7f2c61bdd5.png

:::tip
If your problem has not been resolved after reading the document, please give priority to [ask/discuss in Discussions](https://github.com/Xhofe/alist/discussions/new) or [issue](https://github .com/Xhofe/alist/issues/new/choose).
:::