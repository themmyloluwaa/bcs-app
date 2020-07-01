import React from "react";
import { View, Text, StatusBar, Dimensions, FlatList } from "react-native";
import { appStyles } from "../../utils/appStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Card, Button } from "react-native-elements";
import DiscussionThreadComponent from "../components/learning/DiscussionThreadComponent";

const source = require("../assets/target_monochromatic.png");

const { height, width } = Dimensions.get("window");
const DiscussionScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#3E011C" barStyle={"light-content"} />
      <View
        style={{
          backgroundColor: "#E5E5E5"
        }}
      >
        <View
          style={{
            backgroundColor: appStyles.primary,
            height: width * 0.25,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingTop: Platform.OS === "ios" ? 15 : null
          }}
        >
          <Icon
            name="arrow-left"
            size={20}
            style={{
              opacity: 0.8,
              color: "#fff"
            }}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textAlign: "center",
              marginLeft: 20
            }}
          >
            Selecting Colors
          </Text>
        </View>
        <View
          style={{
            height: height - width * 0.25
          }}
        >
          <DiscussionThreadComponent navigation={navigation} />
          <DiscussionThreadComponent navigation={navigation} />
          <DiscussionThreadComponent navigation={navigation} />
        </View>
      </View>
    </>
  );
};

export default DiscussionScreen;
