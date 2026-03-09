import type { ThemeMode } from "@ct-design/tokens";
import type { ReactNode } from "react";

export type StatusTagTone =
  | "default"
  | "success"
  | "processing"
  | "warning"
  | "error";

export interface StatusTagProps {
  tone?: StatusTagTone;
  children: ReactNode;
  themeMode?: ThemeMode;
  className?: string;
}
