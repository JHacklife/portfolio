import React, { useState } from 'react'

// UI COMPONENTS
import { Grid, Link, Stack, Typography } from '@mui/material'
import profileIMG from '../assets/profile.jpg'

// ICONS

// APIS

// PROVIDERS

// UTILS
import Square from '../components/Adornos'

function About() {
  const [count, setCount] = useState(0)
  console.log(count)

  function Data({ title, description, custom }) {
    return (
      <Stack>
        <Typography variant="body1" bgcolor="tertiary.main" color="black.main" align="left" px={1}><b>{title}</b></Typography>
        {custom ?? <Typography variant="caption" color="tertiary.main" align="left" mt={0.5} lineHeight={1.2}>{description}</Typography>}
      </Stack>
    );
  }

  return (
    <Stack id="about">
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

          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              <Typography variant="h3" bgcolor="tertiary.main" color="black.main" align="left" px={1} width="100%">Jonathan C. Wildemer</Typography>
              <Square color="grey" />
            </Stack>
            <Typography variant="h4custom" color="tertiary.main" align="left" my={1} width="100%">FULLSTACK DEVELOPER</Typography>
            <Typography color="info.dark" align="justify">
              Desarrollador de software experimentado y apasionado, orientado a proyectos que demandan un pensamiento analítico y conceptual.<br /><br />Mi condición de estudiante me impulsa a mantenerme actualizado con las últimas tecnologías, metodologías de trabajo y tendencias, buscando constantemente oportunidades para aplicar estos conocimientos y mejorar de manera continua.
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Data title="Most Valued Project" custom={
                  <Typography variant="caption" color="tertiary.main" align="left" mt={0.5} lineHeight={1.2}>
                    Pulsera electrónica antisecuestro <Link href="https://culturageek.com.ar/argentino-creo-una-pulsera-anti-secuestro/" target="_blank">'PULSE'</Link>,
                  </Typography>
                } />
              </Grid>

              <Grid item md={4}>
                <Data title="Premios y menciones"
                  custom={
                    <Typography variant="caption" color="tertiary.main" align="left" mt={0.5} lineHeight={1.2}>
                      Primer premio y mención a la innovación en <Link href="https://www.argentina.gob.ar/noticias/primera-hackaton-nacional-para-ayudar-frenar-la-violencia-contra-las-mujeres-0/" target="_blank">'#HALV'</Link> y <Link href="https://buenosaires.gob.ar/noticias/programa-tu-futuro-cerro-el-ano-con-el-ultimo-interclubes/" target="_blank">'PTF'</Link>
                    </Typography>
                  } />
              </Grid>

              <Grid item md={4}>
                <Data title="Speaker"
                  custom={
                    <Typography variant="caption" color="tertiary.main" align="left" mt={0.5} lineHeight={1.2}><Link href="https://www.fits.ong/argentina/oradores.php/" target="_blank">FITS</Link> (Festival de Innovación y Tecnología Social) en Konex</Typography>
                  } />
              </Grid>
              <Grid item md={4}>
                <Data title="Experiencias"
                  custom={
                    <Typography variant="caption" color="tertiary.main" align="left" mt={0.5} lineHeight={1.2}>Conozca mis experiencias en <Link href="https://www.linkedin.com/in/jonathanhacklife/" target="_blank">LinkedIn</Link></Typography>
                  } />
              </Grid>

              <Grid item md={4}>
                <Data title="Proyectos"
                  custom={
                    <Typography variant="caption" color="tertiary.main" align="left" mt={0.5} lineHeight={1.2}>
                      Todos mis proyectos están disponibles <Link href="https://gitlab.com/users/jonathanhacklife/projects/" target="_blank">aquí</Link></Typography>
                  } />
              </Grid>

              <Grid item md={4}>
                <Data title="Estudiando" description="React, Node, Flutter, Dart, Automation & UX/UI Design" />
              </Grid>
              <Grid item md={4}>
                <Data title="Voluntariado" custom={
                  <Typography variant="caption" color="tertiary.main" align="left" mt={0.5} lineHeight={1.2}><Link href="https://frontend.cafe/equipo/" target="_blank">FrontEnd Café</Link> - <Link href="https://discord.com/invite/QeHShEYb8G/" target="_blank">Hack|LAB</Link> & <Link href="https://discord.gg/9Gj8yV9uBP" target="_blank">La Lasîrela (Solresol Network)</Link></Typography>
                } />
              </Grid>

              <Grid item md={4}>
                <Data title="Fun Fact" description="Soy piloto de Drone Racing" />
              </Grid>

              <Grid item md={4}>
                <Data title="Reunión"
                  custom={
                    <Typography variant="caption" color="tertiary.main" align="left" mt={0.5} lineHeight={1.2}>Agende una <Link href="https://calendly.com/jonathanhacklife/" target="_blank" color="#ffff00">reunión conmigo</Link></Typography>
                  } />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Stack >
  )
}

export default About
