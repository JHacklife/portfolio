import React from 'react'
import { Grid, Typography, Stack, Box } from '@mui/material'
import certificatesJSON from './Certificates.json'
import { 
  SectionContainer, 
  GlowText, 
  TechFrame,
  FadeInUp 
} from '../../components/CyberComponents'

/**
 * Certificates Section - Professional certifications showcase
 * 
 * Features:
 * - Clean grid layout
 * - Elegant card hover effects
 * - Professional image display
 */

export default function Certificates() {
  return (
    <SectionContainer 
      className="section gridBackground" 
      id="certificates"
      sx={{
        py: { xs: 6, md: 8 },
        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 6,
          xl: 10,
        },
        minHeight: 'auto',
      }}
    >
      {/* Section Header */}
      <FadeInUp>
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                width: '4px',
                height: '32px',
                background: 'linear-gradient(180deg, #8DBAF5 0%, transparent 100%)',
                borderRadius: '2px',
              }}
            />
            <GlowText variant="h3" sx={{ fontWeight: 600 }}>
              CERTIFICATIONS
            </GlowText>
          </Stack>
          
          {/* Decorative element */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box sx={{ width: 6, height: 6, bgcolor: '#8DBAF5', borderRadius: '50%' }} />
            <Box sx={{ width: 40, height: 1, bgcolor: 'rgba(141, 186, 245, 0.3)' }} />
            <Box sx={{ width: 4, height: 4, bgcolor: 'rgba(141, 186, 245, 0.5)', borderRadius: '50%' }} />
          </Box>
        </Stack>
      </FadeInUp>

      {/* Certificates Grid */}
      <Grid container spacing={3} justifyContent="center">
        {certificatesJSON.map((certificate, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <FadeInUp delay={0.1 + (index * 0.05)}>
              <TechFrame 
                sx={{ 
                  p: 0, 
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <Stack spacing={0}>
                  {/* Certificate Image */}
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={certificate?.url}
                      alt={certificate?.name}
                      sx={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  </Box>

                  {/* Certificate Name */}
                  <Box sx={{ p: 2 }}>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: '#c8d4e0',
                        fontFamily: 'BlenderPro-Medium',
                        fontSize: '0.9rem',
                        lineHeight: 1.4,
                      }}
                    >
                      {certificate?.name}
                    </Typography>
                  </Box>
                </Stack>
              </TechFrame>
            </FadeInUp>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  )
}
