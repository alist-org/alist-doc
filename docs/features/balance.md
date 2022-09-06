---
sidebar_position: 8
---

# 负载均衡

需要两个账号内的文件结构完全一样(可以不同网盘)，程序会自动轮询所有的账号进行下载/请求。

### 如何使用
一个账号正常添加，另一个账号添加名称为`第一个账号虚拟路径+.balance+任何其他内容`即可。

例如：
- 账号1：`test`
- 账号2：`test.balance1`
- 账号3：`test.balance2`
- 账号4：`test.balance3`
- ...
- 账号n：`test.balancen`
