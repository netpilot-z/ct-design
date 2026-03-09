import { cp, mkdir } from "node:fs/promises";
import path from "node:path";

const srcDir = path.resolve("src");
const distDir = path.resolve("dist");

await mkdir(distDir, { recursive: true });
await cp(path.join(srcDir, "styles"), path.join(distDir, "styles"), {
  recursive: true
});
await mkdir(path.join(distDir, "components", "Button"), { recursive: true });
await mkdir(path.join(distDir, "components", "Surface"), { recursive: true });
await cp(
  path.join(srcDir, "components", "Button", "style.less"),
  path.join(distDir, "components", "Button", "style.less")
);
await cp(
  path.join(srcDir, "components", "Surface", "style.less"),
  path.join(distDir, "components", "Surface", "style.less")
);
