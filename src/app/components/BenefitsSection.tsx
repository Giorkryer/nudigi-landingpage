// src/app/components/BenefitsSection.tsx
'use client'
import { Grid, Typography, Box } from '@mui/material'
import { CardPadronizado } from './CardPadronizado'

const BenefitsSection = () => {
  const benefits = [
    {
      emoji: '🚀',
      title: 'Alta Performance',
      text: 'Soluções otimizadas para máxima velocidade e eficiência operacional.'
    },
    {
      emoji: '🔒',
      title: 'Segurança Total',
      text: 'Proteção de dados com criptografia avançada e protocolos de segurança.'
    },
    {
      emoji: '💡',
      title: 'Inovação Constante',
      text: 'Tecnologia de ponta para manter seu negócio à frente da concorrência.'
    },
    {
      emoji: '⏱️',
      title: 'Eficiência',
      text: 'Processos automatizados que economizam tempo e recursos.'
    }
  ]

  return (
    <Box 
      component="section" 
      sx={{ 
        height: '780px',
        backgroundColor: '#F8EFE3',
        py: 8,
        px: 4
      }}
    >
      {/* Título Principal */}
      <Typography 
        variant="h2" 
        sx={{
          fontFamily: 'Helvetica Rounded, Arial Rounded MT Bold, sans-serif',
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#D33180',
          textAlign: 'center',
          mb: 3
        }}
      >
        BENEFÍCIOS
      </Typography>

      {/* Subtítulo */}
      <Typography 
        variant="body1" 
        sx={{
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontSize: '18px',
          color: '#333',
          textAlign: 'center',
          maxWidth: '800px',
          mx: 'auto',
          mb: 8
        }}
      >
        Fusce nec lobortis magna. Etiam porta lectus in arcu maximus euismod.
      </Typography>

      <Grid 
        container 
        spacing={4} 
        sx={{ 
          maxWidth: '1200px',
          mx: 'auto',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {benefits.map((benefit, index) => (
          <Grid 
            item 
            xs={11}
            sm={6}
            md={3}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <CardPadronizado
              emoji={benefit.emoji}
              title={benefit.title}
              text={benefit.text}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BenefitsSection