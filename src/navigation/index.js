import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import createAppNavigator from "./appBottomNavigator";
import authNavigation from "./authStackNavigation";

import CameraScreen from "../screens/CameraScreen";
import EditImage from "../screens/EditImage";
const AppNavigator = createStackNavigator();

// const MinorNavigators = createStackNavigator()

// const generalNavigators =

const AllNavigator = () => (
  <AppNavigator.Navigator
    initialRouteName="App"
    screenOptions={{
      header: () => null
    }}
  >
    <AppNavigator.Screen children={authNavigation} name="Auth" />
    <AppNavigator.Screen children={createAppNavigator} name="App" />
    <AppNavigator.Screen component={CameraScreen} name="Camera" />
    <AppNavigator.Screen component={EditImage} name="Edit Image" />
  </AppNavigator.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <AllNavigator />
  </NavigationContainer>
);

export default RootNavigator;
