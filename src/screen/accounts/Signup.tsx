import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { connect, useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/Actions/registration.Actions";
import { ISignup } from "../../../core/signup";


const Stack = createStackNavigator();

const SignupScreen = () => {
    //variables
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [termsChecked, setTermsChecked] = useState<boolean>(false);
    //boolean variables
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [ConfirmPasswordError, setConfirmPasswordError] = useState(false);
    const [termsCheckedError, setTermsCheckedError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [dateOfBirthError, setDateOfBirthError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const dispatch = useDispatch();
    const { isSignUp, error } = useSelector((state: any) => state?.auth);

    // Validation function for email
    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const isValidDateFormat = (dateOfBirth:  string) => {
        // Check if dateOfBirth follows the format DDMMYYYY
        const dateFormatRegex = /^\d{8}$/; // Assumes exactly 8 digits
        return dateFormatRegex.test(dateOfBirth);
    };
      
 
    const handleSignup = () => {

        // Validation logic
        if (password !== confirmPassword) {
            setConfirmPasswordError(true);
            return;
        }

        if(termsChecked === false){
            setTermsCheckedError(true);
            return;
        }

        if (!isValidEmail(email)) {
            setEmailError(true); 
            return;
        } else {
            setEmailError(false); 
        }
        
        const model: ISignup = {
          username: username,
          email: email,
          phoneNumber: phoneNumber,
          dateOfBirth: dateOfBirth,
          password: password,
          confirmPassword: confirmPassword,
          termsChecked: termsChecked,
        };
    
        signup(model);
        // Perform actual signup here
        console.log("Signup successful!");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon}>
                <View style={styles.backIconContainer}>
                    <Icon name="arrow-back" size={24} color="#2B0100" />
                    <Text style={styles.backText}>Back</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerHeader}>
                <Text style={styles.headerText}>Create an account</Text>
            </TouchableOpacity>

            <TextInput
                style={[styles.input,usernameError && styles.inputError]}
                placeholder="Username"
                value={username}
                onChangeText={(text) => {
                setUsername(text);
                setUsernameError(false);
                }}
            />

            <TextInput
                style={[styles.input, emailError && styles.inputError]}
                placeholder="Email"
                value={email}
                onChangeText={(text) => {
                setEmail(text);
                }}
            />

            {emailError && !isValidEmail(email) && (
                <View style={styles.row}>
                    <Text style={styles.dateFormatText}>Does not march your password</Text> 
                </View>
            )}
            
            <TextInput
                style={[styles.input, phoneNumberError && styles.inputError]}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={(text) => {
                    setPhoneNumber(text);
                    setPhoneNumberError(false);
                }}
                keyboardType="numeric" // Only allow numeric keyboard
            />

            <TextInput
                style={[styles.input,dateOfBirthError && styles.inputError]}
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChangeText={(text) => {
                    const formattedText = text.replace(/[^0-9]/g, '').slice(0, 8);
                    setDateOfBirth(formattedText);
                    setDateOfBirthError(false);
                }}

                keyboardType="numeric" // Only allow numeric keyboard
                maxLength={8}
            />
            {dateOfBirthError && !isValidDateFormat(dateOfBirth) && (
                <View style={styles.row}>
                    <Text style={styles.dateFormatText}>DD/MM/YYYY</Text> 
                </View>
            )}
            <View style={styles.passwordInput}>
                <TextInput
                    style={[styles.input, passwordError && styles.inputError]}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={(text) => {
                    setPassword(text);
                    setPasswordError(false);
                    }}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                >
                    <Icon
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#2B0100"
                    />
                </TouchableOpacity>
            </View>

            {passwordError && (
                <View style={styles.row}>
                    <Text style={styles.dateFormatText}>Minimum 6 characters with number and letter</Text> 
                </View>
            )}

            <View style={styles.passwordInput}>
                <TextInput
                    style={[styles.input, ConfirmPasswordError && styles.inputError]}
                    placeholder="Confirm Password"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={(text) => {
                    setConfirmPassword(text);
                    setConfirmPasswordError(false);
                    }}
                />
                <TouchableOpacity
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={styles.eyeIcon}
                >
                    <Icon
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#2B0100"
                    />
                </TouchableOpacity>
            </View>

            {ConfirmPasswordError && (
                <View style={styles.row}>
                    <Text style={styles.dateFormatText}>Password does not match</Text> 
                </View>
            )}

            <View style={styles.row}>
                <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setTermsChecked(!termsChecked)}
                >
                {termsChecked && (
                    <Icon name="checkmark-circle" size={24} color="#2B0100" />
                )}
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.termsLink}
                onPress={() => {
                    // Handle showing terms and conditions
                }}
                >
                <Text style={styles.termsText}>I want to receive exclusive offers and promotions from Fudu</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                {isSignUp ? (
                <ActivityIndicator color="white" size="small" />
                ) : (
                <Text style={styles.signupButtonText}>Sign Up</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
                <Text style={styles.facebookButtonText}>Contact with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.condition}>
                <Text style={styles.conditionText}>
                    By clicking sign up you agree to the following {" "}<Text style={styles.accountText}>
                    Terms and Conditions</Text>{" "}with out reservation
                </Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    backIcon: {
      marginTop: 10,
      position: "absolute",
      top: 30,
      left: 10,
    },

    createAccount: {
      marginTop: 20,
      alignItems: "center",
    },
    accountText: {
      color: "#6285F6",
    },
    createAccountText: {},
    headerText: {
      fontSize: 27,
      fontWeight: "500",
      marginBottom: 20,
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
    input: {
      width: "100%",
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    inputError: {
      borderColor: "red",
    },
    passwordInput: {
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
    },
    eyeIcon: {
      position: "absolute",
      right: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 10,
    },
    
    containerHeader: {
      marginTop: 160,
    },
    signupButton: {
      borderRadius: 32,
      width: "100%",
      marginTop: 25,
      color: "#2B0100",
      padding: 20,
      backgroundColor: "#F29F05",
    },
    signupButtonText: {
      fontSize: 16,
      textAlign: "center",
    },
    facebookButtonText: {
      fontSize: 16,
      textAlign: "center",
      color: "#fff",
    },
    facebookButton: {
      borderRadius: 32,
      width: "100%",
      padding: 20,
      marginTop: 20,
      backgroundColor: "#6285F6",
      color: "#00FF00",
    },

    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
      },
      termsLink: {
        flex: 1,
        marginLeft: 10,
      },
      termsText: {
        fontSize: 14,
        color: "#848282",
        fontFamily: "Roboto",
        fontWeight: "400", 
      },
      condition: {
        width: 240, 
        height: "auto", 
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10, 
      },
      conditionText: {
        color: "#848282", 
        opacity: 1, 
        fontFamily: "Roboto", 
        fontWeight: "400", 
        fontSize: 12, 
        textAlign: "center",
        marginBottom: 60
      },
      dateFormatText: {
        color: "#848282",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 8,
        textAlign: "left",
        lineHeight: 10,
      },
    });

const connector = connect(null, { signup });
export default connector(SignupScreen);
