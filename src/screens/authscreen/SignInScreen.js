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
      <View
        style={[
          {
            backgroundColor: appStyles.white,
            width: "100%",
            height: "100%",
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24
          },
          appStyles.boxShadow
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: "flex",
    // justifyContent: "center",
    height: "100%",
    width: "100%",
    alignItems: "center",
    flex: 1,
    backgroundColor: appStyles.primary
  },
  imageContainer: {
    // display: "flex",
    // height: 40,
    // maxHeight: 80,
    // flex: 1,
    backgroundColor: "green",
    // justifyContent: "flex-start",
    marginVertical: 64.03
  }
});

export default SignInScreen;
