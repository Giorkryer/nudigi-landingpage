// src/app/components/Shared/PinkTitle.tsx
import { Typography } from '@mui/material';
import React from 'react';

interface PinkTitleProps {
  children: React.ReactNode;
  id?: string;
}

export const PinkTitle: React.FC<PinkTitleProps> = ({ children, id }) => {
  return (
    <Typography 
      variant="h2" 
      id={id}
      sx={{
        fontFamily: 'Helvetica Rounded, Arial, sans-serif',
        fontSize: { xs: '32px', sm: '40px' },
        fontWeight: 'bold',
        color: '#D33180',
        textAlign: 'center',
        mb: 4,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '100px',
          height: '4px',
          backgroundColor: '#D33180',
          margin: '10px auto 0',
          borderRadius: '2px'
        }
      }}
    >
      {children}
    </Typography>
  );
};