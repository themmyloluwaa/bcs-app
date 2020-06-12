import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import { Platform } from "react-native";

import { getMainDefinition } from "apollo-utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";

const HTTPS =
  Platform.OS === "android"
    ? "http://10.0.2.2:4000/api"
    : "http://localhost:4000/api";
const WSS =
  Platform.OS === "android"
    ? "ws://10.0.2.2:4000/subscriptions"
    : "ws://localhost:4000/subscriptions";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU5MTk3NDA3NiwiZXhwIjoxNjIzNDIzNjc2fQ.tj_S6kymyXdU_EDIeGi9ixvmM-uPCldccmnO2JLyq-0";

const httpLink = new HttpLink({
  uri: HTTPS,
  fetch,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
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
