import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/accountscreen/AccountScreen";
import MakePaymentScreen from "../screens/accountscreen/MakePaymentScreen";
import PasswordChangeScreen from "../screens/accountscreen/PasswordChangeScreen";
import PaymentHistoryScreen from "../screens/accountscreen/PaymentHistoryScreen";
import ProfileEditScreen from "../screens/accountscreen/ProfileEditScreen";
import SignOutScreen from "../screens/accountscreen/SignOutScreen";

const MainAccountNavigator = createStackNavigator();
const MakePaymentNavigator = createStackNavigator();

const paymentNavigator = () => (
  <MakePaymentNavigator.Navigator initialRouteName="Level Payment">
    <MakePaymentNavigator.Screen
      name="Level Payment"
      component={MakePaymentScreen}
    />
    <MakePaymentNavigator.Screen
      name="Course Payment"
      component={MakePaymentScreen}
    />
    <MakePaymentNavigator.Screen
      name="Confirm Payment"
      component={MakePaymentScreen}
    />
  </MakePaymentNavigator.Navigator>
);

export const mainNavigator = () => (
  <MainAccountNavigator.Navigator initialRouteName="Account">
    <MainAccountNavigator.Screen name="Account" component={AccountScreen} />
    <MainAccountNavigator.Screen
      name="Password Change"
      component={PasswordChangeScreen}
    />
    <MainAccountNavigator.Screen
      name="Edit Profile"
      component={ProfileEditScreen}
    />
    <MainAccountNavigator.Screen
      name="Payment History"
      component={PaymentHistoryScreen}
    />
    <MainAccountNavigator.Screen
      name="Make Payment"
      children={paymentNavigator}
    />
    <MainAccountNavigator.Screen name="Sign Out" component={SignOutScreen} />
  </MainAccountNavigator.Navigator>
);
