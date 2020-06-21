import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { appStyles } from "../../../utils/appStyles";
const { height } = Dimensions.get("window");
import RNPickerSelect from "react-native-picker-select";

const SignUpTwo = props => {
  const [country, setCountry, phone, setPhone, level, setLevel] = props.data;
  const placeholderOne = {
    label: "Country",
    value: null,
    color: "#490222"
  };

  const placeholderTwo = {
    label: "Examination Level",
    value: null,
    color: "#490222"
  };

  const sports = [
    {
      label: "Football",
      value: "football"
    },
    {
      label: "Baseball",
      value: "baseball"
    },
    {
      label: "Hockey",
      value: "hockey"
    }
  ];
  return (
    <View>
      <RNPickerSelect
        placeholder={placeholderOne}
        items={sports}
        onValueChange={value => {}}
        style={{
          ...pickerSelectStyles,

          iconContainer: {
            top: 10,
            right: 38,
            height: 0
          },

          placeholder: {
            color: appStyles.primary
          }
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return <Icon name="caret-down" size={24} color={appStyles.primary} />;
        }}
      />
      <Input
        containerStyle={[
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 30,
            marginVertical: (height * 0.25) / 9
          }
        ]}
        inputContainerStyle={[
          {
            borderWidth: 1,
            paddingLeft: 10,
            paddingVertical: 3,

            borderColor: appStyles.primary
          },
          appStyles.borderRadius5
        ]}
        keyboardType="numeric"
        placeholder="Phone (e.g 070123456789)"
        placeholderTextColor={appStyles.primary}
      />

      <RNPickerSelect
        placeholder={placeholderTwo}
        items={sports}
        onValueChange={value => {}}
        style={{
          ...pickerSelectStyles,

          iconContainer: {
            top: 10,
            right: 38
          },
          placeholder: {
            color: appStyles.primary
          }
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return <Icon name="caret-down" size={24} color={appStyles.primary} />;
        }}
      />
      <Button
        title="SIGN UP"
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: appStyles.primary,
    color: "black",
    marginHorizontal: 9,
    marginBottom: (height * 0.25) / 10,

    paddingRight: 30,
    ...appStyles.borderRadius5
  },
  inputAndroid: {
    fontSize: 16,
    marginHorizontal: 9,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: (height * 0.25) / 10,
    borderWidth: 1,
    borderColor: appStyles.primary,
    borderRadius: 8,
    color: appStyles.primary,
    paddingRight: 30,
    ...appStyles.borderRadius5
  }
});

export default SignUpTwo;
