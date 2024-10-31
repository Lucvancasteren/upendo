// apollo.js

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8888/wordpress/graphql", // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});

export const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
