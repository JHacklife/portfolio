import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  padding: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '2%',
    right: '2%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, #00d4ff 50%, transparent 100%)',
    opacity: 0.6
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '2%',
    right: '2%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, #00d4ff 50%, transparent 100%)',
    opacity: 0.6
  }
}));

const TechFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: 'rgba(0, 212, 255, 0.02)',
  border: '1px solid rgba(0, 212, 255, 0.2)',
  borderRadius: '8px',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 212, 255, 0.05)',
    border: '1px solid rgba(0, 212, 255, 0.4)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    background: 'linear-gradient(45deg, #00d4ff, #ff0066, #00d4ff)',
    borderRadius: '8px',
    zIndex: -1,
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  '&:hover::before': {
    opacity: 0.3
  }
}));

const GlowText = styled(Typography)(({ theme, glowcolor = '#00d4ff' }) => ({
  position: 'relative',
  color: '#ffffff',
  textShadow: `0 0 10px ${glowcolor}, 0 0 20px ${glowcolor}, 0 0 30px ${glowcolor}`,
  animation: 'textGlow 2s ease-in-out infinite alternate',
  '@keyframes textGlow': {
    '0%': {
      textShadow: `0 0 10px ${glowcolor}, 0 0 20px ${glowcolor}, 0 0 30px ${glowcolor}`
    },
    '100%': {
      textShadow: `0 0 20px ${glowcolor}, 0 0 30px ${glowcolor}, 0 0 40px ${glowcolor}`
    }
  }
}));

const CyberDivider = styled(Divider)(({ theme }) => ({
  background: 'linear-gradient(90deg, transparent 0%, #00d4ff 50%, transparent 100%)',
  height: '2px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '8px',
    height: '8px',
    background: '#00d4ff',
    borderRadius: '50%',
    boxShadow: '0 0 10px #00d4ff'
  }
}));

const StatusBar = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '3px',
  background: 'linear-gradient(90deg, #ff0066, #00d4ff, #ff0066)',
  zIndex: 1000,
  animation: 'statusPulse 3s ease-in-out infinite',
  '@keyframes statusPulse': {
    '0%, 100%': { opacity: 0.6 },
    '50%': { opacity: 1 }
  }
}));

const TechGrid = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(3),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    opacity: 0.3,
    pointerEvents: 'none'
  }
}));

const InfoPanel = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: theme.spacing(2),
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(0, 0, 0, 0.8)',
  border: '1px solid rgba(0, 212, 255, 0.3)',
  borderRadius: '8px',
  padding: theme.spacing(2),
  backdropFilter: 'blur(10px)',
  minWidth: '200px',
  zIndex: 100,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export {
  SectionContainer,
  TechFrame,
  GlowText,
  CyberDivider,
  StatusBar,
  TechGrid,
  InfoPanel
};
