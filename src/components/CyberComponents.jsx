import React from 'react';
import { Box, Typography, Stack, Divider, Button, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

/**
 * Professional Cyberpunk Component System
 * 
 * Design Principles:
 * - Professional and corporate, not gamey
 * - Readability first - no effect should make reading difficult
 * - Subtle effects: 1px borders (0.2-0.3 opacity), soft glow on hover
 * - Smooth transitions: 0.3s ease for all state changes
 * - Elegant hover states: translateY -2px to -5px max, brightness increase
 * - Entry animations: fade-in-up with 0.4-0.6s duration, only on load
 */

// ============================================
// ANIMATIONS - Subtle and professional
// ============================================

const fadeInUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const subtlePulse = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
`;

// ============================================
// LAYOUT COMPONENTS
// ============================================

/**
 * SectionContainer - Main section wrapper with subtle border decorations
 */
const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  padding: theme.spacing(4),
  paddingTop: theme.spacing(10),
  // Subtle top border
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '5%',
    right: '5%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, #8DBAF5 50%, transparent 100%)',
    opacity: 0.2
  },
  // Subtle bottom border
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '5%',
    right: '5%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, #8DBAF5 50%, transparent 100%)',
    opacity: 0.2
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(8),
  }
}));

/**
 * TechFrame - Card container with professional glass effect
 */
const TechFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'rgba(18, 18, 26, 0.8)',
  border: '1px solid rgba(141, 186, 245, 0.2)',
  borderRadius: '8px',
  backdropFilter: 'blur(12px)',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  // Hover state - subtle elevation and border brightening
  '&:hover': {
    borderColor: 'rgba(141, 186, 245, 0.4)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 32px rgba(141, 186, 245, 0.1)'
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  }
}));

/**
 * TechGrid - Grid layout with subtle dot pattern
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

/**
 * InfoPanel - Fixed side panel for additional info (desktop only)
 */
const InfoPanel = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(3),
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(10, 10, 15, 0.9)',
  border: '1px solid rgba(141, 186, 245, 0.2)',
  borderRadius: '8px',
  padding: theme.spacing(2.5),
  backdropFilter: 'blur(12px)',
  minWidth: '180px',
  zIndex: 100,
  // Subtle hover glow
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(141, 186, 245, 0.35)',
    boxShadow: '0 4px 24px rgba(141, 186, 245, 0.08)'
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));

// ============================================
// TYPOGRAPHY COMPONENTS
// ============================================

/**
 * GlowText - Typography with subtle text shadow (for headings only)
 */
const GlowText = styled(Typography)(({ theme, glowcolor = '#8DBAF5' }) => ({
  position: 'relative',
  color: '#f0f4f8',
  textShadow: `0 0 8px rgba(141, 186, 245, 0.4)`,
  transition: 'text-shadow 0.3s ease',
  '&:hover': {
    textShadow: `0 0 12px rgba(141, 186, 245, 0.5)`
  }
}));

/**
 * GradientText - Elegant gradient text for special emphasis
 */
const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #B5D4FF 0%, #8DBAF5 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

/**
 * AccentText - Primary color text for labels and emphasis
 */
const AccentText = styled(Typography)(({ theme }) => ({
  color: '#8DBAF5',
  letterSpacing: '0.05em',
}));

// ============================================
// DECORATIVE COMPONENTS
// ============================================

/**
 * CyberDivider - Gradient divider with optional center dot
 */
const CyberDivider = styled(Divider)(({ theme, showdot = 'false' }) => ({
  background: 'linear-gradient(90deg, transparent 0%, rgba(141, 186, 245, 0.4) 50%, transparent 100%)',
  height: '1px',
  border: 'none',
  position: 'relative',
  margin: theme.spacing(3, 0),
  ...(showdot === 'true' && {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '6px',
      height: '6px',
      background: '#8DBAF5',
      borderRadius: '50%',
      boxShadow: '0 0 8px rgba(141, 186, 245, 0.5)'
    }
  })
}));

/**
 * StatusBar - Top progress/status bar
 */
const StatusBar = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background: 'linear-gradient(90deg, transparent 0%, #8DBAF5 50%, transparent 100%)',
  zIndex: 1100,
  opacity: 0.6,
}));

/**
 * StatusIndicator - Small status dot (online/offline)
 */
const StatusIndicator = styled(Box)(({ active = true }) => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: active ? '#4ade80' : '#64748b',
  boxShadow: active ? '0 0 8px #4ade80' : 'none',
  animation: active ? `${subtlePulse} 2s ease-in-out infinite` : 'none',
  flexShrink: 0,
}));

// ============================================
// INTERACTIVE COMPONENTS
// ============================================

/**
 * CyberButton - Professional button with subtle hover effects
 */
const CyberButton = styled(Button)(({ theme, variant = 'outlined' }) => ({
  color: variant === 'contained' ? '#0a0a0f' : '#8DBAF5',
  backgroundColor: variant === 'contained' ? '#8DBAF5' : 'transparent',
  border: variant === 'contained' ? 'none' : '1px solid rgba(141, 186, 245, 0.3)',
  borderRadius: '6px',
  padding: theme.spacing(1, 2.5),
  fontSize: '0.85rem',
  fontFamily: 'BlenderPro-Medium',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  transition: 'all 0.3s ease',
  // Hover states
  '&:hover': {
    backgroundColor: variant === 'contained' ? '#B5D4FF' : 'rgba(141, 186, 245, 0.08)',
    borderColor: variant === 'contained' ? 'transparent' : 'rgba(141, 186, 245, 0.5)',
    transform: 'translateY(-2px)',
    boxShadow: variant === 'contained' 
      ? '0 4px 16px rgba(141, 186, 245, 0.3)' 
      : '0 4px 16px rgba(141, 186, 245, 0.1)',
  },
  '&:active': {
    transform: 'translateY(0)',
  }
}));

/**
 * CyberChip - Professional chip/tag component
 */
const CyberChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(141, 186, 245, 0.1)',
  border: '1px solid rgba(141, 186, 245, 0.25)',
  color: '#8DBAF5',
  fontFamily: 'BlenderPro-Medium',
  fontSize: '0.75rem',
  letterSpacing: '0.04em',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(141, 186, 245, 0.15)',
    borderColor: 'rgba(141, 186, 245, 0.4)',
  }
}));

/**
 * CyberLink - Interactive link with hover effect
 */
const CyberLink = styled('a')(({ theme }) => ({
  color: '#8DBAF5',
  textDecoration: 'none',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -2,
    left: 0,
    width: '0%',
    height: '1px',
    backgroundColor: '#8DBAF5',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: '#B5D4FF',
    '&::after': {
      width: '100%',
    }
  }
}));

// ============================================
// CARD COMPONENTS
// ============================================

/**
 * ProjectCard - Card for showcasing projects
 */
const ProjectCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(180deg, rgba(141, 186, 245, 0.03) 0%, rgba(10, 10, 15, 0) 100%)',
  backgroundColor: '#12121a',
  border: '1px solid rgba(141, 186, 245, 0.15)',
  borderRadius: '8px',
  padding: theme.spacing(3),
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(141, 186, 245, 0.35)',
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(141, 186, 245, 0.12)',
    // Subtle top highlight on hover
    '&::before': {
      opacity: 1,
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, #8DBAF5 50%, transparent 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  }
}));

/**
 * SkillCard - Card for displaying skills/technologies
 */
const SkillCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: 'rgba(18, 18, 26, 0.6)',
  border: '1px solid rgba(141, 186, 245, 0.1)',
  borderRadius: '6px',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(141, 186, 245, 0.3)',
    background: 'rgba(141, 186, 245, 0.05)',
  }
}));

// ============================================
// ANIMATED WRAPPER COMPONENTS
// ============================================

/**
 * FadeInUp - Wrapper for fade-in-up animation on mount
 */
const FadeInUp = styled(Box)(({ delay = 0 }) => ({
  animation: `${fadeInUp} 0.5s ease-out both`,
  animationDelay: `${delay}s`,
}));

/**
 * AnimatedSection - Section with staggered children animation
 */
const AnimatedSection = ({ children, staggerDelay = 0.1, ...props }) => {
  return (
    <Box {...props}>
      {React.Children.map(children, (child, index) => (
        <FadeInUp delay={index * staggerDelay}>
          {child}
        </FadeInUp>
      ))}
    </Box>
  );
};

// ============================================
// EXPORTS
// ============================================

export {
  // Layout
  SectionContainer,
  TechFrame,
  TechGrid,
  InfoPanel,
  
  // Typography
  GlowText,
  GradientText,
  AccentText,
  
  // Decorative
  CyberDivider,
  StatusBar,
  StatusIndicator,
  
  // Interactive
  CyberButton,
  CyberChip,
  CyberLink,
  
  // Cards
  ProjectCard,
  SkillCard,
  
  // Animation
  FadeInUp,
  AnimatedSection,
};
