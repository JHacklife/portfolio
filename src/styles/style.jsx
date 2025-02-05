import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Arame, Blender Pro, Arial, sans-serif',
    h1: {
      fontSize: "4.210rem",
      "@media (max-width: 600px)": {
        fontSize: "4rem", // Tamaño para dispositivos pequeños
      },
    },
    h2: {
      fontSize: "3.158rem",
      "@media (max-width: 600px)": {
        fontSize: "3rem",
      }
    },
    h3: {
      fontSize: "2.369rem",
      lineHeight: "1.5",
      "@media (max-width: 600px)": {
        fontSize: "2rem",
      }
    },
    h4: {
      fontSize: "1.777rem",
      "@media (max-width: 600px)": {
        fontSize: "1.4rem",
      },
    },
    h5: {
      fontSize: "1.333rem",
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
      fontSize: "0.750rem",
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
        fontSize: "4rem", // Tamaño para dispositivos pequeños
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
      lineHeight: "1.2",
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
      main: '#8dbaf5',
      dark: '#000',
    },
    secondary: {
      main: '#E6E6E6',
      dark: '#000',
    },
    tertiary: {
      main: '#FDA312',
      dark: '#000',
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
    white: {
      main: '#FFFFFF',
    },
    dark: {
      main: '#0D0D0D'
    },
    text: {
      main: '#FFF',
      dark: '#000'
    },
    grey: {
      light: '#2e2e2e',
      main: '#171717',
      dark: '#0d0d0d'
    }
  },
})

export default theme
