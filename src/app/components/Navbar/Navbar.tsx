// src/app/components/Navbar/Navbar.tsx
'use client'

import { AppBar, Toolbar, Box } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import { NavLink } from './NavLink'
import { ClientButton } from './ClientButton'

export const Navbar = () => {
  const navItems = [
    { name: 'Planos', href: '#planos' },
    { name: 'Negócios', href: '#negocios' },
    { name: 'Quem somos', href: '#quem-somos' },
    { name: 'Contato', href: '#contato' }
  ]

  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        {/* Logo */}
        <Link href="/" passHref>
          <Box
            sx={{
              position: 'relative',
              width: 160, // Ajuste conforme necessário
              height: 40, // Ajuste conforme necessário
              cursor: 'pointer',
              '&:hover img': {
                opacity: 0.8
              },
              transition: 'opacity 0.3s ease'
            }}
          >
            <Image
              src="/images/Logo.png"
              alt="Nudigi Logo"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'left'
              }}
            />
          </Box>
        </Link>

        {/* Links de Navegação */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 3,
          flexShrink: 0 
        }}>
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
          <ClientButton />
        </Box>
      </Toolbar>
    </AppBar>
  )
}