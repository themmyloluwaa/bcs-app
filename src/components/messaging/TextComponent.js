import React, { useRef } from "react";
import { Text, View, Alert } from "react-native";
import { Tooltip } from "react-native-elements";
import { copyText } from "../../../utils/clipboardUtil";
import ReadComponent from "./ReadComponent";

const TextComponent = ({ userId, ...props }) => {
  const tooltipRef = useRef(null);

  return (
    <View
      style={{
        padding: 20
      }}
    >
      <Tooltip
        ref={tooltipRef}
        popover={
          <Text
            onPress={() => {
              copyText("temi");
              Alert.alert("Feedback", "Copied to clipboard", [
                {
                  text: "Ok",
                  onPress: () => tooltipRef.current.toggleTooltip()
                }
              ]);
            }}
          >
            Copy
          </Text>
        }
      >
        <Text
          style={{
            color: userId !== 1 ? "#fff" : "#000",
            marginBottom: 10
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
      </Tooltip>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end"
        }}
      >
        <Text
          style={{
            color: userId !== 1 ? "#fafefe" : "#000",
            paddingRight: 5,
            fontSize: 10
          }}
        >
          {props.b}
        </Text>
        {userId !== 1 && <ReadComponent read={true} />}
      </View>
    </View>
  );
};

export default TextComponent;
