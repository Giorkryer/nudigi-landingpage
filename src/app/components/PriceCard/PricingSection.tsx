// src/app/components/PricingSection.tsx
'use client'
import { Grid, Typography, Box } from '@mui/material'
import { PriceCard } from './PriceCard'

export const PricingSection = () => {
  const plans = [
    {
      title: 'Mensal',
      price: 'R$50/mês',
      features: [
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit'
      ],
      buttonLink: 'https://suaplataforma.com/assinatura-mensal' // Link externo
    },
    {
      title: 'Anual',
      price: 'R$35/mês',
      discountedPrice: 'R$50/mês',
      features: [
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Benefício exclusivo'
      ],
      isPopular: true,
      buttonLink: 'https://suaplataforma.com/assinatura-anual' 
    },
    {
      title: 'Trimestral',
      price: 'R$45/mês',
      discountedPrice: 'R$50/mês',
      features: [
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit'
      ],
      buttonLink: 'https://suaplataforma.com/assinatura-trimestral' 
    }
  ]

  return (
    <Box component="section" id="planos" sx={{ 
      py: 8, 
      px: 4, 
      backgroundColor: 'white', // Fundo branco
      position: 'relative',
      zIndex: 1
    }}>
      <Typography variant="h2" sx={{
        fontFamily: 'Helvetica Rounded, Arial Rounded MT Bold, sans-serif',
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#D33180',
        textAlign: 'center',
        mb: 3
      }}>
        Planos de Assinatura
      </Typography>

      <Typography variant="body1" sx={{
        fontFamily: 'Helvetica Rounded, Arial, sans-serif',
        fontSize: '18px',
        color: '#333',
        textAlign: 'center',
        maxWidth: '900px',
        mx: 'auto',
        mb: 8
      }}>
        Escolha o plano ideal para você e aproveite todos os benefícios com o melhor custo-benefício.
      </Typography>

<Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item key={index}>
            <PriceCard
              title={plan.title}
              price={plan.price}
              discountedPrice={plan.discountedPrice}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonLink={plan.buttonLink} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}