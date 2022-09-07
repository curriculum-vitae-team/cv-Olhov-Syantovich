import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@templates/app';
import { ApolloProvider } from '@apollo/client';
import client from '@api/index';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
