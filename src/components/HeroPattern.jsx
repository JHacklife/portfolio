import { Button, Chip, Grid, Paper, Stack, Typography } from '@mui/material'

export default function HeroPattern() {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={8}>
        <Stack spacing={2} alignItems="flex-start">
          <Stack spacing={0.2}>
            <Typography 
              variant="h1" 
              sx={{ 
                lineHeight: 0.88,
                textShadow: '0 0 8px rgba(0, 212, 255, 0.4)',
              }}
            >
              JONATHAN
            </Typography>
            <Typography 
              variant="h1" 
              sx={{ 
                lineHeight: 0.88,
                textShadow: '0 0 8px rgba(0, 212, 255, 0.4)',
              }}
            >
              <b>WILDEMER</b>
            </Typography>
          </Stack>
          <Typography 
            variant="h4custom" 
            color="secondary.main"
          >
            Fullstack Web & Mobile Developer
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} width={{ xs: '100%', sm: 'auto' }}>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ 
                color: 'primary.dark',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              CTA Principal
            </Button>
            <Button 
              variant="outlined" 
              color="secondary"
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(0, 212, 255, 0.6)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              CTA Secundaria
            </Button>
          </Stack>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {['Email', 'LinkedIn', 'GitLab', 'GitHub', 'Dev Card'].map((label, index) => (
              <Chip 
                key={label}
                label={label} 
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
              />
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={0}
          sx={{
            minHeight: 260,
            border: '1px solid rgba(0, 212, 255, 0.25)',
            background: 'rgba(0, 212, 255, 0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(0, 212, 255, 0.4)',
              background: 'rgba(0, 212, 255, 0.08)',
            }
          }}
        />
      </Grid>
    </Grid>
  )
}
