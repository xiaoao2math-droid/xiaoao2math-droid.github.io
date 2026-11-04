# 肖傲 · 个人学术主页

基于 [YoungDrifter/Profile](https://github.com/YoungDrifter/Profile) 适配。保留原模板组件、布局与交互，将内容、媒体与元信息替换为肖傲的个人资料。

原仓库下载时没有 LICENSE 文件；本项目不为原模板声明额外许可证。

内容在 `src/data/profile.ts`，构建命令 `pnpm build`，产物在 `dist/`。字体本地加载，无外部字体或脚本请求。

下载按钮使用用户提供的简历原文件，保存为 `public/xiao-ao-cv.pdf`。替换该文件时同步更新 `profile.cv` 的版本参数以刷新缓存；`scripts/build-cv.mjs` 仅生成独立草稿，不覆盖网站上的简历。
