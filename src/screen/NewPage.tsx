// NewPage.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

interface NewPageProps {
  navigation: any; // Use the appropriate type for navigation
}

const NewPage: React.FC<NewPageProps> = ({ navigation }) => {
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

export default NewPage;
