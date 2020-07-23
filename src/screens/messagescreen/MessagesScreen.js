import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform
} from "react-native";
import MessageHeader from "../../components/messaging/MessageHeader";
import MessageBubble from "../../components/messaging/MessageBubble";
import { copyText, pasteText } from "../../../utils/clipboardUtil";
import TextInputComponent from "../../components/messaging/TextInputComponent";
const MessagesScreen = ({ navigation, route }) => {
  const [more, setMore] = useState(false);
  const [photo, setPhoto] = useState({});
  const [scrollRef, setScrollRef] = useState(undefined);
  const messages = [1, 2, 3];

  copyText("fjfjfjf");

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
    <KeyboardAvoidingView
      style={{
        flex: 1
      }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
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
        <TouchableWithoutFeedback
          onPress={() => more === true && setMore(false)}
        >
          <View>
            {messages.map((data, i) => (
              <MessageBubble i={i} key={i} more={[more, setMore]} />
            ))}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      {/* <CustomInputComponent placeholder="Make a post" /> */}
      <TextInputComponent data={[more, setMore]} />
    </KeyboardAvoidingView>
  );
};

export default MessagesScreen;
