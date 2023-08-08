// SecondPage.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

interface SecondPageProps {
  navigation: any; // Use the appropriate type for navigation
}

const SecondPage: React.FC<SecondPageProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Second Page</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SecondPage;
