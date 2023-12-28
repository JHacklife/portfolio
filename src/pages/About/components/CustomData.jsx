import { Stack, Typography } from "@mui/material"

const CustomData = ({ title, description, custom }) => {
  return (
    <Stack>
      <Typography variant="body1" bgcolor="primary.main" color="primary.dark" align="left" px={1}><b>{title}</b></Typography>
      {custom ?? <Typography variant="caption" color="text.main" align="left" mt={0.5} lineHeight={1.2}>{description}</Typography>}
    </Stack>
  )
}

export default CustomData