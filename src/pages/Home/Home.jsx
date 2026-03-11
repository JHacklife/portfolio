import { Box, Divider, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import TechBackground from '../../components/TechBackground'
import { 
  SectionContainer, 
  GlowText, 
  GradientText,
  InfoPanel, 
  StatusIndicator,
  CyberDivider,
  FadeInUp 
} from '../../components/CyberComponents'
import mailTo, { config } from '../../utils/mail'
import contactIcons from '../Contact/ContactIcons'

/**
 * Home Page - Professional Cyberpunk Hero Section
 * 
 * Design features:
 * - Clean, readable typography with subtle glow
 * - Professional status indicators
 * - Elegant fade-in animations
 * - Consistent spacing and layout
 */

function Home() {
  const contacts = contactIcons({ size: "24" })

  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <TechBackground />
      <Navbar />
      <Box id="top"></Box>

      <SectionContainer 
        className="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Main Content */}
        <Stack 
          spacing={4} 
          alignItems="center" 
          sx={{ zIndex: 10, maxWidth: '900px', px: 2 }}
        >
          {/* Hero Title */}
          <FadeInUp delay={0}>
            <Stack spacing={2} alignItems="center">
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 1, sm: 3 }} 
                justifyContent="center" 
                alignItems="center"
              >
                <GlowText 
                  variant="h1" 
                  className="fade-in-up"
                  sx={{ fontWeight: 700 }}
                >
                  JONATHAN
                </GlowText>
                <GradientText 
                  variant="h1"
                  className="fade-in-up delay-100"
                  sx={{ fontWeight: 900 }}
                >
                  WILDEMER
                </GradientText>
              </Stack>

              <FadeInUp delay={0.2}>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#8DBAF5',
                    fontFamily: 'BlenderPro-Medium',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    mt: 2,
                    textAlign: 'center',
                  }}
                >
                  Fullstack Web & Mobile Developer
                </Typography>
              </FadeInUp>

              {/* Decorative line */}
              <FadeInUp delay={0.3}>
                <Box
                  sx={{
                    width: '200px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, #8DBAF5 50%, transparent 100%)',
                    mt: 3,
                    opacity: 0.5,
                  }}
                />
              </FadeInUp>
            </Stack>
          </FadeInUp>

          {/* Status indicators */}
          <FadeInUp delay={0.4}>
            <Stack 
              direction="row" 
              spacing={4} 
              alignItems="center" 
              sx={{ mt: 4 }}
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StatusIndicator active={true} />
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#4ade80', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    fontFamily: 'BlenderPro-Medium',
                  }}
                >
                  ONLINE
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StatusIndicator active={true} />
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: '#8DBAF5', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    fontFamily: 'BlenderPro-Medium',
                  }}
                >
                  AVAILABLE FOR HIRE
                </Typography>
              </Box>
            </Stack>
          </FadeInUp>
        </Stack>

        {/* Side panels - Desktop only */}
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: "absolute",
            bottom: "60px",
            left: { xs: "20px", md: "40px" },
            right: { xs: "20px", md: "40px" },
            zIndex: 5,
            display: { xs: 'none', md: 'flex' }
          }}
        >
          {/* Left panel - Email */}
          <FadeInUp delay={0.5}>
            <Stack alignItems="center" spacing={2}>
              <Link
                href={mailTo}
                target="_blank"
                className="verticalText"
                sx={{
                  textDecoration: "none",
                  color: '#8DBAF5',
                  fontSize: '0.8rem',
                  fontFamily: 'BlenderPro-Medium',
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#B5D4FF',
                    opacity: 1,
                  }
                }}
              >
                {config?.to}
              </Link>
              <Divider
                orientation="vertical"
                sx={{
                  height: "60px",
                  borderColor: 'rgba(141, 186, 245, 0.2)',
                  borderWidth: "1px",
                }}
              />
            </Stack>
          </FadeInUp>

          {/* Right panel - Social links */}
          <FadeInUp delay={0.6}>
            <Stack alignItems="center" spacing={2}>
              <Stack spacing={1.5}>
                {contacts.map((contact, index) => (
                  <Link
                    key={index}
                    href={contact?.url}
                    target="_blank"
                    aria-label={contact?.label || 'Social link'}
                    sx={{
                      textDecoration: "none",
                      color: '#8DBAF5',
                      opacity: 0.7,
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': {
                        color: '#B5D4FF',
                        opacity: 1,
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    {contact?.icon}
                  </Link>
                ))}
              </Stack>

              <Divider
                orientation="vertical"
                sx={{
                  height: "60px",
                  borderColor: 'rgba(141, 186, 245, 0.2)',
                  borderWidth: "1px",
                }}
              />
            </Stack>
          </FadeInUp>
        </Stack>

        {/* Info Panel - Desktop only */}
        <InfoPanel sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Stack spacing={2.5}>
            <Box>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#8DBAF5', 
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                }}
              >
                SYSTEM STATUS
              </Typography>
              <Stack spacing={1} sx={{ mt: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#808898' }}>CPU:</Typography>
                  <Typography variant="caption" sx={{ color: '#4ade80' }}>OPTIMAL</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#808898' }}>MEMORY:</Typography>
                  <Typography variant="caption" sx={{ color: '#4ade80' }}>85%</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#808898' }}>NETWORK:</Typography>
                  <Typography variant="caption" sx={{ color: '#4ade80' }}>CONNECTED</Typography>
                </Box>
              </Stack>
            </Box>

            <CyberDivider sx={{ my: 1.5 }} />

            <Box>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#8DBAF5', 
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                }}
              >
                LOCATION
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: '#c8d4e0' }}>
                Buenos Aires, ARG
              </Typography>
            </Box>

            <Box>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#8DBAF5', 
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                }}
              >
                LOCAL TIME
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block', 
                  mt: 0.5, 
                  color: '#c8d4e0',
                  fontFamily: 'monospace',
                }}
              >
                {new Date().toLocaleTimeString()}
              </Typography>
            </Box>
          </Stack>
        </InfoPanel>
      </SectionContainer>
    </Stack>
  )
}

export default Home
