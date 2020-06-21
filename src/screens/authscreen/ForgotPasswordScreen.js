import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import { appStyles } from "../../../utils/appStyles";
import { Image, Button, Input } from "react-native-elements";
const source = require("../../assets/target_monochromatic.png");

const { width, height } = Dimensions.get("window");
const ForgotPasswordScreen = ({ navigation }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <View style={styles.containerStyle}>
      {/* <View style={styles.imageContainer}> */}
      <Image
        source={source}
        containerStyle={styles.imageContainer}
        style={{
          width: width / 1.5,
          height: height / 1.5,
          top: 100 - width * 0.25
        }}
        resizeMode="contain"
      />
      {/* </View> */}
      <View style={[styles.authStyles, appStyles.boxShadow]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Restore Password</Text>
          <Text style={styles.titleBodyStyle}>
            Please enter your email address below. A link would be sent to your
            email. Click the link to restore your password.
          </Text>
        </View>
        <View>
          <View />
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
            keyboardType="email-address"
            rightIcon={{
              type: "font-awesome",
              name: "eye",
              size: 14,
              color: appStyles.white
            }}
            secureTextEntry={true}
          />
        </View>
        <Button
          title="RESTORE PASSWORD"
          type="outline"
          containerStyle={[
            styles.buttonContainerStyle,
            appStyles.borderRadius5,
            {
              backgroundColor: disabled
                ? "rgba(73, 2, 34, 0.7);"
                : appStyles.primary
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
              textAlign: "center",
              fontSize: 16,
              color: appStyles.primary
            }}
            onPress={() => navigation.navigate("Sign In")}
          >
            Back to Sign in
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
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  authStyles: {
    backgroundColor: appStyles.white,
    width: "100%",
    flex: 1,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  titleContainer: {
    marginHorizontal: 40,
    marginTop: -60
    // paddingTop: 32
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

export default ForgotPasswordScreen;
