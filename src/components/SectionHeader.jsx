import { Stack, Typography } from '@mui/material'
import Square from './Adornos'

export default function SectionHeader({ title, subtitle, squareColor = 'grey' }) {
  return (
    <Stack 
      direction="row" 
      justifyContent="space-between" 
      alignItems="center" 
      spacing={1}
      sx={{
        animation: 'fadeInUp 0.5s ease-out',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(15px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        }
      }}
    >
      <Stack spacing={1}>
        <Typography 
          variant="h3" 
          bgcolor="primary.main" 
          color="primary.dark" 
          px={1} 
          width="fit-content"
          sx={{
            textShadow: '0 0 8px rgba(0, 212, 255, 0.4)',
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography 
            variant="subtitle1custom" 
            color="secondary.main" 
            align="left"
          >
            {subtitle}
          </Typography>
        )}
      </Stack>
      <Square color={squareColor} />
    </Stack>
  )
}
