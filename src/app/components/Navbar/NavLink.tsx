// src/app/components/Navbar/NavLink.tsx
'use client'

import Link from 'next/link'
import { Button } from '@mui/material'

export const NavLink = ({ href, children }: { 
  href: string 
  children: React.ReactNode 
}) => (
  <Link href={href} passHref legacyBehavior>
    <Button
      component="a"
      sx={{
        color: 'text.primary',
        fontWeight: 500,
        position: 'relative',
        '&:hover': {
          color: '#D33180',
          backgroundColor: 'transparent', // Garante que o background não mude
          '&::after': {
            width: '100%',
            opacity: 1
          }
        },
        transition: 'color 0.3s ease',
        // Efeito de underline sutil
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 4,
          left: 0,
          width: '0%',
          height: '2px',
          backgroundColor: '#D33180',
          opacity: 0,
          transition: 'all 0.3s ease'
        }
      }}
    >
      {children}
    </Button>
  </Link>
)