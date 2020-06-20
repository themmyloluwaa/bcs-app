import React, { useState } from "react";
import { View, Animated, Text, StyleSheet } from "react-native";

import { Card, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { appStyles } from "../../../utils/appStyles";

const SignUpOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        placeholder="Full name"
        rightIcon={() => <Icon name="eye" color="#fff" size={14} />}
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
        placeholder="Email address"
        placeholderTextColor={appStyles.primary}
      />
      <Input
        containerStyle={[
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: 25
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
        placeholder="Password"
        placeholderTextColor={appStyles.primary}
        secureTextEntry={true}
        rightIcon={() => (
          <Icon name="eye" size={14} color={appStyles.primary} />
        )}
      />
      <Button
        title="CONTINUE"
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
export default SignUpOne;
