import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import mailTo, { config } from '../../utils/mail'
import contactIcons from '../Contact/ContactIcons'
import Gradient from '../../components/Gradient'
import patternIMG from '../../assets/wallpapers/Tech.png'

function Home() {
  const contacts = contactIcons({ size: "25" })
  return (
    <Stack>
      <Navbar />
      <Box id="top"></Box>
      <Stack className="section gridBackground" justifyContent="center" alignItems="center" spacing={3} px={5}>

        {/* <Gradient /> */}

        {/* <img src={patternIMG} alt="Jonathan Wildemer"
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }} /> */}

        <Stack>
          {/* TODO: Responsive Text: https://www.w3schools.com/howto/howto_css_responsive_text.asp */}
          <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
            <Typography variant="h1" className="scale">JONATHAN</Typography>
            <Typography variant="h1" className="scale"><b>WILDEMER</b></Typography>
          </Stack>
          <Typography variant="h4custom" className="scale">Fullstack Web & Mobile Developer</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" width="100%" px={5} sx={{ position: "absolute", bottom: "0px" }}>
          <Stack alignItems="center" spacing={1} height="auto">
            <Link href={mailTo} target="_blank" variant="body1custom" className="verticalText" color="secondary.main" sx={{ textDecoration: "none" }}>{config?.to}</Link>
            <Divider orientation="vertical" color="white" sx={{ borderWidth: "1px" }} />
          </Stack>

          <Stack alignItems="center" spacing={1} height="auto">
            {contacts.map((contact, index) => <Grid key={index} item xs sm md lg xl className="scale">
              <Link href={contact?.url} target="_blank" color="secondary.main" sx={{ textDecoration: "none" }}>
                {contact?.icon}
              </Link>
            </Grid>)}

            <Divider orientation="vertical" color="white" sx={{ borderWidth: "1px" }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home
