import React from "react";
import { View, Text, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Card, Avatar, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

const source = require("../../assets/target_monochromatic.png");
const { height, width } = Dimensions.get("window");

const renderReplies = (show, i) => {
  if (show === true || i === 0) {
    return (
      <View
        style={{
          paddingHorizontal: 32,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Icon name="reply" color="#000" size={14} />
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 16
          }}
        >
          5 replies
        </Text>
      </View>
    );
  }
  return null;
};

const DiscussionThreadComponent = ({ navigation, config, ...props }) => {
  const [item, index] = props.item;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Topic Thread")}
    >
      <Card
        containerStyle={{
          backgroundColor: "#fff",
          maxHeight: config.height,
          paddingHorizontal: 0,
          margin: 0,
          marginBottom: config.mb
        }}
      >
        <View
          style={{
            paddingHorizontal: 32
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <Avatar source={source} rounded size="medium" />
            <View
              style={{
                flexDirection: "column",
                marginLeft: 32,
                marginBottom: 16
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  lineHeight: 30
                }}
              >
                Crion Dayle
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "normal",
                  fontStyle: "italic"
                }}
              >
                2 days ago
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "normal",
              textAlign: "justify",
              lineHeight: 20
            }}
          >
            Spinning our wheels so not enough bandwidth churning anomalies or
            anti-pattern for we’re starting to formalize flexible opinions
            around our foundations products need full resourcing and support?
          </Text>
        </View>

        <Divider
          style={{
            padding: 0,
            marginVertical: 10,
            backgroundColor: "#E1E1E1",
            width: width,
            height: 1
          }}
        />
        {renderReplies(config.show, index)}
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default DiscussionThreadComponent;
