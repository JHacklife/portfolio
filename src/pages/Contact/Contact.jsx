import React from 'react'
import { Grid, Typography, Stack, Link, Box } from '@mui/material'
import contactIcons from './ContactIcons'
import qrcode from '../../assets/QR.svg'
import { 
  SectionContainer, 
  GlowText, 
  TechFrame,
  CyberDivider,
  FadeInUp 
} from '../../components/CyberComponents'

/**
 * Contact Section - Professional contact information
 * 
 * Features:
 * - Clean, centered layout
 * - QR code for quick access
 * - Professional social icons with hover effects
 */

export default function Contact() {
  const contacts = contactIcons({ size: "36" })

  return (
    <SectionContainer 
      className="section gridBackground" 
      id="contact" 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        py: { xs: 8, md: 10 },
      }}
    >
      <Stack 
        spacing={5} 
        alignItems="center" 
        sx={{ maxWidth: '600px', px: 2 }}
      >
        {/* Header */}
        <FadeInUp>
          <Stack spacing={2} alignItems="center">
            <GlowText variant="h2">
              GET IN TOUCH
            </GlowText>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#a0b0c0', 
                textAlign: 'center',
                maxWidth: '400px',
                lineHeight: 1.7,
              }}
            >
              Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.
            </Typography>
          </Stack>
        </FadeInUp>

        {/* QR Code */}
        <FadeInUp delay={0.1}>
          <TechFrame sx={{ p: 3 }}>
            <Box
              component="img"
              src={qrcode}
              alt="Contact QR Code"
              sx={{
                height: '160px',
                width: '160px',
                filter: 'brightness(0.9) contrast(1.1)',
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter: 'brightness(1) contrast(1.1)',
                }
              }}
            />
          </TechFrame>
        </FadeInUp>

        <CyberDivider showdot="true" sx={{ width: '200px' }} />

        {/* Social Icons */}
        <FadeInUp delay={0.2}>
          <Stack spacing={2} alignItems="center">
            <Typography 
              variant="overline" 
              sx={{ color: '#8DBAF5', letterSpacing: '0.15em' }}
            >
              CONNECT WITH ME
            </Typography>
            
            <Grid 
              container 
              spacing={3} 
              justifyContent="center"
              sx={{ maxWidth: '400px' }}
            >
              {contacts.map((contact, index) => (
                <Grid item key={index}>
                  <Link 
                    href={contact?.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact?.label || 'Social link'}
                    sx={{ 
                      textDecoration: "none",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '52px',
                      height: '52px',
                      borderRadius: '8px',
                      border: '1px solid rgba(141, 186, 245, 0.2)',
                      color: '#8DBAF5',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(141, 186, 245, 0.5)',
                        backgroundColor: 'rgba(141, 186, 245, 0.08)',
                        transform: 'translateY(-3px)',
                        color: '#B5D4FF',
                      }
                    }}
                  >
                    {contact?.icon}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </FadeInUp>
      </Stack>
    </SectionContainer>
  )
}
