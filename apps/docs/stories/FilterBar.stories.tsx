import type { Meta, StoryObj } from "@storybook/react";
import { Button, FilterBar, StatusTag } from "@ct-design/ui";

const meta = {
  title: "UI/Actions/FilterBar",
  component: FilterBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Toolbar-style filter container for search conditions, quick filters, and trailing action buttons."
      }
    }
  },
  render: (args) => (
    <FilterBar
      {...args}
      filters={
        <>
          <StatusTag tone="default">Environment: Prod</StatusTag>
          <StatusTag tone="processing">Region: Global</StatusTag>
        </>
      }
      actions={
        <>
          <Button type="default">Reset</Button>
          <Button type="primary">Apply filters</Button>
        </>
      }
    />
  )
} satisfies Meta<typeof FilterBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"]
};
