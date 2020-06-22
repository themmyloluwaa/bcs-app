import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Layout = ({ children, ...props }) => {
  return (
    <View
      style={
        (styles.layoutContainer,
        {
          paddingVertical: props.paddingVertical ? props.paddingVertical : 50
        })
      }
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    display: "flex",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    // paddingVertical: 50,
    width: "100%",
    maxWidth: width,
    height: "100%"
  }
});
export default Layout;
