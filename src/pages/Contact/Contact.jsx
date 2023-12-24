import React from 'react'
import { Grid, Typography, Stack, Link } from '@mui/material'
import mailTo from '../../utils/mail'
import { Email } from '@mui/icons-material'
import contactIcons from './ContactIcons'

export default function Contact() {
  const contacts = contactIcons({ size: "50" })
  return (
    <Stack className="section gridBackground" id="contact" justifyContent="center" alignItems="center" spacing={10} px={2}>
      <Typography variant="h2" gutterBottom>Contacto</Typography>
      <Grid container>
        {contacts.map((contact, index) => <Grid key={index} item md className="scale">
          <Link href={contact?.url} target="_blank" sx={{ textDecoration: "none" }}>
            {contact?.icon}
          </Link>
        </Grid>)}
      </Grid>
    </Stack>
  )
}