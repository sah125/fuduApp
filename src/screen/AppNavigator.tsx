// AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyOnboarding from "../screen/LandingPage/MyOnboarding";
import LandingPage from "../screen/LandingPage/LandingPage";
import HomePage from "./HomePage";
import LoginScreen from "./accounts/Login";
import PhoneVerificationScreen from "./accounts/PhoneVerication";
import BottomTabNavigator from "./tabs/BottomTabNavigator";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
   <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Tabs" component={BottomTabNavigator} />

      <Stack.Screen
        name="Phone-verification"
        component={PhoneVerificationScreen}
      />

      <Stack.Screen name="Onboarding" component={MyOnboarding} />
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
