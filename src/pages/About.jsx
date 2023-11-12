import React, { useState } from 'react'

// UI COMPONENTS
import { Stack, Typography } from '@mui/material'
import profileIMG from '../assets/profile.jpg'

// ICONS

// APIS

// PROVIDERS
import data from '../providers/data.json'

// UTILS
import Square from '../components/Adornos'

function About() {
  const [count, setCount] = useState(0)
  console.log(count)

  function Data({ title, description }) {
    return (
      <Stack>
        <Typography variant="h6" bgcolor="tertiary.main" color="black.main" align="left" px={1}><b>Most Value Proyect</b></Typography>
        <Typography align="left">'PULSE', una pulsera electrónica antisecuestro</Typography>
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
            <Stack direction="row">
              <Typography variant="h4" bgcolor="tertiary.main" color="black.main" align="left" px={1}>{data.nombre} {data.nombre2} {data.apellido}</Typography>
              <Square />
            </Stack>
            <Typography variant="h6" color="tertiary.main" align="justify">
              Desarrollador de software experimentado y apasionado, orientado a proyectos que demandan un pensamiento analítico y conceptual.<br /><br />Mi condición de estudiante me impulsa a mantenerme actualizado con las últimas tecnologías, metodologías de trabajo y tendencias, buscando constantemente oportunidades para aplicar estos conocimientos y mejorar de manera continua.
            </Typography>
            <Data title="Most Value Project" description="'PULSE', una pulsera electrónica antisecuestro" />
            <Data title="Premios y menciones" description="'PULSE', una pulsera electrónica antisecuestro" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default About
