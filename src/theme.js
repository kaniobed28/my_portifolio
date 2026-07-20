import { createTheme } from '@mui/material/styles';

/**
 * Editorial dark theme.
 *
 * The palette is deliberately narrow: near-black paper, warm off-white ink,
 * and a single amber accent that is only ever used for emphasis — labels,
 * hover states, rules. Hierarchy comes from type and space, not from colour.
 */

export const tokens = {
  ink: '#09090B',       // page
  surface: '#101013',   // sections that need separation
  raised: '#17171B',    // cards
  hairline: 'rgba(255, 255, 255, 0.09)',
  hairlineStrong: 'rgba(255, 255, 255, 0.18)',
  accent: '#E0B15F',
  accentSoft: 'rgba(224, 177, 95, 0.12)',
};

const display = '"Instrument Serif", "Iowan Old Style", Georgia, serif';
const sans = '"Inter", system-ui, -apple-system, sans-serif';
const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: tokens.accent, contrastText: '#0B0B0D' },
    secondary: { main: '#F4F4F2', contrastText: '#0B0B0D' },
    background: { default: tokens.ink, paper: tokens.raised },
    text: { primary: '#F4F4F2', secondary: '#8B8B93' },
    divider: tokens.hairline,
  },

  shape: { borderRadius: 4 },

  typography: {
    fontFamily: sans,
    // Display faces — serif, tight, low contrast in weight.
    h1: { fontFamily: display, fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.02em' },
    h2: { fontFamily: display, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.015em' },
    h3: { fontFamily: display, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.01em' },
    h4: { fontFamily: display, fontWeight: 400, lineHeight: 1.15 },
    h5: { fontFamily: sans, fontWeight: 600, letterSpacing: '-0.01em' },
    h6: { fontFamily: sans, fontWeight: 600, letterSpacing: '-0.01em' },
    body1: { fontFamily: sans, fontWeight: 400, lineHeight: 1.7 },
    body2: { fontFamily: sans, fontWeight: 400, lineHeight: 1.65 },
    // `overline` is the small mono label used for eyebrows and indices.
    overline: {
      fontFamily: mono,
      fontSize: '0.7rem',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      lineHeight: 1,
    },
    caption: { fontFamily: mono, fontSize: '0.72rem', letterSpacing: '0.04em' },
    button: { fontFamily: sans, textTransform: 'none', fontWeight: 500, letterSpacing: '0' },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: tokens.ink },
        '::selection': { background: tokens.accent, color: '#0B0B0D' },
        // One visible, consistent focus ring for keyboard users everywhere.
        // Scoped to :focus-visible so it never fires on mouse clicks.
        '*:focus-visible': {
          outline: `2px solid ${tokens.accent}`,
          outlineOffset: '3px',
          borderRadius: '2px',
        },
        // Skip link: off-screen until focused.
        '.skip-link': {
          position: 'absolute',
          left: '-9999px',
          top: 0,
          zIndex: 2000,
          padding: '12px 20px',
          background: '#F4F4F2',
          color: '#0B0B0D',
          fontFamily: '"Inter", sans-serif',
          fontSize: '0.875rem',
          fontWeight: 500,
          borderRadius: '0 0 4px 0',
          textDecoration: 'none',
        },
        '.skip-link:focus': { left: 0 },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          boxShadow: 'none',
          paddingInline: 24,
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': { boxShadow: 'none' },
        },
        contained: {
          backgroundColor: '#F4F4F2',
          color: '#0B0B0D',
          '&:hover': { backgroundColor: '#FFFFFF' },
        },
        outlined: {
          borderColor: tokens.hairlineStrong,
          color: '#F4F4F2',
          '&:hover': {
            borderColor: '#F4F4F2',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: mono,
          fontSize: '0.68rem',
          letterSpacing: '0.06em',
          backgroundColor: '#F4F4F2',
          color: '#0B0B0D',
          borderRadius: 3,
        },
      },
    },
  },
});

export default theme;
