import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { chatNavigator, requestNavigator } from "./appStackNavigators";
import NewChatScreen from "../screens/messagescreen/NewChatScreen";
const MessageTopNavigator = createMaterialTopTabNavigator();

export const messageNavigator = () => (
  <MessageTopNavigator.Navigator initialRouteName="Chats">
    <MessageTopNavigator.Screen name="Chats" children={chatNavigator} />
    <MessageTopNavigator.Screen name="Request" children={requestNavigator} />
    <MessageTopNavigator.Screen name="New" component={NewChatScreen} />
  </MessageTopNavigator.Navigator>
);
