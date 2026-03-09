import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { getThemeTokens, type ThemeMode } from "@ct-design/tokens";

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  themeMode?: ThemeMode;
}

export function Surface({
  children,
  themeMode = "dark",
  style,
  ...props
}: SurfaceProps) {
  const tokens = getThemeTokens(themeMode);
  const surfaceStyle: CSSProperties = {
    borderRadius: tokens.radiusLg,
    border: `1px solid ${tokens.colorBorder}`,
    background: tokens.colorBgPanel,
    color: tokens.colorText,
    padding: 24,
    boxShadow: "0 24px 80px rgba(15, 23, 42, 0.18)",
    ...style
  };

  return (
    <div {...props} style={surfaceStyle}>
      {children}
    </div>
  );
}
