import React from 'react'
import { Grid, Typography, Stack } from '@mui/material'
import certificatesJSON from './Certificates.json'

export default function Certificates() {
  return (
    <Stack className="section gridBackground" id="langsAndTools" justifyContent="center" alignItems="center" spacing={5} px={2}>
      <Typography variant="h2" gutterBottom>Certificaciones</Typography>
      <Grid container rowSpacing={5} justifyContent="center">
        {certificatesJSON.map((certificate, index) => (
          <Grid key={index} item md={4}>
            <Typography variant="body1custom">{certificate?.name}</Typography>
            <img src={certificate?.url} height="200px" width="300px" className="scale" style={{ borderRadius: "10px", objectFit: "cover" }} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}