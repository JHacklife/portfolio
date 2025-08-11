import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import TechBackground from '../../components/TechBackground'
import { SectionContainer, GlowText, InfoPanel } from '../../components/CyberComponents'
import mailTo, { config } from '../../utils/mail'
import contactIcons from '../Contact/ContactIcons'

function Home() {
  const contacts = contactIcons({ size: "28" })

  return (
    <Stack>
      <Navbar />
      <Box id="top"></Box>

      <SectionContainer className="section gridBackground"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Main Content */}
        <Stack spacing={4} alignItems="center" sx={{ zIndex: 10 }}>

          {/* Hero Title */}
          <Stack spacing={2} alignItems="center">
            <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
              <GlowText variant="h1" className="scale slide-in-top cyber-glow">
                JONATHAN
              </GlowText>
              <GlowText variant="h1" className="scale slide-in-top cyber-glow"
                sx={{
                  fontWeight: 900,
                  color: '#ff0066',
                  textShadow: '0 0 20px #ff0066, 0 0 40px #ff0066'
                }}
              >
                WILDEMER
              </GlowText>
            </Stack>

            <Typography
              variant="h4"
              className="scale slide-in-bottom text-glow"
              sx={{
                color: '#00ffff',
                fontFamily: 'BlenderPro-Medium',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginTop: 2,
                textShadow: '0 0 15px #00ffff'
              }}
            >
              Fullstack Web & Mobile Developer
            </Typography>

            {/* Cyber decorative line */}
            <Box
              sx={{
                width: '300px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, #00d4ff 50%, transparent 100%)',
                marginTop: 3,
                animation: 'cyberPulse 2s infinite'
              }}
            />
          </Stack>

          {/* Status indicators */}
          <Stack direction="row" spacing={4} alignItems="center" sx={{ marginTop: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#00ff88',
                  boxShadow: '0 0 10px #00ff88',
                  animation: 'cyberPulse 1.5s infinite'
                }}
              />
              <Typography variant="caption" sx={{ color: '#00ff88', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                ONLINE
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#00d4ff',
                  boxShadow: '0 0 10px #00d4ff',
                  animation: 'cyberPulse 2s infinite'
                }}
              />
              <Typography variant="caption" sx={{ color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                AVAILABLE FOR HIRE
              </Typography>
            </Box>
          </Stack>
        </Stack>

        {/* Side panels */}
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            right: "40px",
            zIndex: 5
          }}
        >
          {/* Left panel - Email */}
          <Stack alignItems="center" spacing={2}>
            <Link
              href={mailTo}
              target="_blank"
              className="verticalText scale"
              sx={{
                textDecoration: "none",
                color: '#00ffff',
                fontSize: '0.9rem',
                fontFamily: 'BlenderPro-Medium',
                '&:hover': {
                  color: '#ffffff',
                  textShadow: '0 0 10px #00ffff'
                }
              }}
            >
              {config?.to}
            </Link>
            <Divider
              orientation="vertical"
              sx={{
                height: "80px",
                borderColor: '#00d4ff',
                borderWidth: "1px",
                boxShadow: '0 0 5px #00d4ff'
              }}
            />
          </Stack>

          {/* Right panel - Social links */}
          <Stack alignItems="center" spacing={2}>
            <Stack spacing={2}>
              {contacts.map((contact, index) => (
                <Grid key={index} item className="scale">
                  <Link
                    href={contact?.url}
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      color: '#00d4ff',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#ffffff',
                        filter: 'drop-shadow(0 0 10px #00d4ff)'
                      }
                    }}
                  >
                    {contact?.icon}
                  </Link>
                </Grid>
              ))}
            </Stack>

            <Divider
              orientation="vertical"
              sx={{
                height: "80px",
                borderColor: '#00d4ff',
                borderWidth: "1px",
                boxShadow: '0 0 5px #00d4ff'
              }}
            />
          </Stack>
        </Stack>

        {/* Info Panel - Desktop only */}
        <InfoPanel sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 600 }}>
              SYSTEM STATUS
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption">CPU:</Typography>
                <Typography variant="caption" sx={{ color: '#00ff88' }}>OPTIMAL</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption">MEMORY:</Typography>
                <Typography variant="caption" sx={{ color: '#00ff88' }}>85%</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption">NETWORK:</Typography>
                <Typography variant="caption" sx={{ color: '#00ff88' }}>CONNECTED</Typography>
              </Box>
            </Stack>

            <Divider sx={{ borderColor: 'rgba(0, 212, 255, 0.3)' }} />

            <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 600 }}>
              LOCATION
            </Typography>
            <Typography variant="caption">
              Buenos Aires, ARG
            </Typography>

            <Typography variant="overline" sx={{ color: '#00d4ff', fontWeight: 600 }}>
              LOCAL TIME
            </Typography>
            <Typography variant="caption">
              {new Date().toLocaleTimeString()}
            </Typography>
          </Stack>
        </InfoPanel>
      </SectionContainer>
    </Stack>
  )
}

export default Home
