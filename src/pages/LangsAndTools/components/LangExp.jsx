import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Visible from "../../../components/Visible";
import abbreviateNumber from "../../../utils/abbreviateNumber";
import { getLevel } from "../../../api/codestats";

/**
 * Language Experience Card
 * 
 * Professional display of coding statistics per language
 * with subtle hover effects and clean typography.
 */

const LangCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'rgba(18, 18, 26, 0.6)',
  border: '1px solid rgba(141, 186, 245, 0.15)',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(141, 186, 245, 0.35)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(141, 186, 245, 0.08)',
  }
}));

export default function LangExp({ lang, exp, newExp }) {
  const level = getLevel(exp);

  return (
    <LangCard>
      <Stack spacing={1}>
        {/* XP Value */}
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#8DBAF5',
            fontFamily: 'BlenderPro-Bold',
            fontSize: { xs: '1.75rem', md: '2rem' },
            lineHeight: 1,
          }}
        >
          {abbreviateNumber(exp)}
        </Typography>

        {/* Language Name */}
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: '#f0f4f8',
              fontFamily: 'BlenderPro-Medium',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.85rem',
            }}
          >
            {lang}
          </Typography>
          
          <Visible condition={newExp != 0}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#4ade80',
                fontFamily: 'BlenderPro-Medium',
                fontSize: '0.75rem',
              }}
            >
              +{abbreviateNumber(newExp)}
            </Typography>
          </Visible>
        </Stack>

        {/* Level */}
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
          sx={{
            pt: 1,
            borderTop: '1px solid rgba(141, 186, 245, 0.1)',
          }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#808898',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '0.7rem',
            }}
          >
            Level
          </Typography>
          
          <Visible condition={exp != 0}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: '#c8d4e0',
                fontFamily: 'BlenderPro-Medium',
                fontSize: '0.8rem',
              }}
            >
              {level}
            </Typography>
          </Visible>
        </Stack>
      </Stack>
    </LangCard>
  );
}
