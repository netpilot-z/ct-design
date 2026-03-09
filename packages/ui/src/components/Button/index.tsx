import { ButtonAdapter } from "../../_adapters/antd/ButtonAdapter";
import type { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  return <ButtonAdapter {...props} />;
}

export type { ButtonProps } from "./types";
