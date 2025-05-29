// src/app/components/sections/Footer.tsx
'use client';

import { Box, Grid, Typography, Link, Container, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, WhatsApp, Email, Phone, LocationOn } from '@mui/icons-material';
import Image from 'next/image';

export default function Footer() {
  // Contatos clicáveis
  const contacts = [
    { 
      icon: <Phone fontSize="small" />, 
      text: "(85) 9999-9999", 
      href: "tel:+558599999999" 
    },
    { 
      icon: <WhatsApp fontSize="small" />, 
      text: "(85) 98888-7777", 
      href: "https://wa.me/5585988887777" 
    },
    { 
      icon: <Email fontSize="small" />, 
      text: "contato@nudigi.com.br", 
      href: "mailto:contato@nudigi.com.br" 
    },
    { 
      icon: <LocationOn fontSize="small" />, 
      text: "Av. Beira Mar, 1500", 
      href: "https://maps.google.com?q=Av.+Beira+Mar,+1500" 
    }
  ];

  return (
    <Box 
      component="footer"
      sx={{
        bgcolor: '#111827',
        color: '#f0f0f0',
        py: 2, // Altura reduzida
        px: { xs: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(211,49,128,0.1) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            mb: 2, 
            flexDirection: 'column' // Empilhado verticalmente
          }}>
            <Box sx={{ 
              position: 'relative', 
              width: 120, 
              height: 100, 
              mb: -2
            }}>
              <Image
                src="/images/Logo.png"
                alt="Logo Nudigi"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Box>     
              <Typography sx={{ 
                color: '#aaa', 
                maxWidth: 600,
                fontSize: '0.9rem'
              }}>
                Transformamos beleza em arte, cuidando de você com excelência e dedicação.
              </Typography>
            </Box>
          </Box>

          {/* Conteúdo principal do footer */}
          <Grid container spacing={3} justifyContent="space-between">
            {/* Coluna 1: Links rápidos */}
            <Grid item xs={12} md={5}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#f0f0f0'
              }}>
                Links Rápidos
              </Typography>
              <Box>
                {[
                  { text: 'Nossos Serviços', href: '#servicos' },
                  { text: 'Equipe Profissional', href: '#equipe' },
                  { text: 'Depoimentos', href: '#depoimentos' },
                  { text: 'Galeria', href: '#galeria' }
                ].map((link, index) => (
                  <Link 
                    key={index} 
                    href={link.href} 
                    underline="none"
                    sx={{
                      display: 'block',
                      mb: 1.5, 
                      color: '#aaa',
                      transition: 'color 0.3s',
                      '&:hover': {
                        color: '#D33180',
                      }
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Coluna 2: Contato */}
            <Grid item xs={12} md={5}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#f0f0f0'
              }}>
                Contato
              </Typography>
              
              {/* Contatos clicáveis */}
              <Box sx={{ mb: 2 }}>
                {contacts.map((contact, index) => (
                  <Link
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1.5,
                      color: '#aaa',
                      transition: 'color 0.3s',
                      '&:hover': {
                        color: '#D33180',
                      }
                    }}
                  >
                    <Box sx={{ mr: 1.5, color: '#D33180' }}>
                      {contact.icon}
                    </Box>
                    <Typography>{contact.text}</Typography>
                  </Link>
                ))}
              </Box>

              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#f0f0f0'
              }}>
                Siga-nos
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {[
                  { icon: <Facebook />, href: '#' },
                  { icon: <Instagram />, href: '#' },
                  { icon: <Twitter />, href: '#' },
                  { icon: <WhatsApp />, href: 'https://wa.me/5585988887777' }
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    target="_blank"
                    sx={{
                      bgcolor: '#333',
                      color: '#fff',
                      '&:hover': {
                        bgcolor: '#D33180',
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ 
            mt: 4, 
            pt: 3, 
            borderTop: '1px solid #333', 
            textAlign: 'center',
            color: '#aaa',
            fontSize: '0.8rem' 
          }}>
            © 2025 Nudigi. Todos os direitos reservados.
          </Box>
        </Box>
      </Container>
    </Box>
  );
}