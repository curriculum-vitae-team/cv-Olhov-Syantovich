import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    authorization: true;
  }
}

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
          minWidth: '100px',
          margin: '10px auto',
          borderRadius: '5px',
          borderColor: 'white',
          fontFamily: 'Poppins',
          color: 'rgba(255, 255, 255, 1)',
          fontWeight: '600',
          '&:hover': {
            backgroundColor: 'rgb(55, 55, 55)'
          }
        }
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: '#757de8'
          }
        },
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: '#666'
          }
        },
        {
          props: { variant: 'authorization' },
          style: {
            width: '100%',
            maxWidth: '600px',
            backgroundColor: 'rgb(44, 44, 44)'
          }
        }
      ]
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: '600px',
          minWidth: '150px',
          margin: '10px auto',
          padding: '5px',
          borderRadius: '5px',
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
        }
      },
      variants: [
        {
          props: { variant: 'h3' },
          style: {
            fontSize: '32px',
            fontWeight: '600'
          }
        },
        {
          props: { variant: 'h4' },
          style: {
            fontSize: '24px',
            fontWeight: '400'
          }
        },
        {
          props: { variant: 'h5' },
          style: {
            fontSize: '24px',
            fontWeight: '200'
          }
        },
        {
          props: { variant: 'h6' },
          style: {
            fontSize: '20px',
            fontWeight: '200'
          }
        }
      ]
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
