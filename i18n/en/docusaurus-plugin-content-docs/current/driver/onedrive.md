---
sidebar_position: 4
---

# OneDrive

First open https://tool.nn.ci/onedrive/request

### Create an application
<!-- > If you use the international version of OneDrive, you can also choose to skip this step and use the default client provided. -->
- On the page that opens, select the region and click Create Application
- After logging in, select `Register Application`, enter `Name`, and select `Accounts and Individuals in Any Organization Directory` (note that you don't look at the location selection but the text here. Some people may be the middle option, don't select a single Tenant or other options, otherwise it will cause problems when logging in), enter the redirect URL as <https://tool.nn.ci/onedrive/callback>, `register`, and then you can get client_id
  ![client_id](https://store.heytapimage.com/cdo-portal/feedback/202111/24/998aa05659a10e87b3f2161d844263f8.png)
- After registering the application, select `Certificate and Password`, click `New Client Password`, enter a string of passwords, select the one with the longest time, and click `Add`
(Note: The password entered after adding will disappear, please record the value of client_secret)
  ![client_secret](https://store.heytapimage.com/cdo-portal/feedback/202111/24/a3c7b8fd2a6577ee62404ad054ebbe90.png)
- Select `API Permissions`, click `MicroSoft Graph`, enter file in the `Select Permissions`, and check `Files.read` (Note: Files.read is a read-only minimum permission. The permission in the figure is larger, and the same can be done ), click `Update Permission`
  ![api](https://store.heytapimage.com/cdo-portal/feedback/202111/24/15cf3a64994935cdda76185cc181fad1.png)
### Get refresh token
Fill in the client_id and client_secret obtained in the previous step into the https://tool.nn.ci/onedrive/request page, click Get Refresh Token, you can get the refresh token

### Get Sharepoint site_id
If you need to mount Sharepoint, after completing the previous step, an input site address will appear on the interface that displays the refresh token. After entering the site address, click Get site_id.
### Add account
Fill in the values ​​obtained in the above process one by one.
#### Root directory path
The default is `/`, if you need to customize, just fill in the path, starting from the root path, the same as the local path, such as `/test`