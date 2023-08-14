import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OnboardingSwiper from 'react-native-onboarding-swiper';
import { NavigationProp } from '@react-navigation/native';

interface MyOnboardingProps {
  navigation: NavigationProp<any>;
}

const SlideContent: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {title}
        </Text>
        <Text style={styles.subtitleText}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

const MyOnboarding: React.FC<MyOnboardingProps> = ({ navigation }) => {
  return (
    <OnboardingSwiper
      containerStyles={{ flex: 1 }}
      showSkip={false} 
      showNext={false} 
      pages={[
        { 
          
          backgroundColor: 'red', // Update the background color
          image: <View style={styles.emptyImage} />, // Add an empty image placeholder
          title: (
            <Text style={styles.titleText}>
              Find food <Text style={styles.boldText}>Restaurants Near</Text> You
            </Text>
          ),
          subtitle: 'Contrary to popular belief, boring text has roots in a piece of classical Latin literature.', // Add an empty string as the subtitle
          customPage: SlideContent, // Use the custom SlideContent component
        },
        {
          backgroundColor: '#fdeb93',
          title: 'Explore',
          subtitle: 'This is the second slide of the Onboarding Swiper.',
        },
        {
          backgroundColor: '#e9bcbe',
          title: 'All Done',
          subtitle: 'This is the third slide of the Onboarding Swiper.',
        },
      ]}
      onDone={() => {
        navigation.navigate('LandingPage');
      }}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start', // Align content to start on the left
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
  },
  emptyImage: {
    width: 10,
    height: 10,
  },
  titleText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    textAlign: 'left', // Align text to start on the left
  },
  subtitleText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left', // Align text to start on the left
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default MyOnboarding;
