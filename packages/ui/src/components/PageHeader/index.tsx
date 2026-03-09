import { useCtThemeTokens } from "../../_theme/CtDesignProvider";
import type { PageHeaderProps } from "./types";

export function PageHeader({
  title,
  subtitle,
  meta,
  actions,
  extra,
  themeMode,
  className
}: PageHeaderProps) {
  const tokens = useCtThemeTokens(themeMode);

  return (
    <section
      className={["ct-ui-page-header", className].filter(Boolean).join(" ")}
      style={{
        borderColor: tokens.colorBorder,
        background: tokens.colorBgPanel
      }}
    >
      <div className="ct-ui-page-header__main">
        <div className="ct-ui-page-header__copy">
          <div className="ct-ui-page-header__title-row">
            <h1 className="ct-ui-page-header__title">{title}</h1>
            {extra ? <div className="ct-ui-page-header__extra">{extra}</div> : null}
          </div>
          {subtitle ? (
            <p
              className="ct-ui-page-header__subtitle"
              style={{ color: tokens.colorTextMuted }}
            >
              {subtitle}
            </p>
          ) : null}
          {meta ? <div className="ct-ui-page-header__meta">{meta}</div> : null}
        </div>
        {actions ? <div className="ct-ui-page-header__actions">{actions}</div> : null}
      </div>
    </section>
  );
}

export type { PageHeaderProps } from "./types";
