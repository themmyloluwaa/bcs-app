import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ForgotPasswordScreen from "../screens/authscreen/ForgotPasswordScreen";
import OnboardingScreen from "../screens/authscreen/OnboardingScreen";
import SignInScreen from "../screens/authscreen/SignInScreen";
import SignUpScreen from "../screens/authscreen/SignUpScreen";
import WelcomeScreen from "../screens/authscreen/WelcomeScreen";

const AuthStackNavigator = createStackNavigator();

const authNavigation = () => (
  <AuthStackNavigator.Navigator initialRouteName="Onboarding">
    <AuthStackNavigator.Screen name="Onboarding" component={OnboardingScreen} />
    <AuthStackNavigator.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStackNavigator.Screen name="Sign In" component={SignInScreen} />
    <AuthStackNavigator.Screen name="Sign Up" component={SignUpScreen} />
    <AuthStackNavigator.Screen
      name="Forgot Password"
      component={ForgotPasswordScreen}
    />
  </AuthStackNavigator.Navigator>
);

export default authNavigation;
