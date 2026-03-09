import type { Preview } from "@storybook/react";
import "antd/dist/reset.css";
import "@ct-design/ui/styles/index.less";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#020617" },
        { name: "light", value: "#f8fafc" }
      ]
    }
  }
};

export default preview;
