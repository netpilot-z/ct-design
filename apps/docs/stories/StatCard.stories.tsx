import type { Meta, StoryObj } from "@storybook/react";
import { HomeOutlined } from "@ct-design/icons";
import { StatCard, StatusTag } from "@ct-design/ui";

const meta = {
  title: "UI/Metrics/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Compact metric card for dashboard summaries, KPIs, and trend-driven operational views."
      }
    }
  },
  args: {
    label: "Monthly active workspaces",
    value: "12,480",
    icon: <HomeOutlined />,
    helper: "Compared with the previous 30 days."
  },
  render: (args) => (
    <StatCard
      {...args}
      trend={<StatusTag tone="success">+18.2%</StatusTag>}
    />
  )
} satisfies Meta<typeof StatCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"]
};
