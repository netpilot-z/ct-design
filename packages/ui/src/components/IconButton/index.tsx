import { Button } from "../Button";
import type { IconButtonProps } from "./types";

export function IconButton(props: IconButtonProps) {
  return <Button {...props} className={["ct-ui-icon-button", props.className].filter(Boolean).join(" ")} />;
}

export type { IconButtonProps } from "./types";
