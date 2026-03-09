import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { getThemeTokens, type ThemeMode } from "@ct-design/tokens";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  themeMode?: ThemeMode;
}

export function Button({
  children,
  themeMode = "dark",
  style,
  ...props
}: ButtonProps) {
  const tokens = getThemeTokens(themeMode);
  const buttonStyle: CSSProperties = {
    padding: "10px 16px",
    borderRadius: tokens.radiusMd,
    border: `1px solid ${tokens.colorBorder}`,
    background: tokens.colorPrimary,
    color: themeMode === "dark" ? "#0f172a" : "#ffffff",
    cursor: "pointer",
    fontWeight: 600,
    ...style
  };

  return (
    <button {...props} style={buttonStyle}>
      {children}
    </button>
  );
}
