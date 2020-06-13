import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { chatNavigator, requestNavigator } from "./appStackNavigators";
const MessageTopNavigator = createMaterialTopTabNavigator();

import NewChatScreen from "../screens/messagescreen/NewChatScreen";
import { createStackNavigator } from "@react-navigation/stack";

const MessageContainerNavigator = createStackNavigator();

const messageNavigator = () => (
  <MessageTopNavigator.Navigator initialRouteName="Chats">
    <MessageTopNavigator.Screen name="Chats" children={chatNavigator} />
    <MessageTopNavigator.Screen name="Request" children={requestNavigator} />
  </MessageTopNavigator.Navigator>
);
export const MessageNavigator = () => (
  <MessageContainerNavigator.Navigator>
    <MessageContainerNavigator.Screen
      children={messageNavigator}
      name="Chats"
    />
    <MessageContainerNavigator.Screen
      component={NewChatScreen}
      name="New Message"
    />
  </MessageContainerNavigator.Navigator>
);