import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const StatusBarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '40px',
  background: 'rgba(0, 0, 0, 0.95)',
  backdropFilter: 'blur(20px)',
  borderTop: '1px solid rgba(0, 212, 255, 0.3)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px',
  fontFamily: 'Arame, monospace',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #ff0066 0%, #00d4ff 50%, #ff0066 100%)',
    animation: 'statusPulse 3s ease-in-out infinite'
  },
  '@keyframes statusPulse': {
    '0%, 100%': { opacity: 0.6 },
    '50%': { opacity: 1 }
  },
  [theme.breakpoints.down('md')]: {
    height: '32px',
    padding: '0 16px',
    fontSize: '0.7rem'
  }
}));

const StatusItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: '#ffffff',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
}));

const StatusIndicator = styled(Box)(({ active }) => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: active ? '#00ff88' : '#ff0066',
  boxShadow: active ? '0 0 8px #00ff88' : '0 0 8px #ff0066',
  animation: active ? 'statusBlink 1.5s infinite' : 'none',
  '@keyframes statusBlink': {
    '0%, 100%': { opacity: 0.6 },
    '50%': { opacity: 1 }
  }
}));

const CyberStatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState({
    connection: true,
    performance: 85,
    security: true
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
    <StatusBarContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
        {/* Left side - System status */}
        <Stack direction="row" spacing={3} alignItems="center">
          <StatusItem>
            <StatusIndicator active={systemStatus.connection} />
            <Typography variant="caption">NET</Typography>
          </StatusItem>

          <StatusItem>
            <StatusIndicator active={systemStatus.security} />
            <Typography variant="caption">SEC</Typography>
          </StatusItem>

          <StatusItem>
            <Typography variant="caption" sx={{ color: '#00d4ff' }}>
              CPU: {systemStatus.performance}%
            </Typography>
          </StatusItem>

          <StatusItem sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Typography variant="caption" sx={{ color: '#00ffff' }}>
              JONATHAN_WILDEMER_PORTFOLIO_V2.0
            </Typography>
          </StatusItem>
        </Stack>

        {/* Right side - Time and location */}
        <Stack direction="row" spacing={3} alignItems="center">
          <StatusItem sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="caption" sx={{ color: '#ff0066' }}>
              BUENOS_AIRES_ARG
            </Typography>
          </StatusItem>

          <StatusItem>
            <Typography variant="caption" sx={{ color: '#00d4ff', fontFamily: 'monospace' }}>
              {formatTime(currentTime)}
            </Typography>
          </StatusItem>

          <StatusItem>
            <StatusIndicator active={true} />
            <Typography variant="caption">ONLINE</Typography>
          </StatusItem>
        </Stack>
      </Stack>
    </StatusBarContainer>
  );
};

export default CyberStatusBar;
