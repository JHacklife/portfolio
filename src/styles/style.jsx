import { createTheme } from '@mui/material/styles';

/**
 * Vibrant Cyberpunk Theme — Typography Scale
 *
 * Design philosophy:
 *   - Headings are large and impactful (h1 starts at 5rem desktop)
 *   - Body copy is comfortably readable (1.05–1.1rem)
 *   - Supporting text (caption, overline) never below 0.85rem
 *   - Neon cyan (#0bc5ea) as primary; green/red as accent glows
 *   - BlenderPro font family throughout
 */

const NEON = {
  primary:   '#0bc5ea',
  green:     '#00ff41',
  red:       '#ff003c',
  cyan:      '#00ffff',
  white:     '#f0f4f8',
  muted:     '#a0a8b8',
  dark:      '#0a0a0f',
};

const theme = createTheme({
  typography: {
    fontFamily: 'BlenderPro-Medium, Arame, system-ui, Arial, sans-serif',

    // ── HEADINGS ──────────────────────────────────────────────────────────
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      fontFamily: 'BlenderPro-Heavy',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      lineHeight: 1.0,
      color: NEON.white,
      textShadow: `0 0 12px rgba(11, 197, 234, 0.5)`,
      '@media (max-width: 900px)': { fontSize: '3.5rem' },
      '@media (max-width: 600px)': { fontSize: '2.75rem' },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 700,
      fontFamily: 'BlenderPro-Bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      lineHeight: 1.1,
      color: NEON.white,
      textShadow: `0 0 10px rgba(11, 197, 234, 0.4)`,
      '@media (max-width: 900px)': { fontSize: '2.75rem' },
      '@media (max-width: 600px)': { fontSize: '2.25rem' },
    },
    h3: {
      fontSize: '2.75rem',
      fontWeight: 600,
      fontFamily: 'BlenderPro-Bold',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      lineHeight: 1.15,
      color: NEON.white,
      '@media (max-width: 900px)': { fontSize: '2.25rem' },
      '@media (max-width: 600px)': { fontSize: '1.85rem' },
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      fontFamily: 'BlenderPro-Medium',
      letterSpacing: '0.04em',
      lineHeight: 1.2,
      color: NEON.primary,
      '@media (max-width: 900px)': { fontSize: '1.65rem' },
      '@media (max-width: 600px)': { fontSize: '1.45rem' },
    },
    h5: {
      fontSize: '1.6rem',
      fontWeight: 500,
      fontFamily: 'BlenderPro-Medium',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1.3,
      color: '#c8d8e8',
      '@media (max-width: 900px)': { fontSize: '1.35rem' },
      '@media (max-width: 600px)': { fontSize: '1.2rem' },
    },
    h6: {
      fontSize: '1.3rem',
      fontWeight: 500,
      fontFamily: 'BlenderPro-Medium',
      letterSpacing: '0.03em',
      lineHeight: 1.4,
      color: '#c8d8e8',
      '@media (max-width: 600px)': { fontSize: '1.1rem' },
    },

    // ── BODY ─────────────────────────────────────────────────────────────
    body1: {
      fontSize: '1.05rem',
      fontFamily: 'BlenderPro-Book',
      lineHeight: 1.75,
      color: '#c8d8e8',
      '@media (max-width: 600px)': { fontSize: '1rem' },
    },
    body2: {
      fontSize: '0.975rem',
      fontFamily: 'BlenderPro-Book',
      lineHeight: 1.65,
      color: NEON.muted,
      '@media (max-width: 600px)': { fontSize: '0.925rem' },
    },

    // ── SUPPORTING ───────────────────────────────────────────────────────
    subtitle1: {
      fontSize: '1.15rem',
      fontFamily: 'BlenderPro-Medium',
      letterSpacing: '0.02em',
      lineHeight: 1.5,
      color: '#c8d8e8',
      '@media (max-width: 600px)': { fontSize: '1.05rem' },
    },
    subtitle2: {
      fontSize: '1rem',
      fontFamily: 'BlenderPro-Medium',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: NEON.primary,
      '@media (max-width: 600px)': { fontSize: '0.9rem' },
    },
    button: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1rem',
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
    caption: {
      fontSize: '0.875rem',
      fontFamily: 'BlenderPro-Book',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: '#808898',
      '@media (max-width: 600px)': { fontSize: '0.825rem' },
    },
    overline: {
      fontSize: '0.875rem',
      fontFamily: 'BlenderPro-Medium',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontWeight: 500,
      color: NEON.primary,
      '@media (max-width: 600px)': { fontSize: '0.825rem' },
    },

    // ── CUSTOM VARIANTS (legacy compat) ───────────────────────────────────
    h1custom: {
      fontFamily: 'BlenderPro-Heavy',
      fontSize: '5.5rem',
      fontWeight: 700,
      color: NEON.white,
      textShadow: `0 0 14px rgba(11, 197, 234, 0.55)`,
      '@media (max-width: 900px)': { fontSize: '4rem' },
      '@media (max-width: 600px)': { fontSize: '3rem' },
    },
    h2custom: {
      fontFamily: 'BlenderPro-Bold',
      fontSize: '3.75rem',
      fontWeight: 700,
      color: NEON.white,
      '@media (max-width: 600px)': { fontSize: '2.5rem' },
    },
    h3custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '3rem',
      fontWeight: 600,
      color: NEON.primary,
      '@media (max-width: 600px)': { fontSize: '2rem' },
    },
    h4custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '4px',
      lineHeight: 1.3,
      color: '#c8d8e8',
      '@media (max-width: 600px)': { fontSize: '1.65rem', letterSpacing: '2px' },
    },
    h5custom: {
      fontFamily: 'BlenderPro-Medium',
      fontWeight: 500,
      fontSize: '1.7rem',
      color: '#c8d8e8',
      '@media (max-width: 600px)': { fontSize: '1.35rem' },
    },
    h6custom: {
      fontFamily: 'BlenderPro-Medium',
      fontWeight: 600,
      fontSize: '1.35rem',
      color: '#c8d8e8',
      '@media (max-width: 600px)': { fontSize: '1.1rem' },
    },
    body1custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1.05rem',
      lineHeight: 1.75,
      color: '#c8d8e8',
      '@media (max-width: 600px)': { fontSize: '1rem' },
    },
    body2custom: {
      fontFamily: 'BlenderPro-Book',
      fontSize: '0.975rem',
      fontWeight: 400,
      lineHeight: 1.65,
      color: NEON.muted,
      '@media (max-width: 600px)': { fontSize: '0.925rem' },
    },
    subtitle1custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1.1rem',
      fontWeight: 500,
      color: '#c8d8e8',
      '@media (max-width: 600px)': { fontSize: '1rem' },
    },
    subtitle2custom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1rem',
      fontWeight: 600,
      color: NEON.primary,
      '@media (max-width: 600px)': { fontSize: '0.9rem' },
    },
    buttoncustom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '1rem',
      textTransform: 'uppercase',
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
    captioncustom: {
      fontFamily: 'BlenderPro-Book',
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#808898',
    },
    overlinecustom: {
      fontFamily: 'BlenderPro-Medium',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontWeight: 500,
      color: NEON.primary,
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1custom: 'h1', h2custom: 'h2', h3custom: 'h3', h4custom: 'h4',
          h5custom: 'h5', h6custom: 'h6',
          body1custom: 'p', body2custom: 'p',
          subtitle1custom: 'h6', subtitle2custom: 'h6',
          buttoncustom: 'span', captioncustom: 'span', overlinecustom: 'span',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: '0.1em',
          fontSize: '0.95rem',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          backgroundColor: NEON.primary,
          color: NEON.dark,
          '&:hover': {
            backgroundColor: '#4dd8f5',
            boxShadow: `0 0 20px ${NEON.primary}60`,
          },
        },
        outlinedPrimary: {
          borderColor: `${NEON.primary}50`,
          color: NEON.primary,
          '&:hover': {
            borderColor: NEON.primary,
            backgroundColor: `${NEON.primary}12`,
            boxShadow: `0 0 15px ${NEON.primary}30`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d0d14',
          border: `1px solid rgba(11, 197, 234, 0.18)`,
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: `rgba(11, 197, 234, 0.45)`,
            transform: 'translateY(-3px)',
            boxShadow: `0 8px 36px rgba(11, 197, 234, 0.15)`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d0d14',
          backgroundImage: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: `rgba(11, 197, 234, 0.15)`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'BlenderPro-Medium',
          fontSize: '0.875rem',
          letterSpacing: '0.04em',
        },
      },
    },
  },

  palette: {
    mode: 'dark',
    primary: {
      main: NEON.primary,
      dark: '#0891b2',
      light: '#4dd8f5',
      contrastText: NEON.dark,
    },
    secondary: {
      main: '#c8d8e8',
      dark: NEON.muted,
      light: NEON.white,
      contrastText: NEON.dark,
    },
    background: {
      default: NEON.dark,
      paper: '#0d0d14',
    },
    success: {
      main: NEON.green,
      dark: '#00cc33',
      light: '#66ff88',
    },
    warning: {
      main: '#fbbf24',
      dark: '#f59e0b',
      light: '#fcd34d',
    },
    error: {
      main: NEON.red,
      dark: '#cc0030',
      light: '#ff4d70',
    },
    info: {
      main: NEON.primary,
      dark: '#0891b2',
      light: '#4dd8f5',
    },
    // Legacy compat keys
    alfa:     { main: '#0891b2' },
    electric: { main: NEON.primary },
    opac:     { main: 'rgba(11, 197, 234, 0.2)' },
    strong:   { main: NEON.white },
    danger:   { main: NEON.red },
    white:    { main: NEON.white },
    dark:     { main: NEON.dark },
    text: {
      primary:   NEON.white,
      secondary: '#c8d8e8',
      disabled:  'rgba(255, 255, 255, 0.35)',
    },
    divider: `rgba(11, 197, 234, 0.12)`,
    action: {
      hover:             `rgba(11, 197, 234, 0.08)`,
      selected:          `rgba(11, 197, 234, 0.14)`,
      disabled:          'rgba(255, 255, 255, 0.25)',
      disabledBackground:'rgba(255, 255, 255, 0.08)',
    },
  },
})

export default theme
