import React from "react";
import type { Preview } from "@storybook/react";
import { CtDesignProvider } from "@ct-design/ui";
import "antd/dist/reset.css";
import "@ct-design/ui/styles/index.less";
import { DocsTemplate } from "./DocsTemplate";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const backgroundValue = (
        context.globals.backgrounds as { value?: string } | undefined
      )?.value;
      const themeMode = backgroundValue === "#020617" ? "dark" : "default";

      return React.createElement(
        CtDesignProvider,
        { themeMode },
        React.createElement(Story)
      );
    }
  ],
  parameters: {
    docs: {
      page: DocsTemplate
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: "padded",
    backgrounds: {
      default: "light",
      values: [
        { name: "dark", value: "#020617" },
        { name: "light", value: "#f8fafc" }
      ]
    },
    options: {
      storySort: {
        order: ["Overview", "UI", ["Layout", "Actions", "States", "Metrics"], "Foundations"]
      }
    }
  }
};

export default preview;
