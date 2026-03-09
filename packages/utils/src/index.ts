import { toTitleCase } from "./string";

export { toKebabCase, toTitleCase } from "./string";

export function createWorkspaceBanner(name: string): string {
  return `Workspace package ready: ${toTitleCase(name)}`;
}
