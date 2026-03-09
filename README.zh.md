# ct-design monorepo

这是一个面向企业级前端工程的 `monorepo` 模板，重点解决：

- `packages/*` 的复用与独立发布
- workspace 本地联调
- GitHub 与 npm 的发布链路

[English README](./README.md)

## 技术栈

- 工作区管理：`pnpm workspace`
- 任务编排：`turbo`
- 应用构建：`Rsbuild`
- 包构建：`tsup`
- 版本与发布：`changesets`
- 语言与测试：`TypeScript` + `Vitest`
- UI 文档：`Storybook`

## 目录结构

```text
.
├─ apps/
│  ├─ docs/                # Storybook 文档应用
│  └─ web/                 # 示例应用，消费 workspace 包
├─ packages/
│  ├─ icons/               # 基于 Ant Design Icons 的图标包
│  ├─ request/             # 基于 axios 的请求层
│  ├─ tokens/              # 主题 token 与 CSS Variables
│  ├─ ui/                  # 基于 antd adapter 的 React 组件库
│  └─ utils/               # 可独立发布的工具包
├─ tooling/
│  ├─ tsconfig/            # 共享 TypeScript 配置
│  └─ tsup-config/         # 共享 tsup 配置工厂
├─ scripts/
│  └─ publish-package.mjs  # 单包发布脚本
├─ .changeset/
├─ .github/workflows/
├─ ARCHITECTURE.md
├─ RELEASE.md
├─ package.json
├─ pnpm-workspace.yaml
└─ turbo.json
```

## 快速开始

```bash
pnpm install
pnpm dev
```

## 常用命令

```bash
pnpm build
pnpm lint
pnpm typecheck
pnpm test
pnpm docs
pnpm docs:build
pnpm --filter @ct-design/web dev
pnpm changeset
pnpm version-packages
```

## Storybook 文档

`ui` 组件文档放在 `apps/docs` 中。

启动文档站：

```bash
pnpm docs
```

构建静态文档：

```bash
pnpm docs:build
```

## 当前包列表

- `@ct-design/utils`
- `@ct-design/tokens`
- `@ct-design/icons`
- `@ct-design/request`
- `@ct-design/ui`

其中 `@ct-design/tokens` 现在会输出多种消费格式：

- JavaScript token 导出
- 默认/暗黑主题 CSS Variables
- Less 变量文件
- Ant Design 主题 JSON

## 发布

对 `utils` 包执行发布演练：

```bash
pnpm publish:package:dry-run -- --filter @ct-design/utils
```

生成本地 tarball：

```bash
pnpm --filter @ct-design/utils pack
```

应用待发布的版本变更：

```bash
pnpm version-packages
```

正式发布：

```bash
pnpm publish:package -- --filter @ct-design/utils
```

完整的 GitHub 与 npm 发布说明见 `RELEASE.md`。
