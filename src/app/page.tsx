// src/app/page.tsx
'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import BenefitsSection from './components/BenefitsSection'
import { PinkTitle } from './components/Texts/PinkTitle'
import { ClientButton } from './components/Navbar/ClientButton'

export default function Home() {
  return (
    <Box>
      {/* Seção Hero - Totalmente Centralizada */}
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
          mx: 'auto'
        }}
      >
        {/* Container de Texto - Centralizado */}
        <Box sx={{
          flex: 1,
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center', // Centralizado em todas as resoluções
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centraliza todos os elementos filhos
          justifyContent: 'center'
        }}>
          <PinkTitle>Gestão Completa para Seu Salão de Beleza</PinkTitle>
          
          <Typography variant="body1" sx={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            /*fontSize: { xs: '1rem', md: '1.2rem' },*/
            mb: 4,
            color: 'text.primary',
            lineHeight: 1.6,
            maxWidth: '90%'
          }}>
            Tudo o que você precisa para organizar clientes, agendamentos e finanças em um único lugar!
          </Typography>

          <ClientButton children ='FAÇA PARTE DISSO' sectionId="planos" sx={{ 
            width: '100%',
            maxWidth: '180px', // Mantém a largura mínima
            display: 'block',
            mx: 'auto'
           }}/>
        </Box>

        {/* Container de Imagem - Centralizado */}
        <Box sx={{
          flex: 1,
          position: 'relative',
          width: '100%',
          height: { xs: '50vw', md: '40vw' },
          maxWidth: '800px',
          minWidth: '300px',
          mx: 'auto'
        }}>
          <Image
            src="/images/pcimage.png"
            alt="Computador Nudigi"
            fill
            priority
            style={{
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </Box>
      </Box>
      <BenefitsSection />
    </Box>
    
  )
}