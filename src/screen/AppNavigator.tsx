// AppNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyOnboarding from "../screen/LandingPage/MyOnboarding";
import LandingPage from "../screen/LandingPage/LandingPage";
import HomePage from "./HomePage";
import LoginScreen from "./accounts/Login";
import SignupScreen from "./accounts/Signup";
import PhoneVerificationScreen from "./accounts/PhoneVerication";
<<<<<<< HEAD
import ForgottenPasswordScreen from "./accounts/ForgottenPassword";
import ResetPasswordScreen from "./accounts/ResetPassword";
=======
import BottomTabNavigator from "./tabs/BottomTabNavigator";
>>>>>>> 8597ed46b487f2c7a4d782b817a38ace46fd5e80

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    
      <Stack.Screen name="Signup" component={SignupScreen} />
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
   <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Tabs" component={BottomTabNavigator} />

      <Stack.Screen
        name="Phone-verification"
        component={PhoneVerificationScreen}
      />

      <Stack.Screen
        name="ForgottenPassword"
        component={ForgottenPasswordScreen}
      />
      <Stack.Screen
       name ="ResetPassword"
       component={ResetPasswordScreen}
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
