// AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FuduOnboarding from "./LandingPage/FuduOnboarding";
import LandingPage from "../screen/LandingPage/LandingPage";
import HomePage from "./HomePage";
import LoginScreen from "./accounts/Login";
import SignupScreen from "./accounts/Signup";
import PhoneVerificationScreen from "./accounts/PhoneVerication";
import ForgottenPasswordScreen from "./accounts/ForgottenPassword";
import ResetPasswordScreen from "./accounts/ResetPassword";
import BottomTabNavigator from "./tabs/BottomTabNavigator";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     
      <Stack.Screen name="Onboarding" component={FuduOnboarding} />
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};
export type RootStackParamList = {
  Onboarding: undefined;
  LandingPage: undefined;
  Home: undefined;
};
export default AppNavigator;
