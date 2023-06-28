'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
});

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}