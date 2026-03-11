import { Paper, Stack, Typography, useTheme } from '@mui/material'

export default function ColorPalette() {
  const theme = useTheme()

  return (
    <Stack spacing={1}>
      <Typography variant="body2custom">Paleta de colores del sistema</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {Object.keys(theme.palette).slice(0, 12).map((key, index) => (
          <Paper 
            key={key} 
            sx={{ 
              p: 1, 
              bgcolor: theme.palette[key]?.main || 'grey.main', 
              minWidth: 80, 
              minHeight: 60,
              border: '1px solid rgba(0, 212, 255, 0.2)',
              transition: 'all 0.3s ease',
              animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(15px)' },
                to: { opacity: 1, transform: 'translateY(0)' }
              },
              '&:hover': {
                transform: 'translateY(-3px)',
                borderColor: 'rgba(0, 212, 255, 0.4)',
              }
            }}
          >
            <Typography variant="captioncustom">{key}</Typography>
          </Paper>
        ))}
      </Stack>
    </Stack>
  )
}
