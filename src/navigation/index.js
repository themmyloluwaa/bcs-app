import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import createAppNavigator from "./appBottomNavigator";

const AppNavigator = createStackNavigator();

const AllNavigator = () => (
  <AppNavigator.Navigator initialRouteName="App">
    <AppNavigator.Screen children={createAppNavigator} name="App" />
  </AppNavigator.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <AllNavigator />
  </NavigationContainer>
);

export default RootNavigator;
