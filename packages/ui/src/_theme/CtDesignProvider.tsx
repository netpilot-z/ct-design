import { ConfigProvider } from "antd";
import { getThemeTokens, type ThemeMode, type ThemeTokens } from "@ct-design/tokens";
import type { PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import { createAntdTheme } from "./createAntdTheme";

const CtDesignThemeModeContext = createContext<ThemeMode>("dark");

export interface CtDesignProviderProps extends PropsWithChildren {
  themeMode?: ThemeMode;
}

export function CtDesignProvider({
  themeMode = "dark",
  children
}: CtDesignProviderProps) {
  return (
    <CtDesignThemeModeContext.Provider value={themeMode}>
      <ConfigProvider theme={createAntdTheme(themeMode)}>{children}</ConfigProvider>
    </CtDesignThemeModeContext.Provider>
  );
}

export function useCtThemeMode(themeMode?: ThemeMode): ThemeMode {
  const inheritedThemeMode = useContext(CtDesignThemeModeContext);

  return themeMode ?? inheritedThemeMode;
}

export function useCtThemeTokens(themeMode?: ThemeMode): ThemeTokens {
  return getThemeTokens(useCtThemeMode(themeMode));
}
