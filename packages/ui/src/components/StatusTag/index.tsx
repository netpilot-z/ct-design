import { Tag } from "antd";
import { useCtThemeTokens } from "../../_theme/CtDesignProvider";
import type { StatusTagProps, StatusTagTone } from "./types";

const toneMap: Record<
  StatusTagTone,
  { background: string; borderColor: string; color: string }
> = {
  default: {
    background: "rgba(148, 163, 184, 0.14)",
    borderColor: "rgba(148, 163, 184, 0.28)",
    color: "#cbd5e1"
  },
  success: {
    background: "rgba(34, 197, 94, 0.14)",
    borderColor: "rgba(34, 197, 94, 0.28)",
    color: "#86efac"
  },
  processing: {
    background: "rgba(14, 165, 233, 0.14)",
    borderColor: "rgba(14, 165, 233, 0.28)",
    color: "#7dd3fc"
  },
  warning: {
    background: "rgba(245, 158, 11, 0.14)",
    borderColor: "rgba(245, 158, 11, 0.28)",
    color: "#fcd34d"
  },
  error: {
    background: "rgba(248, 113, 113, 0.14)",
    borderColor: "rgba(248, 113, 113, 0.28)",
    color: "#fca5a5"
  }
};

export function StatusTag({
  tone = "default",
  children,
  themeMode,
  className
}: StatusTagProps) {
  const tokens = useCtThemeTokens(themeMode);
  const toneStyle = toneMap[tone];

  return (
    <Tag
      bordered
      className={["ct-ui-status-tag", className].filter(Boolean).join(" ")}
      style={{
        background: toneStyle.background,
        borderColor: toneStyle.borderColor,
        borderRadius: tokens.radiusMd,
        color: toneStyle.color
      }}
    >
      {children}
    </Tag>
  );
}

export type { StatusTagProps, StatusTagTone } from "./types";
