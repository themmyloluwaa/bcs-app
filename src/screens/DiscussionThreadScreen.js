import React from "react";
import { View, Text, StatusBar, Dimensions, FlatList } from "react-native";
import { appStyles } from "../../utils/appStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import DiscussionThreadComponent from "../components/learning/DiscussionThreadComponent";

const source = require("../assets/target_monochromatic.png");

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baq",
    title: "Fourth Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f631",
    title: "Fifth Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d723i",
    title: "Sixth Item"
  },
  {
    id: "ad7acbea-c1b1-46c2-aed5-3ad53abb28baq",
    title: "Seventh Item"
  },
  {
    id: "5ac68afc-c605-48d3-a4f8-fbd91aa97f631",
    title: "Eight Item"
  },
  {
    id: "98694a0f-3da1-471f-bd96-145571e29d723i",
    title: "Ninth Item"
  }
];

const { height, width } = Dimensions.get("window");

const DiscussionThreadScreen = ({ navigation }) => {
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
          <FlatList
            data={DATA}
            renderItem={({ item, index }) => (
              <DiscussionThreadComponent
                navigation={navigation}
                item={[item, index]}
                config={
                  index === 0
                    ? {
                        mb: 0,
                        height: 300,
                        show: true
                      }
                    : {
                        mb: 0,
                        height: 168,
                        show: false
                      }
                }
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
};

export default DiscussionThreadScreen;
