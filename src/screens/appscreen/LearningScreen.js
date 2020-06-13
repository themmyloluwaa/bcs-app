import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Layout from "../../components/general/Layout";

const LearningScreen = props => {
  // console.log(props);

  return (
    <Layout>
      <View style={styles.welcomeContainer}>
        <View>
          <Text>Hello Suileiman</Text>
        </View>
        <View>
          <Text>What would you like to learn today</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    justifyContent: "center"
  }
});

export default LearningScreen;
