import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import { connect, useDispatch, useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Delivered Fast at your Door");
  const bodyText = 'Contrary to popular belief borem text.';
  const { isLoggedIn, error } = useSelector((state: any) => state?.auth);
  

    const handleLogin = () => {
        // Validation logic
        
    
        console.log("Login successful!");
    };

  return (
    <ImageBackground
      source={require('../LandingPage/TopEdited.png')}
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.titleText}>
        <Text style={styles.boldText}>Delivered Fast</Text> at {'\n'} 
        your <Text style={styles.boldText}>Door</Text>
      </Text>

      <Text style={styles.baseText}>{bodyText}</Text>
      <Text>It has roots clintock.</Text>
    


      <TouchableOpacity style={styles.createAccount} onPress={handleLogin}>
        {isLoggedIn ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.createAccountText}>Create an account</Text>
        )}
      </TouchableOpacity>


      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        {isLoggedIn ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.loginButtonText}>Sign In</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.facebookButtonText}>Contact with Facebook</Text>
      </TouchableOpacity>

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200,
  },
  baseText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto',
    marginTop: 15,
  },

  boldText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 100,
  },

   titleText: {
    fontSize: 33,
    textAlign: 'center',
  },

  createAccount: {
    backgroundColor: '#03A60F',
    borderRadius: 32,
    width: "70%",
    marginTop: 120,
    color: "#2B0100",
    padding: 17,
  },

  createAccountText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },

  facebookButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  facebookButton: {
    borderRadius: 32,
    width: "70%",
    padding: 17,
    marginTop: 20,
    backgroundColor: "#6285F6",
  },
  loginButton: {
    borderRadius: 32,
    width: "70%",
    marginTop: 25,
    color: "#2B0100",
    padding: 17,
    backgroundColor: "#F29F05",
  },
  loginButtonText: {
    fontSize: 16,
    textAlign: "center",
  },

   background: {
    flex: 1,
    resizeMode: 'cover',
  },
  
});

export default TextInANest;

