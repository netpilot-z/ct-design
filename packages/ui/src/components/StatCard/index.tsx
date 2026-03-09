import { useCtThemeTokens } from "../../_theme/CtDesignProvider";
import { Surface } from "../Surface";
import type { StatCardProps } from "./types";

export function StatCard({
  label,
  value,
  trend,
  helper,
  icon,
  themeMode,
  className,
  ...props
}: StatCardProps) {
  const tokens = useCtThemeTokens(themeMode);

  return (
    <Surface
      {...props}
      themeMode={themeMode}
      className={["ct-ui-stat-card", className].filter(Boolean).join(" ")}
    >
      <div className="ct-ui-stat-card__header">
        <span
          className="ct-ui-stat-card__label"
          style={{ color: tokens.colorTextMuted }}
        >
          {label}
        </span>
        {icon ? <span className="ct-ui-stat-card__icon">{icon}</span> : null}
      </div>
      <div className="ct-ui-stat-card__value">{value}</div>
      {trend ? <div className="ct-ui-stat-card__trend">{trend}</div> : null}
      {helper ? (
        <div className="ct-ui-stat-card__helper" style={{ color: tokens.colorTextMuted }}>
          {helper}
        </div>
      ) : null}
    </Surface>
  );
}

export type { StatCardProps } from "./types";
