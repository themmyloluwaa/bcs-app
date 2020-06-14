import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  FlatList
} from "react-native";

const { width, height } = Dimensions.get("window");

const illustrations = [
  {
    id: 1,
    title: "Everything you need",
    body:
      "Find all the resources you need to excell in your BCS Certification examinations",
    source: require("../../assets/coach_monochromatic.png")
  },
  {
    id: 2,
    title: "Everything you need",
    body:
      "Find all the resources you need to excell in your BCS Certification examinations",
    source: require("../../assets/target_monochromatic.png")
  },
  {
    id: 3,
    title: "Everything you need",
    body:
      "Find all the resources you need to excell in your BCS Certification examinations",
    source: require("../../assets/coach_monochromatic.png")
  }
];

const scrollX = new Animated.Value(0);
const stepPosition = new Animated.divide(scrollX, width);
console.log(width, height);

const renderSteps = () => (
  <View style={styles.stepContainer}>
    {illustrations.map((item, index) => {
      const opacity = stepPosition.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.4, 1, 0.4],
        extrapolate: "clamp"
      });
      return (
        <Animated.View
          style={[styles.stepStyle, { opacity }]}
          key={`slider-${index}`}
        ></Animated.View>
      );
    })}
  </View>
);

const OnboardingScreen = () => {
  const [data, setData] = useState("");

  return (
    <>
      <View style={styles.onboardingContainer}>
        <View
          style={{
            position: "relative",
            width: width,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            data={illustrations}
            extraData={data}
            scrollEventThrottle={16}
            keyExtractor={(item, i) => `${item.id}`}
            renderItem={({ item }) => (
              <View
                style={{
                  width: width,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={item.source}
                  resizeMode="contain"
                  style={styles.imageStyle}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            )}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { x: scrollX } }
                }
              ],
              { useNativeEvent: true }
            )}
          />
          <View>{renderSteps()}</View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  onboardingContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#490222"
    // color: "#fff"
  },

  stepContainer: {
    height: 100,
    width: 200,
    flexDirection: "row",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  stepStyle: {
    width: 32,
    height: 4,
    backgroundColor: "#eee",
    marginHorizontal: 10
  },
  imageStyle: {
    width: "80%",
    height: height / 4,
    overflow: "visible"
  },
  title: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 24,
    lineHeight: 36,
    color: "#FFFFFF",
    marginVertical: 20
  },
  body: {
    textAlign: "center",
    width: "70%",
    fontSize: 20,
    color: "#FFFFFF"
  }
});

export default OnboardingScreen;
