import React from 'react'

// UI COMPONENTS
import { Button, Grid, Link, Stack, Typography, Box } from '@mui/material'
import profileIMG from '../../assets/profile.jpg'
import Square from '../../components/Adornos'
import CustomData from './components/CustomData'
import Atropos from 'atropos/react';
import CustomLink from '../../components/CustomLink'
import { SectionContainer, TechFrame, GlowText, CyberDivider } from '../../components/CyberComponents'

function About() {
  return (
    <SectionContainer id="about" className="section particleBackground">
      <Stack spacing={4} sx={{ maxWidth: '1400px', margin: '0 auto', padding: { xs: 2, md: 4 } }}>

        {/* Section Header */}
        <Stack spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
          <GlowText variant="h2" sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
            About Me
          </GlowText>
          <CyberDivider sx={{ width: '200px' }} />
          <Typography variant="body1" sx={{
            textAlign: 'center',
            maxWidth: '600px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.1rem'
          }}>
            Desarrollador & Innovador | Líder técnico con pasión por la tecnología emergente
          </Typography>
        </Stack>

        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">

          {/* Profile Image */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TechFrame sx={{ padding: 0, overflow: 'hidden' }}>
              <Link href="https://app.daily.dev/jhacklife" target="_blank">
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <img
                    src="https://api.daily.dev/devcards/e55b32da7af645e3981c0f2882576f88.png?r=mxn"
                    width="100%"
                    style={{
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'brightness(1.1) contrast(1.1)'
                    }}
                    alt="Jonathan Hacklife's Dev Card"
                  />
                </Atropos>
              </Link>
            </TechFrame>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Stack spacing={3}>

              {/* Name and Title */}
              <TechFrame>
                <Stack spacing={2}>
                  <Typography variant="h3" sx={{
                    color: '#00d4ff',
                    textShadow: '0 0 20px #00d4ff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Jonathan C. Wildemer
                  </Typography>

                  <Typography variant="h5" sx={{
                    color: '#ff0066',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    fontFamily: 'BlenderPro-Medium'
                  }}>
                    FULLSTACK DEVELOPER @ {' '}
                    <Link
                      href="http://infinitelabs.tech/"
                      target="_blank"
                      sx={{
                        color: '#00ffff',
                        textDecoration: 'none',
                        textShadow: '0 0 10px #00ffff',
                        '&:hover': {
                          color: '#ffffff',
                          textShadow: '0 0 20px #00ffff'
                        }
                      }}
                    >
                      INFINITE LABS
                    </Link>
                  </Typography>
                </Stack>
              </TechFrame>

              {/* Description */}
              <TechFrame>
                <Typography variant="body1" sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.7,
                  fontSize: '1.1rem',
                  textAlign: 'justify'
                }}>
                  Desarrollador web y líder técnico con experiencia en coordinación y
                  ejecución de proyectos digitales. También, emprendedor creativo
                  especializado en el desarrollo de aplicaciones web y móviles, con interés
                  en tecnología wearable e innovación. Capacitado para planificar, estimar
                  y supervisar tareas complejas, aportando soluciones ágiles y liderando
                  equipos hacia la entrega exitosa de productos de alta calidad.
                </Typography>
              </TechFrame>
            </Stack>
          </Grid>
        </Grid>

        {/* Data Grid */}
        <Box sx={{ marginTop: 6 }}>
          <GlowText variant="h4" sx={{
            textAlign: 'center',
            marginBottom: 4,
            textTransform: 'uppercase',
            color: '#00ffff'
          }}>
            Professional Data
          </GlowText>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Most Valued Project"
                  custom={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      Pulsera electrónica antisecuestro{' '}
                      <Link href="https://culturageek.com.ar/argentino-creo-una-pulsera-anti-secuestro/" target="_blank" sx={{ color: '#ff0066' }}>
                        'PULSE'
                      </Link>
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Premios y menciones"
                  custom={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      Primer premio y mención a la innovación en{' '}
                      <Link href="https://www.argentina.gob.ar/noticias/primera-hackaton-nacional-para-ayudar-frenar-la-violencia-contra-las-mujeres-0/" target="_blank" sx={{ color: '#ff0066' }}>
                        '#HALV'
                      </Link>{' y '}
                      <Link href="https://buenosaires.gob.ar/noticias/programa-tu-futuro-cerro-el-ano-con-el-ultimo-interclubes/" target="_blank" sx={{ color: '#ff0066' }}>
                        'PTF'
                      </Link>
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Speaker"
                  custom={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      <Link href="https://www.fits.ong/argentina/oradores.php/" target="_blank" sx={{ color: '#ff0066' }}>
                        FITS
                      </Link>{' '}
                      (Festival de Innovación y Tecnología Social) en Konex
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Experiencias"
                  custom={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      Conozca mis experiencias en{' '}
                      <Link href="https://www.linkedin.com/in/jonathanhacklife/" target="_blank" sx={{ color: '#ff0066' }}>
                        LinkedIn
                      </Link>
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Proyectos"
                  custom={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      Todos mis proyectos están disponibles{' '}
                      <Link href="https://gitlab.com/users/jonathanhacklife/projects/" target="_blank" sx={{ color: '#ff0066' }}>
                        aquí
                      </Link>
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Intereses"
                  description={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      React, Node, Flutter, Dart, Automation & UX/UI Design
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Voluntariado"
                  custom={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      <Link href="https://frontend.cafe/equipo/" target="_blank" sx={{ color: '#ff0066' }}>
                        FrontEnd Café
                      </Link>{' & '}
                      <Link href="https://discord.com/invite/QeHShEYb8G/" target="_blank" sx={{ color: '#ff0066' }}>
                        Hack|LAB
                      </Link>{' & '}
                      <Link href="https://discord.gg/9Gj8yV9uBP" target="_blank" sx={{ color: '#ff0066' }}>
                        La Lasîrela
                      </Link>
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Fun Fact"
                  description={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      Soy piloto de Drone Racing
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TechFrame>
                <CustomData
                  title="Reunión"
                  custom={
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.4 }}>
                      Agenda una{' '}
                      <Link href="https://calendly.com/jonathanhacklife/1to1/" target="_blank" sx={{ color: '#ff0066' }}>
                        reunión conmigo
                      </Link>
                    </Typography>
                  }
                />
              </TechFrame>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </SectionContainer>
  )
}

export default About
