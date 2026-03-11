import { Box, Divider, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Navbar from '../../components/Navbar'
import TechBackground from '../../components/TechBackground'
import { 
  SectionContainer, 
  GlowText, 
  GradientText,
  StatusIndicator,
  CyberDivider,
  FadeInUp,
  GlitchText,
  FlickerIn,
  COLORS,
} from '../../components/CyberComponents'
import mailTo, { config } from '../../utils/mail'
import contactIcons from '../Contact/ContactIcons'

/**
 * Home Page - Vibrant Cyberpunk Hero Section
 * 
 * Features:
 * - Glitch text effects on hover
 * - Flicker entry animations
 * - Floating scroll indicator
 * - Neon color scheme
 * - Clean layout without sidebar widgets
 */

// Floating animation for scroll indicator
const floatAnimation = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

function Home() {
  const contacts = contactIcons({ size: "24" })

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          {/* Hero Title with Glitch Effect */}
          <FlickerIn delay={0.2}>
            <Stack spacing={2} alignItems="center">
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 1, sm: 3 }} 
                justifyContent="center" 
                alignItems="center"
              >
                <GlowText 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    fontFamily: 'BlenderPro-Bold, sans-serif',
                  }}
                >
                  JONATHAN
                </GlowText>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <GlowText 
                    variant="h1"
                    sx={{ 
                      fontWeight: 900,
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                      fontFamily: 'BlenderPro-Heavy, sans-serif',
                    }}
                  >
                    WILDEMER
                  </GlowText>
                </motion.div>
              </Stack>

              <FadeInUp delay={0.5}>
                <Typography
                  variant="h4"
                  sx={{
                    color: COLORS.primary,
                    fontFamily: 'BlenderPro-Medium',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    mt: 2,
                    textAlign: 'center',
                    fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.4rem' },
                    textShadow: `0 0 20px ${COLORS.primary}40`,
                  }}
                >
                  Desarrollador Fullstack Web & Mobile
                </Typography>
              </FadeInUp>

              {/* Decorative neon line */}
              <FadeInUp delay={0.6}>
                <Box
                  sx={{
                    width: '250px',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${COLORS.primary}, transparent)`,
                    mt: 3,
                  }}
                />
              </FadeInUp>
            </Stack>
          </FlickerIn>

          {/* Status indicators */}
          <FadeInUp delay={0.7}>
            <Stack 
              direction="row" 
              spacing={4} 
              alignItems="center" 
              sx={{ mt: 4 }}
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StatusIndicator active={true} color={COLORS.neonGreen} />
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: COLORS.neonGreen, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.15em',
                    fontFamily: 'BlenderPro-Medium',
                    textShadow: `0 0 10px ${COLORS.neonGreen}50`,
                  }}
                >
                  EN LÍNEA
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StatusIndicator active={true} color={COLORS.primary} />
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: COLORS.primary, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.15em',
                    fontFamily: 'BlenderPro-Medium',
                    textShadow: `0 0 10px ${COLORS.primary}50`,
                  }}
                >
                  DISPONIBLE PARA CONTRATAR
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
            bottom: "100px",
            left: { xs: "20px", md: "40px" },
            right: { xs: "20px", md: "40px" },
            zIndex: 5,
            display: { xs: 'none', md: 'flex' }
          }}
        >
          {/* Left panel - Email */}
          <FadeInUp delay={0.8}>
            <Stack alignItems="center" spacing={2}>
              <Link
                href={mailTo}
                target="_blank"
                className="verticalText"
                sx={{
                  textDecoration: "none",
                  color: COLORS.primary,
                  fontSize: '0.8rem',
                  fontFamily: 'BlenderPro-Medium',
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: COLORS.neonCyan,
                    opacity: 1,
                    textShadow: `0 0 10px ${COLORS.primary}`,
                  }
                }}
              >
                {config?.to}
              </Link>
              <Divider
                orientation="vertical"
                sx={{
                  height: "60px",
                  borderColor: `${COLORS.primary}40`,
                  borderWidth: "1px",
                }}
              />
            </Stack>
          </FadeInUp>

          {/* Right panel - Social links */}
          <FadeInUp delay={0.9}>
            <Stack alignItems="center" spacing={2}>
              <Stack spacing={1.5}>
                {contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Link
                      href={contact?.url}
                      target="_blank"
                      aria-label={contact?.label || 'Social link'}
                      sx={{
                        textDecoration: "none",
                        color: COLORS.primary,
                        opacity: 0.7,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          color: COLORS.neonCyan,
                          opacity: 1,
                        }
                      }}
                    >
                      {contact?.icon}
                    </Link>
                  </motion.div>
                ))}
              </Stack>

              <Divider
                orientation="vertical"
                sx={{
                  height: "60px",
                  borderColor: `${COLORS.primary}40`,
                  borderWidth: "1px",
                }}
              />
            </Stack>
          </FadeInUp>
        </Stack>

        {/* Scroll Down Indicator */}
        <motion.div
          variants={floatAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            zIndex: 10,
          }}
          onClick={scrollToNext}
        >
          <Typography
            variant="caption"
            sx={{
              color: COLORS.primary,
              fontFamily: 'BlenderPro-Medium, monospace',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontSize: '0.7rem',
              opacity: 0.8,
            }}
          >
            Desplázate
          </Typography>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown 
              size={28} 
              color={COLORS.primary}
              style={{
                filter: `drop-shadow(0 0 10px ${COLORS.primary})`,
              }}
            />
          </motion.div>
        </motion.div>
      </SectionContainer>
    </Stack>
  )
}

export default Home
