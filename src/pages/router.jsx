import { KeyboardArrowUp } from '@mui/icons-material';
import { CssBaseline, Fab } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from '../components/ScrollTop';
import theme from '../styles/style';
import Page from './index';

export default function RouterManager() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
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
      </ThemeProvider>
    </QueryClientProvider>
  )
}
