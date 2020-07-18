import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import MessageHeader from "../../components/messaging/MessageHeader";

const MessagesScreen = ({ navigation, route }) => {
  const [more, setMore] = useState(true);
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.photo !== undefined) {
        console.log(route.params.photo);
        setPhoto(route.params.photo);
      }
    }
    return undefined;
  }, [route.params]);

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
