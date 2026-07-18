import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

/**
 * Professional Cyberpunk Status Bar
 * 
 * Features:
 * - Subtle glass effect
 * - Elegant status indicators
 * - Smooth animations (respects reduced motion)
 * - Clean, readable typography
 */

const subtlePulse = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

const StatusBarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '36px',
  background: 'rgba(10, 10, 15, 0.9)',
  backdropFilter: 'blur(12px)',
  borderTop: '1px solid rgba(141, 186, 245, 0.12)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px',
  fontFamily: 'BlenderPro-Medium, monospace',
  // Subtle top accent
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(141, 186, 245, 0.3) 50%, transparent 100%)',
  },
  [theme.breakpoints.down('md')]: {
    height: '32px',
    padding: '0 16px',
  }
}));

const StatusItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  color: '#a0b0c0',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}));

const StatusIndicator = styled(Box)(({ active }) => ({
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  backgroundColor: active ? '#4ade80' : '#64748b',
  boxShadow: active ? '0 0 6px #4ade80' : 'none',
  animation: active ? `${subtlePulse} 2s ease-in-out infinite` : 'none',
  flexShrink: 0,
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  }
}));

const StatusLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.7rem',
  fontFamily: 'BlenderPro-Medium',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
}));

const StatusValue = styled(Typography)(({ color = '#8DBAF5' }) => ({
  fontSize: '0.7rem',
  fontFamily: 'BlenderPro-Medium',
  letterSpacing: '0.02em',
  color: color,
}));

const Divider = styled(Box)(({ theme }) => ({
  width: '1px',
  height: '16px',
  backgroundColor: 'rgba(141, 186, 245, 0.15)',
  margin: '0 12px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
}));

const CyberStatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus] = useState({
    connection: true,
    security: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <StatusBarContainer role="status" aria-label="System status bar">
      <Stack 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center" 
        width="100%"
      >
        {/* Left side - System status */}
        <Stack direction="row" spacing={2} alignItems="center">
          <StatusItem>
            <StatusIndicator active={systemStatus.connection} />
            <StatusLabel>NET</StatusLabel>
          </StatusItem>

          <StatusItem sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <StatusIndicator active={systemStatus.security} />
            <StatusLabel>SEC</StatusLabel>
          </StatusItem>

          <Divider />

          <StatusItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <StatusValue color="#c8d4e0">
              PORTFOLIO_V2.0
            </StatusValue>
          </StatusItem>
        </Stack>

        {/* Right side - Time and location */}
        <Stack direction="row" spacing={2} alignItems="center">
          <StatusItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <StatusValue color="#808898">
              BUENOS_AIRES
            </StatusValue>
          </StatusItem>

          <Divider />

          <StatusItem>
            <StatusValue 
              color="#8DBAF5"
              sx={{ fontFamily: 'monospace', letterSpacing: '0.08em' }}
            >
              {formatTime(currentTime)}
            </StatusValue>
          </StatusItem>

          <StatusItem>
            <StatusIndicator active={true} />
            <StatusLabel sx={{ color: '#4ade80' }}>ONLINE</StatusLabel>
          </StatusItem>
        </Stack>
      </Stack>
    </StatusBarContainer>
  );
};

export default CyberStatusBar;
