import { Stack } from '@mui/material'

const SECTION_PADDING = {
  xs: '2rem',
  sm: '1.2rem',
  md: '3rem',
  lg: '5rem',
  xl: '15rem',
}

export default function SectionShell({ children, spacing = 4, ...props }) {
  return (
    <Stack
      className="section gridBackground"
      sx={{ py: 5, px: SECTION_PADDING }}
      spacing={spacing}
      {...props}
    >
      {children}
    </Stack>
  )
}
