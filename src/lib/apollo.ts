import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URI ?? "http://localhost:4000/",
  cache: new InMemoryCache(),
});
