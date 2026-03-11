import { Button, Paper, Stack, Typography } from '@mui/material'
import HighlightedText from './HighlightedText'

export default function MetricsPattern() {
  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
        <Typography 
          variant="h5" 
          color="primary.main"
        >
          Actividad total [124.5k]
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {['Semanal', 'Quincenal', 'Mensual', 'Trimestral', 'Anual'].map((label, index) => (
            <Button 
              key={label}
              variant="outlined" 
              color="secondary"
              sx={{
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(15px)' },
                  to: { opacity: 1, transform: 'translateY(0)' }
                },
                '&:hover': {
                  borderColor: 'rgba(0, 212, 255, 0.6)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
        <HighlightedText variant="h5">Actividad de hoy [+1.2k]</HighlightedText>
      </Stack>
      <Paper 
        elevation={0} 
        sx={{ 
          height: 150, 
          border: '1px solid', 
          borderColor: 'rgba(0, 212, 255, 0.2)', 
          bgcolor: 'dark.main',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(0, 212, 255, 0.4)',
          }
        }} 
      />
    </Stack>
  )
}
