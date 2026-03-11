import React from 'react';
import { Link, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

/**
 * Custom Link Component
 * 
 * Professional inline link with subtle hover effects
 * and optional external link indicator.
 */

const CustomLink = ({ 
  fuente = "", 
  color = "primary", 
  children, 
  target = "_blank",
  showIcon = false 
}) => {
  const colorMap = {
    primary: '#8DBAF5',
    secondary: '#c8d4e0',
    tertiary: '#6BA3E8',
  };

  const linkColor = colorMap[color] || colorMap.primary;

  return (
    <Link 
      href={fuente}
      target={fuente ? target : undefined}
      rel={fuente && target === "_blank" ? "noopener noreferrer" : undefined}
      sx={{
        color: linkColor,
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        transition: 'all 0.3s ease',
        borderBottom: '1px solid transparent',
        '&:hover': {
          color: '#B5D4FF',
          borderBottomColor: 'rgba(141, 186, 245, 0.4)',
        }
      }}
    >
      <Typography 
        component="span" 
        sx={{ 
          fontSize: 'inherit',
          fontFamily: 'inherit',
        }}
      >
        {children}
      </Typography>
      {showIcon && fuente && (
        <OpenInNew 
          sx={{ 
            fontSize: '0.85em',
            opacity: 0.7,
          }} 
        />
      )}
    </Link>
  );
}

export default CustomLink;
