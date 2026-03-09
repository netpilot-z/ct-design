import { ActionBar } from "../ActionBar";
import { Surface } from "../Surface";
import type { PageCardProps } from "./types";

export function PageCard({
  title,
  subtitle,
  extra,
  toolbar,
  children,
  ...props
}: PageCardProps) {
  return (
    <Surface
      {...props}
      title={
        <div className="ct-ui-page-card__title-wrap">
          <div className="ct-ui-page-card__title">{title}</div>
          {subtitle ? (
            <div className="ct-ui-page-card__subtitle">{subtitle}</div>
          ) : null}
        </div>
      }
      extra={extra}
      className={["ct-ui-page-card", props.className].filter(Boolean).join(" ")}
    >
      {toolbar ? <ActionBar className="ct-ui-page-card__actions" end={toolbar} /> : null}
      {children}
    </Surface>
  );
}

export type { PageCardProps } from "./types";
