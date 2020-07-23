import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { appStyles } from "../../../utils/appStyles";
const TextInputComponent = props => {
  const [more, setMore] = props.data;
  const [value, onChangeText] = useState("");
  const [emojiShow, setEmojiShow] = useState(false);
  console.log(value);
  return (
    <>
      <View
        style={{
          height: "12%",
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: 16
        }}
      >
        <View
          style={{
            backgroundColor: "#purple",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            borderColor: appStyles.primary,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 11,
            flex: 1
          }}
        >
          <Icon
            size={40}
            name="attachment"
            type="entypo"
            onPress={() => setMore(true)}
            color={appStyles.primary}
            style={{
              paddingHorizontal: 10
            }}
            containerStyle={{
              borderRightWidth: 2,
              borderRightColor: appStyles.primary,
              marginRight: 6,
              paddingRight: 5
            }}
          />
          <View
            style={{
              height: "80%",
              flex: 1
            }}
          >
            <TextInput
              style={{ height: "100%" }}
              onChangeText={text => {
                more === true && setMore(false);
                onChangeText(text);
              }}
              value={value}
              placeholder="Start typing"
              multiline
              numberOfLines={4}
              autoFocus
            />
          </View>
          <Icon
            size={40}
            name="send"
            type="material-community"
            color={appStyles.primary}
            style={{
              paddingHorizontal: 5
            }}
            containerStyle={{
              borderLeftWidth: 2,
              borderLeftColor: appStyles.primary,
              marginLeft: 6
            }}
          />
        </View>
      </View>
      {/* <Emoticons
        onEmoticonPress={onEmoticonPress}
        onBackspacePress={onBackspacePress}
        show={emojiShow}
        concise={true}
        showHistoryBar={true}
        showPlusBar={true}
      /> */}
    </>
  );
};

export default TextInputComponent;
