---
sidebar_position: 4
---

# Casdoor SSO


## Casdoor设置

### 登录Casdoor
   
![casdoor_homepage](/img/setting/casdoor_homepage.png)

### 创建一个组织

依次点击顶部栏上的组织，表格上的添加按钮，设置组织信息后，点击保存并退出按钮。

![casdoor_organization](/img/setting/casdoor_organization.png)

![casdoor_organization_name](/img/setting/casdoor_organization_name.png)

### 创建一个应用并添加重定向URL

依次点击顶部栏上的应用，表格上的添加按钮，设置应用信息后，点击保存并退出按钮。

这里需要设置重定向url为你部署的Alist应用的前端URL，例如：`http://localhost:3000/@manage`。

![casdoor_application](/img/setting/casdoor_application.png)

### 添加证书

依次点击顶部栏上的证书，表格上的添加按钮，设置证书信息后，点击保存并退出按钮。

![casdoor_cert_page](/img/setting/casdoor_cert_page.png)

![casdoor_new_cert](/img/setting/casdoor_new_cert.png)

![casdoor_cert_name](/img/setting/casdoor_cert_name.png)

### 修改应用的证书

依次点击顶部栏上的应用，点击你的Alist应用的编辑按钮，修改证书为你刚才新建的证书名称。

![casdoor_update_your_application_cert](/img/setting/casdoor_update_your_application_cert.png)
    

## Alist配置

在Alist后台设置的后端配置中，修改Casdoor登录相关的配置。

![configure_alist](/img/setting/configure_alist.png)