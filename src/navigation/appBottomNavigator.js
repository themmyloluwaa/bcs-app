import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
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
  <BottomNavigator.Navigator
    initialRouteName="Learning"
    screenOptions={{
      tabBarColor: "#490222"
    }}
  >
    <BottomNavigator.Screen
      name="Learning"
      children={learningStackNavigator}
      options={{
        tabBarIcon: () => <Icon name="book-open" size={25} color="#fff" />
      }}
    />
    <BottomNavigator.Screen
      name="Resources"
      children={resourceStackNavigator}
      options={{
        tabBarIcon: () => <Icon name="file-alt" size={25} color="#fff" />
      }}
    />
    <BottomNavigator.Screen
      name="Messages"
      children={MessageNavigator}
      options={{
        tabBarIcon: () => <Icon name="comment-alt" size={25} color="#fff" />
      }}
    />
    <BottomNavigator.Screen
      name="Account"
      children={mainNavigator}
      options={{
        tabBarIcon: () => <Icon name="user" size={25} color="#fff" />
      }}
    />
  </BottomNavigator.Navigator>
);

export default createAppNavigator;
