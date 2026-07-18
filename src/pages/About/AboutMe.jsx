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
  FadeInUp,
  COLORS,
} from '../../components/CyberComponents'

function About() {
  return (
    <SectionContainer
      id="about"
      className="section particleBackground"
      sx={{ minHeight: 'auto', py: { xs: 6, md: 8 } }}
    >
      <Stack spacing={6} sx={{ maxWidth: '1200px', margin: '0 auto', px: { xs: 2, md: 4 } }}>

        {/* ── Section Header ─────────────────────────────────────── */}
        <FadeInUp>
          <Stack spacing={2} alignItems="center">
            <Stack direction="row" spacing={2.5} alignItems="center">
              <Box
                sx={{
                  width: '48px',
                  height: '2px',
                  background: `linear-gradient(90deg, transparent 0%, ${COLORS.neonGreen} 100%)`,
                  boxShadow: `0 0 8px ${COLORS.neonGreen}60`,
                }}
              />
              <GlowText variant="h2">SOBRE MÍ</GlowText>
              <Box
                sx={{
                  width: '48px',
                  height: '2px',
                  background: `linear-gradient(90deg, ${COLORS.neonRed} 0%, transparent 100%)`,
                  boxShadow: `0 0 8px ${COLORS.neonRed}60`,
                }}
              />
            </Stack>
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', maxWidth: '560px', color: COLORS.whiteMuted }}
            >
              Desarrollador e Innovador | Líder técnico con pasión por la tecnología emergente
            </Typography>
          </Stack>
        </FadeInUp>

        {/* ── Profile + Bio ───────────────────────────────────────── */}
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
                      style={{ objectFit: 'cover', display: 'block' }}
                      alt="Jonathan Hacklife's Dev Card"
                    />
                  </Atropos>
                </Link>
              </TechFrame>
            </FadeInUp>
          </Grid>

          {/* Bio */}
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>

              {/* Name & Title */}
              <FadeInUp delay={0.2}>
                <TechFrame>
                  <Stack spacing={2}>
                    <GradientText variant="h3" sx={{ fontWeight: 700 }}>
                      Jonathan C. Wildemer
                    </GradientText>
                    <Typography
                      variant="h5"
                      sx={{ color: '#c8d8e8', fontFamily: 'BlenderPro-Medium' }}
                    >
                      DESARROLLADOR FULLSTACK @{' '}
                      <Link
                        href="http://infinitelabs.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: COLORS.primary,
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          textShadow: `0 0 10px ${COLORS.primary}50`,
                          '&:hover': { color: COLORS.primaryLight, textShadow: `0 0 15px ${COLORS.primary}` },
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
                  <Typography variant="body1">
                    Desarrollador web y líder técnico con experiencia en coordinación y
                    ejecución de proyectos digitales. Emprendedor creativo especializado en
                    desarrollo de aplicaciones web y móviles, con interés en tecnología
                    wearable e innovación. Capaz de planificar, estimar y supervisar tareas
                    complejas, brindando soluciones ágiles y liderando equipos hacia la
                    entrega exitosa de productos de alta calidad.
                  </Typography>
                </TechFrame>
              </FadeInUp>
            </Stack>
          </Grid>
        </Grid>

        {/* ── Professional Data Grid ────────────────────────────── */}
        <Box>
          <FadeInUp delay={0.4}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
              <Box
                sx={{
                  width: '4px',
                  height: '28px',
                  background: `linear-gradient(180deg, ${COLORS.neonGreen} 0%, ${COLORS.primary} 100%)`,
                  borderRadius: '2px',
                  boxShadow: `0 0 10px ${COLORS.neonGreen}50`,
                }}
              />
              <Typography variant="h4">
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
                    <Link href="https://culturageek.com.ar/argentino-creo-una-pulsera-anti-secuestro/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>
                      &apos;PULSE&apos;
                    </Link>
                  </>
                )
              },
              {
                title: "Premios y Menciones",
                content: (
                  <>
                    Primer premio y mención a la innovación en{' '}
                    <Link href="https://www.argentina.gob.ar/noticias/primera-hackaton-nacional-para-ayudar-frenar-la-violencia-contra-las-mujeres-0/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>
                      &apos;#HALV&apos;
                    </Link>{' & '}
                    <Link href="https://buenosaires.gob.ar/noticias/programa-tu-futuro-cerro-el-ano-con-el-ultimo-interclubes/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>
                      &apos;PTF&apos;
                    </Link>
                  </>
                )
              },
              {
                title: "Orador",
                content: (
                  <>
                    <Link href="https://www.fits.ong/argentina/oradores.php/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>
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
                    <Link href="https://www.linkedin.com/in/jonathanhacklife/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>
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
                    <Link href="https://gitlab.com/users/jonathanhacklife/projects/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>
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
                    <Link href="https://frontend.cafe/equipo/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>FrontEnd Café</Link>
                    {' & '}
                    <Link href="https://discord.com/invite/QeHShEYb8G/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>Hack|LAB</Link>
                    {' & '}
                    <Link href="https://discord.gg/9Gj8yV9uBP" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>La Lasîrela</Link>
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
                    <Link href="https://calendly.com/jonathanhacklife/1to1/" target="_blank" rel="noopener noreferrer" sx={{ color: COLORS.primary }}>
                      reunión conmigo
                    </Link>
                  </>
                )
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FadeInUp delay={0.5 + (index * 0.05)}>
                  <TechFrame sx={{ height: '100%', minHeight: '110px' }}>
                    <CustomData
                      title={item.title}
                      custom={
                        <Typography variant="body2" sx={{ color: '#c8d8e8', lineHeight: 1.65 }}>
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
