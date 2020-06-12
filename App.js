import "react-native-gesture-handler";
import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ApolloProvider, useQuery } from "@apollo/client";

import { client } from "./utils/client";
import { ME_QUERY } from "./utils/queries/Queries";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`
});

const RootComponent = () => {
  const { data, loading, error } = useQuery(ME_QUERY);

  if (error) {
    console.error("error", error);
  }
  if (loading) return <Text style={styles.welcome}>loading</Text>;

  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native! {data.me.firstName}
      </Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RootComponent />
    </ApolloProvider>
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
