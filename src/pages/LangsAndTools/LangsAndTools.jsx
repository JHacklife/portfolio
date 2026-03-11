import React, { useState } from 'react'

// UI COMPONENTS
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme, Box } from '@mui/material'
import CustomLink from '../../components/CustomLink'
import Visible from '../../components/Visible'
import {
  SectionContainer,
  GlowText,
  TechFrame,
  FadeInUp
} from '../../components/CyberComponents'

// APIS
import { useData } from '../../api/codestats'

// UTILS
import { LineChart } from '../../components/Graphs'
import abbreviateNumber from '../../utils/abbreviateNumber'
import LangExp from './components/LangExp'
import { filterDatesByRange } from './helpers'

/**
 * Languages & Tools Section - Skills showcase with live data
 * 
 * Features:
 * - Real-time coding statistics from Code:Stats
 * - Interactive time range selection
 * - Professional chart visualization
 * - Clean, organized layout
 */

function LangsAndTools() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const toLocalDateKey = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const formatDateKeyToLabel = (key) => {
    const [year, month, day] = String(key || '').split('-')
    if (!day || !month || !year) return key || ''

    const date = new Date(Number(year), Number(month) - 1, Number(day))
    const weekday = date.toLocaleDateString('es-ES', { weekday: 'long' })
    const weekdayCapitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1)

    return `${weekdayCapitalized} ${day}/${month}/${year}`
  }

  const [dayRangeState, setDayRangeState] = useState(14)

  const { data: { dates, languages, new_xp, total_xp } = {} } = useData("jwildemer") ?? {}

  const endDate = new Date()
  const rangeEnd = new Date(endDate)
  rangeEnd.setHours(23, 59, 59, 999)

  // Rango inclusivo: si seleccionas 14, siempre se renderizan 14 fechas hasta hoy.
  const rangeStart = new Date(endDate)
  rangeStart.setDate(endDate.getDate() - (dayRangeState - 1))
  rangeStart.setHours(0, 0, 0, 0)

  const totalDaysInRange = dayRangeState

  const filteredDates = filterDatesByRange(dates, rangeStart, rangeEnd)

  const xpByDate = new Map((filteredDates || []).map((d) => [d.name, d.value]))
  const lastNDays = Array.from({ length: totalDaysInRange }, (_, index) => {
    const current = new Date(rangeStart)
    current.setDate(rangeStart.getDate() + index)
    const key = toLocalDateKey(current)

    return {
      name: key,
      value: xpByDate.get(key) || 0,
    }
  })

  // Calcular métricas de rendimiento
  const totalRangeXp = lastNDays.reduce((acc, day) => acc + (day?.value || 0), 0)
  const dailyAverage = totalDaysInRange ? (totalRangeXp / totalDaysInRange) : 0
  const maxDay = lastNDays?.length ? Math.max(...lastNDays.map(d => d.value)) : 0
  const activeDays = lastNDays?.filter(d => d.value > 0).length || 0
  const activeDayAverage = activeDays ? (totalRangeXp / activeDays) : 0
  const consistency = totalDaysInRange ? ((activeDays / totalDaysInRange) * 100).toFixed(0) : 0

  // Meta para mejorar eficiencia en el dia actual.
  const todayKey = toLocalDateKey(endDate)
  const todayXp = xpByDate.get(todayKey) || 0
  const targetEfficiencyXp = activeDays ? Math.floor(activeDayAverage) + 1 : 1
  const remainingXpForEfficiency = Math.max(0, targetEfficiencyXp - todayXp)

  // Días por encima del promedio
  const aboveAverageDaysSet = new Set(
    (lastNDays || [])
      .filter((d) => d.value > dailyAverage)
      .map((d) => d.name)
  )

  const timeRanges = [
    { label: 'Semana', days: 7 },
    { label: '2 Semanas', days: 14 },
    { label: 'Mes', days: 30 },
    { label: 'Trimestre', days: 90 },
    { label: 'Año', days: 365 },
  ]

  return (
    <SectionContainer
      id="langsAndTools"
      className="section gridBackground"
      sx={{
        py: { xs: 6, md: 8 },
        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 6,
          xl: 10,
        },
        minHeight: 'auto',
      }}
    >
      {/* Section Header */}
      <FadeInUp>
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={2}
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
                LENGUAJES PRINCIPALES
              </GlowText>
            </Stack>

            {/* Decorative element */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box sx={{ width: 6, height: 6, bgcolor: '#8DBAF5', borderRadius: '50%' }} />
              <Box sx={{ width: 40, height: 1, bgcolor: 'rgba(141, 186, 245, 0.3)' }} />
              <Box sx={{ width: 4, height: 4, bgcolor: 'rgba(141, 186, 245, 0.5)', borderRadius: '50%' }} />
            </Box>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: '#a0b0c0',
              maxWidth: '600px',
              lineHeight: 1.6,
              fontSize: { xs: '0.95rem', md: '1rem' },
            }}
          >
            Estadísticas de programación en tiempo real impulsadas por{' '}
            <CustomLink fuente="https://codestats.net/users/jwildemer" color="primary">
              Code:Stats
            </CustomLink>
            . Los datos se actualizan automáticamente mientras programo.
          </Typography>
        </Stack>
      </FadeInUp>

      {/* Languages Grid */}
      <FadeInUp delay={0.1}>
        <Grid container spacing={2} sx={{ mb: 5 }}>
          {languages?.slice(0, !isMobile ? 5 : 6).map((lang, index) => (
            <Grid key={index} item xs={6} sm={4} md={4} lg>
              <LangExp
                lang={lang?.name}
                exp={lang?.value?.xps}
                newExp={lang?.value?.new_xps}
              />
            </Grid>
          ))}
        </Grid>
      </FadeInUp>

      {/* Performance Metrics */}
      <FadeInUp delay={0.3}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6} sm={3}>
            <TechFrame sx={{ textAlign: 'center', py: 1.5 }}>
              <Typography variant="overline" sx={{ color: '#808898', fontSize: '0.72rem' }}>
                Promedio Diario
              </Typography>
              <Typography variant="body1" sx={{ color: '#8DBAF5', fontFamily: 'BlenderPro-Bold', mt: 0.5, fontSize: '1rem' }}>
                {abbreviateNumber(Math.round(dailyAverage))} XP
              </Typography>
              <Typography variant="caption" sx={{ color: '#8aa0bb', display: 'block', mt: 0.5, fontSize: '0.72rem' }}>
                Activos: {abbreviateNumber(Math.round(activeDayAverage))} XP
              </Typography>
            </TechFrame>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TechFrame sx={{ textAlign: 'center', py: 1.5 }}>
              <Typography variant="overline" sx={{ color: '#808898', fontSize: '0.72rem' }}>
                Día Máximo
              </Typography>
              <Typography variant="body1" sx={{ color: '#4ade80', fontFamily: 'BlenderPro-Bold', mt: 0.5, fontSize: '1rem' }}>
                {abbreviateNumber(maxDay)} XP
              </Typography>
            </TechFrame>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TechFrame sx={{ textAlign: 'center', py: 1.5 }}>
              <Typography variant="overline" sx={{ color: '#808898', fontSize: '0.72rem' }}>
                Días Activos
              </Typography>
              <Typography variant="body1" sx={{ color: '#f59e0b', fontFamily: 'BlenderPro-Bold', mt: 0.5, fontSize: '1rem' }}>
                {activeDays}/{totalDaysInRange}
              </Typography>
            </TechFrame>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TechFrame sx={{ textAlign: 'center', py: 1.5 }}>
              <Typography variant="overline" sx={{ color: '#808898', fontSize: '0.72rem' }}>
                Consistencia
              </Typography>
              <Typography variant="body1" sx={{ color: '#a78bfa', fontFamily: 'BlenderPro-Bold', mt: 0.5, fontSize: '1rem' }}>
                {consistency}%
              </Typography>
              <Typography variant="caption" sx={{ color: '#8aa0bb', display: 'block', mt: 0.5, fontSize: '0.72rem' }}>
                Total: {abbreviateNumber(totalRangeXp)} XP
              </Typography>
            </TechFrame>
          </Grid>
        </Grid>
      </FadeInUp>

      {/* Charts */}
      <Stack spacing={2}>
        {/* Main Activity Chart */}
        <Box>
          <FadeInUp delay={0.4}>
            <TechFrame sx={{ p: { xs: 2, md: 2.5 }, position: 'relative', overflow: 'hidden' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  right: 12,
                  zIndex: 2,
                  p: 0,
                }}
              >
                <Grid
                  container
                  spacing={1.25}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item xs={12} md={3}>
                    <Stack spacing={0.25}>
                      <Typography
                        variant="overline"
                        sx={{ color: '#aeb7c2', letterSpacing: '0.1em', fontSize: '0.72rem', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                      >
                        Actividad Total
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#8DBAF5',
                          fontFamily: 'BlenderPro-Bold',
                          fontSize: { xs: '1.2rem', md: '1.35rem' },
                          textShadow: '0 2px 6px rgba(0,0,0,0.85)',
                        }}
                      >
                        {total_xp ? abbreviateNumber(total_xp) : '---'} XP
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      justifyContent={{ xs: 'flex-start', md: 'center' }}
                      sx={{ gap: 1 }}
                    >
                      {timeRanges.map((range) => (
                        <Button
                          key={range.days}
                          variant={dayRangeState === range.days ? 'contained' : 'outlined'}
                          size="small"
                          onClick={() => setDayRangeState(range.days)}
                          sx={{
                            color: dayRangeState === range.days ? '#0a0a0f' : '#8DBAF5',
                            backgroundColor: dayRangeState === range.days ? '#8DBAF5' : 'transparent',
                            borderColor: 'rgba(141, 186, 245, 0.3)',
                            fontSize: '0.82rem',
                            fontFamily: 'BlenderPro-Medium',
                            letterSpacing: '0.05em',
                            minWidth: 'auto',
                            px: 2,
                            py: 0.75,
                            '&:hover': {
                              backgroundColor: dayRangeState === range.days ? '#B5D4FF' : 'rgba(141, 186, 245, 0.08)',
                              borderColor: 'rgba(141, 186, 245, 0.5)',
                            }
                          }}
                        >
                          {range.label}
                        </Button>
                      ))}
                    </Stack>
                  </Grid>
                  <Visible condition={new_xp != 0}>
                    <Grid item xs={12} md={3}>
                      <Stack spacing={0.25} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
                        <Typography
                          variant="overline"
                          sx={{ color: '#aeb7c2', letterSpacing: '0.1em', fontSize: '0.72rem', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                        >
                          Actividad de Hoy
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#4ade80',
                            fontFamily: 'BlenderPro-Bold',
                            fontSize: { xs: '1.2rem', md: '1.35rem' },
                            textShadow: '0 2px 6px rgba(0,0,0,0.85)',
                          }}
                        >
                          +{abbreviateNumber(new_xp)} XP
                        </Typography>
                      </Stack>
                    </Grid>
                  </Visible>
                </Grid>
              </Box>
              <Typography variant="subtitle2" sx={{ color: '#8DBAF5', mb: 1.5, mt: { xs: 10, md: 7 }, fontFamily: 'BlenderPro-Medium' }}>
                Actividad Diaria
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: remainingXpForEfficiency > 0 ? '#f59e0b' : '#4ade80',
                  display: 'block',
                  mb: 1,
                  fontSize: '0.78rem',
                  letterSpacing: '0.03em',
                }}
              >
                {remainingXpForEfficiency > 0
                  ? `Meta de eficiencia hoy: te faltan +${abbreviateNumber(remainingXpForEfficiency)} XP (objetivo: ${abbreviateNumber(targetEfficiencyXp)} XP)`
                  : `Meta de eficiencia hoy: objetivo cumplido (${abbreviateNumber(targetEfficiencyXp)} XP)`}
              </Typography>
              <LineChart
                responsive
                height={isMobile ? 240 : 300}
                maintainAspectRatio={false}
                valueX={lastNDays?.map(date => formatDateKeyToLabel(date?.name))}
                valueY={lastNDays?.map(date => date?.value)}
                datasets={[
                  {
                    label: 'Actividad (XP)',
                    data: lastNDays?.map(date => date?.value),
                    borderColor: '#8DBAF5',
                    backgroundColor: 'rgba(141, 186, 245, 0.15)',
                    borderWidth: 2,
                    pointHoverRadius: 6,
                    pointRadius: dayRangeState >= 90 ? 1 : 3,
                    pointBackgroundColor: '#8DBAF5',
                    pointBorderColor: '#0a0a0f',
                    pointBorderWidth: 2,
                    tension: 0.4,
                    fill: true,
                  },
                  {
                    label: 'Promedio',
                    data: Array(lastNDays?.length).fill(dailyAverage),
                    borderColor: '#4ade80',
                    borderWidth: 1.5,
                    borderDash: [6, 3],
                    pointRadius: 0,
                    tension: 0,
                    fill: false,
                  },
                  {
                    label: 'Sobre promedio',
                    data: lastNDays?.map((date) => (aboveAverageDaysSet.has(date?.name) ? date?.value : null)),
                    showLine: false,
                    borderWidth: 0,
                    pointRadius: isMobile ? 5 : 6,
                    pointHoverRadius: isMobile ? 7 : 8,
                    pointBackgroundColor: '#f59e0b',
                    pointBorderColor: '#fff7e6',
                    pointBorderWidth: 2,
                  },
                  {
                    label: 'Meta eficiencia',
                    data: Array(lastNDays?.length).fill(targetEfficiencyXp),
                    borderColor: '#f59e0b',
                    borderWidth: 1.5,
                    borderDash: [4, 4],
                    pointRadius: 0,
                    tension: 0,
                    fill: false,
                  }
                ]}
              />
            </TechFrame>
          </FadeInUp>
        </Box>
      </Stack>
    </SectionContainer>
  )
}

export default LangsAndTools
