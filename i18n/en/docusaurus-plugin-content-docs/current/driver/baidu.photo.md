---
sidebar_position: 30
---

# Moment album

:::tip
Since there is no directory structure, the album is used as a first-level directory, and multi-level is not supported
Considering that it is unrealistic to list all files (there are millions of pictures), when the album ID is not set, the root directory only lists all albums
Since the album file has an association, only the files in the album are removed and the source file is not deleted
Upload is only allowed to upload to **album**
:::


### Refresh token (same as Baidu Netdisk)

[Click here](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://tool.nn.ci/baidu/callback&scope=basic,netdisk&qrcode=1) to get the refresh order Card.

### album_id

- **When the default is empty, all albums in the root directory will be displayed directly.**
- If you want to mount a single album, you need to fill in the following content

- album_id should be filled in: {album_id}|{tid} Example: 4021858707431029901|316519298447849660

- {album_id} : After entering the album you need to mount, the ID after viewing the top link /album is {album_id}

  - https://photo.baidu.com/photo/web/album/**4021858707431029901** <----- bold is {album_id}

- {tid}: Visit **https://photo.baidu.com/youai/album/v1/list** to get
  - After entering the interface, `Ctrl+F` searches for the ID above, and you can see the corresponding {tid} in the following lines

![1](/img/driver/baidu.photo/tid.png)


### Fill in the example
![2](/img/driver/baidu.photo/YikeDemo.png)