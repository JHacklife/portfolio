import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import labsLogo from '/Logo-2.svg'
import viteLogo from '/vite.svg'
import { Box, Button, Link, Stack, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  const mensaje = {
    to: `info@infinitelabs.com.ar`,
    cc: `jwildemer@infinitelabs.com.ar`,
    subject: "Meeting",
    body: `¿Que tal? Vi el anuncio y me gustaría saber más sobre ustedes.\n
    Tengo interés en conocer sus propuestas y organizar una reunión esta semana para llevar a cabo un proyecto juntos.
    \n\n¡Saludos!`,
  }

  /* Crear un objeto que represente un envío de mail para adjuntar en un link */
  const mailTo = `mailto:${mensaje.to}?cc=${mensaje.cc}&subject=${encodeURIComponent(mensaje.subject)}&body=${encodeURIComponent(mensaje.body)}`


  return (
    <Stack className="welcome" justifyContent="center" alignItems="center" spacing={3}>
      <Box>
        <Link href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo scale" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo scale" alt="React logo" />
        </Link>
        <Link href="https://infinitelabs.com.ar" target="_blank">
          <img src={labsLogo} className="logo scale" alt="Infinite Labs logo" />
        </Link>
      </Box>

      <Stack direction="row">
        <Typography variant="h1" className="scale">Vite</Typography>
        <Typography variant="h1" className="scale">+</Typography>
        <Typography variant="h1" className="scale">React</Typography>
        <Typography variant="h1" className="scale">+</Typography>
        <Typography variant="h1" className="scale"><b>LABS</b></Typography>
      </Stack>


      <Button variant="contained" className="scale" onClick={() => setCount((count) => count + 1)}>count is {count}</Button>

      <Typography className="scale">Edit <code>src/App.jsx</code> and save to test HMR</Typography>
      <Typography className="scale">Creating the future of digital experiences</Typography>
      <Typography variant="body2" className="scale">More info: <Link href={mailTo} target="_blank">{mensaje?.to}</Link></Typography>
    </Stack>
  )
}

export default App
