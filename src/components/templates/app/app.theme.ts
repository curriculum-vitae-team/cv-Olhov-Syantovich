import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark'
  },
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgb(44, 44, 44)'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: 600,
          minWidth: 150,
          margin: '10px auto',
          borderRadius: 5,
          borderColor: 'white',
          fontFamily: 'Poppins',
          color: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgb(44, 44, 44)'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-input:-webkit-autofill': { '-webkit-box-shadow': '0 0 0 100px rgb(44, 44, 44) inset' }
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 1)'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 1)',
          textDecorationColor: 'rgba(255, 255, 255, 1)'
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
    },
    MuiTable: {
      styleOverrides: {
        root: { color: 'white', backgroundColor: 'rgb(51,50,50)' }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontSize: 22,
          fontWeight: 500
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTab-root.Mui-selected': { color: 'white' },
          '& .MuiTabs-indicator': { backgroundColor: 'white' }
        }
      }
    }
  }
});
