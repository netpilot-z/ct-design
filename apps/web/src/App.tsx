import { ConfigProvider } from "antd";
import { AppstoreOutlined, HomeOutlined, SettingOutlined } from "@ct-design/icons";
import { buildApiUrl } from "@ct-design/request";
import { getThemeTokens } from "@ct-design/tokens";
import { Button, Surface, createAntdTheme } from "@ct-design/ui";
import { createWorkspaceBanner, toKebabCase } from "@ct-design/utils";

const packages = [
  "@ct-design/utils",
  "@ct-design/tokens",
  "@ct-design/request",
  "@ct-design/icons",
  "@ct-design/ui"
];

export default function App() {
  const tokens = getThemeTokens("dark");

  return (
    <ConfigProvider theme={createAntdTheme("dark")}>
      <main className="page">
        <Surface
          themeMode="dark"
          className="panel"
          title="ct-design enterprise monorepo"
          extra={<SettingOutlined />}
          style={{ borderColor: tokens.colorBorder }}
        >
          <span className="tag">Monorepo Ready</span>
          <p>
            当前示例应用已经直接消费 5 个 workspace 包，并通过 `antd` adapter
            结构验证了组件层联调。
          </p>
          <p>{createWorkspaceBanner("ct design utils")}</p>
          <p>
            kebabCase demo: <code>{toKebabCase("Ct Design Monorepo")}</code>
          </p>
          <p>
            request demo:{" "}
            <code>{buildApiUrl("https://api.example.com/", "/v1/projects")}</code>
          </p>
          <div className="icon-row">
            <HomeOutlined />
            <AppstoreOutlined />
            <SettingOutlined />
          </div>
          <div className="package-list">
            {packages.map((item) => (
              <span key={item} className="package-pill">
                {item}
              </span>
            ))}
          </div>
          <div className="actions">
            <Button themeMode="dark" type="primary" icon={<AppstoreOutlined />}>
              Shared UI Button
            </Button>
          </div>
        </Surface>
      </main>
    </ConfigProvider>
  );
}
