import React, { useState, useRef, useEffect, createRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { IVerify } from '../../../core/verify';
import { register, verifyOtp, verifyOtpRequest } from '../../../redux/Actions/auth.Actions';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Spinner from 'react-native-loading-spinner-overlay';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { ISignup } from '../../../core/signup';


interface PhoneVerificationPageProps {
  navigation: any;
}



const Stack = createStackNavigator();

const PhoneVerificationScreen: React.FC<PhoneVerificationPageProps> = ({ navigation }) => {

  const route = useRoute();
  const { userName } = route.params as { userName: string } || '';
  const { email } = route.params as { email: string } || '';
  const { dateOfBirth } = route.params as { dateOfBirth: string } || '';
  const { phone } = route.params as { phone: string } || '';
  const { password } = route.params as { password: string } || '';




  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60); // Timer in seconds
  const [resendDisabled, setResendDisabled] = useState(false);
  const [verificationInProgress, setVerificationInProgress] = useState(false);

  //const codeInputs = Array.from({ length: 6 }, () => useRef(null));
  //const codeInputs = Array.from({ length: 6 }, () => createRef<TextInput>());
  const codeInputs = Array.from({ length: 6 }, () => useRef<TextInput | null>(null));

  // const codeInputs = Array.from({ length: 6 }, () => useRef<TextInput | null>(null));
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { verifyOtpLoading, error } = useSelector((state: any) => state?.auth);


  useEffect(() => {
  
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          setResendDisabled(false);
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    // Clear the timer interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleInput = async (index: number, value: string) => {
    setOtp((otp) => {
      const newCode = [...otp];
      newCode[index] = value;
  
      if (index < 5 && value !== '') {
        const nextInput = codeInputs[index + 1].current as TextInput | null;
        if (nextInput) {
          nextInput.focus();
        }
      } else if (index ===5 && value !== '') {
        console.log("Debug - Calling handleVerifyOTP");
        handleVerifyOTP();
      }
  
      return newCode;
    });
  };
  
  


  const handleResendOTP = async () => {

    setResendDisabled(true);
    setTimer(60);


    const signupData: ISignup = {
      userName: userName,
      email: email,
      password: password,
      phone: phone,
      dateOfBirth: dateOfBirth,
    };

    const response = await dispatch(register(signupData));

  };

  const handleVerifyOTP = async () => {
    console.log("Debug - handleVerifyOTP called");
    console.log("Debug - otp:", otp);
    const expectedOTP = otp.join('');
    console.log("Debug - expectedOTP:", expectedOTP);


    try {
      setVerificationInProgress(true);
      const response = await dispatch(verifyOtp(expectedOTP));
      console.log("Debug - response:", response);
      if (response.type === "VERIFY_OTP_SUCCESS") {
        Alert.alert('Success', 'OTP is verified successfully!', [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the next screen or complete the registration process
              navigation.navigate('tabs');
            },
          },
        ]);
      } else if (response.type === "VERIFY_OTP_FAILURE") {

        // OTP verification failed, show an error message
        const errorMessage = response.payload.error;
        console.error("OTP verification failed:", errorMessage);
        Alert.alert('Error', `OTP verification failed: ${errorMessage}`, [
          {
            text: 'OK',
            onPress: () => {
              // Optionally, you can clear the OTP input field here
              //setOtp("");
            },
          },
        ]);
      }
    } catch (error) {
      // Handle other errors, e.g., validation errors
      console.error("Error during OTP verification:", error);
    } finally {
      // Set verification in progress to false when the verification process is done
      setVerificationInProgress(false);
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
        <Image source={require('../../../assets/logo/verification.png')} style={styles.image} />
      </TouchableOpacity>

      <Text style={styles.subText}>Enter the OPT sent to <Text style={styles.phoneText}>{phone}</Text></Text>
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
            value={otp[index]}
            onChangeText={(value) => handleInput(index, value)}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>
      {verifyOtpLoading || verificationInProgress ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Verifying...</Text>
        </View>
      ) : (
        <View style={styles.timerContainer}>
          {resendDisabled || otp.includes('') ? (
            <Text>Resend OTP in {timer} seconds</Text>
          ) : (
            <TouchableOpacity style={styles.verify} onPress={handleResendOTP}>
              <Text style={styles.verifyButtonText}>Don't receive the OTP? <Text style={styles.resendOpt}>Resend OPT</Text></Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  phoneText: {
    fontWeight: "700"
  },
  image: {
    marginBottom: 50,
  },
  backIcon: {
    position: 'absolute',
    top: 70,
    left: 10,
  },
  backIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#2B0100',
    marginLeft: 5,
  },
  headerText: {
    fontSize: 27,
    fontWeight: '500',
    marginBottom: 20,
  },
  subText: {
    color: '#848282',
    marginBottom: 30,
    textAlign: 'center',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  codeInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  spaceBetween: {
    marginLeft: 10,
  },
  verify: {
    marginTop: 30
  },
  timerContainer: {
    marginTop: 10,
  },

  resendOpt: {
    color: "#F29F05",
    textDecorationLine: "underline",

  },
  spinnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  verifyButtonText: {
    color: "#777777"
  },
});

export default PhoneVerificationScreen;
