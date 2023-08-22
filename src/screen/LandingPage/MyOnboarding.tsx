import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { RootStackParamList } from '../AppNavigator'; 


type MyOnboardingNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 // Replace YourStackParamList with your actual type

interface MyOnboardingProps {
  navigation: MyOnboardingNavigationProp;
}

const MyOnboarding: React.FC<MyOnboardingProps> = ({ navigation }) => (
  <Onboarding
    titleStyles={{ color: '#03a60e' }}
    pages={[
      {
        backgroundColor: 'red',
        title: (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Find food{' '}
              <Text style={styles.boldText}>Restaurants Near</Text> you
            </Text>
            <Text style={styles.subtitleText}>
              Contrary to popular belief borem text. It has roots clintock
            </Text>
          </View>
        ),
        subtitle: '',
        imageContainerStyles: styles.slideContainerVertical,
        image: (
          <View style={styles.slideContainerVertical}>
            <View style={styles.half}>
              <View style={styles.content}>
                <Image source={require('../LandingPage/bgImage.png')} />
                <View style={styles.imgContainer}>
                  <View style={styles.whiteCircle}>
                    <View style={styles.imageRow}>
                      <Image source={require('../LandingPage/pin.png')} style={styles.iconImage} />
                      <Image source={require('../LandingPage/burger.png')} style={styles.image} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.bottomImageContainer}>
                <Image source={require('../LandingPage/cake.png')} style={styles.bottomImage} />
              </View>
            </View>
            <View style={styles.topImageContainer}>
              <Image source={require('../LandingPage/pins.png')} style={styles.topImage} />
            </View>
          </View>
        ),
      },
      {
        backgroundColor: 'red',
        title: (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              <Text style={styles.boldText}>Food</Text> you love delivered {' '} 
              <Text style={styles.boldText}>24hr to you</Text>
            </Text>
            <Text style={styles.subtitleText}>
              Contrary to popular belief borem text. It has roots clintock
            </Text>
          </View>
        ),
        subtitle: '',
        imageContainerStyles: styles.slideContainerVertical,
        image: (
          <View style={styles.slideContainerVertical}>
            <View style={styles.half}>
              <View style={styles.content}>
                <Image source={require('../LandingPage/bgImage2.png')} />
                <View style={styles.imgContainer}>
                  <View style={styles.orangeCircle}>
                    <View style={styles.imageRow}>
                      <Image source={require('../LandingPage/burger.png')} style={styles.image} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.bottomImageContainer}>
                <Image source={require('../LandingPage/burgerImg.png')} style={styles.bottomImage} />
              </View>
            </View>
          </View>
        ),
      },
      {
        backgroundColor: 'red',
        title: (
          <View style={styles.titleContainerBike}>
            <Text style={styles.titleText}>
              <Text style={styles.boldText}>Delivered quickly</Text> at your {' '} 
              <Text style={styles.boldText}>place</Text>
            </Text>
            <Text style={styles.subtitleText}>
              Contrary to popular belief borem text. It has roots clintock
            </Text>
          </View>
        ),
        subtitle: '',
        imageContainerStyles: styles.slideContainerVertical,
        image: (
          <View style={styles.slideContainerVertical}>
            <View style={styles.flatContainer}>
              <View style={styles.flat}>
                <Image source={require('../LandingPage/flat.png')} />
                <View style={styles.imgContainer}>
                  <View style={styles.bikeimageRow}>
                    <Image source={require('../LandingPage/bike.png')} style={styles.imageBike} />
                  </View>
                </View>
              </View>
             
            </View>
            <TouchableOpacity
      onPress={() => navigation.navigate('LandingPage')}
      style={styles.bottomImageContainerCake}
    >
      <Image source={require('../LandingPage/cupcake.png')} style={styles.bottomImageCake} />
    </TouchableOpacity>
          </View>
        ),
      },
    ]}
  />
);

const styles = StyleSheet.create({
  slideContainerVertical: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'contain',
  },
  half: {
    width: windowWidth,
    height: windowHeight / 6,
    paddingVertical: windowHeight * 0.2,
    marginTop: -windowHeight * 0.8,
  },
  flatContainer: {
    width: windowWidth,
    height: windowHeight,
    paddingVertical: windowHeight * 0.3,
    marginTop: -windowHeight * 0.5,
    paddingBottom: -windowHeight,
  },
  content: {
    alignItems: 'center',
  },
  flat: {
    alignItems: 'center',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -windowHeight * 0.15,
    zIndex: 1,
  },
  whiteCircle: {
    width: windowHeight * 0.18,
    height: windowHeight * 0.18,
    borderRadius: windowHeight * 0.095,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeCircle: {
    width: windowHeight * 0.18,
    height: windowHeight * 0.18,
    borderRadius: windowHeight * 0.095,
    backgroundColor: '#D97803',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  imageBike: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    
    
  },
  boldText: {
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: windowHeight * 0.09,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleContainerBike: {
    marginTop: windowHeight * 0.2,
    paddingLeft: 20,
    paddingRight: 40,
  },
  titleText: {
    fontSize: 30,
    marginBottom: 10,
    color: 'white',
    textAlign: 'left',
  },
  subtitleText: {
    fontSize: 17,
    color: 'white',
    textAlign: 'left',
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bikeimageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.04,
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: -80,
    marginBottom: 30,
  },
  bottomImageContainer: {
    alignItems: 'center',
    marginBottom: -windowHeight * 0.5,
    marginLeft: windowHeight * 0.3,
  },
  bottomImageContainerCake: {
    alignItems: 'flex-end',
    marginLeft: windowHeight *0.55,
    marginTop: -windowHeight * 0.09,

  },

  bottomImageCake: {
    width: 175,
    height: 190,
    resizeMode: 'contain',
  },
  bottomImage: {
    width: 150,
    height: 1650,
    resizeMode: 'contain',
  },
  
  topImageContainer: {
    alignItems: 'center',
    marginTop: windowHeight * 0.15,
    marginLeft: windowWidth * 0.45,
  },
  topImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default MyOnboarding;
