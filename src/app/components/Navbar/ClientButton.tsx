// src/app/components/Navbar/ClientButton.tsx
'use client'

import { Button, SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'

interface ClientButtonProps {
  children?: ReactNode
  sx?: SxProps<Theme>
}

export const ClientButton = ({ children, sx }: ClientButtonProps) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#D33180',
      color: 'white',
      borderRadius: 4,
      border: '1px solid transparent',
      minWidth: '150px',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#D33180',
        border: '1px solid #D33180',
      },
      transition: 'all 0.3s ease',
      ml: 2,
      ...sx // Spread operator para props sx adicionais
    }}
  >
    {children || 'JÁ SOU CLIENTE'} {/* Valor padrão */}
  </Button>
)