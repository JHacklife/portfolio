import { Button, Link, Stack, Typography } from '@mui/material'

export default function ContactActions({ contacts }) {
  return (
    <Stack spacing={2} alignItems="center">
      <Typography 
        variant="h2"
        sx={{
          textShadow: '0 0 8px rgba(0, 212, 255, 0.4)',
        }}
      >
        Contáctame por:
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" useFlexGap>
        {contacts.map((contact, index) => (
          <Button
            key={contact.name}
            component={Link}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="secondary"
            startIcon={contact.icon}
            sx={{
              transition: 'all 0.3s ease',
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(15px)' },
                to: { opacity: 1, transform: 'translateY(0)' }
              },
              '&:hover': {
                borderColor: 'rgba(0, 212, 255, 0.6)',
                transform: 'translateY(-3px)',
              }
            }}
          >
            {contact.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}
