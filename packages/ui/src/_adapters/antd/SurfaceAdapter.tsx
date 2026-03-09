import { Card } from "antd";
import type { CardProps } from "antd";
import { getThemeTokens, type ThemeMode } from "@ct-design/tokens";
import type { ReactNode } from "react";

export interface SurfaceAdapterProps extends Omit<CardProps, "title"> {
  themeMode?: ThemeMode;
  title?: ReactNode;
}

export function SurfaceAdapter({
  className,
  themeMode = "dark",
  style,
  ...props
}: SurfaceAdapterProps) {
  const tokens = getThemeTokens(themeMode);

  return (
    <Card
      {...props}
      className={["ct-ui-surface", className].filter(Boolean).join(" ")}
      style={{
        borderRadius: tokens.radiusLg,
        borderColor: tokens.colorBorder,
        background: tokens.colorBgPanel,
        color: tokens.colorText,
        boxShadow: "0 24px 80px rgba(15, 23, 42, 0.18)",
        ...style
      }}
    />
  );
}
