// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewPage from './NewPage';
import SecondPage from './SecondPage';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewPage" component={NewPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      {/* Add more screens here */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
