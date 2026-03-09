import type { Meta, StoryObj } from "@storybook/react";
import { SettingOutlined } from "@ct-design/icons";
import { Button, PageCard } from "@ct-design/ui";

const meta = {
  title: "UI/Layout/PageCard",
  component: PageCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Structured page container that combines title, subtitle, toolbar, and body content for enterprise screens."
      }
    }
  },
  args: {
    title: "Workspace overview",
    subtitle: "A page-level card wrapper for admin screens.",
    extra: <SettingOutlined />,
    children: "Page content goes here."
  },
  render: (args) => (
    <PageCard
      {...args}
      toolbar={<Button type="primary">Primary action</Button>}
    />
  )
} satisfies Meta<typeof PageCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"]
};
