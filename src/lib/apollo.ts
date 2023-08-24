import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:
    import.meta.env.MODE === "development"
      ? "http://localhost:4000/"
      : import.meta.env.VITE_API_URI,
  cache: new InMemoryCache(),
});
