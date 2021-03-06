import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { chatNavigator, requestNavigator } from "./appStackNavigators";
import ChatScreen from "../screens/messagescreen/ChatScreen";
import MessagesScreen from "../screens/messagescreen/MessagesScreen";
import RequestScreen from "../screens/messagescreen/RequestScreen";
const MessageTopNavigator = createMaterialTopTabNavigator();

import NewChatScreen from "../screens/messagescreen/NewChatScreen";
import { createStackNavigator } from "@react-navigation/stack";

const MessageContainerNavigator = createStackNavigator();

const messageNavigator = () => (
  <MessageTopNavigator.Navigator
    initialRouteName="Chats"
    tabBarOptions={{
      style: { backgroundColor: "#490222" },
      labelStyle: { fontSize: 14, fontWeight: "bold" },
      activeTintColor: "#ffffff",
      indicatorStyle: { height: 3, backgroundColor: "#fff", paddingBottom: 6 },
      inactiveTintColor: "#adadad",
      tabStyle: { height: 100, justifyContent: "flex-end" }
    }}
  >
    <MessageTopNavigator.Screen name="Chats" component={ChatScreen} />
    <MessageTopNavigator.Screen name="Request" component={RequestScreen} />
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
    <MessageContainerNavigator.Screen
      component={MessagesScreen}
      name="Chats Chatting"
    />
  </MessageContainerNavigator.Navigator>
);
