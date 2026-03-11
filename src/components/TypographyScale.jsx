import { Stack, Typography } from '@mui/material'

export default function TypographyScale() {
  return (
    <Stack spacing={1} alignItems="flex-start">
      <Typography 
        variant="h1"
        sx={{
          animation: 'fadeInUp 0.5s ease-out 0s both',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(15px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        H1 - Jonathan Wildemer
      </Typography>
      <Typography 
        variant="h2"
        sx={{
          animation: 'fadeInUp 0.5s ease-out 0.1s both',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(15px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        H2 - Seccion Principal
      </Typography>
      <Typography 
        variant="h3"
        sx={{
          animation: 'fadeInUp 0.5s ease-out 0.2s both',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(15px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        H3 - Encabezado de modulo
      </Typography>
      <Typography 
        variant="h4custom"
        sx={{
          animation: 'fadeInUp 0.5s ease-out 0.3s both',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(15px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        H4 Custom - Fullstack Web & Mobile Developer
      </Typography>
      <Typography 
        variant="h6custom"
        sx={{
          animation: 'fadeInUp 0.5s ease-out 0.4s both',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(15px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        H6 Custom - Texto destacado para narrativa
      </Typography>
      <Typography 
        variant="body1custom"
        sx={{
          animation: 'fadeInUp 0.5s ease-out 0.5s both',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(15px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        Body1 Custom - Texto descriptivo de contenido.
      </Typography>
      <Typography 
        variant="captioncustom"
        sx={{
          animation: 'fadeInUp 0.5s ease-out 0.6s both',
          '@keyframes fadeInUp': {
            from: { opacity: 0, transform: 'translateY(15px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        Caption Custom - Metadata, etiquetas y notas
      </Typography>
    </Stack>
  )
}
