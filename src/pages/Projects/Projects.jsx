import { Grid } from '@mui/material'
import React from 'react'
import Project from './components/Project'
import projects from './projects.json'

function Projects() {
  return (
    <Grid id="langsAndTools" className="welcome" justifyContent="center" alignItems="center" container spacing={1} px={2}>
      {projects.filter((py) => !["Cal Construcciones", "Consecuencia Ventures", "Latin Business Today"].includes(py.Nombre)).map((project, index) => (
        <Grid item md={3} key={index}>
          <Project img={project.Imagen} title={project.Nombre} tools={project.Tags} url={project.Link}
            description={project.Subtitulo} link={project.Link} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Projects