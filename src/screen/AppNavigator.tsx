// AppNavigator.tsx
 import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyOnboarding from '../screen/LandingPage/MyOnboarding'; // Import MyOnboarding
import LandingPage from '../screen/LandingPage/LandingPage';
import SecondPage from './SecondPage';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={MyOnboarding} />
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      
    
    </Stack.Navigator>
  );
};

export default AppNavigator;
