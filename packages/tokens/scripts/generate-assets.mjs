import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distDir = path.resolve("dist");
const moduleUrl = pathToFileURL(path.join(distDir, "index.js")).href;
const { themeTokens } = await import(moduleUrl);

function toKebabCase(input) {
  return input.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function toCssVariables(tokens) {
  return Object.entries(tokens)
    .map(([key, value]) => `  --cd-${toKebabCase(key)}: ${value};`)
    .join("\n");
}

function toLessVariables(tokens) {
  return Object.entries(tokens)
    .map(([key, value]) => `@cd-${toKebabCase(key)}: ${value};`)
    .join("\n");
}

function toAntdTheme(tokens) {
  return {
    token: {
      colorPrimary: tokens.colorPrimary,
      colorText: tokens.colorText,
      colorTextSecondary: tokens.colorTextMuted,
      colorBgBase: tokens.colorBgPage,
      colorBgContainer: tokens.colorBgPanel,
      colorBorder: tokens.colorBorder,
      borderRadius: Number.parseInt(tokens.radiusMd, 10)
    }
  };
}

await mkdir(path.join(distDir, "css"), { recursive: true });
await mkdir(path.join(distDir, "less"), { recursive: true });
await mkdir(path.join(distDir, "antd"), { recursive: true });

await writeFile(
  path.join(distDir, "css", "default.css"),
  `:root {\n${toCssVariables(themeTokens.default)}\n}\n`,
  "utf8"
);

await writeFile(
  path.join(distDir, "css", "dark.css"),
  `:root[data-theme="dark"] {\n${toCssVariables(themeTokens.dark)}\n}\n`,
  "utf8"
);

await writeFile(
  path.join(distDir, "less", "variables.less"),
  `${toLessVariables(themeTokens.default)}\n`,
  "utf8"
);

await writeFile(
  path.join(distDir, "less", "dark.variables.less"),
  `${toLessVariables(themeTokens.dark)}\n`,
  "utf8"
);

await writeFile(
  path.join(distDir, "antd", "default.json"),
  `${JSON.stringify(toAntdTheme(themeTokens.default), null, 2)}\n`,
  "utf8"
);

await writeFile(
  path.join(distDir, "antd", "dark.json"),
  `${JSON.stringify(toAntdTheme(themeTokens.dark), null, 2)}\n`,
  "utf8"
);
