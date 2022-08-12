---
sidebar_position: 3
---

# Backend settings

### password
Background login password
### Check parent folder password
When enabled, if the current folder does not have a password set, it will recursively check whether the parent folder has a password until the first password is checked or the root directory is stopped.
### check down link
It is used to encrypt the straight chain. After opening, the straight chain will carry a query parameter named pw or sign (administrator).
### d_proxy types
Separate file types only go proxy
### ocr api
Used to identify verification codes

### Enable Casdoor
Once enabled, SSO can be done through Casdoor

### Casdoor Organization name
The name for the Casdoor organization

### Casdoor Application name
The name for the Casdoor application

### Casdoor Endpoint
Casdoor Server URL, like `https://door.casdoor.com` or `http://localhost:8000`

### Casdoor Client ID
Client ID for the Casdoor application

### Casdoor Client Secret
Client secret for the Casdoor application

### Casdoor Jwt Public Key
The public key for the Casdoor application's cert
