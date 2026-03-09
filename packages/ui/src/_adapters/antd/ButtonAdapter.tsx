import { Button as AntdButton } from "antd";
import type { ButtonProps as AntdButtonProps } from "antd";
import type { ThemeMode } from "@ct-design/tokens";
import { useCtThemeMode, useCtThemeTokens } from "../../_theme/CtDesignProvider";

export interface ButtonAdapterProps extends AntdButtonProps {
  themeMode?: ThemeMode;
}

export function ButtonAdapter({
  className,
  themeMode,
  style,
  ...props
}: ButtonAdapterProps) {
  const resolvedThemeMode = useCtThemeMode(themeMode);
  const tokens = useCtThemeTokens(themeMode);
  const isPrimary = props.type === "primary";
  const isTextLike = props.type === "text" || props.type === "link";
  const isDisabled = Boolean(props.disabled);
  const themeAwareStyle = isDisabled
    ? resolvedThemeMode === "dark"
      ? isPrimary
        ? {
            color: "rgba(2, 6, 23, 0.65)",
            background: "rgba(125, 211, 252, 0.32)",
            borderColor: "rgba(125, 211, 252, 0.12)",
            opacity: 1
          }
        : {
            color: "rgba(148, 163, 184, 0.84)",
            background: "rgba(148, 163, 184, 0.08)",
            borderColor: "rgba(148, 163, 184, 0.18)",
            opacity: 1
          }
      : {
          opacity: 1
        }
    : resolvedThemeMode === "dark"
      ? isPrimary
        ? {
            color: tokens.colorBgPage,
            background: tokens.colorPrimary,
            borderColor: tokens.colorPrimary
          }
        : isTextLike
          ? {
              color: tokens.colorText
            }
          : {
              color: tokens.colorText,
              background: tokens.colorBgPanel,
              borderColor: tokens.colorBorder
            }
      : {};

  return (
    <AntdButton
      {...props}
      className={["ct-ui-button", `ct-ui-button--${resolvedThemeMode}`, className]
        .filter(Boolean)
        .join(" ")}
      style={{
        borderRadius: tokens.radiusMd,
        ...themeAwareStyle,
        ...style
      }}
    />
  );
}
