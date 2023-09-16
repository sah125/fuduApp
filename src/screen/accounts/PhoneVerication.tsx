import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PhoneVerificationScreen = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const codeInputs = Array.from({ length: 6 }, () => useRef(null));

  const handleInput = (index: number, value: string) => {
    setVerificationCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;

      if (index < 5 && value !== '') {
        const nextInput = codeInputs[index + 1].current;
        if (nextInput) {
          // nextInput.focus();
        }
      }
  
      return newCode;
    });
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
     
      <Text style={styles.subText}>Enter the OPT sent to <Text style={styles.phoneText}>+880 2568963123</Text></Text>
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
      <TouchableOpacity style={styles.verify}>
        <Text style={styles.verifyButtonText}>Don't receive the OTP? <Text style={styles.resendOpt}>Resend OPT</Text></Text>
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
    fontWeight:"700"
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
    marginTop:30
  },
  resendOpt: {
    color:"#F29F05",
    
  },
  spinnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  verifyButtonText: {
      color:"#777777"
  },
});

export default PhoneVerificationScreen;
