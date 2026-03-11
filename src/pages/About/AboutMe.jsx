import React from 'react'

// UI COMPONENTS
import { Grid, Link, Stack, Typography, Box } from '@mui/material'
import CustomData from './components/CustomData'
import Atropos from 'atropos/react';
import { 
  SectionContainer, 
  TechFrame, 
  GlowText, 
  GradientText,
  CyberDivider,
  FadeInUp 
} from '../../components/CyberComponents'

/**
 * About Section - Professional introduction
 * 
 * Features:
 * - Clean, readable layout
 * - Professional card components
 * - Elegant typography hierarchy
 * - Subtle animations on scroll
 */

function About() {
  return (
    <SectionContainer id="about" className="section particleBackground" sx={{ minHeight: 'auto', py: { xs: 6, md: 8 } }}>
      <Stack spacing={5} sx={{ maxWidth: '1200px', margin: '0 auto', px: { xs: 2, md: 4 } }}>

        {/* Section Header */}
        <FadeInUp>
          <Stack spacing={2} alignItems="center">
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, #8DBAF5 100%)',
                }}
              />
              <GlowText variant="h2">
                SOBRE MÍ
              </GlowText>
              <Box
                sx={{
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #8DBAF5 0%, transparent 100%)',
                }}
              />
            </Stack>
            <Typography variant="body1" sx={{
              textAlign: 'center',
              maxWidth: '550px',
              color: '#a0b0c0',
              fontSize: '1rem',
              lineHeight: 1.7,
            }}>
              Desarrollador e Innovador | Líder técnico con pasión por la tecnología emergente
            </Typography>
          </Stack>
        </FadeInUp>

        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">

          {/* Profile Card */}
          <Grid item xs={12} md={4}>
            <FadeInUp delay={0.1}>
              <TechFrame sx={{ padding: 0, overflow: 'hidden' }}>
                <Link 
                  href="https://app.daily.dev/jhacklife" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Atropos activeOffset={30} shadowScale={1.02}>
                    <img
                      src="https://api.daily.dev/devcards/e55b32da7af645e3981c0f2882576f88.png?r=mxn"
                      width="100%"
                      style={{
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      alt="Jonathan Hacklife's Dev Card"
                    />
                  </Atropos>
                </Link>
              </TechFrame>
            </FadeInUp>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>

              {/* Name and Title */}
              <FadeInUp delay={0.2}>
                <TechFrame>
                  <Stack spacing={1.5}>
                    <GradientText variant="h3" sx={{ fontWeight: 700 }}>
                      Jonathan C. Wildemer
                    </GradientText>

                    <Typography variant="h5" sx={{
                      color: '#c8d4e0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontFamily: 'BlenderPro-Medium',
                      fontSize: '1.1rem',
                    }}>
                      DESARROLLADOR FULLSTACK @{' '}
                      <Link
                        href="http://infinitelabs.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#8DBAF5',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#B5D4FF',
                          }
                        }}
                      >
                        INFINITE LABS
                      </Link>
                    </Typography>
                  </Stack>
                </TechFrame>
              </FadeInUp>

              {/* Description */}
              <FadeInUp delay={0.3}>
                <TechFrame>
                  <Typography variant="body1" sx={{
                    color: '#c8d4e0',
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}>
                    Desarrollador web y líder técnico con experiencia en coordinación y 
                    ejecución de proyectos digitales. Emprendedor creativo especializado en 
                    desarrollo de aplicaciones web y móviles, con interés en tecnología 
                    wearable e innovación. Capaz de planificar, estimar y 
                    supervisar tareas complejas, brindando soluciones ágiles y liderando 
                    equipos hacia la entrega exitosa de productos de alta calidad.
                  </Typography>
                </TechFrame>
              </FadeInUp>
            </Stack>
          </Grid>
        </Grid>

        {/* Data Grid */}
        <Box sx={{ mt: 4 }}>
          <FadeInUp delay={0.4}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
              <Box
                sx={{
                  width: '4px',
                  height: '24px',
                  background: 'linear-gradient(180deg, #8DBAF5 0%, transparent 100%)',
                  borderRadius: '2px',
                }}
              />
              <Typography variant="h4" sx={{ color: '#8DBAF5' }}>
                DATOS PROFESIONALES
              </Typography>
            </Stack>
          </FadeInUp>

          <Grid container spacing={2}>
            {[
              {
                title: "Proyecto Más Valorado",
                content: (
                  <>
                    Pulsera electrónica antisecuestro{' '}
                    <Link href="https://culturageek.com.ar/argentino-creo-una-pulsera-anti-secuestro/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      'PULSE'
                    </Link>
                  </>
                )
              },
              {
                title: "Premios y Menciones",
                content: (
                  <>
                    Primer premio y mención a la innovación en{' '}
                    <Link href="https://www.argentina.gob.ar/noticias/primera-hackaton-nacional-para-ayudar-frenar-la-violencia-contra-las-mujeres-0/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      '#HALV'
                    </Link>{' & '}
                    <Link href="https://buenosaires.gob.ar/noticias/programa-tu-futuro-cerro-el-ano-con-el-ultimo-interclubes/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      'PTF'
                    </Link>
                  </>
                )
              },
              {
                title: "Orador",
                content: (
                  <>
                    <Link href="https://www.fits.ong/argentina/oradores.php/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      FITS
                    </Link>{' '}
                    (Festival de Innovación y Tecnología Social) en Konex
                  </>
                )
              },
              {
                title: "Experiencia",
                content: (
                  <>
                    Ver mi experiencia en{' '}
                    <Link href="https://www.linkedin.com/in/jonathanhacklife/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      LinkedIn
                    </Link>
                  </>
                )
              },
              {
                title: "Proyectos",
                content: (
                  <>
                    Todos mis proyectos están disponibles{' '}
                    <Link href="https://gitlab.com/users/jonathanhacklife/projects/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      aquí
                    </Link>
                  </>
                )
              },
              {
                title: "Intereses",
                content: "React, Node, Flutter, Dart, Automatización y Diseño UX/UI"
              },
              {
                title: "Voluntariado",
                content: (
                  <>
                    <Link href="https://frontend.cafe/equipo/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      FrontEnd Café
                    </Link>{' & '}
                    <Link href="https://discord.com/invite/QeHShEYb8G/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      Hack|LAB
                    </Link>{' & '}
                    <Link href="https://discord.gg/9Gj8yV9uBP" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      La Lasîrela
                    </Link>
                  </>
                )
              },
              {
                title: "Dato Curioso",
                content: "Soy piloto de Carreras de Drones"
              },
              {
                title: "Reunión",
                content: (
                  <>
                    Agenda una{' '}
                    <Link href="https://calendly.com/jonathanhacklife/1to1/" target="_blank" rel="noopener noreferrer" sx={{ color: '#8DBAF5' }}>
                      reunión conmigo
                    </Link>
                  </>
                )
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FadeInUp delay={0.5 + (index * 0.05)}>
                  <TechFrame sx={{ height: '100%', minHeight: '100px' }}>
                    <CustomData
                      title={item.title}
                      custom={
                        <Typography variant="body2" sx={{ color: '#c8d4e0', lineHeight: 1.6 }}>
                          {item.content}
                        </Typography>
                      }
                    />
                  </TechFrame>
                </FadeInUp>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </SectionContainer>
  )
}

export default About
