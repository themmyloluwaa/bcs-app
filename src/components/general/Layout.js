import React from "react";
import { View, StyleSheet } from "react-native";

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
    width: 500,
    maxWidth: "100%",
    height: "100%"
  }
});
export default Layout;
