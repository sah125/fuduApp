import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MyOnboarding1 = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.topImagesContainer}>
        <View style={styles.centeredTopContainer}>
          <ImageBackground
            source={require('../../../assets/images/bgImage.png')}
            style={styles.bgImage}
          >
            {/* Image component moved here */}
            <Image source={require('../../../assets/images/pins.png')} style={styles.pinsImage} />
          </ImageBackground>
          <View style={styles.bottomImageContainer}>
            <View style={styles.whiteCircle}>
              <Image source={require('../../../assets/images/pin.png')} style={styles.imagePin} />
              <Image source={require('../../../assets/images/burger.png')} style={styles.centerImage} />
            </View>
          </View>
        </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          Find food{' '}
          <Text style={styles.boldText}>Restaurants Near</Text> you
        </Text>
        <Text style={styles.subTitleText}>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </Text>
      </View>
      </View>
      <Image source={require('../../../assets/images/cake.png')} style={styles.footerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D90504',
  },
  topImagesContainer: {
    position: 'relative',
    flex: 1, // Occupy the entire available space
    justifyContent: 'flex-start', // Align to the top
    alignItems: 'center',
  },
  centeredTopContainer: {
    justifyContent: 'flex-start', // Align to the top
    alignItems: 'center',
  },
  bgImage: {
    width: windowWidth, // Cover the full width of the screen
    height: windowHeight * 0.51,
    resizeMode: 'cover', // Cover the image
  },
  centeredBottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerImage: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    resizeMode: 'contain',
  },
  bottomImageContainer: {
    position: 'absolute',
    bottom: -20,
  },
  pinsImage: {
    position: 'absolute',
    top: 50,
    right: 30,
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    resizeMode: 'contain',
    zIndex: 1,
  },
  whiteCircle: {
    width: windowWidth * 0.35,
    height: windowWidth * 0.35,
    borderRadius: windowWidth * 0.2,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePin: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    marginRight: -windowWidth * 0.15,
    resizeMode: 'contain',
    marginBottom: -20,
  },
  footerImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    resizeMode: 'contain',
    position: 'relative',
    left: 150, // Adjust the value as needed
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    paddingTop: 10, // Add some space here
  },

  titleText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'left',
  },
  boldText: {
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    paddingTop: 10, 
   
  },
});

export default MyOnboarding1;
