// src/components/Hero/HeroSection.tsx
'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { PinkTitle } from '../Shared/PinkTitle';
import { ClientButton } from '../Shared/ClientButton';

export const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        pt: '80px',
        px: 4,
        minHeight: '70vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: '4vw', md: '8vw' },
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PinkTitle>Gestão Completa para Seu Salão de Beleza</PinkTitle>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            mb: 4,
            color: 'text.primary',
            lineHeight: 1.6,
            maxWidth: '90%',
          }}
        >
          Tudo o que você precisa para organizar clientes, agendamentos e finanças em um único lugar!
        </Typography>

        <ClientButton
          children="FAÇA PARTE DISSO"
          sectionId="planos"
          sx={{
            width: '100%',
            maxWidth: '180px',
            display: 'block',
            mx: 'auto',
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          position: 'relative',
          width: '100%',
          height: { xs: '50vw', md: '40vw' },
          maxWidth: '800px',
          minWidth: '300px',
          mx: 'auto',
        }}
      >
        <Image
          src="/images/pcimage.png"
          alt="Computador Nudigi"
          fill
          priority
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </Box>
    </Box>
  );
};
