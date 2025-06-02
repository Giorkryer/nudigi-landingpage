// src/app/components/PricingSection.tsx
'use client'
import { Grid, Typography, Box, Button } from '@mui/material'
import { useState } from 'react'
import { PriceCard } from './PriceCard'
import { PinkTitle } from '../Shared/PinkTitle'

interface PlanData {
  id: string; 
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  originalPrice?: string; 
  features: string[];
  isPopular?: boolean; 
}

export const PricingSection = () => {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const plans: PlanData[] = [ 
    {
      id: 'basic', 
      title: 'Básico',
      monthlyPrice: 'R$50/mês',
      yearlyPrice: 'R$45/mês', 
      originalPrice: 'R$50/mês', 
      features: [
        '1 a 2 Profissionais',
        'Site para agendamento',
        'Gestão e relatórios financeiros'
      ],
      isPopular: false
    },
    {
      id: 'vip', 
      title: 'Vip',
      monthlyPrice: 'R$70/mês',
      yearlyPrice: 'R$50/mês',
      originalPrice: 'R$70/mês',
      features: [
        '3 a 4 Profissionais',
        'Site para agendamento',
        'Gestão e relatórios financeiros'
      ],
      isPopular: true 
    },
    {
      id: 'premium', 
      title: 'Premium',
      monthlyPrice: 'R$100/mês',
      yearlyPrice: 'R$80/mês',
      originalPrice: 'R$100/mês',
      features: [
        '5 a 10 Profissionais',
        'Site para agendamento',
        'Gestão e relatórios financeiros'
      ],
      isPopular: false
    }
  ]

  return (
    <Box component="section" id="planos" sx={{ 
      py: 8, 
      px: { xs: 2, sm: 4 }, 
      backgroundColor: 'white',
      position: 'relative',
      zIndex: 1
    }}>
      <PinkTitle id='planos-title'>Planos de Assinatura</PinkTitle>

      <Typography variant="body1" sx={{
        fontFamily: 'Helvetica Rounded, Arial, sans-serif',
        fontSize: '18px',
        color: '#333',
        textAlign: 'center',
        maxWidth: '900px',
        mx: 'auto',
        mb: 4
      }}>
        Escolha o plano ideal para você e aproveite todos os benefícios com o melhor custo-benefício.
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mb: 6,
        gap: 2
      }}>
        <Button
          variant={period === 'monthly' ? 'contained' : 'outlined'}
          onClick={() => setPeriod('monthly')}
          sx={{
            backgroundColor: period === 'monthly' ? '#D33180' : 'white',
            color: period === 'monthly' ? 'white' : '#D33180',
            border: '1px solid #D33180',
            borderRadius: '20px',
            fontWeight: 'bold',
            px: 4,
            py: 1,
            '&:hover': {
              backgroundColor: period === 'monthly' ? '#C12A6F' : '#F8F8F8',
              borderColor: '#C12A6F' 
            }
          }}
        >
          Mensal
        </Button>
        
        <Button
          variant={period === 'yearly' ? 'contained' : 'outlined'}
          onClick={() => setPeriod('yearly')}
          sx={{
            backgroundColor: period === 'yearly' ? '#D33180' : 'white',
            color: period === 'yearly' ? 'white' : '#D33180',
            border: '1px solid #D33180',
            borderRadius: '20px',
            fontWeight: 'bold',
            px: 4,
            py: 1,
            '&:hover': {
              backgroundColor: period === 'yearly' ? '#C12A6F' : '#F8F8F8',
              borderColor: '#C12A6F' 
            }
          }}
        >
          Anual
        </Button>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => ( 
          <Grid item key={plan.id}> 
            <PriceCard
              title={plan.title}
              price={period === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              discountedPrice={period === 'yearly' && plan.originalPrice && plan.yearlyPrice !== plan.originalPrice 
                               ? plan.originalPrice 
                               : undefined}
              features={plan.features}
              isPopular={plan.isPopular} 
              planLevel={plan.id} 
              planType={period}   
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}