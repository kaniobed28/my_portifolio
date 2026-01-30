import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e676', // Vibrant green
      contrastText: '#000000',
    },
    secondary: {
      main: '#29b6f6', // Light Blue
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", sans-serif',
    h1: {
      fontWeight: 700,
      fontFamily: '"Poppins", sans-serif',
    },
    h2: {
      fontWeight: 600,
      fontFamily: '"Poppins", sans-serif',
    },
    h3: {
      fontWeight: 600,
      fontFamily: '"Poppins", sans-serif',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontFamily: '"Inter", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 230, 118, 0.4)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #00e676 30%, #69f0ae 90%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
