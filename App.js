import "react-native-gesture-handler";
import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ApolloProvider, useQuery } from "@apollo/client";

import { client } from "./utils/client";
import { ME_QUERY } from "./utils/queries/Queries";
import RootNavigator from "./src/navigation/index";

import { enableScreens } from "react-native-screens";
enableScreens();

export default function App() {
  return (
    // <ApolloProvider client={client}>
    <>
      <RootNavigator />
    </>
    // </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
