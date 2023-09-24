import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const TermCondition = () => 
{
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    // Toggle the buttonClicked state
    setButtonClicked(!buttonClicked);
  };

  const buttonColor = buttonClicked ? '#FDF5E6' : '#D90504';

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/cake.png')} style={styles.image}/>
      <Image source={require('../../../assets/cupcake.png')} style={styles.image_cake}/>

        <View style={styles.card}>

          <View>
            <Text style={styles.cardText}>Our policy and terms</Text>
            <Text style={styles.cardText1}>Contrary to popular belief, 
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bulletPoint} />
            <Text style={styles.bulletText}>Simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
              making it over 2000 years old.</Text>
          </View>

            <View style={styles.bulletContainer}>
              <View style={styles.bulletPoint} />
              <Text style={styles.bulletText}>Distracted by the readable content of a page when looking at its layout.</Text>
            </View>

            <View style={styles.bulletContainer}>
              <View style={styles.bulletPoint} />
              <Text style={styles.bulletText}>Available, but the majority have suffered alteration.</Text>
            </View>

            <View>
              <Text style={styles.cardText2}>When do we contact information ?</Text>
              <Text style={styles.cardText1}>Contrary to popular belief, 
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </Text>
            </View>

            <View>
              <Text style={styles.cardText2}>Do we use cookies ?</Text>
              <Text style={styles.cardText1}>Contrary to popular belief, 
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: buttonColor }]}
                onPress={handleButtonClick}
              >
                <Text style={styles.buttonText}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: buttonColor }]}
                onPress={handleButtonClick}
              >
                <Text style={styles.buttonText}>Agree</Text>
              </TouchableOpacity>
           </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D90504'
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 188.02,
    height: 188.02,
    opacity:100,
  },

  image_cake: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 186.34,
    height: 215,
    opacity:100,
    color:'#fff',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    elevation: 3,
    position: 'absolute',
    marginTop: 103,
    marginBottom: 102,
    width: 315,
    height: 607,
    left: 29, 
    right: 29, 
    opacity: 1,
  },

  cardText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#555555',
    textAlign:'left',
    lineHeight: 21,
    marginTop:56,
  },
  cardText1: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#777777',
    textAlign:'left',
    lineHeight: 16,
    marginBottom: 8,
  },

  bulletText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#777777',
    textAlign: 'left',
    lineHeight: 16,
    marginBottom: 5,
    marginLeft: 7, 
    flex: 1,
  },

  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },

  bulletPoint: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#F29F05', 
  },

  cardText2: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#555555',
    textAlign:'left',
    lineHeight: 16,
    marginBottom: 8,
  },

  buttonContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },


  button: {
    width: 87, 
    height: 28,
    backgroundColor: '#FDF5E6',
    borderRadius: 4,
    fontSize:9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
  },

  buttonText: {
   color: '#FFFFFF',
   textAlign: 'center',
 },

});

export default TermCondition;
