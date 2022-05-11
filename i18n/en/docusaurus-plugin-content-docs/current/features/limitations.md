---
sidebar_position: 10
---

# Limitations

Some feature limitations:

### office online preview
- External network access
- The document access address cannot use ip directly, it needs to be accessed through a domain name, and the port must be port 80 / 443
- The format of the document (must be one of the following):
- Word: docx, docm, dotm, dotx
- Excel: xlsx, xlsb, xls, xlsm
- PowerPoint: pptx, ppsx, ppt, pps, pptm, potm, ppam, potx, ppsm
- Document size: Word and PowerPoint documents must be less than 10 megabytes; Excel must be less than five megabytes
  
### Media playback
- Requires a browser-supported encoding
- General browsers do not support h265 encoded video
- General browsers do not support ac3 encoded audio

In particular, for Safari:
- For cross-origin media, content-type must be the media type, not the generic `application/octet-stream`

### PDF Preview
- Except for Alibaba Cloud Disk, other network disks require https+cors to preview
- https is opened for yourself, reverse proxy or provide a certificate in the configuration file
- cors provides support for related cloud disks and cannot be modified by itself unless the agent is turned on to use the program to transfer

### Download package
Same as pdf preview, requires https+cors support

### folder/file name
This program follows legal url rules:
![url](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL/mdn-url-all.png)
- cannot contain `?`, which means a parameters parameter
- cannot contain `#`, which means an anchor parameter
- cannot contain `/`, this is used to locate the path
- Cannot contain `\`, wrong escape characters will cause the program to fall into an infinite loop
For details, please refer to https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL

### File Upload
- All uploads of this program use server transfer
- If you use a reverse proxy, you may need to specify the maximum upload file size and timeout in the configuration
- Otherwise, it may happen that the upload is successful but the front end times out and there is no response