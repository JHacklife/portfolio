import React, { useState } from 'react'

// UI COMPONENTS
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme, Box } from '@mui/material'
import CustomLink from '../../components/CustomLink'
import Visible from '../../components/Visible'
import { 
  SectionContainer, 
  GlowText, 
  TechFrame,
  CyberButton,
  FadeInUp 
} from '../../components/CyberComponents'

// APIS
import { useData } from '../../api/codestats'

// UTILS
import { LineChart } from '../../components/Graphs'
import abbreviateNumber from '../../utils/abbreviateNumber'
import LangExp from './components/LangExp'
import { calcularMedia as calcularPromedio, filterDatesByRange } from './helpers'

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

  const [dayRangeState, setDayRangeState] = useState(14)

  const { data: { dates, languages, new_xp, total_xp } = {} } = useData("jwildemer") ?? {}

  const endDate = new Date()
  const startDate = new Date().setDate(endDate.getDate() - dayRangeState)

  const lastNDays = filterDatesByRange(dates, startDate, endDate)

  const timeRanges = [
    { label: 'Week', days: 7 },
    { label: '2 Weeks', days: 14 },
    { label: 'Month', days: 30 },
    { label: 'Quarter', days: 90 },
    { label: 'Year', days: 365 },
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
                TOP LANGUAGES
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
            }}
          >
            Real-time coding statistics powered by{' '}
            <CustomLink fuente="https://codestats.net/users/jwildemer" color="primary">
              Code:Stats
            </CustomLink>
            . Data updates automatically as I code.
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

      {/* Activity Metrics */}
      <FadeInUp delay={0.2}>
        <TechFrame sx={{ mb: 4 }}>
          <Grid 
            container 
            spacing={2}
            justifyContent="space-between" 
            alignItems="center"
          >
            {/* Total Activity */}
            <Grid item xs={12} md={3}>
              <Stack spacing={0.5}>
                <Typography 
                  variant="overline" 
                  sx={{ color: '#808898', letterSpacing: '0.1em' }}
                >
                  Total Activity
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#8DBAF5',
                    fontFamily: 'BlenderPro-Bold',
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
                      color: dayRangeState === range.days ? '#0a0a0f' : '#8DBAF5',
                      backgroundColor: dayRangeState === range.days ? '#8DBAF5' : 'transparent',
                      borderColor: 'rgba(141, 186, 245, 0.3)',
                      fontSize: '0.75rem',
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

            {/* Today's Activity */}
            <Visible condition={new_xp != 0}>
              <Grid item xs={12} md={3}>
                <Stack spacing={0.5} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
                  <Typography 
                    variant="overline" 
                    sx={{ color: '#808898', letterSpacing: '0.1em' }}
                  >
                    Today's Activity
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#4ade80',
                      fontFamily: 'BlenderPro-Bold',
                    }}
                  >
                    +{abbreviateNumber(new_xp)} XP
                  </Typography>
                </Stack>
              </Grid>
            </Visible>
          </Grid>
        </TechFrame>
      </FadeInUp>

      {/* Chart */}
      <FadeInUp delay={0.3}>
        <TechFrame sx={{ p: { xs: 2, md: 3 } }}>
          <LineChart 
            label="Activity" 
            responsive
            height={!isMobile ? "140px" : "300px"}
            mantainAspectRatio={false}
            labelX="Days"
            labelY="Activity (xp)"
            valueX={lastNDays?.map(date => date?.name)}
            valueY={lastNDays?.map(date => date?.value)}
            datasets={[
              {
                label: `Activity (xp)`,
                data: lastNDays?.map(date => date?.value),
                borderColor: '#8DBAF5',
                backgroundColor: 'rgba(141, 186, 245, 0.1)',
                borderWidth: 2,
                pointHoverRadius: dayRangeState >= 90 ? 8 : 12,
                pointRadius: dayRangeState >= 90 ? 2 : 6,
                pointBackgroundColor: '#8DBAF5',
                pointBorderColor: '#0a0a0f',
                pointBorderWidth: 2,
                pointStyle: dayRangeState >= 90 ? 'circle' : 'rectRot',
                tension: 0.3,
                fill: true,
              },
              {
                label: `Average`,
                data: Array(lastNDays?.length).fill(calcularPromedio(lastNDays?.map(date => date?.value))),
                borderColor: 'rgba(141, 186, 245, 0.4)',
                borderWidth: 1,
                borderDash: [5, 5],
                pointRadius: 0,
                pointStyle: false,
              }
            ]}
          />
        </TechFrame>
      </FadeInUp>
    </SectionContainer>
  )
}

export default LangsAndTools
