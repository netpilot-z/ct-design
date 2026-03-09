import { Card } from "antd";
import type { CardProps } from "antd";
import type { ThemeMode } from "@ct-design/tokens";
import type { ReactNode } from "react";
import { useCtThemeTokens } from "../../_theme/CtDesignProvider";

export interface SurfaceAdapterProps extends Omit<CardProps, "title"> {
  themeMode?: ThemeMode;
  title?: ReactNode;
}

export function SurfaceAdapter({
  className,
  themeMode,
  style,
  ...props
}: SurfaceAdapterProps) {
  const tokens = useCtThemeTokens(themeMode);

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
