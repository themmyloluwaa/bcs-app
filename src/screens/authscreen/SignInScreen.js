import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { appStyles } from "../../../utils/appStyles";
import { Image, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
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
            {
              width: 330,
              marginVertical: 16,

              backgroundColor: appStyles.primary
            },
            appStyles.borderRadius5
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
          onPress={() => navigation.navigate("Sign Up")}
        />
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
    backgroundColor: "green",
    marginVertical: 64.03
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
  }
});

export default SignInScreen;
