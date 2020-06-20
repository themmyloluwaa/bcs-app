import React, { useState } from "react";

import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";

import { appStyles } from "../../../utils/appStyles";
import { Image } from "react-native-elements";
const source = require("../../assets/target_monochromatic.png");
const { width, height } = Dimensions.get("window");

import SignUpOne from "../../components/general/SignUpOne";
import SignUpTwo from "../../components/general/SignUpTwo";

const scrollX = new Animated.Value(0);
const stepPosition = new Animated.divide(scrollX, width);

const renderSteps = () => (
  <View style={styles.stepContainer}>
    {[1, 2].map((item, index) => {
      const opacity = stepPosition.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.4, 1, 0.4],
        extrapolate: "clamp"
      });
      return (
        <Animated.View
          style={[styles.stepStyle, { opacity }]}
          key={`slider-${index}`}
        ></Animated.View>
      );
    })}
  </View>
);

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [level, setLevel] = useState("");
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.parentContainer}>
      <View style={styles.containerStyle}>
        <Image
          source={source}
          style={{
            width: width / 1.5,
            height: height / 1.5,
            top: 100 - width * 0.25
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.innerCardContainer}>
          <View style={styles.textContainer}>
            <Text
              style={{
                paddingBottom: (height * 0.25) / 40,
                textAlign: "left",
                // lineHeight: 58,
                fontSize: 24,
                fontWeight: "600"
              }}
            >
              Sign Up
            </Text>
            <Text
              style={{
                color: "rgba(40, 40, 40, 0.7)",
                fontWeight: "normal",
                fontSize: 14
              }}
            >
              {" "}
              Create an account to get started with your learning.
            </Text>
          </View>
          {/* <SignUpOne data={[name, setName, email, setEmail, password, setPassword]}/> */}
          <SignUpTwo
            data={[country, setCountry, phone, setPhone, level, setLevel]}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              paddingRight: 20,
              color: "rgba(53, 53, 53, 0.8)"
            }}
          >
            Have an account?{" "}
            <Text
              style={{
                color: appStyles.primary,
                fontSize: 14
              }}
              onPress={() => navigation.navigate("Sign Up")}
            >
              Sign in
            </Text>
          </Text>
          {renderSteps()}
        </View>
      </View>
    </View>
  );
};
const wTen = (width * 0.25) / 10;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: appStyles.primary,
    flex: 1
  },
  containerStyle: {
    height: "45%",
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer: {
    height: height - height / 1.5,
    backgroundColor: "#fff",
    alignItems: "center",

    flex: 1,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24
  },
  innerCardContainer: {
    paddingTop: 5,
    paddingHorizontal: wTen,
    alignItems: "flex-start",
    width: width - 20
  },
  textContainer: {
    marginVertical: wTen
  },
  bottomContainer: {
    justifyContent: "flex-end",
    marginVertical: wTen
  },
  stepContainer: {
    flexDirection: "row",
    marginVertical: wTen,
    justifyContent: "center",

    alignItems: "center"
  },
  stepStyle: {
    width: 48,
    height: 4,
    marginHorizontal: wTen,
    backgroundColor: "#000"
  }
});

export default SignUpScreen;
