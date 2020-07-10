import React, { useState } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import MessageHeader from "../../components/messaging/MessageHeader";

const MessagesScreen = ({ navigation }) => {
  const [more, setMore] = useState(true);

  return (
    <>
      <View>
        <MessageHeader navigation={navigation} more={[more, setMore]} />

        <ScrollView
          style={{
            backgroundColor: "#000",
            height: "100%"
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
      </View>
    </>
  );
};

export default MessagesScreen;
