import type { ButtonProps } from "../Button";

export type IconButtonProps = Omit<ButtonProps, "children"> & {
  "aria-label": string;
};
