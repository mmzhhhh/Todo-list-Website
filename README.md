项目说明
这个仓库包含了一个基于 Vue.js 和 Firebase 的项目。以下是如何安装和配置项目的步骤：

1. 安装 Vue.js 依赖
确保你已经安装了 Node.js（建议使用 LTS 版本），然后按照以下步骤安装 Vue.js 依赖：


# 在项目根目录中，使用 npm 安装 Vue CLI
npm install -g @vue/cli

# 安装项目依赖
npm install

2. 配置 Firebase
本项目使用 Firebase 提供后端服务和托管静态文件。请按照以下步骤配置 Firebase：

如果还没有 Firebase 帐号，请先在 Firebase 官网 上创建一个帐号并登录。

安装 Firebase CLI（如果尚未安装）：

npm install -g firebase-tools

登录到 Firebase CLI：

firebase login

初始化 Firebase 项目：

firebase init
在初始化过程中选择 Hosting 功能，并按照提示完成设置。在设置 firebase.json 文件时，将 public 属性设置为你的构建输出目录（通常是 dist 目录）。

3. 启动开发服务器
完成上述步骤后，你可以启动 Vue.js 开发服务器：

npm run serve
这将会启动一个本地开发服务器，你可以在浏览器中访问 http://localhost:8080 查看项目运行情况。

4. 构建和部署
当你准备好部署项目时，使用以下命令进行构建并部署到 Firebase Hosting：

npm run build
firebase deploy
这些命令将会构建项目并将静态文件部署到 Firebase Hosting。