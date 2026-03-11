import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// UI COMPONENTS
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { AppBar, Box, IconButton, Stack, Toolbar, Link, Typography } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Logo from './Logo'
import logoLabs from '../assets/Logo-1.svg'
import { styled } from '@mui/material/styles'

/**
 * Professional Cyberpunk Navbar
 * 
 * Features:
 * - Glass effect with subtle blur
 * - Elegant border with gradient accent
 * - Smooth transitions on all interactions
 * - Professional hover states
 */

const CyberAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 10, 15, 0.85)',
  backdropFilter: 'blur(16px)',
  borderBottom: '1px solid rgba(141, 186, 245, 0.15)',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
  // Subtle top accent line
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(141, 186, 245, 0.4) 50%, transparent 100%)',
    opacity: 0.6
  }
}))

const NavButton = styled(Link)(({ theme }) => ({
  color: '#c8d4e0',
  fontSize: '0.85rem',
  fontFamily: 'BlenderPro-Medium',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  padding: theme.spacing(1, 2),
  position: 'relative',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  borderRadius: '4px',
  // Underline animation
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 4,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '1px',
    backgroundColor: '#8DBAF5',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: '#8DBAF5',
    backgroundColor: 'rgba(141, 186, 245, 0.06)',
    '&::after': {
      width: '60%',
    }
  }
}))

const CyberMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'rgba(10, 10, 15, 0.95)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(141, 186, 245, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    borderRadius: '8px',
    marginTop: theme.spacing(1),
    minWidth: '200px',
  },
  '& .MuiMenuItem-root': {
    color: '#c8d4e0',
    fontFamily: 'BlenderPro-Medium',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    fontSize: '0.85rem',
    padding: theme.spacing(1.5, 2.5),
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(141, 186, 245, 0.08)',
      color: '#8DBAF5'
    }
  }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: '#8DBAF5',
  border: '1px solid rgba(141, 186, 245, 0.25)',
  borderRadius: '6px',
  padding: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(141, 186, 245, 0.08)',
    borderColor: 'rgba(141, 186, 245, 0.4)',
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
          <Logo 
            imgUrl={logoLabs} 
            alt="Jonathan Wildemer Logo" 
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }} 
          />

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
          <Logo 
            imgUrl={logoLabs} 
            alt="Jonathan Wildemer Logo" 
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }} 
          />

          <Stack 
            component="nav" 
            direction="row" 
            spacing={0.5}
            aria-label="Main navigation"
          >
            {pages?.filter(page => page?.show).map((page, index) => (
              <NavButton 
                key={index} 
                href={page.path}
              >
                {page.label}
              </NavButton>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </CyberAppBar>
  )
}

export default Navbar
