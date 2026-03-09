import type { Meta, StoryObj } from "@storybook/react";
import { SettingOutlined } from "@ct-design/icons";
import { Button, PageHeader, StatusTag } from "@ct-design/ui";

const meta = {
  title: "UI/Layout/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Page-level header component for admin dashboards, detail pages, and workspace overviews."
      }
    }
  },
  args: {
    title: "Workspace dashboard",
    subtitle: "A page-level header for admin and console pages.",
    extra: <SettingOutlined />
  },
  render: (args) => (
    <PageHeader
      {...args}
      meta={<StatusTag tone="processing">Running</StatusTag>}
      actions={
        <>
          <Button type="default">Secondary</Button>
          <Button type="primary">Primary action</Button>
        </>
      }
    />
  )
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  tags: ["!dev"]
};
