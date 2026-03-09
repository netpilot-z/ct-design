import type { CSSProperties } from "react";
import type { ActionBarProps } from "./types";

export function ActionBar({
  start,
  end,
  className,
  compact = false
}: ActionBarProps) {
  const style: CSSProperties = {
    gap: compact ? 8 : 12
  };

  return (
    <div className={["ct-ui-action-bar", className].filter(Boolean).join(" ")} style={style}>
      <div className="ct-ui-action-bar__start">{start}</div>
      <div className="ct-ui-action-bar__end">{end}</div>
    </div>
  );
}

export type { ActionBarProps } from "./types";
