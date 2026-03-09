import type { Meta, StoryObj } from "@storybook/react";
import { Button, EmptyState } from "@ct-design/ui";

const meta = {
  title: "UI/States/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Reusable empty-state presentation for no-data, no-results, and onboarding placeholders."
      }
    }
  },
  args: {
    title: "No projects yet",
    description: "Create a project to start using the dashboard."
  }
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"],
  render: (args) => (
    <EmptyState
      {...args}
      action={<Button type="primary">Create project</Button>}
    />
  )
};
