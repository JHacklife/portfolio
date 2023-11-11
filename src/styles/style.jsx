import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Arame', 'Barlow', 'Arial', 'sans-serif'].join(","),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#0D0D0D',
    },
    background: {
      default: '#000',
    },
    alfa: {
      main: '#741C8C',
    },
    electric: {
      main: '#5327F2',
    },
    opac: {
      main: '#4D1BBA',
    },
    strong: {
      main: '#2E1A7C',
    },
    danger: {
      main: '#EB5757',
    },
    info: {
      main: '#0DCAF0',
    },
    success: {
      main: '#219653',
    },
    warning: {
      main: '#F2994A',
    },
    black: {
      main: '#000000',
    },
    white: {
      main: '#FFFFFF',
    },
    dark: {
      main: '#0D0D0D'
    },
    grey: {
      light: '#999999',
      main: '#707070',
      dark: '#444444'
    }
  },
})

export default theme
