import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined
} from "@ant-design/icons";
import type { CSSProperties, ComponentType } from "react";

export type CtIconComponent = ComponentType<Record<string, unknown>>;

export interface IconRendererProps {
  component: CtIconComponent;
  className?: string;
  style?: CSSProperties;
}

export function IconRenderer({
  component: IconComponent,
  className,
  style
}: IconRendererProps) {
  return <IconComponent className={className} style={style} />;
}

export { AppstoreOutlined, HomeOutlined, SettingOutlined };
