import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { userStore } from '@store/UserStore';
import { onError } from '@apollo/client/link/error';
import { ToastStore } from '@store/toastStore/ToastsStore';
import { SeverityEnum } from '@store/toastStore/ToastsStore.type';

const httpLink = createHttpLink({
  uri: 'https://cv-gen-be.herokuapp.com/api/graphql'
});
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) graphQLErrors.forEach(({ message }) => ToastStore.addToast(SeverityEnum.error, message));

  if (networkError) ToastStore.addToast(SeverityEnum.error, `[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  const token = userStore.token$;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
