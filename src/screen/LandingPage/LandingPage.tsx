// LandingPage.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

interface LandingPageProps {
  navigation: any; 
}

const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the New Page</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate('SecondPage')}
      />
    </View>
  );
};

export default LandingPage;
