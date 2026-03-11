import React from 'react';
import { Box, Typography, Stack, Divider, Button, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Atropos from 'atropos/react';
import 'atropos/css';

/**
 * Vibrant Cyberpunk Component System
 * 
 * Features:
 * - Framer Motion animations with glitch effects
 * - Atropos 3D tilt for image cards
 * - Neon color palette (#00ff41, #ff003c, #0bc5ea)
 * - Scanline and flicker effects
 */

// ============================================
// COLOR CONSTANTS
// ============================================

const COLORS = {
  primary: '#0bc5ea',
  primaryLight: '#4dd8f5',
  neonGreen: '#00ff41',
  neonRed: '#ff003c',
  neonCyan: '#00ffff',
  dark: '#0a0a0f',
  darkAccent: '#0d0d14',
  darkElevated: '#14141f',
  gray: '#1a1a28',
  white: '#f0f4f8',
  whiteMuted: '#a0a8b8',
};

// ============================================
// FRAMER MOTION VARIANTS
// ============================================

export const glitchVariants = {
  initial: { 
    textShadow: `0 0 10px ${COLORS.primary}` 
  },
  hover: {
    textShadow: [
      `0 0 10px ${COLORS.primary}`,
      `-2px 0 ${COLORS.neonRed}, 2px 0 ${COLORS.neonGreen}`,
      `2px 0 ${COLORS.neonGreen}, -2px 0 ${COLORS.neonRed}`,
      `0 0 15px ${COLORS.primary}`,
    ],
    transition: { duration: 0.3, times: [0, 0.33, 0.66, 1] }
  }
};

export const flickerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 0.2, 1, 0.5, 1],
    transition: { duration: 0.6, times: [0, 0.1, 0.15, 0.2, 0.25, 0.3] }
  }
};

export const scanlineVariants = {
  initial: { y: '-100%' },
  animate: { 
    y: '100vh',
    transition: { duration: 3, repeat: Infinity, ease: 'linear' }
  }
};

export const floatVariants = {
  animate: {
    y: [0, 10, 0],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  }
};

export const fadeInUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// ============================================
// MUI KEYFRAMES
// ============================================

const subtlePulse = keyframes`
  0%, 100% {
    opacity: 0.7;
    box-shadow: 0 0 5px currentColor;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 15px currentColor, 0 0 25px currentColor;
  }
`;

const neonGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px ${COLORS.primary}, 0 0 10px ${COLORS.primary};
  }
  50% {
    box-shadow: 0 0 15px ${COLORS.primary}, 0 0 30px ${COLORS.primary}, 0 0 45px ${COLORS.primary};
  }
`;

// ============================================
// LAYOUT COMPONENTS
// ============================================

/**
 * SectionContainer - Main section wrapper with neon border decorations
 */
const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  padding: theme.spacing(4),
  paddingTop: theme.spacing(10),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '2%',
    right: '2%',
    height: '1px',
    background: `linear-gradient(90deg, transparent 0%, ${COLORS.primary} 50%, transparent 100%)`,
    opacity: 0.5
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '2%',
    right: '2%',
    height: '1px',
    background: `linear-gradient(90deg, transparent 0%, ${COLORS.primary} 50%, transparent 100%)`,
    opacity: 0.5
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(8),
  }
}));

/**
 * TechFrame - Card container with neon glass effect
 */
const TechFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `rgba(13, 13, 20, 0.9)`,
  border: `1px solid rgba(11, 197, 234, 0.3)`,
  borderRadius: '4px',
  backdropFilter: 'blur(12px)',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: `rgba(11, 197, 234, 0.6)`,
    transform: 'translateY(-4px)',
    boxShadow: `0 0 30px rgba(11, 197, 234, 0.2), 0 10px 40px rgba(0, 0, 0, 0.4)`
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  }
}));

/**
 * TechGrid - Grid layout for cards
 */
const TechGrid = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
  }
}));

// ============================================
// TYPOGRAPHY COMPONENTS
// ============================================

/**
 * GlowText - Typography with neon glow (use with motion for glitch)
 */
const GlowText = styled(Typography)(({ glowcolor = COLORS.primary }) => ({
  position: 'relative',
  color: COLORS.white,
  textShadow: `0 0 10px ${glowcolor}, 0 0 20px ${glowcolor}`,
  transition: 'text-shadow 0.3s ease',
}));

/**
 * GradientText - Simple text with cyan color (no gradient)
 */
const GradientText = styled(Typography)(() => ({
  color: COLORS.primary,
  textShadow: `0 0 10px ${COLORS.primary}, 0 0 20px ${COLORS.primary}`,
}));

/**
 * AccentText - Primary neon color text
 */
const AccentText = styled(Typography)(() => ({
  color: COLORS.primary,
  letterSpacing: '0.05em',
}));

// ============================================
// DECORATIVE COMPONENTS
// ============================================

/**
 * CyberDivider - Simple cyan divider
 */
const CyberDivider = styled(Divider)(({ theme, showdot = 'false' }) => ({
  background: `linear-gradient(90deg, transparent 0%, ${COLORS.primary} 50%, transparent 100%)`,
  height: '1px',
  border: 'none',
  position: 'relative',
  margin: theme.spacing(3, 0),
  opacity: 0.6,
  ...(showdot === 'true' && {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '8px',
      height: '8px',
      background: COLORS.primary,
      borderRadius: '50%',
      boxShadow: `0 0 10px ${COLORS.primary}, 0 0 20px ${COLORS.primary}`
    }
  })
}));

/**
 * StatusIndicator - Neon status dot
 */
const StatusIndicator = styled(Box)(({ active = true, color }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: active ? (color || COLORS.neonGreen) : '#64748b',
  boxShadow: active ? `0 0 10px ${color || COLORS.neonGreen}, 0 0 20px ${color || COLORS.neonGreen}` : 'none',
  animation: active ? `${subtlePulse} 2s ease-in-out infinite` : 'none',
  flexShrink: 0,
}));

/**
 * ScanlineOverlay - Animated scanline effect
 */
const ScanlineOverlay = () => (
  <motion.div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${COLORS.primary}, transparent)`,
      zIndex: 100,
      pointerEvents: 'none',
    }}
    variants={scanlineVariants}
    initial="initial"
    animate="animate"
  />
);

// ============================================
// INTERACTIVE COMPONENTS
// ============================================

/**
 * CyberButton - High-tech button with neon effects
 */
const CyberButton = styled(Button)(({ theme, variant = 'outlined', neoncolor = COLORS.primary }) => ({
  color: variant === 'contained' ? COLORS.dark : neoncolor,
  backgroundColor: variant === 'contained' ? neoncolor : 'transparent',
  border: variant === 'contained' ? 'none' : `1px solid ${neoncolor}`,
  borderRadius: '2px',
  padding: theme.spacing(1.5, 3),
  fontSize: '0.9rem',
  fontFamily: 'BlenderPro-Medium, monospace',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  // Clip-path for high-tech corners
  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
    transition: 'left 0.5s ease',
  },
  '&:hover': {
    backgroundColor: variant === 'contained' ? neoncolor : `rgba(11, 197, 234, 0.1)`,
    boxShadow: `0 0 20px ${neoncolor}40, 0 0 40px ${neoncolor}20`,
    transform: 'translateY(-2px)',
    '&::before': {
      left: '100%',
    }
  },
  '&:active': {
    transform: 'translateY(0)',
  }
}));

/**
 * CyberChip - Neon chip/tag
 */
const CyberChip = styled(Chip)(({ neoncolor = COLORS.primary }) => ({
  backgroundColor: `${neoncolor}15`,
  border: `1px solid ${neoncolor}40`,
  color: neoncolor,
  fontFamily: 'BlenderPro-Medium, monospace',
  fontSize: '0.75rem',
  letterSpacing: '0.04em',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: `${neoncolor}25`,
    borderColor: `${neoncolor}70`,
    boxShadow: `0 0 15px ${neoncolor}30`,
  }
}));

// ============================================
// ATROPOS 3D CARD WRAPPER
// ============================================

/**
 * Atropos3DCard - Wrapper for 3D tilt effect on image cards
 */
const Atropos3DCard = ({ children, className, ...props }) => (
  <Atropos
    className={className}
    activeOffset={40}
    shadow={false}
    highlight={false}
    rotateXMax={15}
    rotateYMax={15}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    {...props}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </Box>
  </Atropos>
);

// ============================================
// CARD COMPONENTS
// ============================================

/**
 * ProjectCard - Card for showcasing projects with neon accents
 */
const ProjectCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(180deg, rgba(11, 197, 234, 0.08) 0%, ${COLORS.darkAccent} 100%)`,
  backgroundColor: COLORS.darkAccent,
  border: `1px solid rgba(11, 197, 234, 0.2)`,
  borderRadius: '4px',
  padding: theme.spacing(3),
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: `rgba(11, 197, 234, 0.5)`,
    transform: 'translateY(-5px)',
    boxShadow: `0 0 30px rgba(11, 197, 234, 0.15), 0 15px 50px rgba(0, 0, 0, 0.5)`,
    '&::before': {
      opacity: 1,
    },
    '&::after': {
      opacity: 0.5,
    }
  },
  // Top neon line
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: '2px',
    background: `linear-gradient(90deg, transparent, ${COLORS.primary}, transparent)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  // Corner accents
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '30px',
    height: '30px',
    borderTop: `2px solid ${COLORS.primary}`,
    borderRight: `2px solid ${COLORS.primary}`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  }
}));

/**
 * SkillCard - Card for displaying skills
 */
const SkillCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: `rgba(13, 13, 20, 0.8)`,
  border: `1px solid rgba(11, 197, 234, 0.15)`,
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: `rgba(11, 197, 234, 0.4)`,
    background: `rgba(11, 197, 234, 0.08)`,
    boxShadow: `0 0 20px rgba(11, 197, 234, 0.1)`,
  }
}));

// ============================================
// ANIMATED WRAPPER COMPONENTS
// ============================================

/**
 * FadeInUp - Wrapper for fade-in-up animation
 */
const FadeInUp = ({ children, delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * GlitchText - Text with subtle glow (no glitch effect)
 */
const GlitchText = ({ children, variant = 'h1', ...props }) => (
  <GlowText variant={variant} {...props}>
    {children}
  </GlowText>
);

/**
 * FlickerIn - Element that flickers in on mount
 */
const FlickerIn = ({ children, delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0, 1, 0.2, 1, 0.5, 1],
    }}
    transition={{ 
      duration: 0.6, 
      delay,
      times: [0, 0.1, 0.15, 0.2, 0.25, 0.3] 
    }}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * ScrollIndicator - Floating scroll down indicator
 */
const ScrollIndicator = ({ onClick }) => (
  <motion.div
    variants={floatVariants}
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
    onClick={onClick}
  >
    <Typography
      variant="caption"
      sx={{
        color: COLORS.primary,
        fontFamily: 'BlenderPro-Medium, monospace',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        fontSize: '0.7rem',
      }}
    >
      Scroll Down
    </Typography>
    <Box
      sx={{
        width: '24px',
        height: '40px',
        border: `2px solid ${COLORS.primary}`,
        borderRadius: '12px',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '4px',
          height: '8px',
          backgroundColor: COLORS.primary,
          borderRadius: '2px',
          animation: 'scrollBounce 1.5s infinite',
        },
        '@keyframes scrollBounce': {
          '0%, 100%': { top: '8px', opacity: 1 },
          '50%': { top: '20px', opacity: 0.5 },
        }
      }}
    />
  </motion.div>
);

// ============================================
// EXPORTS
// ============================================

export {
  // Colors
  COLORS,
  
  // Layout
  SectionContainer,
  TechFrame,
  TechGrid,
  
  // Typography
  GlowText,
  GradientText,
  AccentText,
  
  // Decorative
  CyberDivider,
  StatusIndicator,
  ScanlineOverlay,
  
  // Interactive
  CyberButton,
  CyberChip,
  
  // 3D Card
  Atropos3DCard,
  
  // Cards
  ProjectCard,
  SkillCard,
  
  // Animation
  FadeInUp,
  GlitchText,
  FlickerIn,
  ScrollIndicator,
};
