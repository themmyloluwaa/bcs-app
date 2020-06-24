import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  SafeAreaView
} from "react-native";

const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome5";

import { ButtonGroup } from "react-native-elements";
import TopicComponent from "../components/learning/TopicComponent";
import DiscussionComponent from "../components/learning/DiscussionComponent";
import QuizComponent from "../components/learning/QuizComponent";
const source = require("../assets/bg-img.png");

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

const componentToRender = (i, navigation) => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      {i === 0 ? (
        <TopicComponent DATA={DATA} navigation={navigation} />
      ) : i === 1 ? (
        <DiscussionComponent DATA={DATA} navigation={navigation} />
      ) : (
        <QuizComponent DATA={DATA} navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

const component1 = () => (
  <Text
    style={{
      color: "#000"
    }}
  >
    TOPICS
  </Text>
);

const component2 = () => <Text>DISCUSSIONS</Text>;
const component3 = () => <Text>QUIZZES</Text>;

const CourseScreen = ({ navigation, route }) => {
  const buttons = [
    { element: component1 },
    { element: component2 },
    { element: component3 }
  ];
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#490222" barStyle={"light-content"} />
      <ImageBackground source={source} style={styles.imageContainer}>
        <View style={styles.innerContainer}>
          <Icon
            name="arrow-left"
            size={18}
            color="#fff"
            style={{
              opacity: 0.9
            }}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              lineHeight: 29,
              fontWeight: "600",
              paddingTop: 30
            }}
          >
            The Essentials of User Interface Design.
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              lineHeight: 18,
              fontWeight: "normal",
              paddingTop: 16
            }}
          >
            Learn the basics of this course in a really conducive manner.
          </Text>
        </View>
      </ImageBackground>
      <ButtonGroup
        onPress={a => {
          setIndex(a);
        }}
        selectedIndex={index}
        buttons={buttons}
        containerStyle={{
          height: 48,
          width: "100%",
          marginTop: -10,
          backgroundColor: "#FAFEFE"
        }}
        selectedButtonStyle={{
          backgroundColor: "transparent",
          borderBottomWidth: 1
        }}
        textStyle={{
          fontWeight: "bold",
          fontSize: 14
        }}
      />
      {componentToRender(index, navigation)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
    // top: 40
  },
  imageContainer: {
    height: 222,

    width: width,
    resizeMode: "cover"
  },
  innerContainer: {
    color: "#fff",
    height: "100%",
    width: "100%",
    fontSize: 70,
    backgroundColor: "rgba(73, 2, 34, 0.7)",
    // position: "absolute",
    // marginTop: 40
    flex: 1,
    // justifyContent: "center"
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 40
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  title: {
    fontSize: 32
  },
  SafeAreaViewContainer: {
    flex: 1,
    width: "100%"
  }
});

export default CourseScreen;
