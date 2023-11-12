﻿import React from 'react'
import { Link, Typography } from '@mui/material'

/**
 * Renderiza un aviso de derechos de autor con la URL y el nombre proporcionados.
 *
 * @param {string} url - La URL a la que se enlazará el nombre.
 * @param {string} name - El nombre que se mostrará en el aviso de derechos de autor.
 * @return {JSX.Element} El aviso de derechos de autor renderizado.
*/

export default function Copyright({ url, name }) {
  return (
    <Typography variant="body2" align="center" sx={{ mt: 5, mb: 4 }}>
      {'© '}
      <Link color="inherit" href={url}>{name}</Link>{' - '}
      {new Date().getFullYear()}
    </Typography>
  )
}
