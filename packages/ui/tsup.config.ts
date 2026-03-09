import { defineConfig } from "tsup";
import { createLibraryConfig } from "@ct-design/tsup-config";

export default defineConfig(
  createLibraryConfig({
    entry: ["src/index.ts"],
    external: ["react", "react-dom"]
  })
);
