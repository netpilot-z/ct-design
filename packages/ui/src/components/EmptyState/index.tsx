import { Empty, Typography } from "antd";
import { useCtThemeTokens } from "../../_theme/CtDesignProvider";
import type { EmptyStateProps } from "./types";

export function EmptyState({
  title = "No data",
  description = "There is nothing to display right now.",
  action,
  image,
  themeMode,
  className
}: EmptyStateProps) {
  const tokens = useCtThemeTokens(themeMode);

  return (
    <div className={["ct-ui-empty-state", className].filter(Boolean).join(" ")}>
      <Empty image={image} description={false}>
        <Typography.Title
          level={5}
          style={{ marginBottom: 8, color: tokens.colorText }}
        >
          {title}
        </Typography.Title>
        <Typography.Paragraph style={{ color: tokens.colorTextMuted }}>
          {description}
        </Typography.Paragraph>
        {action ? <div className="ct-ui-empty-state__action">{action}</div> : null}
      </Empty>
    </div>
  );
}

export type { EmptyStateProps } from "./types";
