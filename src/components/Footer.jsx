import React from 'react'
import { Box, Typography, Stack, Link } from '@mui/material'
import { styled } from '@mui/material/styles'

/**
 * Professional Footer Component
 * 
 * Features:
 * - Subtle glass effect
 * - Minimal, clean design
 * - Professional copyright text
 */

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  background: 'rgba(10, 10, 15, 0.8)',
  backdropFilter: 'blur(12px)',
  borderTop: '1px solid rgba(141, 186, 245, 0.1)',
  marginTop: 'auto',
}))

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer component="footer">
      <Stack 
        spacing={2} 
        alignItems="center"
        sx={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Decorative line */}
        <Box
          sx={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, #8DBAF5 50%, transparent 100%)',
            mb: 1,
          }}
        />

        {/* Main text */}
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#808898',
            textAlign: 'center',
            fontSize: '0.85rem',
            letterSpacing: '0.02em',
          }}
        >
          Diseñado y Construido por{' '}
          <Link
            href="https://www.linkedin.com/in/jonathanhacklife/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#8DBAF5',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#B5D4FF',
              }
            }}
          >
            Jonathan Wildemer
          </Link>
        </Typography>

        {/* Copyright */}
        <Typography 
          variant="caption" 
          sx={{ 
            color: '#606878',
            textAlign: 'center',
            fontSize: '0.75rem',
            letterSpacing: '0.04em',
          }}
        >
          © {currentYear} Todos los derechos reservados
        </Typography>
      </Stack>
    </FooterContainer>
  )
}
