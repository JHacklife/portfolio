import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        Información adicional de contacto (o a elección) de B3Hogar.com
      </Typography>
    </Box>
  )
}
