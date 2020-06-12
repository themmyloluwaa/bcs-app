import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";

const HTTPS = "http://localhost:4000/api";
const WSS = "ws://localhost:4000/subscriptions";

// const token = cookie.get("token")
const token = "12345";

const httpLink = new HttpLink({
  uri: HTTPS,
  fetch,
  credentials: "include",
  headers: {
    Authorization: `Bearer ${token}`
  }
});
// const wsForNode = typeof window === "undefined" ? ws : null
// Create a WebSocket link:

const subscriptionClient = new SubscriptionClient(
  WSS,
  {
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }
  //   wsForNode
);

const wsLink = new WebSocketLink(subscriptionClient);

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const cache = new InMemoryCache();
export const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link
});
