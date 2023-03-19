import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const makeApolloClient = () => {
  const httpLink = createHttpLink({
    uri:
      process.env.REACT_APP_API_URL || 'https://rickandmortyapi.com/graphql/',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return client;
};

export default makeApolloClient;
