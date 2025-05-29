// src/app/components/Navbar/ClientButton.tsx
'use client'

import { Button, SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ClientButtonProps {
  children?: ReactNode
  sx?: SxProps<Theme>
  text?: string
  href?: string // Para navegação entre páginas
  sectionId?: string // Para scroll até seções
  onClick?: () => void // Para ações customizadas
}

export const ClientButton = ({ 
  children, 
  sx, 
  text, 
  href, 
  sectionId, 
  onClick 
}: ClientButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (onClick) {
      onClick()
    }
  }

  // Se tiver href, usa Link do Next.js
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <Button
          component="a"
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
            ...sx
          }}
        >
          {text || children || 'JÁ SOU CLIENTE'}
        </Button>
      </Link>
    )
  }

  // Caso contrário, renderiza botão normal
  return (
    <Button
      variant="contained"
      onClick={handleClick}
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
        ...sx
      }}
    >
      {text || children || 'JÁ SOU CLIENTE'}
    </Button>
  )
}