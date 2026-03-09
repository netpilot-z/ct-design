import type { Meta, StoryObj } from "@storybook/react";
import { SettingOutlined } from "@ct-design/icons";
import { IconButton } from "@ct-design/ui";

const meta = {
  title: "UI/Actions/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Compact icon-first action button for toolbars, card actions, and other dense control surfaces."
      }
    }
  },
  args: {
    icon: <SettingOutlined />,
    "aria-label": "Open settings"
  }
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"],
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <IconButton {...args} type="default" />
      <IconButton {...args} type="primary" />
    </div>
  )
};
