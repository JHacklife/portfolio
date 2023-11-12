import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './index';
import { CssBaseline, Fab, ThemeProvider } from '@mui/material';
import theme from '../styles/style';
import Copyright from '../components/Copyright';
import ScrollTop from '../components/ScrollTop';
import { KeyboardArrowUp } from '@mui/icons-material';

export default function RouterManager() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route index path="/" element={<Page />} />
          {/* <Route path='/unauthorized' element={<Unauthorized />} /> */}
        </Routes>
      </BrowserRouter>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
      {/* <Copyright name="Infinite Labs" url="https://www.infinitelabs.com.ar" /> */}
    </ThemeProvider >
  )
}
