import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// UI COMPONENTS
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { AppBar, Box, IconButton, Stack, Toolbar, Link, Typography } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Logo from './Logo'
import logoLabs from '../assets/Logo-1.svg'
import { styled } from '@mui/material/styles'
import { COLORS } from './CyberComponents'

/**
 * Vibrant Cyberpunk Navbar
 * 
 * Features:
 * - Dark glass effect with neon accents
 * - Glitch-style hover animations
 * - Gradient border highlights
 * - High-tech aesthetic
 */

const CyberAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 10, 15, 0.9)',
  backdropFilter: 'blur(20px)',
  borderBottom: `1px solid ${COLORS.primary}25`,
  boxShadow: `0 4px 30px rgba(0, 0, 0, 0.5), 0 0 20px ${COLORS.primary}10`,
  // Neon top accent line
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, transparent 0%, ${COLORS.neonGreen} 25%, ${COLORS.primary} 50%, ${COLORS.neonRed} 75%, transparent 100%)`,
    opacity: 0.7
  }
}))

const NavButton = styled(Link)(({ theme }) => ({
  color: COLORS.whiteMuted,
  fontSize: '0.85rem',
  fontFamily: 'BlenderPro-Medium, monospace',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: theme.spacing(1, 2),
  position: 'relative',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  borderRadius: '2px',
  // Underline animation with neon glow
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 4,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '2px',
    backgroundColor: COLORS.primary,
    boxShadow: `0 0 10px ${COLORS.primary}`,
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: COLORS.primary,
    textShadow: `0 0 10px ${COLORS.primary}50`,
    backgroundColor: `${COLORS.primary}10`,
    '&::after': {
      width: '80%',
    }
  }
}))

const CyberMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'rgba(10, 10, 15, 0.98)',
    backdropFilter: 'blur(20px)',
    border: `1px solid ${COLORS.primary}30`,
    boxShadow: `0 8px 40px rgba(0, 0, 0, 0.6), 0 0 20px ${COLORS.primary}15`,
    borderRadius: '4px',
    marginTop: theme.spacing(1),
    minWidth: '220px',
    // Corner accent
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '20px',
      height: '20px',
      borderTop: `2px solid ${COLORS.neonGreen}`,
      borderRight: `2px solid ${COLORS.neonGreen}`,
    }
  },
  '& .MuiMenuItem-root': {
    color: COLORS.whiteMuted,
    fontFamily: 'BlenderPro-Medium, monospace',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '0.85rem',
    padding: theme.spacing(1.5, 2.5),
    transition: 'all 0.3s ease',
    borderLeft: '2px solid transparent',
    '&:hover': {
      background: `${COLORS.primary}15`,
      color: COLORS.primary,
      borderLeftColor: COLORS.primary,
    }
  }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: COLORS.primary,
  border: `1px solid ${COLORS.primary}40`,
  borderRadius: '4px',
  padding: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `${COLORS.primary}15`,
    borderColor: COLORS.primary,
    boxShadow: `0 0 15px ${COLORS.primary}30`,
  }
}))

const Navbar = () => {
  const navigateTo = useNavigate()

  const pages = [
    { path: '#', label: 'Home', show: true },
    { path: '#about', label: 'About', show: true },
    { path: '#langsAndTools', label: 'Skills', show: true },
    { path: '#projects', label: 'Projects', show: true },
    { path: '#certificates', label: 'Certificates', show: true },
    { path: '#contact', label: 'Contact', show: true },
  ]

  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <CyberAppBar position="fixed" id="navbar">
      <Toolbar 
        variant="dense" 
        sx={{ 
          minHeight: '64px', 
          padding: { xs: '0 16px', md: '0 32px' },
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* MOBILE */}
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ flexGrow: 1, display: { md: 'none' } }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Logo 
              imgUrl={logoLabs} 
              alt="Jonathan Wildemer Logo" 
            />
          </motion.div>

          <MenuButton
            onClick={handleOpenNavMenu}
            aria-label="Open navigation menu"
          >
            {anchorElNav ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>

          <CyberMenu
            id="menu-appbar-mobile"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages?.filter(page => page?.show).map((page) => (
              <MenuItem 
                key={page.label} 
                onClick={handleCloseNavMenu}
                component="a"
                href={page.path}
              >
                {page.label}
              </MenuItem>
            ))}
          </CyberMenu>
        </Stack>

        {/* DESKTOP */}
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Logo 
              imgUrl={logoLabs} 
              alt="Jonathan Wildemer Logo" 
            />
          </motion.div>

          <Stack 
            component="nav" 
            direction="row" 
            spacing={0.5}
            aria-label="Main navigation"
          >
            {pages?.filter(page => page?.show).map((page, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <NavButton 
                  href={page.path}
                >
                  {page.label}
                </NavButton>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </CyberAppBar>
  )
}

export default Navbar
