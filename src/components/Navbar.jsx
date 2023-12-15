import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// UI COMPONENTS
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Slide, Box, Button, IconButton, Stack, Toolbar, Tooltip, Link, Typography, useScrollTrigger } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Logo from './Logo'
import logoLabs from '../assets/Logo-1.svg'
import useScrollToSection from '../../hooks/useScrollToSection'



// ICONS
import { ListAlt, Logout } from '@mui/icons-material/'

// APIS

// PROVIDERS

// UTILS


const Navbar = () => {
  const navigateTo = useNavigate()




  const pages = [
    { path: '/', label: 'Home', show: true },
    { path: '#about', label: 'About', show: true },
    { path: '#tools', label: 'Lang & Tools', show: true },
    { path: '#projects', label: 'Projects', show: true },
    { path: '#certificates', label: 'Certificates', show: true },
    { path: '#contact', label: 'Contact', show: true },
  ]
  const { currentSection, sectionRefs } = useScrollToSection(pages.map(page => page.label))

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
    <HideOnScroll>
      <AppBar position="fixed" id="navbar" >
        <Toolbar variant="dense">
          {/* MOBILE */}
          {/* LOGO */}
          <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ flexGrow: 1, display: { md: 'none' } }}>
            <Logo imgUrl={logoLabs} alt="logo" sx={{ mr: 2 }} />
            <Box>
              <IconButton onClick={handleOpenNavMenu}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}>
                {pages?.filter(page => page?.show).map((page) => (
                  <MenuItem key={page.label} onClick={() => navigateTo(page.path)}>
                    <Link href={page.path}>
                      <Typography textAlign="center">{page.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>

          {/* DESKTOP */}
          {/* LOGO */}

          <Logo imgUrl={logoLabs} alt="logo" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} />
          <Stack direction="row" justifyContent="start" spacing={1} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages?.filter(page => page?.show).map((page, index) => (
              <Button key={index}
                className="scale"
                onClick={() => navigateTo(page.path)}><Typography variant="body1">{page.label}</Typography></Button>
            ))}
          </Stack>

          {/* <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Abrir ajustes">
            <Button aria-controls="menu-appbar" aria-haspopup="true" variant="contained" onClick={handleOpenUserMenu}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h6">Usuario</Typography>
              </Stack>
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {settings.map((setting, index) => (
              <MenuItem key={index} onClick={setting?.action}>
                <Box mr={1}>{setting?.icon}</Box>
                <Typography textAlign="center">{setting.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box> */}

        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar
