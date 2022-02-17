---
sidebar_position: 4
---

# hide


### Background hidden
Background api doesn't return hidden data
:::tip

Please note: v2.0.6 and later, the hidden function is invalid after the administrator is logged in.

:::

Add a record at the background meta information, fill in the path and the name of the file (folder) to be hidden in the path, where the path is the same as [path in encryption](./encrypt)

After filling in the path correctly, fill in the hide field, fill in the name of the file (folder) to be hidden, separated by , for example, to hide the README.md and index.tsx files under https://alist.nn.ci/ local storage, fill in:
- path: `/local storage`
- hide: `README.md,index.tsx`

That's it.

### Front end hidden
The backend api will return data, but the frontend will not display it.

Fill in the setting of `hide files` in the front-end settings in the background to match the files hidden by regular expressions. If you don’t understand them, don’t fill them in randomly. Wrong regular expressions will cause the front-end page to crash. One per line, one hidden by default under all directories Example expressions of `README.md`