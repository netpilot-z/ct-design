import type { Meta, StoryObj } from "@storybook/react";
import { AppstoreOutlined } from "@ct-design/icons";
import { Button } from "@ct-design/ui";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Primary action",
    themeMode: "dark"
  },
  argTypes: {
    themeMode: {
      control: "inline-radio",
      options: ["default", "dark"]
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Light: Story = {
  args: {
    themeMode: "default",
    children: "Light theme button"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled button"
  }
};

export const WithIcon: Story = {
  args: {
    icon: <AppstoreOutlined />,
    children: "Button with icon"
  }
};
