import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, Button } from "react-native";
import Swiper from 'react-native-swiper-flatlist';
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface HomePageProps {
  navigation: any;
}

const DotComponent = () => (
  <View style={styles.dotContainer}>
    {/* You can customize the dot's appearance here */}
    <View style={styles.dot} />
    <View style={styles.dot} />
    <View style={styles.dot} />
  </View>
);

const FuduOnboarding: React.FC<HomePageProps> = ({ navigation }) => {
  const slides = [
    {
      title: (
        <Text style={styles.titleText}>
          Find food <Text style={styles.boldText}> Restaurants Near</Text>you
        </Text>
      ),
      subTitle: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      bgImage: require('../../../assets/images/bgImage.png'),
      pinsImage: require('../../../assets/images/pins.png'),
      whiteCircleColor: '#FFFFFF',
    },
    {
      title: (
        <Text style={styles.titleText}>
          <Text style={styles.boldText}>Food </Text> you love delivered <Text style={styles.boldText}>24hr to you </Text>
        </Text>
      ),
      subTitle: "Explore a variety of dishes from different cuisines.",
      bgImage: require('../../../assets/images/bgImageY.png'),
      pinsImage: null,
      whiteCircleColor: '#D97803',
    },
    {
      title: (
        <Text style={styles.titleText}>
          <Text style={styles.boldText}>Delivered quickly</Text> at your <Text style={styles.boldText}>place</Text>
        </Text>
      ),
      subTitle: "Place orders easily and have your favorite meals delivered.",
      bgImage: require('../../../assets/images/flat.png'),
      pinsImage: null,
      whiteCircleColor: null,
      customImage: require('../../../assets/images/bike.png'),
    },
  ];

  return (
    <Swiper style={styles.wrapper}>
      {slides.map((slide, index) => (
        <View key={index} style={styles.slide}>
          <View style={styles.container}>
            <View style={styles.topImagesContainer}>
              <ImageBackground
                source={slide.bgImage}
                style={styles.bgImage}
              >
                {slide.pinsImage && (
                  <Image source={slide.pinsImage} style={styles.pinsImage} />
                )}
              </ImageBackground>
            </View>
            {index !== 2 && ( // Do not render the whiteCircle for the third slide
              <View style={[styles.whiteCircle, { backgroundColor: slide.whiteCircleColor }]}>
                {index !== 1 && (
                  <Image source={require('../../../assets/images/pin.png')} style={styles.imagePin} />
                )}
                <Image source={require('../../../assets/images/burger.png')} style={styles.centerImage} />
              </View>
            )}
            {index === 2 && slide.customImage && ( // Render the customImage for the third slide if it exists
              <Image source={slide.customImage} style={styles.customImage} />
            )}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.titleText}>
              {slide.title}
            </Text>
            <Text style={styles.subTitleText}>
              {slide.subTitle}
            </Text>
            <DotComponent />
          </View>

          <Image source={require('../../../assets/images/cake.png')} style={styles.footerImage} />

          {index === slides.length - 1 && (
            <Button
              title="Get Started"
              onPress={() => navigation.navigate("Home")}
            />
          )}
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    backgroundColor: "#D90504",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topImagesContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bgImage: {
    width: windowWidth,
    height: windowHeight * 0.5,
  },
  pinsImage: {
    flex: 1,
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    marginTop: -windowHeight * 0.1,
    marginRight: windowWidth * 0.1,
  },
  whiteCircle: {
    width: windowWidth * 0.35,
    height: windowWidth * 0.35,
    borderRadius: windowWidth * 0.2,
    backgroundColor: '#FFFFFF',
    marginBottom: windowHeight * 0.2,
    justifyContent: 'center',
  },
  customImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: windowHeight * 0.13,
   
  },
  imagePin: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginBottom: -30,
  },
  centerImage: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  footerImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    resizeMode: 'contain',
    position: 'relative',
    left: 120,
  },
  textContainer: {
    width: 300,
    position: 'relative',
    top: -90,
  },
  titleText: {
    fontSize: 26,
    color: '#FFFFFF',
  },
  boldText: {
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: 16,
    color: '#FFFFFF',
    paddingTop: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
});

export default FuduOnboarding;
