import type { Meta, StoryObj } from "@storybook/react";
import { Button, ActionBar } from "@ct-design/ui";

const meta = {
  title: "UI/Actions/ActionBar",
  component: ActionBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Flexible action container that aligns leading context and trailing actions for enterprise page flows."
      }
    }
  },
  render: (args) => (
    <ActionBar
      {...args}
      end={
        <>
          <Button type="default">Cancel</Button>
          <Button type="primary">Confirm</Button>
        </>
      }
    />
  )
} satisfies Meta<typeof ActionBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"],
  args: {
    start: <span>3 items selected</span>
  }
};
