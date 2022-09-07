import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'rgb(33, 33, 33)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 100,
          margin: '10px auto',
          borderRadius: 5,
          borderColor: 'white',
          fontFamily: 'Poppins',
          color: 'rgba(255, 255, 255, 1)',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: 'rgb(55, 55, 55)'
          }
        },
        textPrimary: {
          backgroundColor: '#757de8'
        },
        textSecondary: {
          backgroundColor: '#666'
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: 600,
          minWidth: 150,
          margin: '10px auto',
          padding: 5,
          borderRadius: 5,
          borderColor: 'white',
          fontFamily: 'Poppins',
          color: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgb(44, 44, 44)'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 1)',
          textAlign: 'center',
          fontFamily: 'Poppins'
        },
        h3: {
          fontSize: 32,
          fontWeight: 600
        },
        h4: {
          fontSize: 24,
          fontWeight: 400
        },
        h5: {
          fontSize: 24,
          fontWeight: 200
        },
        h6: {
          fontSize: 20,
          fontWeight: 200
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 1)'
        }
      }
    }
  }
});