# 发布NPM包

```
// 切换源
registry=https://registry.npmjs.org

// 登陆
npm login

// 控制台会提示输入相关信息
Log in on https://registry.npmjs.org/
Username:  // 用户名
Password: // 密码
Email: (this IS public) // 邮箱
Enter one-time password: // 如果之前做过 双因素身份验证 (2FA)，需要生成一次性密钥
Logged in as xxx on https://registry.npmjs.org/.

// 发布命令
npm publish --access public

// patch：补丁号，修复bug，小变动，如 v1.0.0->v1.0.1
npm version patch

// minor：次版本号，增加新功能，如 v1.0.0->v1.1.0
npm version minor

// major：主版本号，不兼容的修改，如 v1.0.0->v2.0.0
npm version major
```
