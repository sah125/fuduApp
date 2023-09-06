import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface HomePageProps {
  navigation: any;
}

const CustomButton: React.FC<{ title: string, onPress: () => void }> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>
          <Text style={styles.boldText}>Get</Text> Start Now
        </Text>
        <Text style={styles.subtext}>Contrary to popular belief borem text. it has roots clintock</Text>
        <View style={styles.buttonContainer}>
          <CustomButton title="Get Started" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    position: 'absolute',
    top: 30,
    right: 5,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'grey',
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    textAlign: 'left',
  },
  boldText: {
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    textAlign: 'left',
  },
  buttonContainer: {
    alignSelf: 'flex-start',
  },
  customButton: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
  },
  goBackButtonContainer: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
});

export default HomePage;
