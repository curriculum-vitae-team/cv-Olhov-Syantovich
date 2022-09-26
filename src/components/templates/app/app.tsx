import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@templates/app/app.theme';
import { AppRouter } from '@templates/router';
import { ApolloProvider } from '@apollo/client';
import client from '@api/index';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </ApolloProvider>
  );
};
