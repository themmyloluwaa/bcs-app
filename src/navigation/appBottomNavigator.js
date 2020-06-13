import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const BottomNavigator = createMaterialBottomTabNavigator();

// import LearningScreen from "../screens/appscreen/LearningScreen";
// import AccountScreen from "../screens/appscreen/AccountScreen";
// import MessageScreen from "../screens/appscreen/MessageScreen";
// import ResourceScreen from "../screens/appscreen/ResourceScreen";

import { MessageNavigator } from "./messageNavigator";
import {
  learningStackNavigator,
  resourceStackNavigator
} from "./appStackNavigators";
import { mainNavigator } from "./accountStackNavigator";

const createAppNavigator = () => (
  <BottomNavigator.Navigator initialRouteName="Learning">
    <BottomNavigator.Screen name="Learning" children={learningStackNavigator} />
    <BottomNavigator.Screen
      name="Resources"
      children={resourceStackNavigator}
    />
    <BottomNavigator.Screen name="Messages" children={MessageNavigator} />
    <BottomNavigator.Screen name="Account" children={mainNavigator} />
  </BottomNavigator.Navigator>
);

export default createAppNavigator;
