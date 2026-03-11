import { Paper, Typography } from '@mui/material'

export default function TokenCard({ title, children }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        border: '1px solid',
        borderColor: 'rgba(0, 212, 255, 0.2)',
        bgcolor: 'grey.main',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(0, 212, 255, 0.6)',
          boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
        },
      }}
    >
      <Typography 
        variant="h6custom" 
        color="primary.main" 
        mb={1}
        sx={{
          textShadow: '0 0 5px rgba(0, 212, 255, 0.3)',
        }}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  )
}
