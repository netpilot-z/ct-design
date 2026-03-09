import type { Meta, StoryObj } from "@storybook/react";
import { AppstoreOutlined } from "@ct-design/icons";
import { Button } from "@ct-design/ui";

const meta = {
  title: "UI/Actions/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Primary action button built on top of the antd adapter layer with inherited ct-design theme support."
      }
    }
  },
  args: {
    children: "Default button"
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"],
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button {...args}>Default</Button>
      <Button {...args} type="primary">
        Primary
      </Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} type="primary" disabled>
        Disabled primary
      </Button>
      <Button {...args} icon={<AppstoreOutlined />}>
        With icon
      </Button>
    </div>
  )
};
