import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Animated
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
    id: 33,
    title: "Everything you need",
    body:
      "Find all the resources you need to excell in your BCS Certification examinations",
    source: require("../../assets/coach_monochromatic.png")
  }
];

const OnboardingScreen = props => {
  //   const [scrollX, setScrollX] = useState(new Animated.Value(0))
  let scrollX = new Animated.Value(0);
  let stepPosition = Animated.divide(scrollX, width);
  let activeIndex = illustrations.indexOf(
    illustrations[illustrations.length - 1]
  );

  const renderSteps = () => {
    return (
      <View style={styles.sliderContainer}>
        {illustrations.map((item, index) => {
          let opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });

          // opacity = 0.2;

          return (
            <Animated.View
              style={[styles.slider, { opacity }]}
              key={`slider-${index}`}
            ></Animated.View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        {/* {illustrations.map(illustration => renderIllus(illustration))} */}
        <Animated.FlatList
          horizontal
          data={illustrations}
          scrollEnabled
          // pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.imageContainer,
                {
                  marginRight: activeIndex === index ? 0 : 50
                }
              ]}
            >
              <Image
                style={styles.image}
                resizeMode="contain"
                source={item.source}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX }
                }
              }
            ],
            { useNativeEvent: true }
          )}
        />

        <View>{renderSteps()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#490222"
    // color: "#fff"
  },
  containerImage: {
    height: height / 1.5,
    // backgroundColor: "blue",
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    overflow: "visible"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 450
    // backgroundColor: "red"
    // marginRight: 50
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
    width: "70%"
  },
  sliderContainer: {
    height: 100,
    width: 200,
    flexDirection: "row",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  slider: {
    width: 32,
    height: 4,
    backgroundColor: "#eee",
    marginHorizontal: 10
  }
});
export default OnboardingScreen;
