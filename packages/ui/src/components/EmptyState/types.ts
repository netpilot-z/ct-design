import type { ThemeMode } from "@ct-design/tokens";
import type { ReactNode } from "react";

export interface EmptyStateProps {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  image?: ReactNode;
  themeMode?: ThemeMode;
  className?: string;
}
