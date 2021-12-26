---
sidebar_position: 9
---

# Reverse proxy
The program listens to port 5244 by default
### nginx
Add in the server field of the website configuration file
```nginx
location / {
     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     proxy_set_header Host $http_host;
     proxy_set_header X-Real-IP $remote_addr;
     proxy_redirect off;
     proxy_pass http://127.0.0.1:5244;
}
```
:::caution
If you use the bt.cn, be sure to delete the following default configuration
- location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
- location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .*\.(js|css)?$
:::

### Apache
Add the anti-generation configuration item ProxyPass under the VirtualHost field, such as:
```xml
<VirtualHost *:80>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    AllowEncodedSlashes NoDecode
    ProxyPass "/" "http://127.0.0.1:5244/" nocanon
</VirtualHost>
```

### Caddy
Add the reverse_proxy configuration item reverse_proxy under the Caddyfile file, for example:
```xml
:80 {
     reverse_proxy 127.0.0.1:5244
}
```