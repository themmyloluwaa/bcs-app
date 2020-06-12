import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const BottomNavigator = createMaterialBottomTabNavigator();

import LearningScreen from "../screens/appscreen/LearningScreen";
import AccountScreen from "../screens/appscreen/AccountScreen";
import MessageScreen from "../screens/appscreen/MessageScreen";
import ResourceScreen from "../screens/appscreen/ResourceScreen";

const createAppNavigator = () => (
  <BottomNavigator.Navigator initialRouteName="Learning">
    <BottomNavigator.Screen name="Learning" component={LearningScreen} />
    <BottomNavigator.Screen name="Resources" component={ResourceScreen} />
    <BottomNavigator.Screen name="Messages" component={MessageScreen} />
    <BottomNavigator.Screen name="Account" component={AccountScreen} />
  </BottomNavigator.Navigator>
);

export default createAppNavigator;
