import { Stack } from '@mui/material'
import React from 'react'

/**
 * Renderiza un componente de panel de pestaña.
 *
 * @param {ReactNode} children - Los elementos hijos del componente.
 * @param {number} value - El valor actual del panel de pestaña.
 * @param {number} index - El índice del panel de pestaña.
 * @param {...any} other - Propiedades adicionales pasadas al componente.
 * @return {ReactElement} El componente de panel de pestaña renderizado.
*/
function TabPanel({ children, value, index, ...other }) {
  return <Stack key={index}
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}>
    {value === index && children}
  </Stack>
}

export default TabPanel
