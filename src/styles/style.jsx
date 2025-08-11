import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'BlenderPro-Medium, Arame, monospace, Arial, sans-serif',
    h1: {
      fontSize: "4.5rem",
      fontWeight: "700",
      fontFamily: 'BlenderPro-Heavy',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      lineHeight: 1.1,
      textShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff',
      "@media (max-width: 600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: "600",
      fontFamily: 'BlenderPro-Bold',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      textShadow: '0 0 15px #00d4ff',
      "@media (max-width: 600px)": {
        fontSize: "2.5rem",
      }
    },
    h3: {
      fontSize: "2.8rem",
      fontWeight: "500",
      fontFamily: 'BlenderPro-Medium',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      lineHeight: "1.2",
      textShadow: '0 0 10px #00d4ff',
      "@media (max-width: 600px)": {
        fontSize: "2rem",
      }
    },
    h4: {
      fontSize: "2.2rem",
      fontWeight: "500",
      fontFamily: 'BlenderPro-Medium',
      letterSpacing: '0.05em',
      textShadow: '0 0 8px #00d4ff',
      "@media (max-width: 600px)": {
        fontSize: "1.6rem",
      },
    },
    h5: {
      fontSize: "1.8rem",
      fontWeight: "400",
      fontFamily: 'BlenderPro-Book',
      letterSpacing: "3px",
      textTransform: 'uppercase',
      "@media (max-width: 600px)": {
        fontSize: "1.4rem",
        letterSpacing: "2px",
      },
    },
    h6: {
      fontSize: "1.4rem",
      fontWeight: "500",
      fontFamily: 'BlenderPro-Medium',
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
      },
    },
    body1: {
      fontSize: "1.1rem",
      fontFamily: 'BlenderPro-Book',
      lineHeight: 1.6,
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.95rem",
      fontFamily: 'BlenderPro-Book',
      opacity: 0.9,
      "@media (max-width: 600px)": {
        fontSize: "0.9rem",
      }
    },
    subtitle1: {
      fontSize: "1.15rem",
      fontFamily: 'BlenderPro-Medium',
      letterSpacing: '0.02em',
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
    subtitle2: {
      fontSize: "0.9rem",
      fontFamily: 'Arame',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
      },
    },
    button: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.95rem',
      textTransform: 'uppercase',
      fontWeight: "600",
      letterSpacing: '0.1em',
    },
    caption: {
      fontSize: "0.8rem",
      fontFamily: 'Arame',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      opacity: 0.8,
    },
    overline: {
      fontSize: "0.75rem",
      fontFamily: 'Arame',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      fontWeight: "500",
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
      //textTransform: 'uppercase',
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
  }, palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff',
      dark: '#0088cc',
      light: '#66e6ff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffffff',
      dark: '#cccccc',
      light: '#ffffff',
      contrastText: '#000000',
    },
    tertiary: {
      main: '#ff0066',
      dark: '#cc0052',
      light: '#ff3385',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: 'rgba(0, 0, 0, 0.8)',
    },
    // Cyber color palette
    cyber: {
      blue: '#00d4ff',
      cyan: '#00ffff',
      red: '#ff0066',
      purple: '#8a2be2',
      green: '#00ff88',
    },
    // Enhanced color system
    alfa: {
      main: '#8a2be2',
    },
    electric: {
      main: '#00d4ff',
    },
    opac: {
      main: 'rgba(0, 212, 255, 0.3)',
    },
    strong: {
      main: '#ffffff',
    },
    danger: {
      main: '#ff0066',
    },
    info: {
      main: '#00d4ff',
    },
    success: {
      main: '#00ff88',
    },
    warning: {
      main: '#ffaa00',
    },
    white: {
      main: '#ffffff',
    },
    dark: {
      main: '#000000'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.8)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },
    // Custom cyber theme colors
    divider: 'rgba(0, 212, 255, 0.2)',
    action: {
      hover: 'rgba(0, 212, 255, 0.1)',
      selected: 'rgba(0, 212, 255, 0.2)',
      disabled: 'rgba(255, 255, 255, 0.3)',
    }
  },
})

export default theme
