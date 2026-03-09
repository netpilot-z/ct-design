# ct-design monorepo

An enterprise-oriented frontend monorepo starter focused on reusable packages,
workspace-based local development, and an npm/GitHub release workflow.

[中文文档](./README.zh.md)

## Stack

- Workspace management: `pnpm workspace`
- Task orchestration: `turbo`
- App bundling: `Rsbuild`
- Package bundling: `tsup`
- Versioning and releases: `changesets`
- Language and tests: `TypeScript` + `Vitest`
- UI documentation: `Storybook`

## Repository structure

```text
.
├─ apps/
│  ├─ docs/                # Storybook app for UI documentation
│  └─ web/                 # Example app consuming workspace packages
├─ packages/
│  ├─ icons/               # Shared icon package based on Ant Design icons
│  ├─ request/             # Shared axios-based request layer
│  ├─ tokens/              # Theme tokens and CSS variable helpers
│  ├─ ui/                  # Shared React UI components with antd adapters
│  └─ utils/               # Publishable utility package
├─ tooling/
│  ├─ tsconfig/            # Shared TypeScript configs
│  └─ tsup-config/         # Shared tsup config factory
├─ scripts/
│  └─ publish-package.mjs  # Single-package publish helper
├─ .changeset/
├─ .github/workflows/
├─ ARCHITECTURE.md
├─ RELEASE.md
├─ package.json
├─ pnpm-workspace.yaml
└─ turbo.json
```

## Quick start

```bash
pnpm install
pnpm dev
```

## Common commands

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

## Storybook

UI component documentation lives in `apps/docs`.

```bash
pnpm docs
```

Build the static docs:

```bash
pnpm docs:build
```

## Packages

Currently prepared packages:

- `@ct-design/utils`
- `@ct-design/tokens`
- `@ct-design/icons`
- `@ct-design/request`
- `@ct-design/ui`

`@ct-design/tokens` now produces multiple outputs for different consumers:

- JavaScript token exports
- CSS variables for default and dark themes
- Less variable files
- Ant Design theme JSON payloads

## Publishing

Dry-run the publish flow for the utility package:

```bash
pnpm publish:package:dry-run -- --filter @ct-design/utils
```

Create a local tarball:

```bash
pnpm --filter @ct-design/utils pack
```

Apply pending version changes:

```bash
pnpm version-packages
```

Publish a package:

```bash
pnpm publish:package -- --filter @ct-design/utils
```

For the complete GitHub and npm release checklist, see `RELEASE.md`.
