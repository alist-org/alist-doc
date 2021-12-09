---
sidebar_position: 3
---

# Run from source

:::danger

This step is only for users who need to modify the source code by themselves. If you don't understand, please skip it.

:::

### Environmental preparation
First, you need to have an environment of `git`, `nodejs`, `yarn`, `golang>1.17`, `gcc`

### Building the front end
clone https://github.com/Xhofe/alist-web this project, execute `yarn && yarn build` to get the target file in the dist directory

### Build the backend
clone https://github.com/Xhofe/alist for this project, copy all the files in the dist directory of the previous step to the public directory under the project, and then:
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