import { Grid } from '@mui/material'
import React from 'react'
import Project from './components/Project'
import projects from './projects.json'

function Projects() {
  const projectsNotIncludes = ["Cal Construcciones", "Consecuencia Ventures", "Latin Business Today"]
  return (
    <Grid id="langsAndTools" className="section gridBackground" justifyContent="center" alignItems="center" container spacing={1} sx={{
      py: 10,
      mt: 0,
      px: {
        xs: 10, // Tamaño de fuente para dispositivos móviles
        sm: '1.2rem', // Tamaño de fuente para dispositivos pequeños
        md: 4, // Tamaño de fuente para dispositivos medianos
        lg: 2, // Tamaño de fuente para dispositivos grandes
        xl: '20rem', // Tamaño de fuente para dispositivos extra grandes
      }
    }}>
      {projects.filter((py) => !projectsNotIncludes.includes(py.Nombre)).map((project, index) => (
        <Grid item md={4} lg={3} key={index}>
          <Project
            title={project.Nombre}
            type={project.Tipo}
            tools={project.Tags}
            url={project.Link}
            description={project.Subtitulo}
            link={project.Link}
            img={project.Imagen}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Projects