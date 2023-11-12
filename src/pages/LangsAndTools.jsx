import React, { useState } from 'react'

// UI COMPONENTS
import { Grid, Link, Stack, Typography } from '@mui/material'
import Square from '../components/Adornos'

// ICONS

// APIS

// PROVIDERS

// UTILS

function LangsAndTools() {

  function LangExp({ lang, exp }) {
    return (
      <Stack spacing={0.5}>
        <Typography variant="h2" fontSize={"4.66rem"} color="tertiary.main" align="left">{exp}k</Typography>
        <Typography variant="body1" bgcolor="tertiary.main" color="black.main" align="left" px={1} width="100%"><b>{lang}</b></Typography>
      </Stack>
    );
  }

  return (
    <Grid id="langsAndTools" className="welcome" justifyContent="center" alignItems="center" container sx={{
      px: {
        xs: '0.5rem', // Tamaño de fuente para dispositivos móviles
        sm: '1.2rem', // Tamaño de fuente para dispositivos pequeños
        md: '5rem', // Tamaño de fuente para dispositivos medianos
        lg: '10rem', // Tamaño de fuente para dispositivos grandes
        xl: '20rem', // Tamaño de fuente para dispositivos extra grandes
      },
    }}>

      <Grid item md flexWrap="wrap">
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Typography variant="h3" bgcolor="tertiary.main" color="black.main" align="left" px={1}>Top 5 Lenguajes</Typography>
          <Square color="grey" />
        </Stack>

        <Typography variant="subtitle1custom" color="tertiary.main" align="left" mt={0} width="100%">Experiencia en lenguajes proporcionada por <Link href="https://codestats.net/users/jwildemer" target="_blank">Code:Stats</Link>
          <br></br>Todos los datos se actualizan en tiempo real mientras trabajo.
        </Typography>

        <Grid container justifyContent="space-between">
          <Grid item xs={6} md={2}>
            <LangExp lang="Dart" exp="646" />
          </Grid>
          <Grid item xs={6} md={2}>
            <LangExp lang="Javascript" exp="370" />
          </Grid>
          <Grid item xs={6} md={2}>
            <LangExp lang="React" exp="363" />
          </Grid>
          <Grid item xs={6} md={2}>
            <LangExp lang="Python" exp="248" />
          </Grid>
          <Grid item xs={6} md={2}>
            <LangExp lang="HTML" exp="118" />
          </Grid>
        </Grid>

        <Typography variant="h5" bgcolor="tertiary.main" color="black.main" align="left" mt={4} px={1} width="fit-content">Actividad de hoy</Typography>
      </Grid>
    </Grid>
  )
}

export default LangsAndTools
