import { Box, Paper, Typography } from '@mui/material'

export default function ProjectCard({ title, tech, description, imageHeight = 120 }) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'rgba(0, 212, 255, 0.2)',
        bgcolor: 'dark.main',
        p: 1.5,
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(0, 212, 255, 0.6)',
          boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
          transform: 'translateY(-3px)',
        },
      }}
    >
      <Box 
        sx={{ 
          height: imageHeight, 
          bgcolor: 'grey.main', 
          mb: 1.5,
          border: '1px solid rgba(0, 212, 255, 0.1)',
        }} 
      />
      <Typography 
        variant="h6custom" 
        color="secondary.main"
      >
        {title}
      </Typography>
      {tech && (
        <Typography 
          variant="captioncustom" 
          color="tertiary.main"
        >
          {tech}
        </Typography>
      )}
      {description && (
        <Typography variant="body2custom" color="text.main" mt={1}>
          {description}
        </Typography>
      )}
    </Paper>
  )
}
