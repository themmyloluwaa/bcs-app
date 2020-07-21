import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback
} from "react-native";
import { Icon, Avatar, Card, Divider } from "react-native-elements";
import ShareWidget from "./ShareWidget";
const { height, width } = Dimensions.get("window");

const MessageHeader = props => {
  const [more, setMore] = props.more;
  return (
    <>
      <StatusBar
        backgroundColor="#3E011C"
        barStyle={"light-content"}
        translucent={true}
        hidden={true}
      />
      <TouchableWithoutFeedback onPress={() => more === true && setMore(false)}>
        <View
          style={
            props.style
              ? props.style
              : {
                  backgroundColor: "#490222",
                  height: "10%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingTop: Platform.OS === "ios" ? 15 : null
                }
          }
        >
          <Icon
            name="arrow-left"
            type="font-awesome"
            size={20}
            color="#fff"
            onPress={() => props.navigation.goBack()}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Avatar
              source={{
                uri:
                  "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
              }}
              size="medium"
              rounded
              renderPlaceholderContent={() => <ActivityIndicator />}
            />
            <Text
              style={{
                paddingHorizontal: 10,
                fontSize: 18,
                color: "#fff",
                fontWeight: "600"
              }}
            >
              Abdulaiman SUileman
            </Text>
          </View>
          {
            <Icon
              name="dots-three-vertical"
              type="entypo"
              color="#fff"
              size={20}
              onPress={() => setMore(true)}
            />
          }
        </View>
      </TouchableWithoutFeedback>

      {more && <ShareWidget navigation={props.navigation} />}
    </>
  );
};

export default MessageHeader;
