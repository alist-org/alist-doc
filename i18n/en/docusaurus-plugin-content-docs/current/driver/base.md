---
sidebar_position: 1
---

# basic configuration
Mandatory fields for all accounts
### name
Unique identifier, which is also the path displayed when there are multiple accounts
### index
When there are multiple accounts, it is used for sorting, the smaller the higher
### proxy
Whether to enable the proxy, after enabling, all download traffic of this account goes to the proxy server, including WebDAV requests.
If there is no this option, it means that the storage can only be changed through the proxy, that is, the server is relayed.

### WebDAV proxy

After opening, only the traffic requested by WebDAV goes to the proxy server.

### down_proxy_url (download proxy address)
When the proxy is turned on without filling in this field, the local machine will be used for transfer by default.

#### cloudflare workers
You can use `cloudflare workers` for proxy, just fill in the `cloudflare workers` address here.
The workers code can be found at https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js. in:

- HOST: your Alist address
- TOKEN: see Token in the [Alist](./alist.md#token) section

#### Universal Binary
Download the program at https://github.com/alist-org/alist-proxy/releases

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