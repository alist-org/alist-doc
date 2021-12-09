---
sidebar_position: 9
---

# Alist
Add other Aliist services.

### alist site url
The address of another alist

### Token
It can be found in the request header of the request after login, the name is `Authorization`, or it can be calculated by yourself, the calculation method is:
```js
md5(`https://github.com/Xhofe/alist-${YOUR_PASSWORD}`)
```

### Root directory path
The pathname of the directory to be added. If it is not filled in, it will default to the root directory, such as:
- https://alist.nn.ci -> `/`
- https://alist.nn.ci/a -> `/a`
- https://alist.nn.ci/a/b -> `/a/b`
