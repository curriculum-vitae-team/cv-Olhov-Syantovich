import React from 'react';
import WrapColumn from '@atoms/wrap-column/wrap-column';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@templates/app/app.theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WrapColumn />
    </ThemeProvider>
  );
}

export default App;
