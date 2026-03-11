import { Stack, Typography, Box } from "@mui/material"

/**
 * Custom Data Display Component
 * 
 * Professional data card for displaying info items
 * with title and description/custom content.
 */

const CustomData = ({ title, description, custom }) => {
  return (
    <Stack spacing={1}>
      {/* Title with accent indicator */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          sx={{
            width: '3px',
            height: '14px',
            background: '#8DBAF5',
            borderRadius: '1px',
          }}
        />
        <Typography 
          variant="overline"
          sx={{
            color: '#8DBAF5',
            fontFamily: 'BlenderPro-Medium',
            letterSpacing: '0.08em',
            fontSize: '0.7rem',
            lineHeight: 1,
          }}
        >
          {title}
        </Typography>
      </Stack>
      
      {/* Content */}
      <Box sx={{ pl: 1.5 }}>
        {custom ?? (
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#c8d4e0',
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Stack>
  )
}

export default CustomData
