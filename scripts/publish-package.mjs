import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const filterIndex = args.findIndex((arg) => arg === "--filter");
const filterValue = filterIndex >= 0 ? args[filterIndex + 1] : "";

if (!filterValue) {
  console.error("Missing required argument: --filter <package-name>");
  process.exit(1);
}

const rootDir = process.cwd();
const hasGitRepo = existsSync(path.join(rootDir, ".git"));

function run(command) {
  console.log(`\n> ${command}`);
  execSync(command, {
    cwd: rootDir,
    stdio: "inherit"
  });
}

const publishFlags = [
  "--access public",
  dryRun ? "--dry-run" : "",
  hasGitRepo && !dryRun ? "" : "--no-git-checks"
]
  .filter(Boolean)
  .join(" ");

run(`pnpm --filter ${filterValue} build`);
run(`pnpm --filter ${filterValue} typecheck`);
run(`pnpm --filter ${filterValue} test`);
run(`pnpm --filter ${filterValue} publish ${publishFlags}`.trim());
