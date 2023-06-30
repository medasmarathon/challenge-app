'use client'

import { CssBaseline, ScopedCssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SnackbarProvider } from 'notistack';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function ClientAppProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </LocalizationProvider>
  </ThemeProvider>;
}