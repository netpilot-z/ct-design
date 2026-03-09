import type { Meta, StoryObj } from "@storybook/react";
import { Surface } from "@ct-design/ui";

const meta = {
  title: "UI/Surface",
  component: Surface,
  tags: ["autodocs"],
  args: {
    themeMode: "dark",
    children: "A container surface for reusable layouts and cards."
  },
  argTypes: {
    themeMode: {
      control: "inline-radio",
      options: ["default", "dark"]
    }
  }
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Light: Story = {
  args: {
    themeMode: "default",
    children: "Light theme surface preview."
  }
};
