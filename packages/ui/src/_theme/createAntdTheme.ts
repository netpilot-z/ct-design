import type { ThemeConfig } from "antd";
import { getThemeTokens, type ThemeMode } from "@ct-design/tokens";

export function createAntdTheme(themeMode: ThemeMode = "dark"): ThemeConfig {
  const tokens = getThemeTokens(themeMode);
  const colorTextDisabled =
    themeMode === "dark" ? "rgba(148, 163, 184, 0.72)" : "#94a3b8";
  const colorBgContainerDisabled =
    themeMode === "dark" ? "rgba(148, 163, 184, 0.08)" : "#f1f5f9";

  return {
    token: {
      colorPrimary: tokens.colorPrimary,
      colorText: tokens.colorText,
      colorTextSecondary: tokens.colorTextMuted,
      colorTextDisabled,
      colorBgBase: tokens.colorBgPage,
      colorBgContainerDisabled,
      colorBorder: tokens.colorBorder,
      borderRadius: Number.parseInt(tokens.radiusMd, 10)
    }
  };
}
