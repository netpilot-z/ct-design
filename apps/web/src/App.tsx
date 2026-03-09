import { buildApiUrl } from "@ct-design/request";
import { getThemeTokens } from "@ct-design/tokens";
import { Button, Surface } from "@ct-design/ui";
import { createWorkspaceBanner, toKebabCase } from "@ct-design/utils";

const packages = [
  "@ct-design/utils",
  "@ct-design/tokens",
  "@ct-design/request",
  "@ct-design/ui"
];

export default function App() {
  const tokens = getThemeTokens("dark");

  return (
    <main className="page">
      <Surface
        themeMode="dark"
        className="panel"
        style={{ borderColor: tokens.colorBorder }}
      >
        <span className="tag">Monorepo Ready</span>
        <h1>ct-design enterprise monorepo</h1>
        <p>
          当前示例应用已经直接消费 4 个 workspace 包，证明共享层可以在本地联调。
        </p>
        <p>{createWorkspaceBanner("ct design utils")}</p>
        <p>
          kebabCase demo: <code>{toKebabCase("Ct Design Monorepo")}</code>
        </p>
        <p>
          request demo:{" "}
          <code>{buildApiUrl("https://api.example.com/", "/v1/projects")}</code>
        </p>
        <div className="package-list">
          {packages.map((item) => (
            <span key={item} className="package-pill">
              {item}
            </span>
          ))}
        </div>
        <div className="actions">
          <Button themeMode="dark" type="button">
            Shared UI Button
          </Button>
        </div>
      </Surface>
    </main>
  );
}
