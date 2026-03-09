import { ActionBar } from "../ActionBar";
import type { FilterBarProps } from "./types";

export function FilterBar({
  filters,
  actions,
  className,
  compact = false
}: FilterBarProps) {
  return (
    <div className={["ct-ui-filter-bar", className].filter(Boolean).join(" ")}>
      <ActionBar compact={compact} start={filters} end={actions} />
    </div>
  );
}

export type { FilterBarProps } from "./types";
