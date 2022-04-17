---
sidebar_position: 1
---

# basic configuration
Mandatory fields for all accounts
### Virtual path
Unique identifier, that is the location you want to mount to, if you want to mount to the root directory, it is `/`
### index
When there are multiple accounts, it is used for sorting, the smaller the higher
### proxy (proxy related)
One has three related options:
- proxy: whether the web terminal and the direct link can go through the transfer
- webdav_proxy: webdav file download does not go through transfer
- webdav_direct: webdav is directly relayed by this machine

If there are no proxy and webdav_proxy options, it means that you can only go through transit

> Storage points can be requested directly (with proxy switch) and cannot be requested directly (without proxy switch)
> Those that cannot be requested directly will go directly to the server where the program is located (if you do not fill in down_proxy_url)
> Can be requested directly:
> - proxy off, webdav_proxy off: file download requests do not go to the server at all
> - proxy on, webdav_proxy off: the preview on the webpage and the direct link download all go to the server, but the webdav download does not go to the server
> - proxy off, webdav_proxy on: the preview on the webpage, the direct link download does not go to the server, but the webdav download goes to the server
> - proxy on, webdav_proxy on: web page preview, direct link download and webdav download all go to the server.
> - webdav_direct: If this switch is turned on, the webdav file will be directly transferred by this machine without going through 302 jump. If this item is turned off and webdav_proxy is turned on, the file download may go through multiple 302 jumps.

<embed src="/img/webdav.svg" type="image/svg+xml" width="100%" />

### down_proxy_url (download proxy address)
When the proxy is turned on without filling in this field, the local machine will be used for transfer by default.Two proxy methods are provided:

#### cloudflare workers
You can use `cloudflare workers` for proxy, just fill in the `cloudflare workers` address here.
The workers code can be found at https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js. in:

- HOST: your Alist address, The protocol header must be added, and cannot be followed by /. Such as `https://alist.nn.ci`;
- TOKEN: see Token in the [Alist](./alist.md#token) section.

#### Universal Binary
You can also use another machine for proxying, download the program at https://github.com/alist-org/alist-proxy/releases

`./alist-proxy -help` to see how to use it.

You can also develop your own agent program, the general steps are:

- When downloading, it will request `PROXY_URL/path?sign=sign_value`
- Verify sign in the agent program, the calculation method of sign is:

```js
const name = path.split('/').pop();
const sign = md5(`alist-${TOKEN}-${name}`).slice(8, 24)
```
- After verifying the sign is correct, requesting `HOST/api/admin/link`, you can get the URL of the file and the request header to be carried
- Use the information to request and return

### api_proxy_url (API proxy address)

Same as down_proxy_url, the proxy used by the request API is specially prepared for storage that cannot be directly accessed in China, such as GoogleDrive and PikPak.

### extract_folder
- front: put all folders to the front when sorting
- back: put all folders to the back when sorting