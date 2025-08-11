import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Project from './components/Project'
import projects from './projects.json'
import Square from '../../components/Adornos'

function Projects() {
  const projectsNotIncludes = [
    "Consecuencia Ventures",
    //"Latin Business Today",
    //"Mail Template",
    "InventApp",
    //"Codestats App"
  ]
  return (
    <Stack id="projects" className="section gridBackground" gap={5} sx={{
      py: 5,
      px: {
        xs: 2, // Tamaño para dispositivos móviles
        sm: '1.2rem', // Tamaño para dispositivos pequeños
        md: 3, // Tamaño para dispositivos medianos
        lg: 10, // Tamaño para dispositivos grandes
        xl: '15rem', // Tamaño para dispositivos extra grandes
      },
    }}>

      {/* TITULO */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="h3" bgcolor="primary.main" color="primary.dark" align="left" px={1}>Proyectos</Typography>
        </Stack>
        <Square color="grey" />
      </Stack>

      {/* PROYECTOS */}
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        {projects
          .filter(({ Nombre }) => !projectsNotIncludes.includes(Nombre))
          .map(({ Nombre, Tipo, Tags, Link, Subtitulo, Imagen }, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
              <Project
                title={Nombre}
                type={Tipo}
                tools={Tags}
                url={Link}
                description={Subtitulo}
                link={Link}
                img={Imagen}
              />
            </Grid>
          ))}
      </Grid>
    </Stack>
  )
}

export default Projects