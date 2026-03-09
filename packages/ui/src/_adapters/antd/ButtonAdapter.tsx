import { Button as AntdButton } from "antd";
import type { ButtonProps as AntdButtonProps } from "antd";
import { getThemeTokens, type ThemeMode } from "@ct-design/tokens";

export interface ButtonAdapterProps extends AntdButtonProps {
  themeMode?: ThemeMode;
}

export function ButtonAdapter({
  className,
  themeMode = "dark",
  style,
  ...props
}: ButtonAdapterProps) {
  const tokens = getThemeTokens(themeMode);

  return (
    <AntdButton
      {...props}
      className={["ct-ui-button", className].filter(Boolean).join(" ")}
      style={{
        borderRadius: tokens.radiusMd,
        ...style
      }}
    />
  );
}
