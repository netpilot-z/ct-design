export interface LibraryConfigOverrides {
  entry?: string[];
  format?: Array<"esm" | "cjs" | "iife">;
  dts?: boolean;
  sourcemap?: boolean;
  clean?: boolean;
  treeshake?: boolean;
  target?: string;
  outDir?: string;
  external?: string[];
}

export declare function createLibraryConfig(
  overrides?: LibraryConfigOverrides
): LibraryConfigOverrides;
