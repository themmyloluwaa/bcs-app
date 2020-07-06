import React from "react";
import { View, StatusBar, Dimensions, FlatList } from "react-native";
import { appStyles } from "../../utils/appStyles";
import DiscussionThreadComponent from "../components/learning/DiscussionThreadComponent";
import CustomInputComponent from "../components/general/CustomInputComponent";
import HeaderComponent from "../components/general/HeaderComponent";

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

const { width } = Dimensions.get("window");

const PastQuestionDiscussionThread = ({ navigation }) => {
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
                isRoutable={false}
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
        <CustomInputComponent placeholder="Reply this thread" />
      </View>
    </>
  );
};

export default PastQuestionDiscussionThread;
