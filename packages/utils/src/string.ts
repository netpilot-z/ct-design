const kebabCaseBoundary = /([a-z0-9])([A-Z])/g;

export function toKebabCase(input: string): string {
  return input
    .trim()
    .replace(kebabCaseBoundary, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

export function toTitleCase(input: string): string {
  return input
    .trim()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}
