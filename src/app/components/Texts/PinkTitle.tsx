// src/app/components/PinkTitle.tsx
'use client'
import { Typography } from '@mui/material'

export const PinkTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography 
    component="h2" 
    sx={{
      fontFamily: 'Helvetica Rounded, Arial Rounded MT Bold, sans-serif',
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#D33180',
      textAlign: 'center',
      mb: 3,
      lineHeight: 1.2
    }}
  >
    {children}
  </Typography>
)