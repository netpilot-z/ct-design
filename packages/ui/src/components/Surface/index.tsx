import { SurfaceAdapter } from "../../_adapters/antd/SurfaceAdapter";
import type { SurfaceProps } from "./types";

export function Surface(props: SurfaceProps) {
  return <SurfaceAdapter {...props} />;
}

export type { SurfaceProps } from "./types";
