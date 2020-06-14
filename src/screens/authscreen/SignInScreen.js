import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { appStyles } from "../../../utils/appStyles";
import { Image } from "react-native-elements";

const source = require("../../assets/target_monochromatic.png");

const SignInScreen = props => {
  console.log(props);

  return (
    <View style={styles.containerStyle}>
      {/* <View style={styles.imageContainer}> */}
      <Image
        source={source}
        containerStyle={styles.imageContainer}
        style={{ width: 300, height: 200 }}
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: appStyles.primary
  }
  // imageContainer: {
  //   justifyContent: "flex-start",
  //   marginVertical: 32.03
  // }
});

export default SignInScreen;
