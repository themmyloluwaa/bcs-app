import React from "react";
import { View, Text, StatusBar, Dimensions, FlatList } from "react-native";
import { appStyles } from "../../utils/appStyles";
// import Icon from "react-native-vector-icons/FontAwesome5";
import DiscussionThreadComponent from "../components/learning/DiscussionThreadComponent";
import HeaderComponent from "../components/general/HeaderComponent";

import { Input, Icon } from "react-native-elements";

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

const PastQuestionDiscussionScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#3E011C" barStyle={"light-content"} />
      <View
        style={{
          backgroundColor: "#E5E5E5"
        }}
      >
        <HeaderComponent
          style={{
            backgroundColor: appStyles.primary,
            height: width * 0.25,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingTop: Platform.OS === "ios" ? 15 : null
          }}
          navigation={navigation}
          text="Selecting Colours"
          show={false}
        />

        <View
          style={{
            height: "70%"
          }}
        >
          <FlatList
            data={DATA}
            renderItem={({ item, index }) => (
              <DiscussionThreadComponent
                navigation={navigation}
                item={[item, index]}
                config={{
                  mb: 5,
                  height: 300,
                  show: true
                }}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View
          style={{
            height: "18%",
            backgroundColor: "#fff"
          }}
        >
          <Input
            containerStyle={[
              {
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                paddingHorizontal: 16,
                // width: "100%",
                height: 56
              }
            ]}
            inputContainerStyle={[
              {
                paddingVertical: 9,
                borderWidth: 1,
                borderColor: "#C4C4C4"
              },
              appStyles.borderRadius5
            ]}
            inputStyle={{
              paddingHorizontal: 16,
              borderRightWidth: 2,
              borderRightColor: "#E1E1E1"
            }}
            placeholder="Make a post"
            placeholderTextColor="rgba(40, 40, 40, 0.4)"
            rightIcon={
              <Icon
                size={45}
                name="send"
                type="material-community"
                color={appStyles.primary}
                style={{
                  marginRight: 16,
                  paddingLeft: 19
                }}
              />
            }
          />
        </View>
      </View>
    </>
  );
};

export default PastQuestionDiscussionScreen;
