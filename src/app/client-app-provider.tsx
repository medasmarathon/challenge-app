'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const theme = createTheme({
});

export default function ClientAppProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  </ThemeProvider>;
}