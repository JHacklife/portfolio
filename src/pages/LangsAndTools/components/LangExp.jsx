import { Box, Stack, Typography } from "@mui/material";
import Visible from "../../../components/Visible";
import abbreviateNumber from "../../../utils/abbreviateNumber";
import { getLevel } from "../../../api/codestats";

export default function LangExp({ lang, exp, newExp }) {
  return (
    <Stack>
      <Typography className="scale" variant="h1" component="span" color="secondary.main" align="left">
        {abbreviateNumber(exp)}
      </Typography>

      <Box className="scale">
        <Stack direction="row">
          <Typography variant="body1" bgcolor="primary.main" color="primary.dark" align="left" px={1} width="100%"><b>{lang}</b></Typography>
          <Visible condition={newExp != 0}>
            <Typography variant="body1" bgcolor="primary.main" color="primary.dark" align="right" px={1} width="100%"><b>[+{abbreviateNumber(newExp)}]</b></Typography>
          </Visible>
        </Stack>
        <Stack direction="row">
          <Typography variant="body1" bgcolor="background.default" color="secondary.main" align="left" px={1} width="100%"><b>Nvl</b></Typography>
          <Visible condition={exp != 0}>
            <Typography variant="body1" bgcolor="background.default" color="secondary.main" align="right" px={1} width="100%"><b>{getLevel(exp)}</b></Typography>
          </Visible>
        </Stack>
      </Box>
    </Stack>
  )
}