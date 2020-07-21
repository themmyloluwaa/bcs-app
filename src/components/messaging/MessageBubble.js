import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Tooltip } from "react-native-elements";
import { formateDate } from "../../../utils/dateFormatter";
import TextComponent from "./TextComponent";
import ImageComponent from "./ImageComponent";
import DocumentComponent from "./DocumentComponent";
const renderChild = (index, props) => {
  if (index === 0) {
    return <TextComponent {...props} />;
  } else if (index === 1) {
    return <ImageComponent {...props} />;
  } else {
    return <DocumentComponent {...props} />;
  }
};

const Read = ({ read }) => {
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

const MessageBubble = props => {
  let b;
  //  b = formateDate("2020-07-13 14:00:39.16");
  b = formateDate();

  const [userId, setUserId] = useState(11);
  return (
    <>
      <View
        key={props.i}
        style={[
          styles.talkBubble,
          {
            flexDirection: userId !== 1 ? "row" : "row-reverse",
            marginBottom: 20
          }
        ]}
      >
        <View
          style={[
            styles.talkBubbleSquare,
            {
              backgroundColor: userId !== 1 ? "#490222" : "#E6EFF0"
            }
          ]}
        >
          {renderChild(props.i, { b, userId })}
        </View>
        <View
          style={[
            styles.talkBubbleTriangle,
            {
              borderRightWidth: userId !== 1 ? 26 : 0,
              borderLeftWidth: userId !== 1 ? 0 : 26,
              borderRightColor: userId !== 1 ? "#490222" : "",
              borderLeftColor: userId !== 1 ? "" : "#E6EFF0"
            }
          ]}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  talkBubble: {
    backgroundColor: "transparent",
    marginBottom: 16
  },
  talkBubbleSquare: {
    minHeight: 50,
    maxHeight: "100%",
    maxWidth: "80%",
    minWidth: 120,

    borderRadius: 12
  },

  talkBubbleTriangle: {
    position: "absolute",
    left: -26,
    top: 26,
    width: 0,
    height: 0,
    borderTopColor: "transparent",
    borderTopWidth: 13,

    borderBottomWidth: 13,
    borderBottomColor: "transparent"
  }
});
export default MessageBubble;
