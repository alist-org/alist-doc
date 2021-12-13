---
sidebar_position: 8
---

# Changelog

### v2.0.1
:::caution
The previous custom styles and custom scripts will be invalid, but they will still be visible in the background settings, which can be reset in the custom header and custom body.
:::
- The straight chain password is added to the file name to add salt
- Optimize the code structure of the direct chain encryption part
- Fix the problem that overlay components are covered by markdown components
- Remove the previous custom styles and custom scripts, and change to custom heads and custom bodies
- Remove the 100% height limit on the homepage
- Modify the build target of vite to es2015 to improve browser compatibility
- Add salt to the background password
- The file list no longer requires a password after logging in to the background
- Fix the encoding problem when the file name contains% (try not to include %, it will report an error when refreshing)
- Allow deletion of outdated settings
- WebDAV: New Local storage/Aliyundrive supports uploading, moving, creating folders, and deleting
- Support adding Aliist abstract as a driver
- Support using cloudflare worker to transfer download files
- Fix that the local file named `index.html` cannot be previewed
- Support `webm` suffix video preview
- Optimized the code structure and abstracted multiple methods
- Modify the proxy settings of the account, all traffic will go to the server after opening

### v2.0.0
- Repair the check parent folder password failure on Windows
- Optimize code structure
- Onedrive adds thumbnail
- Fix Windows Sharepoint directory problem
- Add Googledrive default root directory
- Support Lanzou Cloud (cookie and URL)
- Fix onedrive sorting problem
- https support
- Add WebDAV transfer options
- Fix the style problem when the file name is too long
- The front-end password input monitors the carriage return event

### v2.0.0-beta7
- Fix the problem that the http connection may not end
- Fixed the issue of missing files when the number of onedrive files is greater than 200
- Attempt to fix the issue that the login page of 189 Cloud Disk is empty [#169](https://github.com/Xhofe/alist/issues/169)
- Add local file sorting [#170](https://github.com/Xhofe/alist/issues/170)
- Fixed the problem of an infinite loop when checking the password of the parent directory under Windows
- Upgrade the markdown component to solve the link rendering problem in the title [#165](https://github.com/Xhofe/alist/issues/165)
- Add the function of switching the logo while switching the theme [#163](https://github.com/Xhofe/alist/issues/163)
- Optimize some back-end styles
- Rewrite the document, yes, it is this document
- Fixed the problem of incorrect password when the password of the current folder is different from that of the parent folder and the folder password check is turned on
- Refactored the Driver part to make the structure clearer
- WebDAV support (read-only)

### v2.0.0-beta6
- Fixed the pointer pointing error when adding an account when restarting
- When deleting an account, delete it from the memory account table at the same time
- Fix the status display of multiple network disks
- Add Tianyi cloud disk support
- Fix the path problem of onedrive under Windows
- Add text preview in gbk format
- Added the backend to view the current password when the password is forgotten
- Cancel useless file caching
- Modify proxy interface
- Add GoogleDrive support
- Add 123 cloud disk support
- Add straight chain password check [#160](https://github.com/Xhofe/alist/issues/160)

### v2.0.0-beta5
:::caution
Because the database has changed the primary key, this version is incompatible with the previous version and needs to be reinstalled.
:::
- Audio add m4a playback [#155](https://github.com/Xhofe/alist/issues/155)
- Simplified setting modification method
- docker add data directory mapping
- The backend is switched from `go-fiber` to `gin`
- Fix the problem of transfer download
- Modify the database primary key
- Add check parent directory password [#157](https://github.com/Xhofe/alist/issues/157)
- Add custom styles/scripts
- Fix the bug that the list is not filtered when playing music
- Add class names to components to facilitate custom styles

### v2.0.0-beta4
- When deleting an account, delete the scheduled task at the same time
- Add markdown theme settings
- Fix that the direct link cannot be downloaded when the path contains +
- Add docker automatic build
- Fix the reminder that an error occurred when clearing the cache
- Add file download button
- Fix the reminder when turning pages
- Fix mysql key keyword issue [#151](https://github.com/Xhofe/alist/issues/151)

### v2.0.0-beta3
- Fix the bug that the meta added in beta1 cannot be deleted
- Cancel the cache when the folder is empty
- Fix the status display problem of onedrive
- Add front-end static file cdn
- Lazy loading of some components
- Fix the bug that the setting does not take effect for the first time due to slow loading
- Fix the bug that cannot be copied in http protocol
- Add direct links to all files in the copied directory
- Add some tooltips to the buttons

### v2.0.0-beta2
- Fix path is not formatted when adding meta
- The readme setting of the homepage when adding multiple accounts
- Fix the bug that the setting modification cannot be entered
- Fix background management title error

### v2.0.0-beta
- Initial release of v2