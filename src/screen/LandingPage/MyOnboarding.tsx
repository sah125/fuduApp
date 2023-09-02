import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, Button } from "react-native";
import Swiper from 'react-native-swiper-flatlist';
import { useNavigation } from "@react-navigation/native"; // Import useNavigation


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface HomePageProps {
  navigation: any;
}

const MyOnboarding: React.FC<HomePageProps> = ({ navigation }) => {
 
  return (
    <Swiper style={styles.wrapper} >
        <View style={styles.slide}>
          {/* Content for slide 1 */}
          <View style={styles.container}>
            <View style={styles.topImagesContainer}>
              
                <ImageBackground
                  source={require('../../../assets/images/bgImage.png')}
                  style={styles.bgImage}
                >
                  <Image source={require('../../../assets/images/pins.png')} style={styles.pinsImage} />
                </ImageBackground>
              <View style={styles.centeredTopContainer}>
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
      </View>
      <View style={styles.slide}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#D90504",
  },
  slide: {
  
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D90504",
  },
  container: {
  
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D90504",
  },
  topImagesContainer: {
    position: 'relative',
    flex: 1, // Occupy the entire available space
  
  },
  centeredTopContainer: {
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  bgImage: {
    width: windowWidth, 
    height: windowHeight * 0.51,
    // Cover the image
  },
  centeredBottomContainer: {
    flex: 1,
    
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
    right: 60,
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
    left: 60, 
  },
  textContainer: {
    position: 'relative',
    right: 40,
    margin: 20,
    padding: 20,
    paddingTop: 10, 
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

export default MyOnboarding;
