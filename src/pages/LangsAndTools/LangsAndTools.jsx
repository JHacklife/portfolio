import React, { useState } from 'react'

// UI COMPONENTS
import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import Square from '../../components/Adornos'
import Visible from '../../components/Visible'

// ICONS

// APIS
import { sortLanguages, useData, getLevel } from '../../api/codestats'

// PROVIDERS

// UTILS
import LangExp from './components/LangExp'
import abbreviateNumber from '../../utils/abbreviateNumber'

function LangsAndTools() {

  const { data: { languages, new_xp, total_xp } = {} } = useData("jwildemer") ?? {};
  const lenguajes = languages ?? null;

  return (
    <Grid id="langsAndTools" className="welcome" justifyContent="center" alignItems="center" container sx={{
      px: {
        xs: '0.5rem', // Tamaño de fuente para dispositivos móviles
        sm: '1.2rem', // Tamaño de fuente para dispositivos pequeños
        md: '3rem', // Tamaño de fuente para dispositivos medianos
        lg: '5rem', // Tamaño de fuente para dispositivos grandes
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
          {lenguajes?.slice(0, 5).map((lang, index) => <Grid key={index} item xs={6} md={2}>
            <LangExp lang={lang?.name} exp={lang?.value?.xps} newExp={lang?.value?.new_xps} />
          </Grid>)}
        </Grid>

        <Stack direction="row" justifyContent="space-between" mt={4}>
          <Typography className="scale" variant="h5" bgcolor="tertiary.main" color="black.main" align="left" px={1} width="fit-content">
            Actividad total <Visible condition={total_xp != 0}>[{abbreviateNumber(total_xp)}]</Visible>
          </Typography>
          <Typography className="scale" variant="h5" bgcolor="black.main" color="primary.main" align="left" px={1} width="fit-content">
            Actividad de hoy <Visible condition={new_xp != 0}>[+{abbreviateNumber(new_xp)}]</Visible>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LangsAndTools
