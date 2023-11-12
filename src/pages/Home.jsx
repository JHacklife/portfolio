import { Box, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import mailTo, { config } from '../utils/mail'

function Home() {
  const [count, setCount] = useState(0)
  console.log(count)

  return (
    <Stack>
      <Navbar />
      <Box id="top"></Box>
      <Stack className="welcome" justifyContent="center" alignItems="center" spacing={3} px={5}>

        <Stack>
          <Stack direction="row" spacing={3}>
            <Typography variant="h1" className="scale">JONATHAN</Typography>
            <Typography variant="h1" className="scale"><b>WILDEMER</b></Typography>
          </Stack>
          <Typography variant="h3custom">Fullstack Web & Mobile Developer</Typography>
        </Stack>

        <Typography variant="h6custom" color="tertiary.main" sx={{
          lineHeight: 1,
          px: {
            xs: '0.5rem', // Tamaño de fuente para dispositivos móviles
            sm: '1.2rem', // Tamaño de fuente para dispositivos pequeños
            md: '5rem', // Tamaño de fuente para dispositivos medianos
            lg: '15rem', // Tamaño de fuente para dispositivos grandes
            xl: '20rem', // Tamaño de fuente para dispositivos extra grandes
          },
        }}>Soy un desarrollador de software especializado en construir (y ocasionalmente diseñar) experiencias digitales excepcionales. Actualmente, estoy centrado en la construcción de productos digitales y aplicaciones móviles a medida.</Typography>

        <Typography variant="body2">Más info: <Link href={mailTo} target="_blank">{config?.to}</Link></Typography>
      </Stack>
    </Stack>
  )
}

export default Home
