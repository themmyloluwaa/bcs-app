import React from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import { appStyles } from "../../utils/appStyles";

import HeaderComponent from "../components/general/HeaderComponent";

import { Image, Button } from "react-native-elements";

const source = require("../assets/bg-img.png");

const QuizResultScreen = ({ navigation }) => {
  return (
    <>
      <HeaderComponent navigation={navigation} text="Quiz" show={false} />
      <View
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 32,
          flex: 1
        }}
      >
        <Text
          style={{
            color: "rgba(40, 40, 40, 0.7)",
            fontStyle: "italic",
            marginVertical: 32,
            fontSize: 12,
            textAlign: "center"
          }}
        >
          Congratulations
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 50,
            textAlign: "center"
          }}
        >
          Quiz Completed!
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={source}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <Text
          style={{
            color: "rgba(40, 40, 40, 0.7)",
            fontStyle: "italic",
            marginVertical: 32,
            fontSize: 12,
            textAlign: "center"
          }}
        >
          You scored
        </Text>
        <Text
          style={{
            fontSize: 30,
            marginBottom: 50,
            textAlign: "center"
          }}
        >
          7/10
        </Text>

        <Button
          type="outline"
          title="Next Topic"
          containerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
          buttonStyle={{
            borderColor: appStyles.primary,
            width: 160,
            borderWidth: 1.3
          }}
          titleStyle={{
            color: appStyles.primary
          }}
          onPress={() => navigation.navigate("Content")}
        />
      </View>
    </>
  );
};

export default QuizResultScreen;
