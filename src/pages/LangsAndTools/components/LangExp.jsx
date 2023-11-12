import { Box, Stack, Typography } from "@mui/material";
import Visible from "../../../components/Visible";
import abbreviateNumber from "../../../utils/abbreviateNumber";
import { getLevel } from "../../../api/codestats";

export default function LangExp({ lang, exp, newExp }) {
  return (
    <Stack spacing={1}>
      <Typography className="scale" variant="h2" component="span" fontSize={"4.66rem"} color="tertiary.main" align="left">{abbreviateNumber(exp)}</Typography>
      <Box className="scale">
        <Stack direction="row">
          <Typography variant="body1" bgcolor="tertiary.main" color="black.main" align="left" px={1} width="100%"><b>{lang}</b></Typography>
          <Visible condition={newExp != 0}><Typography variant="body1" bgcolor="tertiary.main" color="black.main" align="right" px={1} width="100%"><b>[+{abbreviateNumber(newExp)}]</b></Typography></Visible>
        </Stack>
        <Stack direction="row">
          <Typography variant="body1" bgcolor="black.main" color="primary.main" align="left" px={1} width="100%"><b>Nvl</b></Typography>
          <Visible condition={exp != 0}><Typography variant="body1" bgcolor="black.main" color="primary.main" align="right" px={1} width="100%"><b>{getLevel(exp)}</b></Typography></Visible>
        </Stack>
      </Box>
    </Stack>
  )
}