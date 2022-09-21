// import dotenv from 'dotenv';
// dotenv.config();
import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpUri =
  (process.env.HTTP_URI as string) || 'http://localhost:4000/graphql';
const wsUri = (process.env.WS_URI as string) || 'ws://localhost:4000/graphql';

const httpLink = new HttpLink({
  uri: httpUri,
});

export const wsClient = new SubscriptionClient(wsUri, {
  reconnect: true,
  lazy: true,
  connectionParams: () => {
    return { authToken: localStorage.getItem('token') };
  },
});

const wsLink = new WebSocketLink(wsClient);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export default client;
