import { Grid, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import Project from './components/Project'
import projects from './projects.json'
import { SectionContainer, GlowText, CyberDivider, FadeInUp } from '../../components/CyberComponents'

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
                height: '32px',
                background: 'linear-gradient(180deg, #8DBAF5 0%, transparent 100%)',
                borderRadius: '2px',
              }}
            />
            <GlowText variant="h3" sx={{ fontWeight: 600 }}>
              PROJECTS
            </GlowText>
          </Stack>
          
          {/* Decorative element */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box sx={{ width: 6, height: 6, bgcolor: '#8DBAF5', borderRadius: '50%' }} />
            <Box sx={{ width: 40, height: 1, bgcolor: 'rgba(141, 186, 245, 0.3)' }} />
            <Box sx={{ width: 4, height: 4, bgcolor: 'rgba(141, 186, 245, 0.5)', borderRadius: '50%' }} />
          </Box>
        </Stack>
      </FadeInUp>

      {/* Project subtitle */}
      <FadeInUp delay={0.1}>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#a0b0c0', 
            mb: 5, 
            maxWidth: '600px',
            lineHeight: 1.7,
          }}
        >
          A selection of professional projects showcasing full-stack development, 
          modern UI/UX design, and innovative solutions.
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
