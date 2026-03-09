export type ThemeMode = "default" | "dark";

export type ThemeTokens = {
  colorPrimary: string;
  colorText: string;
  colorTextMuted: string;
  colorBgPage: string;
  colorBgPanel: string;
  colorBorder: string;
  colorSuccess: string;
  radiusMd: string;
  radiusLg: string;
};

export const themeTokens: Record<ThemeMode, ThemeTokens> = {
  default: {
    colorPrimary: "#2563eb",
    colorText: "#0f172a",
    colorTextMuted: "#475569",
    colorBgPage: "#f8fafc",
    colorBgPanel: "#ffffff",
    colorBorder: "#cbd5e1",
    colorSuccess: "#059669",
    radiusMd: "12px",
    radiusLg: "20px"
  },
  dark: {
    colorPrimary: "#7dd3fc",
    colorText: "#e2e8f0",
    colorTextMuted: "#94a3b8",
    colorBgPage: "#020617",
    colorBgPanel: "#0f172a",
    colorBorder: "#334155",
    colorSuccess: "#34d399",
    radiusMd: "12px",
    radiusLg: "20px"
  }
};

export function getThemeTokens(mode: ThemeMode): ThemeTokens {
  return themeTokens[mode];
}

export function createCssVariables(mode: ThemeMode): Record<string, string> {
  const tokens = getThemeTokens(mode);

  return Object.fromEntries(
    Object.entries(tokens).map(([key, value]) => [`--cd-${toKebabCase(key)}`, value])
  );
}

export function createThemeStyleText(mode: ThemeMode): string {
  return Object.entries(createCssVariables(mode))
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");
}

function toKebabCase(input: string): string {
  return input.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
