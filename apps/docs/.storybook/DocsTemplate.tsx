import React from "react";
import { Controls, Description, Primary, Source, Title } from "@storybook/blocks";

export function DocsTemplate() {
  return (
    <>
      <Title />
      <Description />

      <h2>Examples</h2>
      <Primary />

      <h2>Usage</h2>
      <Source />

      <h2>Props</h2>
      <Controls />
    </>
  );
}
