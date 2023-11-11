import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../../App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../styles/style';

export default function RouterManager() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route index path="/" element={<App />} />
          {/* <Route path='/unauthorized' element={<Unauthorized />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Copyright name="Infinite Labs" url="https://www.infinitelabs.com.ar" /> */}
    </ThemeProvider >
  )
}
