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

Whether to enable the proxy, after enabling, all traffic will go to the server, including WebDAV requests.

### WebDAV proxy

After opening, only the traffic requested by WebDAV goes to the server.

### down_proxy_url (download proxy address)
You can use `cloudflare workers` for proxy, fill in the address of `cloudflare workers` here.
The code of workers can be found at https://github.com/Xhofe/alist/blob/v2/alist-proxy.js. in:

- HOST: your Alist address
- TOKEN: See the Token in the [Alist](./alist.md#token) section

You can also develop your own agent instead of using `cloudflare workers`. The general steps are:

- When downloading, it will request `PROXY_URL/path?sign=sign_value`
- Verify sign in the agent program, the calculation method of sign is:

```js
const name = path.split('/').pop();
const sign = md5(`alist-${TOKEN}-${name}`).slice(8, 24)
```
- After verifying the sign is correct, requesting `HOST/api/admin/link`, you can get the URL of the file and the request header to be carried
- Use the information to request and return

### api_proxy_url (API proxy address)

Same as down_proxy_url, specially prepared for storage that cannot be directly accessed in China, such as GoogleDrive and PikPak.