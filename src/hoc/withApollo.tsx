import { ApolloProvider } from '@apollo/client';
import makeApolloClient from '../services/graphQL/apolloClient';

interface IWithApolloClient {
  children: React.ReactNode;
}
const WithApolloClient = ({ children }: IWithApolloClient) => {
  const client = makeApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApolloClient;
