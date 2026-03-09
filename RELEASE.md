# 发布指南

本文档用于跑通 `ct-design` monorepo 的首次 GitHub 和 npm 发布流程。

## 目标

先完成 `@ct-design/utils` 的第一次正式发布，再逐步扩展到多包版本管理。

## 首次发布前检查

确认以下事项已经完成：

1. 你拥有 `@ct-design` 这个 npm scope 的发布权限
2. 本地已执行 `npm login`
3. 仓库已推送到 GitHub
4. GitHub 仓库中已配置 `NPM_TOKEN`

## 本地验证命令

```bash
pnpm install
pnpm build
pnpm lint
pnpm typecheck
pnpm test
pnpm publish:package:dry-run -- --filter @ct-design/utils
```

## 使用 changesets 推进版本

仓库已经准备好了首个 changeset。  
如果你想把它真正应用到包版本上，执行：

```bash
pnpm version-packages
```

这一步会把 `@ct-design/utils` 的版本从当前值推进到下一个版本。

## 本地单包正式发布

```bash
pnpm publish:package -- --filter @ct-design/utils
```

## GitHub Actions 自动发布

推荐的 GitHub 流程：

1. 推送当前仓库到 GitHub
2. 在仓库 `Settings -> Secrets and variables -> Actions` 中新增 `NPM_TOKEN`
3. 推送包含 changeset 的提交
4. GitHub Actions 会根据 `.github/workflows/release.yml` 创建 version PR 或执行发布

## 推荐顺序

```bash
git add .
git commit -m "chore: initialize ct-design monorepo"
git remote add origin <your-repo-url>
git push -u origin main
pnpm version-packages
git add .
git commit -m "chore: prepare first utils release"
git push
```
