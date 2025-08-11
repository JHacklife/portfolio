import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// UI COMPONENTS
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Slide, Box, Button, IconButton, Stack, Toolbar, Tooltip, Link, Typography, useScrollTrigger } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Logo from './Logo'
import logoLabs from '../assets/Logo-1.svg'
import { styled } from '@mui/material/styles'

// ICONS
import { ListAlt, Logout } from '@mui/icons-material/'

const CyberAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.9)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(0, 212, 255, 0.3)',
  boxShadow: '0 4px 20px rgba(0, 212, 255, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent 0%, #00d4ff 50%, transparent 100%)',
    opacity: 0.8
  }
}))

const CyberButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '0.9rem',
  fontFamily: 'BlenderPro-Medium',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: theme.spacing(1, 2),
  position: 'relative',
  border: '1px solid transparent',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, #00d4ff, #ff0066)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: -1
  },
  '&:hover': {
    color: '#00d4ff',
    border: '1px solid rgba(0, 212, 255, 0.5)',
    textShadow: '0 0 10px #00d4ff',
    transform: 'translateY(-2px)',
    '&::before': {
      opacity: 0.1
    }
  }
}))

const CyberMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(0, 212, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)',
    borderRadius: '8px'
  },
  '& .MuiMenuItem-root': {
    color: '#ffffff',
    fontFamily: 'BlenderPro-Medium',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    '&:hover': {
      background: 'rgba(0, 212, 255, 0.1)',
      color: '#00d4ff'
    }
  }
}))


const Navbar = () => {
  const navigateTo = useNavigate()

  const pages = [
    { path: '#', label: 'Home', show: true },
    { path: '#about', label: 'About', show: true },
    { path: '#langsAndTools', label: 'Lang & Tools', show: true },
    { path: '#projects', label: 'Projects', show: true },
    { path: '#certificates', label: 'Certificates', show: true },
    { path: '#contact', label: 'Contact', show: true },
  ]

  const settings = [
    { label: 'Perfil', icon: <ListAlt />, action: () => navigateTo("/perfil") },
    { label: 'Cerrar sesión', icon: <Logout />, action: () => console.log("Cerrando sesión") }
  ]

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = () => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = () => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    const trigger = useScrollTrigger({ target: window ? window() : undefined })
    return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
  }
  return (
    <CyberAppBar position="fixed" id="navbar">
      <Toolbar variant="dense" sx={{ minHeight: '64px', padding: '0 24px' }}>
        {/* MOBILE */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: 1, display: { md: 'none' } }}>
          <Logo imgUrl={logoLabs} alt="logo" sx={{
            filter: 'drop-shadow(0 0 10px #00d4ff)',
            transition: 'all 0.3s ease',
            '&:hover': {
              filter: 'drop-shadow(0 0 20px #00d4ff) brightness(1.2)'
            }
          }} />

          <IconButton
            onClick={handleOpenNavMenu}
            size="large"
            aria-label="menu"
            sx={{
              color: '#00d4ff',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              '&:hover': {
                background: 'rgba(0, 212, 255, 0.1)',
                borderColor: 'rgba(0, 212, 255, 0.5)'
              }
            }}
          >
            <MenuIcon />
          </IconButton>

          <CyberMenu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages?.filter(page => page?.show).map((page) => (
              <Link key={page.label} href={page.path} sx={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography variant="body2">{page.label}</Typography>
                </MenuItem>
              </Link>
            ))}
          </CyberMenu>
        </Stack>

        {/* DESKTOP */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Logo imgUrl={logoLabs} alt="logo" sx={{
            filter: 'drop-shadow(0 0 10px #00d4ff)',
            transition: 'all 0.3s ease',
            '&:hover': {
              filter: 'drop-shadow(0 0 20px #00d4ff) brightness(1.2)',
              transform: 'scale(1.05)'
            }
          }} />

          <Stack direction="row" spacing={1}>
            {pages?.filter(page => page?.show).map((page, index) => (
              <CyberButton key={index} href={page.path} className="scale">
                {page.label}
              </CyberButton>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </CyberAppBar>
  )
}

export default Navbar
