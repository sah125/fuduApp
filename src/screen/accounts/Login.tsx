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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { connect, useDispatch, useSelector } from "react-redux";
import { signin, loginSuccess, loginFailure} from "../../../redux/Actions/auth.Actions";
import { ILogin } from "../../../core/login";
import { useNavigation } from '@react-navigation/native';
import { ThunkDispatch } from "redux-thunk";
import { loginRequest } from "../../../redux/Actions/login.Actions";

interface LoginPageProps {
  navigation: any; 
}



const Stack = createStackNavigator();

const LoginScreen : React.FC<LoginPageProps> = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
 // const dispatch = useDispatch();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { isLoggedIn, error } = useSelector((state: any) => state?.auth);

 

  const handleLogin = async () => {
    // Validation logic
    if (email === "") {
      setEmailError(true);
      return;
    }
    if (password === "") {
      setPasswordError(true);
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    const model: ILogin = {
      email: email,
      password: password,
    };

    // Dispatch the signin action and await the response
    dispatch(loginRequest());

    try {
      const response = await dispatch(signin(model));

      if (response && response.type === "LOGIN_SUCCESS") {
        // If the login was successful, store the token in AsyncStorage
        await AsyncStorage.setItem("accessToken", "");
        navigation.navigate("Tabs"); // Assuming this is your next screen
        console.log("Successfully Login and navigated to Tabs");
      } else if (response && response.type === "LOGIN_FAILURE") {
        // If the login failed, show an error message or navigate to the forgotten password screen
        navigation.navigate("ForgottenPassword");
        console.error("Login failure:", response.payload.error);
      }
    } catch (error) {
      // Handle other errors, e.g., validation errors
      console.error("Validation error:", error);
    }
  };
    
    
    

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  //const navigation = useNavigation();

  const handleForgotPassword = () => {
   // navigation.navigate('ForgottenPassword','');

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
        <Text style={styles.headerText}>Welcome Back</Text>
        <Text style={styles.subTitle}>Login to your account</Text>
      </TouchableOpacity>

      <TextInput
        style={[
          styles.input,
          (emailError || passwordError) && styles.inputError,
        ]}
        placeholder="Username or Email" // Placeholder for username or email
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError(false);
          setPasswordError(false);
        }}
      />
      <TouchableOpacity>
        {emailError && (
          <Text style={styles.errorLabel}>
            Please enter a valid username or email
          </Text>
        )}
      </TouchableOpacity>

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
      <View>
        {passwordError && (
          <Text style={styles.errorLabel}>Please enter a valid password</Text>
        )}
      </View>
      <View style={styles.row}>
        <Switch
          value={rememberMe}
          onValueChange={(newValue) => setRememberMe(newValue)}
        />
        <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
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

      <TouchableOpacity style={styles.createAccount}>
        <Text style={styles.createAccountText}>
          Don't have an account?{" "}
          <Text style={styles.accountText}>Create a new account</Text>
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
  backIcon: {
    position: "absolute",
    top: 70,
    left: 10,
  },
  createAccount: {
    marginTop: 40,
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
  subTitle: {
    color: "#848282",
    marginBottom: 50,
    textAlign: "center",
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
  forgotPassword: {
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#6285F6",
  },
  containerHeader: {
    marginTop: 40,
  },
  loginButton: {
    borderRadius: 32,
    width: "100%",
    marginTop: 25,
    color: "#2B0100",
    padding: 20,
    backgroundColor: "#F29F05",
  },
  loginButtonText: {
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
  },
  errorLabel: {
    color: "red",
    textAlign: "left",
    fontSize: 14,
    marginTop: 5,
  },
});

const connector = connect(null, { signin });

export default connector(LoginScreen);
