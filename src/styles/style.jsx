import { createTheme } from '@mui/material/styles';

/**
 * Professional Cyberpunk Theme
 * 
 * Design Principles:
 * - Professional and corporate, not gamey
 * - Readability first
 * - Subtle, elegant effects
 * - Consistent technological blue (#8DBAF5) based palette
 */

const theme = createTheme({
  typography: {
    fontFamily: 'BlenderPro-Medium, Arame, system-ui, Arial, sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: "700",
      fontFamily: 'BlenderPro-Heavy',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      lineHeight: 1.1,
      color: '#f0f4f8',
      textShadow: '0 0 8px rgba(141, 186, 245, 0.4)',
      "@media (max-width: 600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.75rem",
      fontWeight: "600",
      fontFamily: 'BlenderPro-Bold',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: '#f0f4f8',
      textShadow: '0 0 6px rgba(141, 186, 245, 0.3)',
      "@media (max-width: 600px)": {
        fontSize: "2rem",
      }
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: "500",
      fontFamily: 'BlenderPro-Medium',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      lineHeight: "1.2",
      color: '#f0f4f8',
      "@media (max-width: 600px)": {
        fontSize: "1.75rem",
      }
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: "500",
      fontFamily: 'BlenderPro-Medium',
      letterSpacing: '0.03em',
      color: '#8DBAF5',
      "@media (max-width: 600px)": {
        fontSize: "1.4rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: "400",
      fontFamily: 'BlenderPro-Book',
      letterSpacing: "2px",
      textTransform: 'uppercase',
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "1.25rem",
        letterSpacing: "1px",
      },
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: "500",
      fontFamily: 'BlenderPro-Medium',
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "1.1rem",
      },
    },
    body1: {
      fontSize: "1rem",
      fontFamily: 'BlenderPro-Book',
      lineHeight: 1.7,
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "0.95rem",
      },
    },
    body2: {
      fontSize: "0.9rem",
      fontFamily: 'BlenderPro-Book',
      lineHeight: 1.6,
      color: '#a0b0c0',
      "@media (max-width: 600px)": {
        fontSize: "0.85rem",
      }
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontFamily: 'BlenderPro-Medium',
      letterSpacing: '0.02em',
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
    subtitle2: {
      fontSize: "0.85rem",
      fontFamily: 'BlenderPro-Medium',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: '#8DBAF5',
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
      },
    },
    button: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      fontWeight: "600",
      letterSpacing: '0.08em',
    },
    caption: {
      fontSize: "0.8rem",
      fontFamily: 'BlenderPro-Book',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: '#808898',
    },
    overline: {
      fontSize: "0.75rem",
      fontFamily: 'BlenderPro-Medium',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontWeight: "500",
      color: '#8DBAF5',
    },
    // Custom variants
    h1custom: {
      fontFamily: 'BlenderPro-Heavy',
      fontSize: '4.5rem',
      fontWeight: "700",
      color: '#f0f4f8',
      textShadow: '0 0 10px rgba(141, 186, 245, 0.5)',
      "@media (max-width: 600px)": {
        fontSize: "3rem",
      },
    },
    h2custom: {
      fontFamily: 'BlenderPro-Bold',
      fontSize: '3rem',
      fontWeight: "600",
      color: '#f0f4f8',
      "@media (max-width: 600px)": {
        fontSize: "2.25rem",
      }
    },
    h3custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '2.5rem',
      fontWeight: "500",
      color: '#8DBAF5',
      "@media (max-width: 600px)": {
        fontSize: "1.75rem",
      }
    },
    h4custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1.875rem',
      fontWeight: "500",
      letterSpacing: "4px",
      lineHeight: "1.3",
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "1.4rem",
        letterSpacing: "2px",
      },
    },
    h5custom: {
      fontFamily: 'BlenderPro-Medium',
      fontWeight: "500",
      fontSize: '1.375rem',
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
      },
    },
    h6custom: {
      fontFamily: 'BlenderPro-Medium',
      fontWeight: "600",
      fontSize: '1.125rem',
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
    body1custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "0.95rem",
      },
    },
    body2custom: {
      fontFamily: 'BlenderPro-Book',
      fontSize: '0.875rem',
      fontWeight: "400",
      lineHeight: 1.6,
      color: '#a0b0c0',
      "@media (max-width: 600px)": {
        fontSize: "0.85rem",
      }
    },
    subtitle1custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1rem',
      fontWeight: "500",
      color: '#c8d4e0',
      "@media (max-width: 600px)": {
        fontSize: "0.95rem",
      },
    },
    subtitle2custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.875rem',
      fontWeight: "600",
      color: '#8DBAF5',
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
      },
    },
    buttoncustom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: "600",
      letterSpacing: '0.08em',
    },
    captioncustom: {
      fontFamily: 'BlenderPro-Book',
      fontSize: '0.75rem',
      fontWeight: "400",
      color: '#808898',
    },
    overlinecustom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: "500",
      color: '#8DBAF5',
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: '0.08em',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          backgroundColor: '#8DBAF5',
          color: '#0a0a0f',
          '&:hover': {
            backgroundColor: '#B5D4FF',
            boxShadow: '0 4px 16px rgba(141, 186, 245, 0.3)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(141, 186, 245, 0.4)',
          color: '#8DBAF5',
          '&:hover': {
            borderColor: '#8DBAF5',
            backgroundColor: 'rgba(141, 186, 245, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#12121a',
          border: '1px solid rgba(141, 186, 245, 0.15)',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(141, 186, 245, 0.3)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(141, 186, 245, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#12121a',
          backgroundImage: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(141, 186, 245, 0.15)',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#8DBAF5',
      dark: '#5A8FD4',
      light: '#B5D4FF',
      contrastText: '#0a0a0f',
    },
    secondary: {
      main: '#c8d4e0',
      dark: '#a0b0c0',
      light: '#f0f4f8',
      contrastText: '#0a0a0f',
    },
    tertiary: {
      main: '#6BA3E8',
      dark: '#4A82C7',
      light: '#8DBAF5',
      contrastText: '#0a0a0f',
    },
    background: {
      default: '#0a0a0f',
      paper: '#12121a',
    },
    // Professional color system
    cyber: {
      primary: '#8DBAF5',
      primaryLight: '#B5D4FF',
      primaryDark: '#5A8FD4',
      accent: '#6BA3E8',
    },
    // Status colors
    success: {
      main: '#4ade80',
      dark: '#22c55e',
      light: '#86efac',
    },
    warning: {
      main: '#fbbf24',
      dark: '#f59e0b',
      light: '#fcd34d',
    },
    error: {
      main: '#f87171',
      dark: '#ef4444',
      light: '#fca5a5',
    },
    info: {
      main: '#8DBAF5',
      dark: '#5A8FD4',
      light: '#B5D4FF',
    },
    // Legacy colors for compatibility
    alfa: {
      main: '#5A8FD4',
    },
    electric: {
      main: '#8DBAF5',
    },
    opac: {
      main: 'rgba(141, 186, 245, 0.2)',
    },
    strong: {
      main: '#f0f4f8',
    },
    danger: {
      main: '#f87171',
    },
    white: {
      main: '#f0f4f8',
    },
    dark: {
      main: '#0a0a0f'
    },
    text: {
      primary: '#f0f4f8',
      secondary: '#c8d4e0',
      disabled: 'rgba(255, 255, 255, 0.4)',
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      A100: '#f1f5f9',
      A200: '#e2e8f0',
      A400: '#94a3b8',
      A700: '#334155',
    },
    divider: 'rgba(141, 186, 245, 0.12)',
    action: {
      hover: 'rgba(141, 186, 245, 0.08)',
      selected: 'rgba(141, 186, 245, 0.12)',
      disabled: 'rgba(255, 255, 255, 0.25)',
      disabledBackground: 'rgba(255, 255, 255, 0.1)',
    }
  },
})

export default theme
