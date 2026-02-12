import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    typography: { fontFamily: "Inter, Arial, sans-serif" },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
