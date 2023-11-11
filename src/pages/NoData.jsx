import React from 'react'
import { IconButton, Stack, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

/**
 * Renderiza un componente cuando no hay datos.
 *
 * @param {string} mensaje - El mensaje que se mostrará.
 * @param {function} callback - La función de devolución de llamada que se ejecutará.
 * @param {string} mensajeBoton - El mensaje para el botón.
 * @return {JSX.Element} El componente renderizado.
 */
export default function NoData({ mensaje, callback, mensajeBoton }) {
  return <>
    <Typography variant="h6" gutterBottom align="center">{mensaje}</Typography>
    {callback && <Stack justifyContent="center">
      <Stack direction="row" justifyContent="center">
        <IconButton sx={{ backgroundColor: "tertiary.main" }} onClick={callback}><Add /></IconButton>
      </Stack>
      <Typography align="center">{mensajeBoton || "Agregar"}</Typography>
    </Stack>}
  </>
}
