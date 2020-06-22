import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions
} from "react-native";

import { appStyles } from "../../../utils/appStyles";
import { Image } from "react-native-elements";
const source = require("../../assets/target_monochromatic.png");
const { width, height } = Dimensions.get("window");

import SignUpOne from "../../components/general/SignUpOne";
import SignUpTwo from "../../components/general/SignUpTwo";

const SWIPE_THRESHOLD = 0.25 * width;

const renderSteps = number => (
  <View style={styles.stepContainer}>
    {[1, 2].map((item, index) => {
      return (
        <Animated.View
          style={[styles.stepStyle, { opacity: index === number ? 1 : 0.4 }]}
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
  const [disabled, setDisabled] = useState(true);

  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, g) => {
      position.setValue({
        x: g.dx,
        y: 0
      });
    },
    onPanResponderRelease: (e, g) => {
      if (g.dx > SWIPE_THRESHOLD) {
        if (number === 0) {
          resetPosition();
        } else {
          forceSwipe("right");
        }
      } else if (g.dx < -SWIPE_THRESHOLD) {
        if (number === 1) {
          resetPosition();
        } else {
          forceSwipe("left");
        }
      } else {
        resetPosition();
      }
    }
  });

  const resetPosition = () => {
    Animated.timing(position, {
      toValue: { x: 0, y: 0 }
    }).start();
  };

  const forceSwipe = x => {
    const direction = x === "right" ? width : -width;
    Animated.timing(position, {
      toValue: { x: direction, y: 0 },
      duration: 250
    }).start(() => {
      Animated.timing(position, {
        toValue: { x: 0, y: 0 },
        duration: 0
      }).start();
      x === "right" ? setNumber(0) : setNumber(1);
    });
  };
  useEffect(() => {
    resetPosition();
  }, []);

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
      <View
        style={{
          flex: 1,
          backgroundColor: appStyles.white,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24
        }}
      >
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.cardContainer, position.getLayout()]}
        >
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
                {number === 0
                  ? "Create an account to get started with your learning."
                  : "Almost Done."}
              </Text>
            </View>
            <View
              // {...panResponder.panHandlers}
              style={[
                {
                  width: width - 20,
                  paddingHorizontal: wTen
                }
              ]}
            >
              {number === 0 ? (
                <SignUpOne
                  data={[
                    name,
                    setName,
                    email,
                    setEmail,
                    password,
                    setPassword,
                    setNumber,
                    forceSwipe,
                    disabled,
                    setDisabled
                  ]}
                />
              ) : (
                <SignUpTwo
                  data={[country, setCountry, phone, setPhone, level, setLevel]}
                />
              )}
            </View>
          </View>
          <View style={styles.bottomContainer}>
            {number === 1 && (
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  paddingRight: 20,
                  color: appStyles.primary,
                  textAlign: "center",
                  paddingVertical: 5
                }}
                onPress={() => forceSwipe("right")}
              >
                Previous
              </Text>
            )}
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
                onPress={() => navigation.navigate("Sign In")}
              >
                Sign in
              </Text>
            </Text>
            {renderSteps(number)}
          </View>
        </Animated.View>
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
    height: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    position: "absolute",
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
    marginVertical: wTen,
    paddingLeft: 10
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
    backgroundColor: appStyles.primary
  }
});

export default SignUpScreen;
