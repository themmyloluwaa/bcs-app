import React, { useState } from "react";
import { View, Animated, Text, StyleSheet } from "react-native";

import { Card, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { appStyles } from "../../../utils/appStyles";

const SignUpTwo = () => {
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [level, setLevel] = useState("");

  return (
    <View>
      <Input
        containerStyle={[
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }
        ]}
        inputContainerStyle={[
          {
            paddingLeft: 10,
            borderWidth: 1,
            // marginHorizontal: 40,
            paddingVertical: 3,
            borderColor: appStyles.primary
          },
          appStyles.borderRadius5
        ]}
        placeholder="Country"
        rightIconContainerStyle={{
          right: 22
        }}
        rightIcon={() => (
          <Icon name="caret-down" color={appStyles.primary} size={15} />
        )}
        placeholderTextColor={appStyles.primary}
      />
      <Input
        containerStyle={[
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }
        ]}
        inputContainerStyle={[
          {
            borderWidth: 1,
            // marginHorizontal: 40,
            paddingLeft: 10,
            paddingVertical: 3,
            borderColor: appStyles.primary
          },
          appStyles.borderRadius5
        ]}
        rightIcon={() => <Icon name="eye" color="#fff" size={14} />}
        placeholder="Date of Birth (DD-MM-YYYY)"
        placeholderTextColor={appStyles.primary}
      />
      <Input
        containerStyle={[
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }
        ]}
        inputContainerStyle={[
          {
            borderWidth: 1,
            // marginHorizontal: 40,
            paddingVertical: 3,
            paddingLeft: 10,
            borderColor: appStyles.primary
          },
          appStyles.borderRadius5
        ]}
        rightIconContainerStyle={{
          right: 22
        }}
        placeholder="Number (e.g +234123456789)"
        placeholderTextColor={appStyles.primary}
        rightIcon={() => <Icon name="eye" size={14} color="#fff" />}
      />
      <Input
        containerStyle={[
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }
        ]}
        inputContainerStyle={[
          {
            borderWidth: 1,
            // marginHorizontal: 40,
            paddingVertical: 3,
            paddingLeft: 10,
            borderColor: appStyles.primary
          },
          appStyles.borderRadius5
        ]}
        rightIconContainerStyle={{
          right: 22
        }}
        placeholder="Examination Level"
        placeholderTextColor={appStyles.primary}
        rightIcon={() => (
          <Icon name="caret-down" size={14} color={appStyles.primary} />
        )}
      />
      <Button
        title="SIGN UP"
        type="outline"
        containerStyle={[
          styles.buttonContainerStyle,
          appStyles.borderRadius5,
          {
            backgroundColor: appStyles.primary,
            paddingVertical: 5
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
        // disabled={disabled}
        disabledTitleStyle={{
          color: appStyles.white
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SignUpTwo;
