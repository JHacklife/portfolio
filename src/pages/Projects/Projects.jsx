import { Grid, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import Project from './components/Project'
import projects from './projects.json'
import { SectionContainer, GlowText, CyberDivider, FadeInUp, COLORS } from '../../components/CyberComponents'

/**
 * Projects Section - Professional Portfolio Showcase
 * 
 * Features:
 * - Clean grid layout with elegant card hover effects
 * - Professional section header with accent styling
 * - Staggered fade-in animations for cards
 */

function Projects() {
  const projectsNotIncludes = [
    "Consecuencia Ventures",
    "InventApp",
  ]

  return (
    <SectionContainer 
      id="projects" 
      className="section gridBackground"
      sx={{
        py: { xs: 6, md: 8 },
        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 8,
          xl: 12,
        },
        minHeight: 'auto',
      }}
    >
      {/* Section Header */}
      <FadeInUp>
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                width: '4px',
                height: '36px',
                background: `linear-gradient(180deg, ${COLORS.neonGreen} 0%, ${COLORS.primary} 100%)`,
                borderRadius: '2px',
                boxShadow: `0 0 10px ${COLORS.neonGreen}60`,
              }}
            />
            <GlowText variant="h3">
              PROYECTOS
            </GlowText>
          </Stack>

          {/* Decorative dots */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box sx={{ width: 8, height: 8, bgcolor: COLORS.neonGreen, borderRadius: '50%', boxShadow: `0 0 10px ${COLORS.neonGreen}` }} />
            <Box sx={{ width: 48, height: 1, bgcolor: `rgba(11, 197, 234, 0.3)` }} />
            <Box sx={{ width: 5, height: 5, bgcolor: COLORS.primary, borderRadius: '50%', boxShadow: `0 0 8px ${COLORS.primary}` }} />
          </Box>
        </Stack>
      </FadeInUp>

      {/* Project subtitle */}
      <FadeInUp delay={0.1}>
        <Typography
          variant="body1"
          sx={{ color: COLORS.whiteMuted, mb: 5, maxWidth: '640px' }}
        >
          Una selección de proyectos profesionales que muestran desarrollo full-stack, 
          diseño moderno UI/UX y soluciones innovadoras.
        </Typography>
      </FadeInUp>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        {projects
          .filter(({ Nombre }) => !projectsNotIncludes.includes(Nombre))
          .map(({ Nombre, Tipo, Tags, Link, Subtitulo, Imagen }, index) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
              <FadeInUp delay={0.1 + (index * 0.05)}>
                <Project
                  title={Nombre}
                  type={Tipo}
                  tools={Tags}
                  url={Link}
                  description={Subtitulo}
                  link={Link}
                  img={Imagen}
                />
              </FadeInUp>
            </Grid>
          ))}
      </Grid>
    </SectionContainer>
  )
}

export default Projects
