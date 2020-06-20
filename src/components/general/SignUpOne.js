import React from "react";
import { View, Dimensions } from "react-native";

import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { appStyles } from "../../../utils/appStyles";
const { height } = Dimensions.get("window");

const SignUpOne = props => {
  console.log(props);
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
            backgroundColor: appStyles.primary
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
        disabledTitleStyle={{
          color: appStyles.white
        }}
      />
    </View>
  );
};

export default SignUpOne;
