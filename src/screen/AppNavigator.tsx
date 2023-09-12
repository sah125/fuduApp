// AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FuduOnboarding from "./LandingPage/FuduOnboarding";
import LandingPage from "../screen/LandingPage/LandingPage";
import HomePage from "./HomePage";
//import LoginScreen from "./accounts/Login";
import SignupScreen from "./accounts/Signup";
import PhoneVerificationScreen from "./accounts/PhoneVerication";
import TextInANest from "./LandingPage/MyAccount";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={FuduOnboarding} />
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="Home" component={HomePage} />

      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Myaccount" component={TextInANest} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen
        name="Phone-verification"
        component={PhoneVerificationScreen}
      />

      <Stack.Screen
        name="ForgottenPassword"
        component={ForgottenPasswordScreen}
      />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};
export type RootStackParamList = {
  Onboarding: undefined;
  LandingPage: undefined;
  Home: undefined;
};
export default AppNavigator;
