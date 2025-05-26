// src/app/providers.tsx
'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ReactNode } from 'react'

const theme = createTheme({
    typography: {
    fontFamily: [
      'Helvetica',
      'Helvetica Light',
      'Arial',
      'sans-serif'
    ].join(','),
  },

  palette: {
    primary: {
      main: '#D33180',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          color: '#333',
        },
      },
    },
  },
})

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}