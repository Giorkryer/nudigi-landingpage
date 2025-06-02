// src/app/components/CardPadronizado.tsx
'use client'
import { Box, Typography, SxProps, Theme } from '@mui/material'

interface CardProps {
  emoji: string
  title: string
  text: string
  sx?: SxProps<Theme>
  onClick?: () => void
}

export const CardPadronizado = ({ 
  emoji, 
  title, 
  text, 
  sx,
  onClick 
}: CardProps) => (
  <Box
    onClick={onClick}
    sx={{
      width: '224px',
      height: '280px',
      backgroundColor: 'white',
      borderRadius: '8px',
      p: 3,
      boxShadow: '0px 4px 16px rgba(211, 49, 128, 0.15)',
      mx: 'auto',
      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)', 
      transformOrigin: 'center',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        transform: 'translateY(-5px) scale(1.02)', 
        boxShadow: '0px 8px 24px rgba(211, 49, 128, 0.2)',
        '& .card-title': {
          color: '#C22A6E'
        },
        '& .card-emoji': {
          transform: 'scale(1.2)' 
        }
      },
      ...sx
    }}
  >
    <Typography 
      className="card-emoji"
      sx={{ 
        fontSize: '14px', 
        mb: 1,
        transition: 'transform 0.3s ease',
        alignSelf: 'flex-start' 
      }}
    >
      {emoji}
    </Typography>

    <Typography
      className="card-title"
      variant="h3"
      sx={{
        fontFamily: 'Helvetica Rounded, Arial Rounded MT Bold, sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#D33180',
        mb: 1,
        transition: 'color 0.3s ease',
        flexGrow: 1 
      }}
    >
      {title}
    </Typography>

    <Typography
      sx={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '16px', 
        color: '#666',
        lineHeight: 1.6,
        mb: 8
      }}
    >
      {text}
    </Typography>
  </Box>
)