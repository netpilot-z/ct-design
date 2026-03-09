import type { ReactNode } from "react";

export interface FilterBarProps {
  filters?: ReactNode;
  actions?: ReactNode;
  className?: string;
  compact?: boolean;
}
