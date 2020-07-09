import React from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
const { height, width } = Dimensions.get("window");

const MessageHeader = props => {
  return (
    <>
      <StatusBar
        backgroundColor="#3E011C"
        barStyle={"light-content"}
        translucent={true}
        hidden={true}
      />

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
              color: "#fff"
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

            // onPress={() => props.navigation.navigate(props.route)}
          />
        }
      </View>
    </>
  );
};

export default MessageHeader;
