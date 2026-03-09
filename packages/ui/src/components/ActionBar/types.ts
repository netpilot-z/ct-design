import type { ReactNode } from "react";

export interface ActionBarProps {
  start?: ReactNode;
  end?: ReactNode;
  className?: string;
  compact?: boolean;
}
