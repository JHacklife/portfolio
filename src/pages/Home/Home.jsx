import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import mailTo, { config } from '../../utils/mail'
import contactIcons from '../Contact/ContactIcons'
import Gradient from '../../components/Gradient'
import patternIMG from '../../assets/wallpapers/Tech.png'

function Home() {
  const contacts = contactIcons({ size: "25" })
  return (
    <Stack>
      <Navbar />
      <Box id="top"></Box>
      <Stack className="section gridBackground" justifyContent="center" alignItems="center" spacing={3} px={5}>

        {/* <Gradient /> */}

        {/* <img src={patternIMG} alt="Jonathan Wildemer"
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }} /> */}

        <Stack>
          {/* TODO: Responsive Text:
          https://www.w3schools.com/howto/howto_css_responsive_text.asp
           */}
          <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
            <Typography variant="h1" className="scale">JONATHAN</Typography>
            <Typography variant="h1" className="scale"><b>WILDEMER</b></Typography>
          </Stack>
          <Typography variant="h4custom" className="scale">Fullstack Web & Mobile Developer</Typography>

          {/* <Typography variant="h6custom" color="primary.main" my={2} sx={{
            px: {
              xs: '0.5rem', // Tamaño de fuente para dispositivos móviles
              sm: '1.2rem', // Tamaño de fuente para dispositivos pequeños
              md: '5rem', // Tamaño de fuente para dispositivos medianos
              lg: '11rem', // Tamaño de fuente para dispositivos grandes
              xl: '20rem', // Tamaño de fuente para dispositivos extra grandes
            }
          }}>
            Soy un desarrollador de software especializado en construir (y ocasionalmente diseñar) experiencias digitales excepcionales. Actualmente, estoy centrado en la construcción de productos digitales y aplicaciones móviles a medida.
          </Typography> */}
        </Stack>

        {/* <Typography variant="h6custom" color="tertiary.main" sx={{
          lineHeight: 1,
          px: {
            xs: '0.5rem', // Tamaño de fuente para dispositivos móviles
            sm: '1.2rem', // Tamaño de fuente para dispositivos pequeños
            md: '5rem', // Tamaño de fuente para dispositivos medianos
            lg: '15rem', // Tamaño de fuente para dispositivos grandes
            xl: '20rem', // Tamaño de fuente para dispositivos extra grandes
          },
        }}>Soy un desarrollador de software especializado en construir (y ocasionalmente diseñar) experiencias digitales excepcionales. Actualmente, estoy centrado en la construcción de productos digitales y aplicaciones móviles a medida.</Typography> */}

        <Stack direction="row" justifyContent="space-between" width="100%" px={5} sx={{ position: "absolute", bottom: "0px" }}>
          <Stack alignItems="center" spacing={1} height="auto">
            <Link href={mailTo} target="_blank" variant="body1custom" className="verticalText" sx={{ textDecoration: "none" }}>{config?.to}</Link>
            <Divider orientation="vertical" color="white" sx={{ borderWidth: "1px" }} />
          </Stack>

          <Stack alignItems="center" spacing={1} height="auto">
            {contacts.map((contact, index) => <Grid key={index} item md className="scale">
              <Link href={contact?.url} target="_blank" sx={{ textDecoration: "none" }}>
                {contact?.icon}
              </Link>
            </Grid>)}

            <Divider orientation="vertical" color="white" sx={{ borderWidth: "1px" }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home
