// src/app/components/RoundedButton.tsx
'use client'
import { Button, SxProps, Theme } from '@mui/material'

interface RoundedButtonProps {
  children: React.ReactNode
  sx?: SxProps<Theme>
  [key: string]: any
}

export const RoundedButton = ({ children, sx, ...props }: RoundedButtonProps) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#D33180',
      color: 'white',
      borderRadius: 4,
      border: '1px solid transparent',
      minWidth: '150px',
      boxSizing: 'border-box',
      px: 4,
      py: 1.5,
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#D33180',
        border: '1px solid #D33180',
        transform: 'scale(1.05)'
      },
      '& .MuiButton-label': {
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'none'
      },
      ...sx
    }}
    {...props}
  >
    {children}
  </Button>
)