import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

// UI COMPONENTS
import { Stack, Tooltip, Avatar, Box, IconButton, Button, Typography, AppBar, Toolbar } from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Logo from './Logo'

// ICONS
import { ListAlt, Logout } from '@mui/icons-material/'

// APIS

// PROVIDERS

// UTILS


const Navbar = () => {
  const navigateTo = useNavigate()

  const pages = [
    { path: '/hogares', label: 'Hogares', show: true },
    { path: '/solicitudes', label: 'Solicitudes', show: true },
    { path: '/caja', label: 'Flujo de cajas', show: true },
    { path: '/objetivos', label: 'Objetivos', show: true },
  ]

  const settings = [
    {
      label: 'Caja chica',
      icon: <ListAlt />,
      action: () => navigateTo("/caja")
    },
    {
      label: 'Cerrar sesión',
      icon: <Logout />,
      action: () => console.log()
    },
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

  return (
    <AppBar position="relative" color="secondary">
      <Toolbar>
        {/* MOBILE */}
        {/* LOGO */}
        <Logo imgUrl="https://b3hogar.com/wp-content/uploads/2020/07/cropped-Logo_B3-06.png"
          alt="logo" link="/" sx={{ display: { xs: 'none', md: 'flex' } }} />

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}>
            {pages?.filter(page => page?.show).map((page) => (
              <MenuItem key={page.label} onClick={() => navigateTo(page.path)}>
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* DESKTOP */}
        {/* LOGO */}
        <Logo imgUrl="https://b3hogar.com/wp-content/uploads/2020/07/cropped-Logo_B3-06.png"
          alt="logo" link="/" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1 }} />

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages?.filter(page => page?.show).map((page, index) => (
            <Button key={index}
              sx={{ my: 2, color: 'primary.contrastText', display: 'block' }}
              onClick={() => navigateTo(page.path)}>{page.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Abrir ajustes">
            <Button aria-controls="menu-appbar" aria-haspopup="true" variant="contained" onClick={handleOpenUserMenu}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar alt="Usuario" sx={{ width: 24, height: 24 }} />
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
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar
