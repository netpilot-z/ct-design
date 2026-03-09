import type { Meta, StoryObj } from "@storybook/react";
import { SettingOutlined } from "@ct-design/icons";
import { Surface } from "@ct-design/ui";

const meta = {
  title: "UI/Layout/Surface",
  component: Surface,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Reusable surface container based on the antd card adapter, suitable for panels, cards, and content sections."
      }
    }
  },
  args: {
    children: "A container surface for reusable layouts and cards."
  }
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"],
  render: (args) => (
    <Surface
      {...args}
      title="Settings"
      extra={<SettingOutlined />}
      children="Ant Design adapter based card surface."
    />
  )
};
