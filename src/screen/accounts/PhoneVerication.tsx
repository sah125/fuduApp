import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
 
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { phoneVerification, signin } from "../../../redux/Actions/auth.Actions";
import { ILogin } from "../../../core/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';




interface phoneVerificationProps {
  navigation: any;
}

type AppDispatch = ThunkDispatch<any, unknown, AnyAction>;
const PhoneVerificationScreen: React.FC<phoneVerificationProps> = ({
  navigation,
}) => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const codeInputs = Array.from({ length: 6 }, () => useRef(null));
  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [redirected, setRedirected] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { user, error } = useSelector((state: any) => state?.auth);

  useEffect(() => {
    if (timer > 0 && !redirected) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (timer === 0 && !redirected) {
      setRedirected(true);
    }
  }, [timer, redirected]);

  const handleInput = async (index: number, value: string) => {
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;

      if (index < 5 && value !== "") {
        const nextInput = codeInputs[index + 1].current;
        if (nextInput) {
          (nextInput as any).focus();
        }
      } else if (index === 5 && value !== "") {
        const enteredCode = newCode.join("");
        phoneVerificationNumber(enteredCode);
      }

      return newCode;
    });
  };

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // Here, you can do whatever you want with the latitude and longitude.
        },
        (error) => console.error(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } else {
      console.log('Geolocation is not available in this browser/environment.');
    }
  };
  

  const phoneVerificationNumber = async (enteredCode: string) => {
    try {
      const response = await dispatch(phoneVerification(enteredCode));

      if (response.type === "SIGNUP_SUCCESS") {
        const model: ILogin = {
          email: user.email,
          password: user.password,
        };
        const loginresponse = await dispatch(signin(model));
        console.log("Login Response:", loginresponse);

        if (loginresponse && loginresponse.type === "LOGIN_SUCCESS") {
          // Access the access token from the response
          const accessToken = loginresponse.payload?.user?.token;
          console.log("Access Token:", accessToken);
  
          if (accessToken) {
            // If the access token is defined,
            // store it in AsyncStorage
            await AsyncStorage.setItem("accessToken", accessToken);
  
            // Get the user's current location
            getCurrentLocation();
  
            navigation.navigate("Tabs"); // Assuming this is your next screen
            console.log("Successfully Login and navigated to Tabs");
          } else {
            // Handle the case where the access token is undefined
            // Get the user's current location
            getCurrentLocation();
            console.error("Access token is undefined");
          }
  
        }
      } else {
        Alert.alert(
          "Message",
          error,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      // Handle any errors that occurred during dispatch
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon}>
        <View style={styles.backIconContainer}>
          <Icon name="arrow-back" size={24} color="#2B0100" />
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.headerText}>Phone Verification</Text>
      <TouchableOpacity>
        <Image
          source={require("../../../assets/logo/verification.png")}
          style={styles.image}
        />
      </TouchableOpacity>

      <Text style={styles.subText}>
        Enter the OTP sent to{" "}
        <Text style={styles.phoneText}>{user?.phone}</Text>
      </Text>
      <View style={styles.codeInputContainer}>
        {codeInputs.map((ref, index) => (
          <TextInput
            key={index}
            ref={ref}
            style={[
              styles.codeInput,
              index === 0 ? null : styles.spaceBetween,
              styles.borderBottom,
            ]}
            value={verificationCode[index]}
            onChangeText={(value) => handleInput(index, value)}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verify}>
        <Text style={styles.verifyButtonText}>
          {timer === 0 ? "Resend OTP" : `Resend OTP in ${timer} seconds`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  phoneText: {
    fontWeight: "700",
  },
  image: {
    marginBottom: 50,
  },
  backIcon: {
    position: "absolute",
    top: 70,
    left: 10,
  },
  backIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    color: "#2B0100",
    marginLeft: 5,
  },
  headerText: {
    fontSize: 27,
    fontWeight: "500",
    marginBottom: 20,
  },
  subText: {
    color: "#848282",
    marginBottom: 30,
    textAlign: "center",
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  codeInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  spaceBetween: {
    marginLeft: 10,
  },
  verify: {
    marginTop: 30,
  },
  resendOpt: {
    color: "#F29F05",
  },
  verifyButtonText: {
    color: "#777777",
  },
});

export default PhoneVerificationScreen;



