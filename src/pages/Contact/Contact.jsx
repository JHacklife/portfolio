import React from 'react'
import { Grid, Typography, Stack, Link } from '@mui/material'
import mailTo from '../../utils/mail'
import { Email } from '@mui/icons-material'

export default function Contact() {
  const contactsSites = [
    {
      name: "Mail",
      icon: <Email sx={{ fontSize: "70px", mt: "-10px"}} />,
      url: mailTo
    },
    {
      name: "LinkedIn",
      icon: <i style={{ fontSize: "50px"}} className="devicon-linkedin-plain"></i>,
      url: "https://www.linkedin.com/in/jonathanhacklife/"
    },
    {
      name: "GitLab",
      icon: <i style={{ fontSize: "50px"}} className="devicon-gitlab-plain"></i>,
      url: "https://gitlab.com/jonathanhacklife"
    },
    {
      name: "Github",
      icon: <i style={{ fontSize: "50px"}} className="devicon-github-original"></i>,
      url: "https://github.com/JHacklife"
    },
  ]
  return (
    <Stack className="welcome" id="langsAndTools" justifyContent="center" alignItems="center" spacing={5} px={2}>
      <Typography variant="h2" gutterBottom>Contacto</Typography>
      <Grid container>
        {contactsSites.map((contact, index) => <Grid item md className="scale">
          <Link href={contact?.url} target="_blank" sx={{ textDecoration: "none" }}>
            {contact?.icon}
          </Link>
        </Grid>)}
      </Grid>
    </Stack>
  )
}