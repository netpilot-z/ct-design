使用方式：

1. 修改某个 `package`
2. 执行 `pnpm changeset`
3. 选择需要发布的包和语义化版本
4. 提交生成的 changeset 文件
5. 执行 `pnpm version-packages`
6. 在 CI 或本地执行 `pnpm release:ci`
