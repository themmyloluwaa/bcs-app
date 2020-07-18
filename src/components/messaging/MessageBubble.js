import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const messages = [1, 2, 3];
const MessageBubble = () => {
  const [userId, setUserId] = useState(1);
  return (
    <>
      {messages.map((data, i) => (
        <View
          style={[
            styles.talkBubble,
            {
              flexDirection: userId === 1 ? "row" : "row-reverse",
              marginBottom: i === messages.length - 1 ? 40 : 20
            }
          ]}
        >
          <View
            style={[
              styles.talkBubbleSquare,
              {
                backgroundColor: userId === 1 ? "#490222" : "#E6EFF0"
              }
            ]}
          >
            <View
              style={{
                padding: 20
              }}
            >
              <Text
                style={{
                  color: userId === 1 ? "#fff" : "#000"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.talkBubbleTriangle,
              {
                borderRightWidth: userId === 1 ? 26 : 0,
                borderLeftWidth: userId === 1 ? 0 : 26,
                borderRightColor: userId === 1 ? "#490222" : "",
                borderLeftColor: userId === 1 ? "" : "#E6EFF0"
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
