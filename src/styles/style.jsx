import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Arame, Blender Pro, Arial, sans-serif',
    h1: {
      "@media (max-width: 600px)": {
        fontSize: "4rem", // Tamaño de fuente para dispositivos pequeños
      },
    },
    h2: {
      "@media (max-width: 600px)": {
        fontSize: "3rem",
      }
    },
    h3: {
      "@media (max-width: 600px)": {
        fontSize: "2rem",
      }
    },
    h4: {
      "@media (max-width: 600px)": {
        fontSize: "1.4rem",
      },
    },
    h5: {
      letterSpacing: "2px",
      "@media (max-width: 600px)": {
        fontSize: "1.5rem",
      },
    },
    h6: {
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
      },
    },
    body1: {
      "@media (max-width: 600px)": {
        fontSize: "1.1rem",
      },
    },
    body2: {
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      }
    },
    subtitle1: {
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
    subtitle2: {
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
      },
    },
    button: {
    },
    caption: {
      /* fontFamily: 'BlenderPro-Medium',
      textTransform: 'uppercase', */
    },
    overline: {
    },
    h1custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '6rem',
      fontWeight: "300",
      "@media (max-width: 600px)": {
        fontSize: "4rem", // Tamaño de fuente para dispositivos pequeños
      },
      marginTop: 3,
    },
    h2custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '3.75rem',
      fontWeight: "300",
      marginTop: 3,
      "@media (max-width: 600px)": {
        fontSize: "3rem",
      }
    },
    h3custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '3rem',
      fontWeight: "500",
      marginTop: -10,
      "@media (max-width: 600px)": {
        fontSize: "1.7rem",
      }
    },
    h4custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '2.25rem',
      fontWeight: "500",
      letterSpacing: "6px",
      marginTop: -6,
      "@media (max-width: 600px)": {
        fontSize: "1.4rem",
      },
    },
    h5custom: {
      fontFamily: 'BlenderPro-Medium',
      fontWeight: "500",
      fontSize: '1.5625rem',
      marginTop: -3,
      "@media (max-width: 600px)": {
        fontSize: "1.5rem",
        letterSpacing: "2px",
      },
    },
    h6custom: {
      fontFamily: 'BlenderPro-Medium',
      fontWeight: "700",
      fontSize: '1.3125rem',
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
      },
    },
    body1custom: {
      fontFamily: 'BlenderPro-Medium',
      textTransform: 'uppercase',
      "@media (max-width: 600px)": {
        fontSize: "1.1rem",
      },
    },
    body2custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.875rem',
      fontWeight: "500",
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      }
    },
    subtitle1custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1.0625rem',
      fontWeight: "500",
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
    subtitle2custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.9375rem',
      fontWeight: "700",
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
      },
    },
    buttoncustom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: "700",
    },
    captioncustom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.75rem',
      fontWeight: "500",
    },
    overlinecustom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      fontWeight: "500",
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
