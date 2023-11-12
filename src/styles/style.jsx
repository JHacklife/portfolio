import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Arame, Barlow, MoonGlossDisplayThick, Arial, sans-serif',
    h1custom: {
      fontFamily: 'Barlow',
      fontSize: '6rem',
      marginTop: 3,
    },
    h2custom: {
      fontFamily: 'Barlow',
      fontSize: '3.75rem',
      marginTop: 3,
    },
    h3custom: {
      fontFamily: 'Barlow',
      fontSize: '3rem',
      marginTop: -10,
    },
    h4custom: {
      fontFamily: 'MoonGlossDisplayThick',
      fontSize: '2.125rem',
      letterSpacing: "4.56px",
      marginTop: -6,
    },
    h5custom: {
      fontFamily: 'Barlow',
      fontSize: '1.53rem',
      marginTop: -3,
    },
    h6custom: {
      fontFamily: 'Barlow',
      fontSize: '1.25rem',
    },
    body1custom: {
      fontFamily: 'Barlow',
      fontSize: '0.875rem',
    },
    body2custom: {
      fontFamily: 'Barlow',
      fontSize: '0.875rem',
      marginTop: -1,
    },
    subtitle1custom: {
      fontFamily: 'Barlow',
      fontSize: '1rem',
      marginTop: 1,
    },
    subtitle2custom: {
      fontFamily: 'Barlow',
      fontSize: '0.875rem',
      marginTop: -1,
    },
    buttoncustom: {
      fontFamily: 'Barlow',
      fontSize: '0.875rem',
      marginTop: 1,
    },
    captioncustom: {
      fontFamily: 'Barlow',
      fontSize: '0.75rem',
    },
    overlinecustom: {
      fontFamily: 'Barlow',
      fontSize: '0.75rem',
      marginTop: 5,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1custom: 'h1',
          h2custom: 'h2',
          h3custom: 'h3',
          h4custom: 'h4',
          h5custom: 'h5',
          h6custom: 'h6',
          body1custom: 'p',
          body2custom: 'p',
          subtitle1custom: 'h6',
          subtitle2custom: 'h6',
          buttoncustom: 'span',
          captioncustom: 'span',
          overlinecustom: 'span',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#0D0D0D',
    },
    tertiary: {
      main: '#56CCF2',
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
