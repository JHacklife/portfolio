import { Grid, Paper, Stack, Typography } from '@mui/material'
import HighlightedText from './HighlightedText'

export default function AboutContent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper 
          elevation={0} 
          sx={{ 
            border: '1px solid', 
            borderColor: 'rgba(0, 212, 255, 0.2)', 
            aspectRatio: '3 / 4', 
            bgcolor: 'dark.main',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(0, 212, 255, 0.4)',
            }
          }} 
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack spacing={1} alignItems="flex-start">
          <HighlightedText>Jonathan C. Wildemer</HighlightedText>
          <Typography 
            variant="h4custom" 
            color="secondary.main" 
            align="left"
          >
            FULLSTACK DEVELOPER EN INFINITE LABS
          </Typography>
          <Typography 
            variant="h6custom" 
            color="text.main" 
            align="left"
          >
            Bloque de descripcion profesional extendida con foco en liderazgo tecnico, ejecucion y resultados.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}
