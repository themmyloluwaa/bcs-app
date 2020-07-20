import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Tooltip } from "react-native-elements";
import { formateDate } from "../../../utils/dateFormatter";
import TextComponent from "./TextComponent";
import ImageComponent from "./ImageComponent";

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

const messages = [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1];
const MessageBubble = () => {
  let b;
  //  b = formateDate("2020-07-13 14:00:39.16");
  b = formateDate();

  const [userId, setUserId] = useState(1);
  return (
    <>
      {[...messages, ...messages].map((data, i) => (
        <View
          key={i}
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
            {/* <TextComponent userId={userId} b={b} /> */}
            <ImageComponent b={b} userId={userId} />
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
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  talkBubble: {
    backgroundColor: "transparent",
    marginBottom: 16
  },
  talkBubbleSquare: {
    minHeight: 80,
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
