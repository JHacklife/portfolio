import React, { useState } from 'react'

// UI COMPONENTS
import { Grid, Stack, Typography } from '@mui/material'
import profileIMG from '../assets/profile.jpg'

// ICONS

// APIS

// PROVIDERS

// UTILS
import Square from '../components/Adornos'

function About() {
  const [count, setCount] = useState(0)
  console.log(count)

  function Data({ title, description }) {
    return (
      <Stack>
        <Typography variant="body1" bgcolor="tertiary.main" color="black.main" align="left" px={1}><b>{title}</b></Typography>
        <Typography variant="caption" align="left">{description}</Typography>
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack className="welcome" justifyContent="center" alignItems="center" spacing={3} px={5}>

        <Stack direction="row" spacing={3} sx={{
          px: {
            xs: '0.5rem', // Tamaño de fuente para dispositivos móviles
            sm: '1.2rem', // Tamaño de fuente para dispositivos pequeños
            md: '5rem', // Tamaño de fuente para dispositivos medianos
            lg: '10rem', // Tamaño de fuente para dispositivos grandes
            xl: '20rem', // Tamaño de fuente para dispositivos extra grandes
          },
        }}>
          <img src={profileIMG} alt="profile" height="500px" width="300px" style={{ objectFit: 'cover' }} />

          <Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="h4" bgcolor="tertiary.main" color="black.main" align="left" px={1} width="100%">Jonathan C. Wildemer</Typography>
              <Square />
            </Stack>
            <Typography variant="h6" color="tertiary.main" align="justify">
              Desarrollador de software experimentado y apasionado, orientado a proyectos que demandan un pensamiento analítico y conceptual.<br /><br />Mi condición de estudiante me impulsa a mantenerme actualizado con las últimas tecnologías, metodologías de trabajo y tendencias, buscando constantemente oportunidades para aplicar estos conocimientos y mejorar de manera continua.
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Data title="Most Value Project" description="'PULSE', una pulsera electrónica antisecuestro" />
              </Grid>

              <Grid item md={4}>
                <Data title="Premios y menciones" description="Primer premio y mención a la innovación en '#HALV' y 'PTF'" />
              </Grid>

              <Grid item md={4}>
                <Data title="Speaker" description="FITS (Festival de Innovación y Tecnología Social) en Konex" />
              </Grid>
              <Grid item md={4}>
                <Data title="Experiencias" description="Conozca mis experiencias en LinkedIn" />
              </Grid>

              <Grid item md={4}>
                <Data title="Proyectos" description="Todos mis proyectos están disponibles en Gitlab y Github" />
              </Grid>

              <Grid item md={4}>
                <Data title="Estudiando" description="React, Node, Flutter, Dart, Automation & UX/UI Design" />
              </Grid>
              <Grid item md={4}>
                <Data title="Voluntariado" description="FrontEnd Café & Hack|Lab" />
              </Grid>

              <Grid item md={4}>
                <Data title="Fun Fact" description="Soy piloto de Drone Racing" />
              </Grid>

              <Grid item md={4}>
                <Data title="Reunión" description="Agende una reunión conmigo" />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default About
