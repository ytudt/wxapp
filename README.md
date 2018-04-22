# 微信小程序

## scss转为wxss

+ sudo gem install sass
+ sass -v
+ which sass(查看sass安装路径)
+ webstrom->preference->file watchers->点击新建watch(scss)
+ program 输入上面sass路径
+ arguments 输入 --no-cache --update $FileName$:$FileNameWithoutExtension$.wxss
+ Output paths to refresh 输入$FileNameWithoutExtension$.wxss
+ 报存 修改scss文件就会自动变更到wxss