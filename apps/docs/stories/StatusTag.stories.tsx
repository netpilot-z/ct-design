import type { Meta, StoryObj } from "@storybook/react";
import { StatusTag } from "@ct-design/ui";

const meta = {
  title: "UI/States/StatusTag",
  component: StatusTag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Semantic status tag for processing, success, warning, and error states across dashboards and workflows."
      }
    }
  },
  args: {
    children: "Processing"
  }
} satisfies Meta<typeof StatusTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <StatusTag tone="default">Processing</StatusTag>
      <StatusTag tone="success">Healthy</StatusTag>
      <StatusTag tone="warning">Needs attention</StatusTag>
      <StatusTag tone="error">Failed</StatusTag>
    </div>
  )
};
