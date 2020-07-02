import React from "react";
import { CheckBox } from "react-native-elements";

const CustomCheckItem = props => {
  return (
    <CheckBox
      size={20}
      containerStyle={{
        padding: 0,
        margin: 0,
        paddingBottom: 16,
        backgroundColor: "transparent"
      }}
      checkedIcon="check"
      uncheckedIcon="circle-o"
      checked={true}
      checkedColor="green"
      wrapperStyle={{
        padding: 0,
        margin: 0
      }}
      title="Where do we stand on the latest client ask make it more corporate please."
      textStyle={{
        padding: 0,
        margin: 0,
        fontSize: 16
      }}
    />
  );
};

export default CustomCheckItem;
