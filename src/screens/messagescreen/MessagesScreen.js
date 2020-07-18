import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, ScrollView, SafeAreaView } from "react-native";
import MessageHeader from "../../components/messaging/MessageHeader";
import MessageBubble from "../../components/messaging/MessageBubble";

const MessagesScreen = ({ navigation, route }) => {
  const [more, setMore] = useState(false);
  const [photo, setPhoto] = useState({});
  const [scrollRef, setScrollRef] = useState([]);

  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.photo !== undefined) {
        console.log(route.params.photo);
        setPhoto(route.params.photo);
      }
    }
    return undefined;
  }, [route.params]);

  useEffect(() => {
    // console.log();
    scrollRef !== undefined && scrollRef.scrollToEnd({ animated: true });
  }, []);

  return (
    <>
      <MessageHeader navigation={navigation} more={[more, setMore]} />

      <ScrollView
        ref={ref => setScrollRef(ref)}
        style={{
          backgroundColor: "#ffffff",
          // height: "100%",
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 30
        }}
        contentContainerStyle={{
          justifyContent: "center"
          // alignItems: "center"
        }}
      >
        <StatusBar
          backgroundColor="#3E011C"
          barStyle={"light-content"}
          translucent={false}
        />
        <View>
          <MessageBubble />
        </View>
      </ScrollView>
    </>
  );
};

export default MessagesScreen;
