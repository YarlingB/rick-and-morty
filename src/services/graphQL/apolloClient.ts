import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';

interface IApolloProps {
  link: ApolloLink;
  cache: InMemoryCache;
  fetch?: typeof fetch;
}
const makeApolloClient = () => {
  const httpLink = createHttpLink({
    uri:
      process.env.REACT_APP_API_URL || 'https://rickandmortyapi.com/graphql/',
    fetch: process.env.NODE_ENV === 'test' ? fetch : undefined,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
      },
    };
  });

  const apolloProps: IApolloProps = {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  };

  const client = new ApolloClient(apolloProps);
  return client;
};

export default makeApolloClient;
