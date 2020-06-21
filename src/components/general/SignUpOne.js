import React from "react";
import { View, Dimensions } from "react-native";

import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { appStyles } from "../../../utils/appStyles";
const { height, width } = Dimensions.get("window");

const SignUpOne = props => {
  const [
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
  ] = props.data;
  return (
    <View>
      <Input
        containerStyle={[
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 30,
            marginVertical: (height * 0.25) / 10
          }
        ]}
        inputContainerStyle={[
          {
            paddingLeft: 10,
            borderWidth: 1,
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
            width: "100%",
            height: 30,
            marginVertical: (height * 0.25) / 10
          }
        ]}
        inputContainerStyle={[
          {
            borderWidth: 1,
            paddingLeft: 10,

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
            height: 30,
            marginVertical: (height * 0.25) / 10
          }
        ]}
        inputContainerStyle={[
          {
            borderWidth: 1,
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
          appStyles.borderRadius5,
          {
            backgroundColor:
              disabled === true ? "rgba(73, 2, 34, 0.7);" : appStyles.primary,
            width: width - 50
          }
        ]}
        titleStyle={{
          color: appStyles.white
        }}
        buttonStyle={{
          borderColor: appStyles.white,
          height: 48,
          color: appStyles.white,
          paddingHorizontal: (width * 0.25) / 10,

          borderBottomWidth: 0.3,
          borderBottomEndRadius: 0
        }}
        disabledTitleStyle={{
          color: appStyles.white
        }}
        disabled={disabled}
        onPress={() => forceSwipe("left")}
      />
    </View>
  );
};

export default SignUpOne;
