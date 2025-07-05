import React from 'react'

// UI COMPONENTS
import { Button, Grid, Link, Stack, Typography } from '@mui/material'
import profileIMG from '../../assets/profile.jpg'
import Square from '../../components/Adornos'
import CustomData from './components/CustomData'
import Atropos from 'atropos/react';
import CustomLink from '../../components/CustomLink'

// ICONS

// APIS

// PROVIDERS

// UTILS

function About() {
  return (
    <Stack id="about" className="section gridBackground" justifyContent="center" alignItems="center">

      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{
        px: {
          xs: '2rem', // Tamaño para dispositivos móviles
          sm: '1.2rem', // Tamaño para dispositivos pequeños
          md: '3rem', // Tamaño para dispositivos medianos
          lg: '5rem', // Tamaño para dispositivos grandes
          xl: '15rem', // Tamaño para dispositivos extra grandes
        },
      }}>

        {/* IMAGEN */}
        <Grid item xs={8} sm={6} md={5} lg={3} xl={3}>
          {/* <img src={profileIMG} alt="profile" height="100%" width="300px" style={{ objectFit: 'cover' }} /> */}
          <Link href="https://app.daily.dev/jhacklife" target="_blank">
            <Atropos activeOffset={40} shadowScale={1.05}>
              <img src="https://api.daily.dev/devcards/e55b32da7af645e3981c0f2882576f88.png?r=mxn" height="100%" width="100%" style={{ objectFit: 'cover' }} alt="Jonathan Hacklife's Dev Card" />
            </Atropos>
          </Link>
        </Grid>

        <Grid item xs sm={12} md lg xl flexWrap="wrap">
          {/* NOMBRE Y APELLIDO */}
          {/* FEATURE: Aplicar CutOut:
          https://www.w3schools.com/howto/howto_css_cutout_text.asp */}
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <Typography variant="h3" bgcolor="primary.main" color="primary.dark" px={1}>Jonathan C. Wildemer</Typography>
            <Square color="grey" />
          </Stack>

          {/* CARGO */}
          <Typography variant="h4custom" color="secondary.main" align="left" mt={0} width="100%">FULLSTACK DEVELOPER en <CustomLink fuente="http://infinitelabs.tech/" target="_blank"><Typography variant="h4" component="span">INFINITE LABS</Typography></CustomLink></Typography>

          {/* DESCRIPCIÓN */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl>
            <Typography variant="body1custom" className="blur" color="text.main" align="justify" my={2}>
              Desarrollador web y líder técnico con experiencia en coordinación y
              ejecución de proyectos digitales. También, emprendedor creativo
              especializado en el desarrollo de aplicaciones web y móviles, con interés
              en tecnología wearable e innovación. Capacitado para planificar, estimar
              y supervisar tareas complejas, aportando soluciones ágiles y liderando
              equipos hacia la entrega exitosa de productos de alta calidad.
            </Typography>
          </Grid>

          {/* OTROS DATOS */}
          <Grid item xs sm md lg xl>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                <CustomData title="Most Valued Project" custom={
                  <Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>
                    Pulsera electrónica antisecuestro <Link href="https://culturageek.com.ar/argentino-creo-una-pulsera-anti-secuestro/" target="_blank" color="tertiary.main">'PULSE'</Link>,
                  </Typography>
                } />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                <CustomData title="Premios y menciones" custom={
                  <Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>
                    Primer premio y mención a la innovación en <Link href="https://www.argentina.gob.ar/noticias/primera-hackaton-nacional-para-ayudar-frenar-la-violencia-contra-las-mujeres-0/" target="_blank" color="tertiary.main">'#HALV'</Link> y <Link href="https://buenosaires.gob.ar/noticias/programa-tu-futuro-cerro-el-ano-con-el-ultimo-interclubes/" target="_blank" color="tertiary.main">'PTF'</Link>
                  </Typography>
                } />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                <CustomData title="Speaker" custom={
                  <Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}><Link href="https://www.fits.ong/argentina/oradores.php/" target="_blank" color="tertiary.main">FITS</Link> (Festival de Innovación y Tecnología Social) en Konex</Typography>
                } />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                <CustomData title="Experiencias" custom={
                  <Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>Conozca mis experiencias en <Link href="https://www.linkedin.com/in/jonathanhacklife/" target="_blank" color="tertiary.main">LinkedIn</Link></Typography>
                } />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                <CustomData title="Proyectos" custom={
                  <Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>
                    Todos mis proyectos están disponibles <Link href="https://gitlab.com/users/jonathanhacklife/projects/" target="_blank" color="tertiary.main">aquí</Link></Typography>
                } />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                <CustomData title="Intereses" description={<Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>
                  React, Node, Flutter, Dart, Automation & UX/UI Design
                </Typography>} />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                <CustomData title="Voluntariado" custom={
                  <Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>
                    <Link href="https://frontend.cafe/equipo/" target="_blank" color="tertiary.main">FrontEnd Café</Link> & <Link href="https://discord.com/invite/QeHShEYb8G/" target="_blank" color="tertiary.main">Hack|LAB</Link> & <Link href="https://discord.gg/9Gj8yV9uBP" target="_blank" color="tertiary.main">La Lasîrela (Solresol Network)
                    </Link>
                  </Typography>
                } />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                <CustomData title="Fun Fact" description={<Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>
                  Soy piloto de Drone Racing
                </Typography>} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <CustomData title="Reunión" custom={
                  <Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>Agenda una <Link href="https://calendly.com/jonathanhacklife/1to1/" target="_blank" color="tertiary.main">reunión conmigo</Link></Typography>
                } />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2} align="left">
            <CustomLink fuente="https://self.so/jonathan-wildemer" target="_blank" color="tertiary" dense={false}>Descargar CV</CustomLink>
          </Grid>
        </Grid>
      </Grid>

    </Stack>
  )
}

export default About
