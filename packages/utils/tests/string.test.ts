import { describe, expect, it } from "vitest";
import {
  createWorkspaceBanner,
  toKebabCase,
  toTitleCase
} from "../src/index";

describe("@ct-design/utils", () => {
  it("converts strings to kebab case", () => {
    expect(toKebabCase("Ct Design System")).toBe("ct-design-system");
    expect(toKebabCase("helloWorld")).toBe("hello-world");
  });

  it("converts strings to title case", () => {
    expect(toTitleCase("ct-design_system")).toBe("Ct Design System");
  });

  it("creates a workspace banner", () => {
    expect(createWorkspaceBanner("ct-design utils")).toBe(
      "Workspace package ready: Ct Design Utils"
    );
  });
});
