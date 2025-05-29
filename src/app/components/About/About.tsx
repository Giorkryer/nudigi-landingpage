// src/app/components/sections/AboutSection.tsx
'use client';

import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { PinkTitle } from '../Texts/PinkTitle';
import { Paragraph } from '../Texts/Paragraph';

export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      component="section" 
      id="quem-somos"
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(211,49,128,0.05) 0%, rgba(255,255,255,0) 100%)',
          zIndex: 0,
        }
      }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px', 
          mx: 'auto'
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Coluna da Imagem - Visível apenas em desktop */}
          {!isMobile && (
            <Grid item md={6}>
              <Box 
                sx={{ 
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 3,
                  height: '500px',
                  transform: 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(-2deg)',
                  }
                }}
              >
                <Image
                  src="/images/blocorosa.png"
                  alt="Equipe da empresa"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </Box>
            </Grid>
          )}

          <Grid item xs={12} md={6}>
            <PinkTitle>Quem somos</PinkTitle>

            <Paragraph>Há mais de uma década, o <strong>Nudigi</strong> tem sido um refúgio de beleza e bem-estar no coração da cidade. Fundado com a missão de realçar a beleza única de cada cliente, nosso salão combina técnicas inovadoras com um atendimento personalizado, criando experiências que vão além da estética.</Paragraph>
            
            <Paragraph>Há mais de uma década, o <strong>Nudigi</strong> tem sido um refúgio de beleza e bem-estar no coração da cidade. Fundado com a missão de realçar a beleza única de cada cliente, nosso salão combina técnicas inovadoras com um atendimento personalizado, criando experiências que vão além da estética.</Paragraph>
            
            <Paragraph>No Nudigi, acreditamos que a beleza é uma forma de autoexpressão. Por isso, valorizamos o diálogo e a escuta atenta para entender as necessidades e desejos de cada pessoa. Nossos tratamentos são cuidadosamente planejados para proporcionar transformações que refletem a essência de quem você é.</Paragraph>

            <Box sx={{ 
              height: '1px', 
              bgcolor: 'divider', 
              my: 4, 
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '-5px',
                width: '60px',
                height: '10px',
                bgcolor: '#D33180',
                borderRadius: 10
              }
            }} />

            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={6}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 2,
                  bgcolor: 'rgba(211, 49, 128, 0.05)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 2
                  }
                }}>
                  <PinkTitle>10+</PinkTitle>
                  <Paragraph align="center" sx={{ mb: 0 }}>Anos de Experiência</Paragraph>
                </Box>
              </Grid>
              
              <Grid item xs={6} sm={6} md={6}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 2,
                  bgcolor: 'rgba(211, 49, 128, 0.05)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 2
                  }
                }}>
                  <PinkTitle>15+</PinkTitle>
                  <Paragraph align="center" sx={{ mb: 0 }}>Serviços Oferecidos</Paragraph>
                </Box>
              </Grid>
              
              <Grid item xs={6} sm={6} md={6}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 2,
                  bgcolor: 'rgba(211, 49, 128, 0.05)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 2
                  }
                }}>
                  <PinkTitle>100+</PinkTitle>
                  <Paragraph align="center" sx={{ mb: 0 }}>Clientes Satisfeitos</Paragraph>
                </Box>
              </Grid>
              
              <Grid item xs={6} sm={6} md={6}>
                <Box sx={{ 
                  textAlign: 'center',
                  p: 2,
                  bgcolor: 'rgba(211, 49, 128, 0.05)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 2
                  }
                }}>
                  <PinkTitle>24h</PinkTitle>
                  <Paragraph align="center" sx={{ mb: 0 }}>Atendimento</Paragraph>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}