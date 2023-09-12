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

<<<<<<< HEAD
      <Stack.Screen name="Signup" component={SignupScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />

=======
>>>>>>> b23bcbeafaa99758e32105c213d193bb59906408
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />

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
