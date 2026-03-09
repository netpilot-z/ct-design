import type { ThemeMode } from "@ct-design/tokens";
import type { ReactNode } from "react";

export interface PageHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  extra?: ReactNode;
  themeMode?: ThemeMode;
  className?: string;
}
