---
sidebar_position: 18
---

# Baidu Disk

:::tip
Due to the limitation of Baidu Disk API, downloading files larger than about 20M needs to carry the header: "User-Agent": "pan.baidu.com", so when downloading files larger than 20M, you need to set the request header yourself, such as using curl:
```bash
curl -L -X GET 'YOUR_LINK' -H 'User-Agent: pan.baidu.com'
````
Or use the proxy function in this program to transfer.
:::

### refresh token
[Click here](http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://tool.nn.ci/baidu/callback&scope=basic,netdisk&qrcode=1) to get the refresh token.

### root folder path
The root foler to mount, defaults to `/`