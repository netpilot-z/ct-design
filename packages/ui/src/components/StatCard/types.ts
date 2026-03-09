import type { SurfaceProps } from "../Surface";
import type { ReactNode } from "react";

export interface StatCardProps
  extends Omit<SurfaceProps, "children" | "title" | "extra"> {
  label: ReactNode;
  value: ReactNode;
  trend?: ReactNode;
  helper?: ReactNode;
  icon?: ReactNode;
}
