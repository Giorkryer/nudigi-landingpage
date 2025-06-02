// src/app/components/PriceCard.tsx
'use client'
import { Box, Typography, Button, Divider } from '@mui/material'

const extractNumericPrice = (priceString: string): number | null => {
  if (!priceString) return null;
  const cleanedString = priceString
    .replace("R$", "")
    .replace(/,.*/, "") 
    .replace(/\/.*/, "") 
    .replace(",", ".")   
    .trim();
  
  const numericValue = parseFloat(cleanedString);
  return isNaN(numericValue) ? null : numericValue;
};

interface PriceCardProps {
  title: string
  price: string 
  discountedPrice?: string
  features: string[]
  isPopular?: boolean
  planLevel: string 
  planType: 'monthly' | 'yearly' 
}

export const PriceCard = ({ 
  title, 
  price, 
  discountedPrice, 
  features, 
  isPopular,
  planLevel, 
  planType   
}: PriceCardProps) => {

  const handleSubscription = () => {
    const numericPrice = extractNumericPrice(price);

    if (numericPrice === null) {
      console.error("Não foi possível extrair o preço numérico do card:", price);
      return;
    }

    const targetUrl = `/checkout?level=${planLevel}&type=${planType}&price=${numericPrice.toFixed(2)}`;
    
    window.open(targetUrl, '_blank'); 
  };

  return (
    <Box sx={{
      width: '750px',
      maxWidth: 310,
      height: '100%',
      minHeight: 445, 
      backgroundColor: 'white',
      borderRadius: '8px',
      p: 3,
      border: isPopular ? '1px solid #D33180' : '0.5px solid #000000',
      boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      overflow: 'hidden', 
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)'
      }
    }}>
      {isPopular && (
        <Box sx={{
          position: 'absolute',
          top: 0, 
          right: 0, 
          backgroundColor: '#D33180',
          color: 'white',
          px: 2,
          py: '4px',
          borderRadius: '0 8px 0 4px',
          fontSize: '12px',
          fontWeight: 'bold',
          lineHeight: 1.5,
          zIndex: 2,
        }}>
          Mais Popular
        </Box>
      )}

      {/* A MARGEM SUPERIOR CONDICIONAL FOI REMOVIDA DAQUI */}
      <Box sx={{ flex: 1, mb: 2 }}> 
        <Typography variant="h3" sx={{
          fontFamily: 'Helvetica Rounded, Arial Rounded MT Bold, sans-serif',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333',
          mb: 3,
          textAlign: 'left' 
        }}>
          {title}
        </Typography>

        <Box sx={{ 
          mb: 3,
          textAlign: 'left', 
          position: 'relative'
        }}>
          <Typography sx={{
            fontFamily: 'Helvetica Rounded, Arial Rounded MT Bold, sans-serif',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#D33180',
            lineHeight: 1.2
          }}>
            {price}
          </Typography>
          
          {discountedPrice && (
            <Typography sx={{
              fontFamily: 'Helvetica Rounded, Arial Rounded MT Bold, sans-serif',
              fontSize: '16px',
              color: '#817F80',
              textDecoration: 'line-through',
              mt: 1
            }}>
              {discountedPrice}
            </Typography>
          )}
        </Box>

        <Divider sx={{ 
          my: 2,
          backgroundColor: '#EEE',
          borderColor: '#EEE' 
        }}/>

        <Box sx={{ 
          mb: 3,
          flex: 1 
        }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2,
              '&:last-child': { mb: 0 }
            }}>
              <Box sx={{ 
                color: '#D33180', 
                mr: 1.5,
                fontSize: '18px', 
                lineHeight: 0 
              }}>✓</Box>
              <Typography sx={{
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontSize: '16px',
                color: '#333',
                lineHeight: 1.4
              }}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Button
        fullWidth
        onClick={handleSubscription} 
        sx={{
          backgroundColor: isPopular ? '#D33180' : 'white',
          color: isPopular ? 'white' : '#D33180',
          border: '1px solid #D33180',
          py: 1.5,
          borderRadius: '20px',
          fontWeight: 'bold',
          fontSize: '16px',
          mt: 'auto', 
          '&:hover': {
            backgroundColor: isPopular ? '#C12A6F' : '#F5F5F5',
            borderColor: isPopular ? '#C12A6F' : '#D33180'
          }
        }}
      >
        Assinar Agora
      </Button>
    </Box>
  )
}