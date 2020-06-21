import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { appStyles } from "../../../utils/appStyles";
import { Image, Button, Input } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
const source = require("../../assets/target_monochromatic.png");

const SignInScreen = ({ navigation }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <View style={styles.containerStyle}>
      {/* <View style={styles.imageContainer}> */}
      <Image
        source={source}
        containerStyle={styles.imageContainer}
        style={{ width: 300, height: 250 }}
        resizeMode="contain"
      />
      {/* </View> */}
      <View style={[styles.authStyles, appStyles.boxShadow]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Sign in</Text>
          <Text style={styles.titleBodyStyle}>
            Enter your email address and password to continue where you left
            off.
          </Text>
        </View>
        <View>
          <Input
            inputContainerStyle={[
              styles.inputContainerStyle,
              appStyles.borderRadius5
            ]}
            inputStyle={{
              right: 16
            }}
            rightIconContainerStyle={{
              left: 22
            }}
            keyboardType="email-address"
            placeholderTextColor={appStyles.primary}
            placeholder="Email address"
            rightIcon={{
              type: "font-awesome",
              name: "eye",
              size: 14,
              color: appStyles.white
            }}
          />
          <Input
            inputContainerStyle={[
              styles.inputContainerStyle,
              appStyles.borderRadius5
            ]}
            inputStyle={{
              right: 16
            }}
            rightIconContainerStyle={{
              left: 22
            }}
            placeholderTextColor={appStyles.primary}
            placeholder="Password"
            rightIcon={{
              type: "font-awesome",
              name: "eye",
              size: 14,
              color: appStyles.primary
            }}
            secureTextEntry={true}
          />
        </View>
        <Button
          title="SIGN IN"
          type="outline"
          containerStyle={[
            styles.buttonContainerStyle,
            appStyles.borderRadius5,
            {
              backgroundColor:
                disabled === true ? "rgba(73, 2, 34, 0.7);" : appStyles.primary
            }
          ]}
          titleStyle={{
            color: appStyles.white
          }}
          buttonStyle={{
            borderColor: appStyles.white,
            height: 48,
            color: appStyles.white,

            borderBottomWidth: 0.3,
            borderBottomEndRadius: 0
          }}
          disabled={disabled}
          disabledTitleStyle={{
            color: appStyles.white
          }}
        />
        <View style={styles.secondaryContainerStyle}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 34,
              color: "rgba(53, 53, 53, 0.8)"
            }}
          >
            Don’t have an account yet?{" "}
            <Text
              style={{
                color: appStyles.primary,
                fontSize: 16
              }}
              onPress={() => navigation.navigate("Sign Up")}
            >
              Sign up
            </Text>
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: appStyles.primary
            }}
            onPress={() => navigation.navigate("Forgot Password")}
          >
            Forgot password?
          </Text>
        </View>
      </View>
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
    marginVertical: Platform.OS === "android" ? 30 : 64.03
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
    paddingTop: 32
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
  },
  inputContainer: {
    width: 296,
    marginVertical: 16
  },
  inputContainerStyle: {
    borderWidth: 1,

    width: "85%",
    marginHorizontal: 40,
    paddingHorizontal: 40,
    borderColor: appStyles.primary
  },
  buttonContainerStyle: {
    width: 330,
    marginVertical: 16
  }
});

export default SignInScreen;
