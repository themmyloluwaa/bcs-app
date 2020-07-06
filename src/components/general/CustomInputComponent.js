import React from "react";
import { View } from "react-native";
import { appStyles } from "../../../utils/appStyles";
import { Input, Icon } from "react-native-elements";

const CustomInputComponent = props => {
  return (
    <View
      style={{
        height: "18%",
        backgroundColor: "#fff"
      }}
    >
      <Input
        containerStyle={[
          {
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            paddingHorizontal: 16,
            // width: "100%",
            height: 56
          }
        ]}
        inputContainerStyle={[
          {
            paddingVertical: 9,
            borderWidth: 1,
            borderColor: "#C4C4C4"
          },
          appStyles.borderRadius5
        ]}
        inputStyle={{
          paddingHorizontal: 16,
          borderRightWidth: 2,
          borderRightColor: "#E1E1E1"
        }}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(40, 40, 40, 0.4)"
        rightIcon={
          <Icon
            size={45}
            name="send"
            type="material-community"
            color={appStyles.primary}
            style={{
              marginRight: 16,
              paddingLeft: 19
            }}
          />
        }
      />
    </View>
  );
};

export default CustomInputComponent;
