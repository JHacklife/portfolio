import React, { useState } from 'react'

// UI COMPONENTS
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Square from '../../components/Adornos'
import CustomLink from '../../components/CustomLink'
import Visible from '../../components/Visible'

// ICONS

// APIS
import { useData } from '../../api/codestats'

// PROVIDERS

// UTILS
import { LineChart } from '../../components/Graphs'
import abbreviateNumber from '../../utils/abbreviateNumber'
import LangExp from './components/LangExp'
import { calcularMedia as calcularPromedio, calcularPromedioMinMax as calcularMediaMinMax, filterDatesByRange } from './helpers'

function LangsAndTools() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const [dayRangeState, setDayRangeState] = useState(14)

  const { data: { dates, languages, new_xp, total_xp } = {} } = useData("jwildemer") ?? {}

  const endDate = new Date() // Fecha actual
  const startDate = new Date().setDate(endDate.getDate() - dayRangeState) // Resta 7 días

  const lastNDays = filterDatesByRange(dates, startDate, endDate)

  return (
    <Stack id="langsAndTools" className="section gridBackground" spacing={5} sx={{
      py: 5,
      px: {
        xs: '2rem', // Tamaño para dispositivos móviles
        sm: '1.2rem', // Tamaño para dispositivos pequeños
        md: '3rem', // Tamaño para dispositivos medianos
        lg: '5rem', // Tamaño para dispositivos grandes
        xl: '15rem', // Tamaño para dispositivos extra grandes
      },
    }}>

      {/* TITULO */}
      <Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h3" bgcolor="primary.main" color="primary.dark" align="left" px={1}>Top 5 Lenguajes</Typography>
            <Visible condition={!isMobile}>
              <Stack>
                <Typography variant="subtitle1custom" color="text.main" align="left" mt={0} width="100%">
                  Experiencia en lenguajes proporcionada por <CustomLink fuente="https://codestats.net/users/jwildemer" color="tertiary">Code:Stats</CustomLink>
                </Typography>
                <Typography variant="subtitle1custom" color="text.main" align="left" mt={0} width="100%">
                  Todos los datos se actualizan en tiempo real mientras desarrollo mis actividades.
                </Typography>
              </Stack>
            </Visible>
          </Stack>
          <Square color="grey" />
        </Stack>

        <Visible condition={isMobile}>
          <Stack>
            <Typography variant="subtitle1custom" color="text.main" align="left" mt={0} width="100%">
              Experiencia en lenguajes proporcionada por <CustomLink fuente="https://codestats.net/users/jwildemer" color="tertiary">Code:Stats</CustomLink>
            </Typography>
            <Typography variant="subtitle1custom" color="text.main" align="left" mt={0} width="100%">
              Todos los datos se actualizan en tiempo real mientras desarrollo mis actividades.
            </Typography>
          </Stack>
        </Visible>
      </Stack>

      {/* LENGUAJES */}
      <Grid container justifyContent="space-between" spacing={1}>
        {languages?.slice(0, !isMobile ? 5 : 6).map((lang, index) => <Grid key={index} item xs={6} sm={6} md={4} lg xl>
          <LangExp lang={lang?.name} exp={lang?.value?.xps} newExp={lang?.value?.new_xps} />
        </Grid>)}
      </Grid>

      {/* MÉTRICAS */}
      <Grid container gap={1} sx={{
        justifyContent: {
          xs: 'center', // Tamaño para dispositivos móviles
          md: 'space-between', // Tamaño para dispositivos medianos
        }
      }} alignItems="center">

        {/* ACTIVIDAD TOTAL */}
        <Grid item xs sm md lg xl>
          <Typography className="scale" variant="h5" color="primary.main" px={1} width="fit-content">
            Actividad total <Visible condition={total_xp != 0}>[{abbreviateNumber(total_xp)}]</Visible>
          </Typography>
        </Grid>

        {/* BOTONERA */}
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Grid container gap={1}>
            <Grid item xs sm md lg xl>
              <Button variant="outlined" fullWidth color="secondary" onClick={() => setDayRangeState(7)}>Semanal</Button>
            </Grid>
            <Grid item xs sm md lg xl>
              <Button variant="outlined" fullWidth color="secondary" onClick={() => setDayRangeState(14)}>Quincenal</Button>
            </Grid>
            <Grid item xs sm md lg xl>
              <Button variant="outlined" fullWidth color="secondary" onClick={() => setDayRangeState(30)}>Mensual</Button>
            </Grid>
            <Grid item xs sm md lg xl>
              <Button variant="outlined" fullWidth color="secondary" onClick={() => setDayRangeState(90)}>Trimestral</Button>
            </Grid>
            <Grid item xs sm md lg xl>
              <Button variant="outlined" fullWidth color="secondary" onClick={() => setDayRangeState(365)}>Anual</Button>
            </Grid>
          </Grid>
        </Grid>

        {/* ACTIVIDAD ACTUAL */}
        <Visible condition={new_xp != 0}>
          <Grid item xs sm md lg xl>
            <Typography className="scale" variant="h5" bgcolor="primary.main" color="primary.dark" px={1} width="fit-content">
              Actividad de hoy [+{abbreviateNumber(new_xp)}]
            </Typography>
          </Grid>
        </Visible>
      </Grid>

      <LineChart label="Actividad" responsive
        height={!isMobile ? "120px" : "300px"}
        mantainAspectRatio={false}
        labelX="Días"
        labelY="Actividad (xp)"
        valueX={lastNDays?.map(date => date?.name)}
        valueY={lastNDays?.map(date => date?.value)}
        datasets={[{
          label: `Actividad (xp)`,
          data: lastNDays?.map(date => date?.value),
          borderWidth: 2,
          pointHoverRadius: dayRangeState >= 90 ? 10 : 15,
          pointRadius: dayRangeState >= 90 ? 2 : 8,
          pointStyle: dayRangeState >= 90 ? 'circle' : 'rectRot',
          tension: 0.1
        },
        /* {
          label: `Logarítmica`,
          data: lastNDays?.map(date => Math.log(date?.value) * 1000), // applying logarithmic scale to the data and converting to thousands
          borderWidth: 2,
          pointRadius: 8,
          pointStyle: false,
          tension: 0.5
        }, */
        /* {
          label: `Media`,
          data: Array(lastNDays?.length).fill(calcularMediaMinMax(lastNDays?.map(date => date?.value))),
          borderWidth: 2,
          pointRadius: 8,
          pointStyle: false,
        }, */
        {
          label: `Promedio`,
          data: Array(lastNDays?.length).fill(calcularPromedio(lastNDays?.map(date => date?.value))),
          borderWidth: 2,
          pointRadius: 8,
          pointStyle: false,
        }
        ]}
      />
    </Stack>
  )
}

export default LangsAndTools
