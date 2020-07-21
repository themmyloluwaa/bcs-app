import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import { Overlay } from "react-native-elements";

const { width } = Dimensions.get("window");
const DownloadProgress = props => {
  const [isVisible, setIsVisible, number] = props.data;
  useEffect(() => {}, [isVisible]);
  const value = Math.floor(number * 100);
  let color;
  if (value === 0) {
    color = "black";
  } else if (value <= 25) {
    color = "#76BA1A";
  } else if (value <= 50) {
    color = "#A4DE00";
  } else if (value <= 75) {
    color = "#69BB59";
  } else {
    color = "#1E5630";
  }
  return (
    <Overlay
      isVisible={isVisible}
      overlayStyle={{
        maxHeight: 400,
        backgroundColor: "transparent"
      }}
    >
      <View
        style={{
          width: width - 100,
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ProgressCircle
          percent={value}
          radius={50}
          shadowColor="#eee"
          borderWidth={8}
          color={color}
          bgColor="#fff"
        ></ProgressCircle>

        <Text style={{ fontSize: 40, paddingVertical: 20, color: "#fff" }}>
          {value}%
        </Text>
      </View>
    </Overlay>
  );
};

export default DownloadProgress;
