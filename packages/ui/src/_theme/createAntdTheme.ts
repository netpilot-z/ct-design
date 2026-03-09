import type { ThemeConfig } from "antd";
import { getThemeTokens, type ThemeMode } from "@ct-design/tokens";

export function createAntdTheme(themeMode: ThemeMode = "dark"): ThemeConfig {
  const tokens = getThemeTokens(themeMode);

  return {
    token: {
      colorPrimary: tokens.colorPrimary,
      colorText: tokens.colorText,
      colorTextSecondary: tokens.colorTextMuted,
      colorBgBase: tokens.colorBgPage,
      colorBorder: tokens.colorBorder,
      borderRadius: Number.parseInt(tokens.radiusMd, 10)
    }
  };
}
