# aono-server-node

aono-server-node

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org



# CentOs 7.x 部署

- 安装 `git` 拉取代码

```bash
// 安装 git
yum install -y git
yum install epel-release

// clone
git clone git@github.com:chendongMarch/aono-server-node.git -b master
```

- 项目初始化

```bash
npm install
// 安装 egg
npm install egg
npm install egg-scripts
// 启动
npm start
```

- 安装 `node 8.x`/ `npm`

```bash
# 安装 8.x
wget https://npm.taobao.org/mirrors/node/v8.0.0/node-v8.0.0-linux-x64.tar.xz 
tar -xvf node-v8.0.0-linux-x64.tar.xz 
cd node-v8.0.0-linux-x64/bin && ls
# 删除软链
rm -rf /usr/bin/node
rm -rf /usr/bin/npm
# 添加链接
sudo ln -s /usr/share/node-v8.0.0-linux-x64/bin/node /usr/bin/node
sudo ln -s /usr/share/node-v8.0.0-linux-x64/bin/npm /usr/bin/npm
```

- 开放防火墙端口

```bash
# 安装 ifconfig/netstat
yum install net-tools
# 停止firewall：
systemctl stop firewalld.service
# 禁止firewall开机启动
systemctl disable firewalld.service
# 查看状态
firewall-cmd --state
# 安装iptables-services
yum install iptables-services
# 修改防火墙配置文件
vim /etc/sysconfig/iptables 
# 保存配置
service iptables save
# 重启
systemctl restart iptables.service
# 设置防火墙开机启动
systemctl enable iptables.service
```