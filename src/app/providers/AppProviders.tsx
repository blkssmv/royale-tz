import React from "react";
import "../providers/I18nProvider";
import { AppThemeProvider } from "./ThemeProvider";
export function AppProviders({ children }: { children: React.ReactNode }) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}
