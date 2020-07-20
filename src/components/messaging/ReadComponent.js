import React from "react";
import { Icon } from "react-native-elements";

const ReadComponent = ({ read }) => {
  if (!!read) {
    return (
      <>
        <Icon
          type="feather"
          size={12}
          name="check"
          color="green"
          containerStyle={{
            //   backgroundColor: "#000",,
            top: -4
          }}
        />
        <Icon
          type="feather"
          size={14}
          name="check"
          color="green"
          containerStyle={{
            //   backgroundColor: "#000",
            left: -12,
            top: -1
          }}
        />
      </>
    );
  }

  return null;
};

export default ReadComponent;
