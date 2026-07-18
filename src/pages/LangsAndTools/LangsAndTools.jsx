import React, { useState } from 'react'

// UI COMPONENTS
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme, Box } from '@mui/material'
import CustomLink from '../../components/CustomLink'
import Visible from '../../components/Visible'
import {
  SectionContainer,
  GlowText,
  TechFrame,
  FadeInUp,
  COLORS,
} from '../../components/CyberComponents'

// APIS
import { useData } from '../../api/codestats'

// UTILS
import { LineChart } from '../../components/Graphs'
import abbreviateNumber from '../../utils/abbreviateNumber'
import LangExp from './components/LangExp'
import { filterDatesByRange } from './helpers'

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
    return { name: key, value: xpByDate.get(key) || 0 }
  })

  const totalRangeXp     = lastNDays.reduce((acc, day) => acc + (day?.value || 0), 0)
  const dailyAverage     = totalDaysInRange ? (totalRangeXp / totalDaysInRange) : 0
  const maxDay           = lastNDays?.length ? Math.max(...lastNDays.map(d => d.value)) : 0
  const activeDays       = lastNDays?.filter(d => d.value > 0).length || 0
  const activeDayAverage = activeDays ? (totalRangeXp / activeDays) : 0
  const consistency      = totalDaysInRange ? ((activeDays / totalDaysInRange) * 100).toFixed(0) : 0

  const todayKey                = toLocalDateKey(endDate)
  const todayXp                 = xpByDate.get(todayKey) || 0
  const targetEfficiencyXp      = activeDays ? Math.floor(activeDayAverage) + 1 : 1
  const remainingXpForEfficiency = Math.max(0, targetEfficiencyXp - todayXp)

  const aboveAverageDaysSet = new Set(
    (lastNDays || []).filter((d) => d.value > dailyAverage).map((d) => d.name)
  )

  const timeRanges = [
    { label: 'Semana',    days: 7 },
    { label: '2 Semanas', days: 14 },
    { label: 'Mes',       days: 30 },
    { label: 'Trimestre', days: 90 },
    { label: 'Año',       days: 365 },
  ]

  return (
    <SectionContainer
      id="langsAndTools"
      className="section gridBackground"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 10 },
        minHeight: 'auto',
      }}
    >
      {/* Section Header */}
      <FadeInUp>
        <Stack spacing={1} sx={{ mb: 5 }}>
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
                  height: '36px',
                  background: `linear-gradient(180deg, ${COLORS.neonGreen} 0%, ${COLORS.primary} 100%)`,
                  borderRadius: '2px',
                  boxShadow: `0 0 10px ${COLORS.neonGreen}60`,
                }}
              />
              <GlowText variant="h3">
                LENGUAJES PRINCIPALES
              </GlowText>
            </Stack>

            {/* Decorative dots */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, bgcolor: COLORS.neonGreen, borderRadius: '50%', boxShadow: `0 0 10px ${COLORS.neonGreen}` }} />
              <Box sx={{ width: 48, height: 1, bgcolor: `rgba(11, 197, 234, 0.3)` }} />
              <Box sx={{ width: 5, height: 5, bgcolor: COLORS.primary, borderRadius: '50%', boxShadow: `0 0 8px ${COLORS.primary}` }} />
            </Box>
          </Stack>

          <Typography
            variant="body1"
            sx={{ color: COLORS.whiteMuted, maxWidth: '640px', lineHeight: 1.7 }}
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
        <Grid container spacing={2} sx={{ mb: 4 }}>

          {/* Promedio Diario */}
          <Grid item xs={6} sm={3}>
            <TechFrame sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="overline" sx={{ color: COLORS.whiteMuted, display: 'block' }}>
                Promedio Diario
              </Typography>
              <Typography variant="h5" sx={{ color: COLORS.primary, fontFamily: 'BlenderPro-Bold', mt: 0.5 }}>
                {abbreviateNumber(Math.round(dailyAverage))} XP
              </Typography>
              <Typography variant="caption" sx={{ color: '#8aa0bb', display: 'block', mt: 0.5 }}>
                Activos: {abbreviateNumber(Math.round(activeDayAverage))} XP
              </Typography>
            </TechFrame>
          </Grid>

          {/* Día Máximo */}
          <Grid item xs={6} sm={3}>
            <TechFrame sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="overline" sx={{ color: COLORS.whiteMuted, display: 'block' }}>
                Día Máximo
              </Typography>
              <Typography variant="h5" sx={{ color: COLORS.neonGreen, fontFamily: 'BlenderPro-Bold', mt: 0.5, textShadow: `0 0 10px ${COLORS.neonGreen}60` }}>
                {abbreviateNumber(maxDay)} XP
              </Typography>
            </TechFrame>
          </Grid>

          {/* Días Activos */}
          <Grid item xs={6} sm={3}>
            <TechFrame sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="overline" sx={{ color: COLORS.whiteMuted, display: 'block' }}>
                Días Activos
              </Typography>
              <Typography variant="h5" sx={{ color: '#f59e0b', fontFamily: 'BlenderPro-Bold', mt: 0.5 }}>
                {activeDays}/{totalDaysInRange}
              </Typography>
            </TechFrame>
          </Grid>

          {/* Consistencia */}
          <Grid item xs={6} sm={3}>
            <TechFrame sx={{ textAlign: 'center', py: 2 }}>
              <Typography variant="overline" sx={{ color: COLORS.whiteMuted, display: 'block' }}>
                Consistencia
              </Typography>
              <Typography variant="h5" sx={{ color: '#a78bfa', fontFamily: 'BlenderPro-Bold', mt: 0.5 }}>
                {consistency}%
              </Typography>
              <Typography variant="caption" sx={{ color: '#8aa0bb', display: 'block', mt: 0.5 }}>
                Total: {abbreviateNumber(totalRangeXp)} XP
              </Typography>
            </TechFrame>
          </Grid>

        </Grid>
      </FadeInUp>

      {/* Main Activity Chart */}
      <FadeInUp delay={0.4}>
        <TechFrame sx={{ p: { xs: 2, md: 3 }, position: 'relative', overflow: 'hidden' }}>

          {/* Chart header controls */}
          <Box sx={{ mb: 3 }}>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Total XP */}
              <Grid item xs={12} md={3}>
                <Stack spacing={0.25}>
                  <Typography variant="overline" sx={{ color: COLORS.whiteMuted }}>
                    Actividad Total
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: COLORS.primary,
                      fontFamily: 'BlenderPro-Bold',
                      textShadow: `0 0 12px ${COLORS.primary}60`,
                    }}
                  >
                    {total_xp ? abbreviateNumber(total_xp) : '---'} XP
                  </Typography>
                </Stack>
              </Grid>

              {/* Time Range Buttons */}
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
                        color: dayRangeState === range.days ? COLORS.dark : COLORS.primary,
                        backgroundColor: dayRangeState === range.days ? COLORS.primary : 'transparent',
                        borderColor: `${COLORS.primary}40`,
                        fontFamily: 'BlenderPro-Medium',
                        letterSpacing: '0.06em',
                        minWidth: 'auto',
                        px: 2,
                        py: 0.75,
                        fontSize: '0.9rem',
                        '&:hover': {
                          backgroundColor: dayRangeState === range.days ? '#4dd8f5' : `${COLORS.primary}12`,
                          borderColor: `${COLORS.primary}70`,
                          boxShadow: `0 0 12px ${COLORS.primary}30`,
                        },
                      }}
                    >
                      {range.label}
                    </Button>
                  ))}
                </Stack>
              </Grid>

              {/* Today XP */}
              <Visible condition={new_xp != 0}>
                <Grid item xs={12} md={3}>
                  <Stack spacing={0.25} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
                    <Typography variant="overline" sx={{ color: COLORS.whiteMuted }}>
                      Actividad de Hoy
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: COLORS.neonGreen,
                        fontFamily: 'BlenderPro-Bold',
                        textShadow: `0 0 12px ${COLORS.neonGreen}60`,
                      }}
                    >
                      +{abbreviateNumber(new_xp)} XP
                    </Typography>
                  </Stack>
                </Grid>
              </Visible>
            </Grid>
          </Box>

          {/* Chart labels */}
          <Typography variant="subtitle2" sx={{ color: COLORS.primary, mb: 1 }}>
            Actividad Diaria
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: remainingXpForEfficiency > 0 ? '#f59e0b' : COLORS.neonGreen,
              display: 'block',
              mb: 2,
              textShadow: remainingXpForEfficiency > 0
                ? '0 0 8px rgba(245, 158, 11, 0.5)'
                : `0 0 8px ${COLORS.neonGreen}50`,
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
                borderColor: COLORS.primary,
                backgroundColor: `${COLORS.primary}20`,
                borderWidth: 2,
                pointHoverRadius: 6,
                pointRadius: dayRangeState >= 90 ? 1 : 3,
                pointBackgroundColor: COLORS.primary,
                pointBorderColor: COLORS.dark,
                pointBorderWidth: 2,
                tension: 0.4,
                fill: true,
              },
              {
                label: 'Promedio',
                data: Array(lastNDays?.length).fill(dailyAverage),
                borderColor: COLORS.neonGreen,
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
              },
            ]}
          />
        </TechFrame>
      </FadeInUp>
    </SectionContainer>
  )
}

export default LangsAndTools
