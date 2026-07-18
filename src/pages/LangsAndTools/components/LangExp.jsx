import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Visible from "../../../components/Visible";
import abbreviateNumber from "../../../utils/abbreviateNumber";
import { getLevel } from "../../../api/codestats";
import { COLORS } from "../../../components/CyberComponents";

const LangCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  background: 'rgba(13, 13, 20, 0.85)',
  border: `1px solid rgba(11, 197, 234, 0.18)`,
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: `rgba(11, 197, 234, 0.5)`,
    transform: 'translateY(-3px)',
    boxShadow: `0 8px 28px rgba(11, 197, 234, 0.15)`,
    background: `rgba(11, 197, 234, 0.06)`,
  }
}));

export default function LangExp({ lang, exp, newExp }) {
  const level = getLevel(exp);

  return (
    <LangCard>
      <Stack spacing={1.25}>

        {/* XP Value — 2 decimals, uppercase suffix e.g. "1.23K" */}
        <Typography
          variant="h4"
          sx={{
            color: COLORS.primary,
            fontFamily: 'BlenderPro-Bold',
            lineHeight: 1,
            textShadow: `0 0 12px ${COLORS.primary}60`,
          }}
        >
          {abbreviateNumber(exp, 2, true)}
        </Typography>

        {/* Language Name + today XP */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography
            variant="subtitle2"
            sx={{
              color: COLORS.white,
              fontFamily: 'BlenderPro-Medium',
              textTransform: 'uppercase',
            }}
          >
            {lang}
          </Typography>

          <Visible condition={newExp != 0}>
            <Typography
              variant="caption"
              sx={{
                color: COLORS.neonGreen,
                fontFamily: 'BlenderPro-Medium',
                textShadow: `0 0 8px ${COLORS.neonGreen}60`,
              }}
            >
              +{abbreviateNumber(newExp, 2, true)}
            </Typography>
          </Visible>
        </Stack>

        {/* Level */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ pt: 1, borderTop: `1px solid rgba(11, 197, 234, 0.12)` }}
        >
          <Typography
            variant="caption"
            sx={{ color: COLORS.whiteMuted, letterSpacing: '0.1em' }}
          >
            LEVEL
          </Typography>

          <Visible condition={exp != 0}>
            <Typography
              variant="caption"
              sx={{ color: '#c8d8e8', fontFamily: 'BlenderPro-Medium' }}
            >
              {level}
            </Typography>
          </Visible>
        </Stack>
      </Stack>
    </LangCard>
  );
}
