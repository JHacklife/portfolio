import React from 'react'
import { Box, Typography } from '@mui/material'

/**
 * Renderiza un componente de logo con una imagen, enlace y estilos opcionales.
 *
 * @param {string} imgUrl - La URL de la imagen del logo.
 * @param {string} alt - El texto alternativo para la imagen del logo. El valor predeterminado es "logo".
 * @param {string} link - La URL a la que el logo debe enlazar. El valor predeterminado es "/".
 * @param {object} sx - El objeto de estilos para el componente de logo. El valor predeterminado es {
 *   mr: 2,
 *   display: { xs: 'none', md: 'flex' },
 *   color: 'inherit',
 *   textDecoration: 'none',
 * }.
 * @return {JSX.Element} El componente de logo.
 */
function Logo({ imgUrl, alt = "logo", link = "/", sx = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  color: 'inherit',
  textDecoration: 'none',
} }) {
  return (
    <Box component="a" href={link} sx={sx}>
      <Box component="img" src={imgUrl} alt={alt} sx={{ height: 30 }}></Box>
    </Box>
  )
}

export default Logo
