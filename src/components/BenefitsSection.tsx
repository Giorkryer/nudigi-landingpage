// src/app/components/BenefitsSection.tsx
'use client'
import { Grid, Typography, Box } from '@mui/material'
import { CardPadronizado } from './CardPadronizado'
import { PinkTitle } from './Shared/PinkTitle'

const BenefitsSection = () => {
  const cardsBeneficios = [
    {
      emoji: '📊',
      title: 'Financeiro Simplificado',
      text: 'Gerencie entradas, saídas e lucros em tempo real com relatórios automáticos e precisos.',
      onClick: () => console.log('Performance clicked')
    },
    {
      emoji: '📅',
      title: 'Agendamento Inteligente',
      text: 'Reduza falhas de comunicação com agenda online, lembretes automáticos e controle de horários integrado.',
      onClick: () => console.log('Segurança clicked')
    },
    {
      emoji: '📱',
      title: 'Acesso Multiplataforma',
      text: 'Gerencie seu salão de qualquer lugar através de computadores, tablets e smartphones.',
      onClick: () => console.log('Inovação clicked')
    },
    {
      emoji: '📦',
      title: 'Estoque Sob Controle',
      text: 'Controle de produtos, tudo em um único sistema.',
      onClick: () => console.log('Eficiência clicked')
    }
  ]

  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: '780px',
        backgroundColor: '#F8EFE3',
        py: 10,
        px: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <PinkTitle>BENEFÍCIOS</PinkTitle>

      <Typography 
        variant="body1" 
        sx={{
          fontFamily: 'Helvetica Rounded, Arial, sans-serif',
          fontSize: { xs: '16px', md: '18px' },
          color: '#333',
          textAlign: 'center',
          maxWidth: '900px',
          mx: 'auto',
          mb: 8,
          px: 2
        }}
      >
        Descubra como nosso sistema transforma a gestão do seu salão em uma experiência eficiente e prazerosa.
      </Typography>

      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        px: 2
      }}>
        <Grid 
          container 
          spacing={4}
          sx={{
            maxWidth: '1200px',
            justifyContent: 'center',
            margin: '0',
            width: 'auto'
          }}
        >
          {cardsBeneficios.map((benefit, index) => (
            <Grid 
              item 
              key={index}
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                minWidth: '250px',
                maxWidth: '280px',
                padding: '0px'
              }}
            >
              <CardPadronizado
                emoji={benefit.emoji}
                title={benefit.title}
                text={benefit.text}
                onClick={benefit.onClick}
                sx={{
                  width: '100%',
                  height: '280px'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default BenefitsSection