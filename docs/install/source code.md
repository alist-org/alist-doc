---
sidebar_position: 7
---

# 从源码运行

:::danger

此步骤只是为需要自行修改源码的用户准备，不了解的话请跳过。

:::

### 环境准备
首先需要有`git`、`nodejs`、`yarn`、`golang>1.17`, `gcc`的环境

### 构建前端
clone https://github.com/Xhofe/alist-web 这个项目，执行`yarn && yarn build`，得到dist目录下的目标文件

### 构建后端
clone https://github.com/Xhofe/alist 这个项目,将上一步dist目录下的文件全部拷贝至项目下的public目录，然后：
```bash
appName="alist"
builtAt="$(date +'%F %T %z')"
goVersion=$(go version | sed 's/go version //')
gitAuthor=$(git show -s --format='format:%aN <%ae>' HEAD)
gitCommit=$(git log --pretty=format:"%h" -1)
gitTag=$(git describe --long --tags --dirty --always)
ldflags="\
-w -s \
-X 'github.com/Xhofe/alist/conf.BuiltAt=$builtAt' \
-X 'github.com/Xhofe/alist/conf.GoVersion=$goVersion' \
-X 'github.com/Xhofe/alist/conf.GitAuthor=$gitAuthor' \
-X 'github.com/Xhofe/alist/conf.GitCommit=$gitCommit' \
-X 'github.com/Xhofe/alist/conf.GitTag=$gitTag' \
"
go build -ldflags="$ldflags" alist.go
```