import { Box, Divider, Link, Stack, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Navbar from '../../components/Navbar'
import TechBackground from '../../components/TechBackground'
import {
  SectionContainer,
  StatusIndicator,
  FadeInUp,
  FlickerIn,
  COLORS,
} from '../../components/CyberComponents'
import mailTo, { config } from '../../utils/mail'
import contactIcons from '../Contact/ContactIcons'

// ─── WhatsApp link ────────────────────────────────────────────────────────────
const WA_NUMBER = '541165553533' // country code 54 (AR) + number
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hola%20Jonathan%2C%20me%20interesa%20contratarte%20para%20un%20proyecto`

// ─── Glitch swap: WILDEMER → HACKLIFE ────────────────────────────────────────
function GlitchSwap() {
  const [hovered, setHovered] = useState(false)

  const baseStyle = {
    fontFamily: 'BlenderPro-Heavy, sans-serif',
    fontWeight: 900,
    fontSize: 'inherit',
    lineHeight: 'inherit',
    userSelect: 'none',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
  }

  // Glitch keyframes injected inline via style tag
  return (
    <>
      <style>{`
        @keyframes glitchSlice1 {
          0%   { clip-path: inset(0% 0 80% 0); transform: translate(-4px, 0);  }
          20%  { clip-path: inset(20% 0 60% 0); transform: translate(4px, 2px); }
          40%  { clip-path: inset(50% 0 30% 0); transform: translate(-6px, -2px); }
          60%  { clip-path: inset(70% 0 10% 0); transform: translate(3px, 1px); }
          80%  { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 3px); }
          100% { clip-path: inset(0% 0 80% 0); transform: translate(0); }
        }
        @keyframes glitchSlice2 {
          0%   { clip-path: inset(60% 0 5% 0);  transform: translate(4px, 0); }
          25%  { clip-path: inset(30% 0 40% 0); transform: translate(-4px, -1px); }
          50%  { clip-path: inset(5% 0 70% 0);  transform: translate(6px, 2px); }
          75%  { clip-path: inset(80% 0 5% 0);  transform: translate(-3px, -2px); }
          100% { clip-path: inset(60% 0 5% 0);  transform: translate(0); }
        }
        @keyframes rgbFlicker {
          0%,100% { text-shadow: -3px 0 #ff003c, 3px 0 #00ff41, 0 0 20px #0bc5ea; opacity: 1; }
          25%      { text-shadow: 3px 0 #ff003c, -3px 0 #00ff41, 0 0 30px #0bc5ea; opacity: 0.85; }
          50%      { text-shadow: -2px 0 #00ffff, 2px 0 #ff003c, 0 0 25px #00ff41; opacity: 1; }
          75%      { text-shadow: 2px 0 #00ff41, -2px 0 #00ffff, 0 0 20px #ff003c; opacity: 0.9; }
        }
        .glitch-wrap { position: relative; display: inline-block; }
        .glitch-wrap .glitch-clone {
          position: absolute;
          top: 0; left: 0;
          pointer-events: none;
          width: 100%;
        }
        .glitch-wrap:hover .glitch-clone:nth-child(2) {
          animation: glitchSlice1 0.15s steps(1) infinite;
          color: #ff003c;
        }
        .glitch-wrap:hover .glitch-clone:nth-child(3) {
          animation: glitchSlice2 0.18s steps(1) infinite;
          color: #00ff41;
        }
        .glitch-wrap:hover .glitch-main {
          animation: rgbFlicker 0.2s steps(1) infinite;
        }
      `}</style>

      <Box
        className="glitch-wrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{ position: 'relative', display: 'inline-block' }}
      >
        {/* Main visible text */}
        <AnimatePresence mode="wait">
          {!hovered ? (
            <motion.span
              key="wildemer"
              className="glitch-main"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              transition={{ duration: 0.18 }}
              style={{
                ...baseStyle,
                color: COLORS.white,
                textShadow: `0 0 14px ${COLORS.primary}80`,
                fontSize: 'inherit',
              }}
            >
              WILDEMER
            </motion.span>
          ) : (
            <motion.span
              key="hacklife"
              className="glitch-main"
              initial={{ opacity: 0, y: 10, skewX: -10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0,  skewX: 0,   filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, skewX: 10, filter: 'blur(6px)' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                ...baseStyle,
                color: COLORS.neonCyan,
                textShadow: `
                  0 0 8px ${COLORS.neonCyan},
                  0 0 20px ${COLORS.neonCyan},
                  0 0 40px ${COLORS.primary}
                `,
                fontSize: 'inherit',
              }}
            >
              HACKLIFE
            </motion.span>
          )}
        </AnimatePresence>

        {/* Glitch clone layers — only shown while hovered via CSS */}
        <span className="glitch-clone" aria-hidden="true" style={{ ...baseStyle, fontSize: 'inherit', color: 'transparent' }}>
          {hovered ? 'HACKLIFE' : 'WILDEMER'}
        </span>
        <span className="glitch-clone" aria-hidden="true" style={{ ...baseStyle, fontSize: 'inherit', color: 'transparent' }}>
          {hovered ? 'HACKLIFE' : 'WILDEMER'}
        </span>
      </Box>
    </>
  )
}

// ─── WhatsApp hire button ─────────────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <Tooltip title="Abrir WhatsApp" placement="top" arrow>
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            px: { xs: 2.5, md: 3 },
            py: { xs: 1, md: 1.25 },
            border: `1.5px solid ${COLORS.neonGreen}`,
            borderRadius: '3px',
            background: `rgba(0, 255, 65, 0.06)`,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: `0 0 12px rgba(0, 255, 65, 0.2)`,
            '&:hover': {
              background: `rgba(0, 255, 65, 0.14)`,
              boxShadow: `0 0 24px rgba(0, 255, 65, 0.4), inset 0 0 12px rgba(0, 255, 65, 0.06)`,
            },
          }}
        >
          {/* WhatsApp icon SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill={COLORS.neonGreen} xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>

          <Stack direction="row" alignItems="center" spacing={1}>
            <StatusIndicator active={true} color={COLORS.neonGreen} />
            <Typography
              variant="caption"
              sx={{
                color: COLORS.neonGreen,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontFamily: 'BlenderPro-Medium',
                textShadow: `0 0 10px ${COLORS.neonGreen}80`,
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
              DISPONIBLE PARA CONTRATAR
            </Typography>
          </Stack>
        </Box>
      </motion.a>
    </Tooltip>
  )
}

// ─── Float animation ──────────────────────────────────────────────────────────
const floatAnimation = {
  animate: {
    y: [0, 10, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function Home() {
  const contacts = contactIcons({ size: '24' })

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <TechBackground />
      <Navbar />
      <Box id="top" />

      <SectionContainer
        className="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Main Content ── */}
        <Stack spacing={4} alignItems="center" sx={{ zIndex: 10, maxWidth: '960px', px: { xs: 2, md: 4 } }}>

          {/* Hero name block */}
          <FlickerIn delay={0.2}>
            <Stack spacing={2} alignItems="center">
              {/* Name row — both words share the same Box so baseline is identical */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: '0.1em', sm: '0.3em' },
                  lineHeight: 1,
                  fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
                }}
              >
                {/* First name */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  sx={{
                    fontSize: 'inherit',
                    lineHeight: 1,
                    fontFamily: 'BlenderPro-Bold, sans-serif',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    color: COLORS.white,
                    textShadow: `0 0 14px ${COLORS.primary}60`,
                    userSelect: 'none',
                  }}
                >
                  JONATHAN
                </Box>

                {/* Last name — glitch swap */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  sx={{ fontSize: 'inherit', lineHeight: 1 }}
                >
                  <GlitchSwap />
                </Box>
              </Box>

              {/* Sub-title */}
              <FadeInUp delay={0.5}>
                <Typography
                  variant="h4"
                  sx={{
                    color: COLORS.primary,
                    fontFamily: 'BlenderPro-Medium',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    mt: 1,
                    textAlign: 'center',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    textShadow: `0 0 20px ${COLORS.primary}40`,
                  }}
                >
                  Desarrollador Fullstack Web &amp; Mobile
                </Typography>
              </FadeInUp>

              {/* Neon divider */}
              <FadeInUp delay={0.6}>
                <Box
                  sx={{
                    width: { xs: '180px', md: '280px' },
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${COLORS.primary}, transparent)`,
                    mt: 2,
                  }}
                />
              </FadeInUp>
            </Stack>
          </FlickerIn>

          {/* Status row */}
          <FadeInUp delay={0.7}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 4 }}
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              {/* Online indicator */}
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

              {/* WhatsApp CTA button */}
              <WhatsAppButton />
            </Stack>
          </FadeInUp>
        </Stack>

        {/* ── Side panels – Desktop only ── */}
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: 'absolute',
            bottom: '100px',
            left: { xs: '20px', md: '40px' },
            right: { xs: '20px', md: '40px' },
            zIndex: 5,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {/* Left – Email */}
          <FadeInUp delay={0.8}>
            <Stack alignItems="center" spacing={2}>
              <Link
                href={mailTo}
                target="_blank"
                className="verticalText"
                sx={{
                  textDecoration: 'none',
                  color: COLORS.primary,
                  fontSize: '0.8rem',
                  fontFamily: 'BlenderPro-Medium',
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': { color: COLORS.neonCyan, opacity: 1, textShadow: `0 0 10px ${COLORS.primary}` },
                }}
              >
                {config?.to}
              </Link>
              <Divider
                orientation="vertical"
                sx={{ height: '60px', borderColor: `${COLORS.primary}40`, borderWidth: '1px' }}
              />
            </Stack>
          </FadeInUp>

          {/* Right – Social icons */}
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
                        textDecoration: 'none',
                        color: COLORS.primary,
                        opacity: 0.7,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': { color: COLORS.neonCyan, opacity: 1 },
                      }}
                    >
                      {contact?.icon}
                    </Link>
                  </motion.div>
                ))}
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ height: '60px', borderColor: `${COLORS.primary}40`, borderWidth: '1px' }}
              />
            </Stack>
          </FadeInUp>
        </Stack>

        {/* ── Scroll indicator ── */}
        <motion.div
          variants={floatAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
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
              opacity: 0.8,
            }}
          >
            Desplázate
          </Typography>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} color={COLORS.primary} style={{ filter: `drop-shadow(0 0 10px ${COLORS.primary})` }} />
          </motion.div>
        </motion.div>
      </SectionContainer>
    </Stack>
  )
}

export default Home
