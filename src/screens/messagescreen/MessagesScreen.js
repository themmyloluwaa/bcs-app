import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import MessageHeader from "../../components/messaging/MessageHeader";

const MessagesScreen = ({ navigation }) => {
  return (
    <>
      <MessageHeader navigation={navigation} />

      <ScrollView
        style={{
          backgroundColor: "#000"
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <StatusBar
          backgroundColor="#3E011C"
          barStyle={"light-content"}
          translucent={false}
        />
        <Text
          style={{
            color: "#fff"
          }}
        >
          hi
        </Text>
      </ScrollView>
    </>
  );
};

export default MessagesScreen;
