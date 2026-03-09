import type { SurfaceProps } from "../Surface";
import type { ReactNode } from "react";

export interface PageCardProps
  extends Omit<SurfaceProps, "children" | "title" | "extra" | "actions"> {
  title: ReactNode;
  subtitle?: ReactNode;
  extra?: ReactNode;
  toolbar?: ReactNode;
  children: ReactNode;
}
