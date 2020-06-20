import React, { useState } from "react";
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  Text,
  StyleSheet
} from "react-native";

import { Card, Button, Image } from "react-native-elements";

import { appStyles } from "../../../utils/appStyles";
import SignUpOne from "../../components/general/SignUpOne";
import SignUpTwo from "../../components/general/SignUpTwo";
const source = require("../../assets/target_monochromatic.png");

const SignUpScreen = props => {
  const [cardNumber] = useState(1);
  return (
    <View style={styles.containerStyle}>
      <Image
        source={source}
        containerStyle={styles.imageContainer}
        style={{ width: 300, height: 250 }}
        resizeMode="contain"
      />
      <Card containerStyle={[styles.authStyles, appStyles.boxShadow]}>
        <View
          style={
            (styles.titleContainer,
            {
              paddingHorizontal: 0
            })
          }
        >
          <Text style={styles.titleStyle}>Sign Up</Text>
          <Text style={styles.titleBodyStyle}>
            Create an account to get started with your learning.
          </Text>
        </View>
        {/* <SignUpOne /> */}
        <SignUpTwo />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    flex: 1,
    backgroundColor: appStyles.primary
  },
  imageContainer: {
    // backgroundColor: "green",
    marginVertical: Platform.OS === "android" ? 30 : 30.03
  },
  authStyles: {
    backgroundColor: appStyles.white,
    width: "100%",
    height: "100%",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    display: "flex",
    alignItems: "center"
  },
  titleContainer: {
    marginHorizontal: 40,
    paddingTop: 5,
    paddingHorizontal: 0
  },
  titleStyle: {
    textAlign: "left",
    lineHeight: 58,
    fontSize: 24,
    fontWeight: "600"
  },
  titleBodyStyle: {
    textAlign: "left",
    color: "rgba(40, 40, 40, 0.7)",
    fontWeight: "normal",
    fontSize: 14,
    paddingBottom: 17
  }
});
export default SignUpScreen;
