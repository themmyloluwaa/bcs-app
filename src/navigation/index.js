import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import createAppNavigator from "./appBottomNavigator";
import authNavigation from "./authStackNavigation";

const AppNavigator = createStackNavigator();

// const MinorNavigators = createStackNavigator()

// const generalNavigators =

const AllNavigator = () => (
  <AppNavigator.Navigator
    initialRouteName="Auth"
    screenOptions={{
      header: () => null
    }}
  >
    <AppNavigator.Screen children={authNavigation} name="Auth" />
    <AppNavigator.Screen children={createAppNavigator} name="App" />
  </AppNavigator.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <AllNavigator />
  </NavigationContainer>
);

export default RootNavigator;
