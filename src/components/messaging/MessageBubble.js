import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { formateDate } from "../../../utils/dateFormatter";

const Read = ({ read }) => {
  if (!!read) {
    return (
      <>
        <Icon
          type="feather"
          size={16}
          name="check"
          color="green"
          containerStyle={{
            //   backgroundColor: "#000",,
            top: -4
          }}
        />
        <Icon
          type="feather"
          size={18}
          name="check"
          color="green"
          containerStyle={{
            //   backgroundColor: "#000",
            left: -16,
            top: 0
          }}
        />
      </>
    );
  }

  return null;
};

const messages = [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1];
const MessageBubble = () => {
  const b = formateDate("2020-07-13 14:00:39.16");

  const [userId, setUserId] = useState(1);
  return (
    <>
      {[...messages, ...messages].map((data, i) => (
        <View
          key={i}
          style={[
            styles.talkBubble,
            {
              flexDirection: userId === 1 ? "row" : "row-reverse",
              marginBottom: 20
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
            {/* <Text
              style={{
                alignSelf: "flex-end",
                paddingHorizontal: 10,
                paddingVertical: 5
              }}
            >
              Hello
            </Text> */}
            <View
              style={{
                padding: 20
              }}
            >
              <Text
                style={{
                  color: userId === 1 ? "#fff" : "#000",
                  marginBottom: 10
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-end"
                }}
              >
                <Text
                  style={{
                    color: userId === 1 ? "#fff" : "#000",
                    paddingRight: 5
                  }}
                >
                  {b}
                </Text>
                <Read read={true} />
              </View>
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
