import React from "react";
import { View, Text, StatusBar, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const { height, width } = Dimensions.get("window");

const HeaderComponent = props => {
  return (
    <>
      <StatusBar backgroundColor="#3E011C" barStyle={"light-content"} />
      <View
        style={{
          backgroundColor: "#490222",
          height: width * 0.25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
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
          onPress={() => props.navigation.goBack()}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            textAlign: "center",
            marginLeft: 20
          }}
        >
          {props.text || "Text goes here"}
        </Text>
        {props.show === true && (
          <Icon
            name="comment"
            size={20}
            style={{
              opacity: 0.8,
              color: "#fff"
            }}
            onPress={() => props.navigation.navigate(props.route)}
          />
        )}
      </View>
    </>
  );
};

export default HeaderComponent;
