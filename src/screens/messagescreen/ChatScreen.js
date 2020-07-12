import React from "react";
import { View, Text, StatusBar, FlatList, Dimensions } from "react-native";
import { ListItem, Divider, Icon } from "react-native-elements";

const source = require("../../assets/bg-img.png");

const { width } = Dimensions.get("window");
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
const ChatScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#3E011C" barStyle={"light-content"} />

      <View
        style={
          {
            // flex: 1
          }
        }
      >
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => {
            return (
              <>
                <ListItem
                  onPress={() => navigation.navigate("Chats Chatting")}
                  leftAvatar={{
                    source,
                    avatarStyle: { resizeMode: "cover", borderRadius: 5 },
                    containerStyle: {
                      // width: 96,
                      borderRadius: 5
                    },
                    rounded: true,
                    size: "medium"
                  }}
                  title={item.title}
                  subtitle={
                    <View style={{ marginVertical: 10 }}>
                      <Text>7 Questions</Text>
                    </View>
                  }
                  rightSubtitle={
                    <View
                      style={{
                        borderRadius: 100 / 2,
                        backgroundColor: "#FFA022"
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          paddingHorizontal: 10,
                          paddingVertical: 5
                        }}
                      >
                        2
                      </Text>
                    </View>
                  }
                />
                <Divider
                  style={{
                    borderColor: "#353535"
                  }}
                />
              </>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View
        style={{
          backgroundColor: "#490222",
          width: 56,
          height: 56,
          position: "relative",
          bottom: 100,
          left: width - 100,
          borderRadius: 100 / 2,
          justifyContent: "center"
        }}
      >
        <Icon type="antdesign" name="plus" color="#fff" />
      </View>
    </>
  );
};

export default ChatScreen;
