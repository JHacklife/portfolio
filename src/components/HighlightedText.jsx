import { Typography } from '@mui/material'

export default function HighlightedText({ children, variant = 'h3', ...props }) {
  return (
    <Typography
      variant={variant}
      bgcolor="primary.main"
      color="primary.dark"
      px={1}
      width="fit-content"
      sx={{
        border: '1px solid',
        borderColor: 'rgba(0, 212, 255, 0.2)',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(0, 212, 255, 0.6)',
          boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
          transform: 'translateY(-2px)',
        },
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}
