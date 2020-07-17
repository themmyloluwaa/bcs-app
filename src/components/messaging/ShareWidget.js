import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Icon, Card, Divider } from "react-native-elements";
const ShareWidget = ({ navigation }) => {
  return (
    <Card
      containerStyle={{
        alignSelf: "flex-end",
        position: "absolute",
        width: 250,
        height: 270,
        backgroundColor: "#490222",
        opacity: 0.95,
        borderColor: "#490222",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        zIndex: 10000
      }}
      wrapperStyle={{
        paddingVertical: 20
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          paddingBottom: 10,
          paddingLeft: 10,
          fontWeight: "bold"
        }}
      >
        Share
      </Text>
      <Divider
        style={{
          backgroundColor: "#adada6",
          width: 250,
          right: 15
        }}
      />
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Camera", { route: "Chats Chatting" })
        }
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            justifyContent: "flex-start",
            paddingVertical: 20
          }}
        >
          <Icon
            name="camera"
            type="entypo"
            size={22}
            color="#adada6"
            containerStyle={{
              marginRight: 20
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "#fff"
            }}
          >
            Take Picture
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("me")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            justifyContent: "flex-start",
            paddingVertical: 20
          }}
        >
          <Icon
            name="image"
            type="entypo"
            size={22}
            color="#adada6"
            containerStyle={{
              marginRight: 20
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "#fff"
            }}
          >
            Upload Image
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("me")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            justifyContent: "flex-start",
            paddingVertical: 20
          }}
        >
          <Icon
            name="file"
            type="material-community"
            size={22}
            color="#adada6"
            containerStyle={{
              marginRight: 20
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "#fff"
            }}
          >
            PDF File
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
          justifyContent: "flex-start",
          paddingVertical: 20
        }}
      >
        <Icon
          name="microphone"
          type="simple-line-icon"
          size={22}
          color="#adada6"
          containerStyle={{
            marginRight: 20
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: "#fff"
          }}
        >
          Voice Note
        </Text>
      </View>
    */}
    </Card>
  );
};

export default ShareWidget;
