import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import MessageHeader from "../../components/messaging/MessageHeader";
import MessageBubble from "../../components/messaging/MessageBubble";
import CustomInputComponent from "../../components/general/CustomInputComponent";

const MessagesScreen = ({ navigation, route }) => {
  const [more, setMore] = useState(false);
  const [photo, setPhoto] = useState({});
  const [scrollRef, setScrollRef] = useState(undefined);

  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.photo !== undefined) {
        console.log(route.params.photo);
        setPhoto(route.params.photo);
      }
    }
    return undefined;
  }, [route.params]);

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     scrollRef !== undefined && scrollRef.scrollToEnd({ animated: true });
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    // console.log();

    setTimeout(() => {
      scrollRef !== undefined && scrollRef.scrollToEnd({ animated: true });
    }, 100);
  }, [scrollRef]);

  // console.log(scrollRef);
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
      {/* <CustomInputComponent placeholder="Make a post" /> */}
    </>
  );
};

export default MessagesScreen;
