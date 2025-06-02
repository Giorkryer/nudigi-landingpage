// src/app/components/ui/Paragraph.tsx
'use client'

import { Typography, TypographyProps, SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'

interface ParagraphProps extends TypographyProps {
  children: ReactNode
  sx?: SxProps<Theme>
  bold?: boolean
  italic?: boolean
  color?: string
  align?: 'left' | 'center' | 'right' | 'justify'
}

export const Paragraph = ({ 
  children, 
  sx, 
  bold = false, 
  italic = false, 
  color, 
  align = 'left',
  ...props 
}: ParagraphProps) => {
  return (
    <Typography
      variant="body1"
      component="p"
      sx={{
        lineHeight: 1.8,
        fontSize: '1.1rem',
        mb: 2,
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        color: color || 'text.primary',
        textAlign: align,
        ...sx
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}