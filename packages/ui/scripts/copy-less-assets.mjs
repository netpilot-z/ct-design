import { cp, mkdir } from "node:fs/promises";
import path from "node:path";

const srcDir = path.resolve("src");
const distDir = path.resolve("dist");

await mkdir(distDir, { recursive: true });
await cp(path.join(srcDir, "styles"), path.join(distDir, "styles"), {
  recursive: true
});

const componentNames = [
  "ActionBar",
  "Button",
  "EmptyState",
  "FilterBar",
  "IconButton",
  "PageHeader",
  "PageCard",
  "StatCard",
  "StatusTag",
  "Surface"
];

for (const componentName of componentNames) {
  await mkdir(path.join(distDir, "components", componentName), {
    recursive: true
  });
  await cp(
    path.join(srcDir, "components", componentName, "style.less"),
    path.join(distDir, "components", componentName, "style.less")
  );
}
