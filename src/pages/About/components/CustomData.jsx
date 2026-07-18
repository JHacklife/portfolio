import { Stack, Typography, Box } from "@mui/material"
import { COLORS } from "../../../components/CyberComponents"

const CustomData = ({ title, description, custom }) => {
  return (
    <Stack spacing={1.25}>
      {/* Title with neon accent bar */}
      <Stack direction="row" spacing={1.25} alignItems="center">
        <Box
          sx={{
            width: '3px',
            height: '18px',
            background: `linear-gradient(180deg, ${COLORS.neonGreen} 0%, ${COLORS.primary} 100%)`,
            borderRadius: '2px',
            boxShadow: `0 0 8px ${COLORS.neonGreen}50`,
            flexShrink: 0,
          }}
        />
        <Typography
          variant="overline"
          sx={{
            color: COLORS.primary,
            fontFamily: 'BlenderPro-Medium',
            lineHeight: 1,
          }}
        >
          {title}
        </Typography>
      </Stack>

      {/* Content */}
      <Box sx={{ pl: 1.75 }}>
        {custom ?? (
          <Typography variant="body2" sx={{ color: '#c8d8e8', lineHeight: 1.65 }}>
            {description}
          </Typography>
        )}
      </Box>
    </Stack>
  )
}

export default CustomData
