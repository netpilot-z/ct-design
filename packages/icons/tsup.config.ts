import { defineConfig } from "tsup";
import { createLibraryConfig } from "@ct-design/tsup-config";

export default defineConfig(
  createLibraryConfig({
    external: ["react", "react-dom", "@ant-design/icons"]
  })
);
