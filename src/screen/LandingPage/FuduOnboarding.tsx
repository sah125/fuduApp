import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper-flatlist";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface HomePageProps {
  navigation: any;
}

interface Slide {
  title: JSX.Element;
  subTitle: string;
  bgImage: any;
  pinsImage: any | null;
  whiteCircleColor: string | null;
  customImage?: any;
}

const DotComponent = ({
  activeIndex,
  slides,
}: {
  activeIndex: number;
  slides: Slide[];
}) => (
  <View style={styles.dotContainer}>
    {slides.map((_, index) => (
      <View
        key={index}
        style={[styles.dot, index === activeIndex ? styles.activeDot : null]}
      />
    ))}
  </View>
);

const FuduOnboarding: React.FC<HomePageProps> = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: (
        <Text style={styles.titleText}>
          Find food <Text style={styles.boldText}> Restaurants Near </Text>you
        </Text>
      ),
      subTitle:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      bgImage: require("../../../assets/images/bgImage.png"),
      pinsImage: require("../../../assets/images/pins.png"),
      whiteCircleColor: "#FFFFFF",
    },
    {
      title: (
        <Text style={styles.titleText}>
          <Text style={styles.boldText}>Food </Text> you love delivered{" "}
          <Text style={styles.boldText}>24hr to you </Text>
        </Text>
      ),
      subTitle: "Explore a variety of dishes from different cuisines.",
      bgImage: require("../../../assets/images/bgImageY.png"),
      pinsImage: null,
      whiteCircleColor: "#D97803",
    },
    {
      title: (
        <Text style={styles.titleText}>
          <Text style={styles.boldText}>Delivered quickly</Text> at your{" "}
          <Text style={styles.boldText}>place</Text>
        </Text>
      ),
      subTitle: "Place orders easily and have your favorite meals delivered.",
      bgImage: require("../../../assets/images/flat.png"),
      pinsImage: null,
      whiteCircleColor: null,
      customImage: require("../../../assets/images/bike.png"),
    },
  ];

  const handleSlideChange = ({
    index,
  }: {
    index: number;
    prevIndex: number;
  }) => {
    setActiveSlide(index);
  };
  const handleDone = () => {
    navigation.navigate("Home"); // Navigate to the "Home" screen
  };
  const DoneButton: React.FC = () => (
    <TouchableOpacity onPress={handleDone} style={styles.doneButton}>
      <Icon name="check-circle" size={50} color="white" />
    </TouchableOpacity>
  );

  return (
    <Swiper style={styles.wrapper} onChangeIndex={handleSlideChange}>
      {slides.map((slide, index) => (
        <View key={index} style={styles.slide}>
          <View style={styles.container}>
            <View style={styles.topImagesContainer}>
              <ImageBackground
                source={slide.bgImage}
                style={index === 2 ? styles.customBgImage : styles.bgImage}
              >
                {slide.pinsImage && (
                  <Image source={slide.pinsImage} style={styles.pinsImage} />
                )}
              </ImageBackground>
            </View>
            {index !== 2 && (
              // Do not render the whiteCircle for the third slide
              <View
                style={[
                  styles.whiteCircle,
                  { backgroundColor: slide.whiteCircleColor || "#D97803" },
                ]}
              >
                {index !== 1 && (
                  <Image
                    source={require("../../../assets/images/pin.png")}
                    style={styles.imagePin}
                  />
                )}
                <Image
                  source={require("../../../assets/images/burger.png")}
                  style={styles.centerImage}
                />
              </View>
            )}
            {index === 2 && slide.customImage && (
              // Render the customImage for the third slide if it exists
              <Image source={slide.customImage} style={styles.customImage} />
            )}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{slide.title}</Text>
            <Text style={styles.subTitleText}>{slide.subTitle}</Text>
          </View>

          <View style={styles.footerContainer}>
            <DotComponent activeIndex={activeSlide} slides={slides} />
            {index === slides.length - 1 && <DoneButton />}
            {index === 0 && (
              <Image
                source={require("../../../assets/images/cake.png")}
                style={styles.footerImage}
              />
            )}
            {index === 1 && (
              <Image
                source={require("../../../assets/images/burgerImg.png")}
                style={styles.footerImage}
              />
            )}
            {index === 2 && (
              <Image
                source={require("../../../assets/images/cupcake.png")}
                style={styles.footerImage}
              />
            )}
          </View>
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
    alignItems: "center",
  },
  bgImage: {
    width: windowWidth,
    height: windowHeight * 0.5,
  },
  pinsImage: {
    flex: 1,
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    alignSelf: "flex-end",
    resizeMode: "contain",
    marginTop: -windowHeight * 0.1,
    marginRight: windowWidth * 0.1,
  },
  whiteCircle: {
    width: windowWidth * 0.35,
    height: windowWidth * 0.35,
    borderRadius: windowWidth * 0.2,
    backgroundColor: "#FFFFFF",
    marginBottom: windowHeight * 0.05,
    justifyContent: "center",
  },
  customBgImage: {
    width: windowWidth,
    height: windowHeight * 0.3,
    resizeMode: "cover",
    position: "relative",
    top: windowHeight * 0.1,
  },
  customImage: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    resizeMode: "contain",
    alignSelf: "center",
    top: -windowHeight * 0.05,
  },
  imagePin: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    resizeMode: "contain",
    alignSelf: "flex-end",
    marginBottom: -30,
  },
  centerImage: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    resizeMode: "contain",
    alignSelf: "center",
  },
  textContainer: {
    width: 300,
    padding: 0,
    marginBottom: windowHeight * 0.1,
  },
  titleText: {
    fontSize: 26,
    color: "#FFFFFF",
  },
  boldText: {
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 16,
    color: "#FFFFFF",
    paddingTop: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth,
    height: windowHeight * 0.2,
  },
  footerImage: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
    resizeMode: "contain",
    position: "relative",
    top: windowHeight * 0.03,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20,
  },
  dot: {
    width: 15,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#F29F05",
    width: 20,
    height: 15,
    borderRadius: 10,
  },
  doneButton: {
    backgroundColor: "transparent",
    borderRadius: 5,
  },
});

export default FuduOnboarding;
