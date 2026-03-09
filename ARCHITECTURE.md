# 架构方案落地说明

## 最终采用的主流方案

结合 `gpt.md` 与 `cc.html` 两份方案，本项目最终选择一套更偏“先能跑通、再渐进扩展”的主流落地架构：

- 根层使用 `pnpm workspace + turbo`
- `apps/*` 使用 `Rsbuild`，用于业务应用与站点
- `packages/*` 使用 `tsup`，用于可发布的 npm 包
- `tooling/*` 存放共享工程配置，而不是把所有配置都塞进根目录
- 发布上同时支持两条链路：
  - 短链路：单包直接 `pnpm publish`
  - 长链路：多包通过 `changesets` 管理版本与发布

## 为什么不一次性把所有包都建出来

两份方案都覆盖了 `ui`、`tokens`、`theme`、`request`、`i18n`、`icons` 等完整企业体系，这对长期演进是正确的，但对“首个可运行模板”来说过重。  
当前仓库优先落地这 3 个目标：

- 保证工程骨架足够主流，后续加包不返工
- 保证至少有一个 `package` 可以真实走 npm 发布流程
- 保证至少有一个 `app` 可以消费 workspace 包，验证本地联调

因此当前已落地：

- `apps/web`
- `packages/utils`
- `packages/tokens`
- `packages/request`
- `packages/ui`
- `tooling/tsconfig`
- `tooling/tsup-config`

## 推荐的后续扩展顺序

当你继续把它演进成完整企业级设计体系时，建议按下面顺序扩：

1. `packages/hooks`
2. `packages/i18n`
3. `apps/docs` 或 Storybook
4. `packages/icons`
5. `apps/admin`

## 分层原则

### apps

只放业务应用与站点，例如：

- `apps/web`
- `apps/admin`
- `apps/docs`

### packages

只放面向复用和发布的代码，例如：

- `packages/utils`
- `packages/ui`
- `packages/request`
- `packages/tokens`

当前分工如下：

- `utils`：基础字符串和通用工具能力
- `tokens`：主题源数据、深浅色模式与 CSS Variables 生成
- `request`：axios 统一封装和 API URL 组装
- `ui`：React 组件入口，消费 tokens 而不是直接耦合 app

### tooling

只放共享工程配置，例如：

- `tooling/tsconfig`
- `tooling/tsup-config`

## 发布策略

### 场景一：先跑通单包 npm 发布

适合你当前阶段。  
直接对某个包执行构建、测试和 `publish`，最快验证链路。

### 场景二：后续做多包版本联动

当 `packages/*` 超过 3 个并开始相互依赖后，切到 `changesets` 更稳妥：

- 自动维护版本号
- 自动维护 changelog
- 适合 GitHub Actions 自动发版

## GitHub 目标结构

仓库上传到 GitHub 后，建议启用：

- PR 触发 `CI`
- `main` 分支触发版本流程
- npm token 通过 GitHub Secrets 注入

当前仓库已经为这个目标预留了基础工作流文件。
