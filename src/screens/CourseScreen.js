import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar
} from "react-native";

const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome5";

const source = require("../assets/bg-img.png");

const CourseScreen = ({ navigation, route }) => {
  console.log(route);
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
  }
});

export default CourseScreen;
