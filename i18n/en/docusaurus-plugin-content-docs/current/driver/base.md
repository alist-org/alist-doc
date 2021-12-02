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
Whether to allow the server to transfer downloads, there will be no items that need to be transferred by default, such as local storage and Google Cloud Disk.
It’s just whether proxy downloads are allowed. All the previews and copy download links in the front end are downloaded directly from the network disk. Changing the /d in the copied download link to /p means downloading through the proxy. After closing it, /p will prompt no Allowed, you can transfer the download through the server by opening this link.