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
import { login } from "../../../redux/Actions/auth.Actions";
import { ILogin } from "../../../core/login";

const Stack = createStackNavigator();

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector((state: any) => state?.auth);

  const handleLogin = () => {
    // Validation logic
    if (username === "") {
      setUsernameError(true);
      return;
    }
    if (password === "") {
      setPasswordError(true);
      return;
    }

    if (!isValidEmail(username)) {
      setEmailError(true);
      return;
    }
    const model: ILogin = {
      username: username,
      password: password,
    };

    login(model);
    // Perform actual login here
    console.log("Login successful!");
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
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
        <Text style={styles.subTitile}>Login to your account</Text>
      </TouchableOpacity>

      <TextInput
        style={[styles.input, usernameError || emailError ? styles.inputError : null]}
        placeholder="Username"
        value={username}
        onChangeText={(text) => {
          setUsername(text);
          setUsernameError(false);
          setEmailError(false);
        }}
      />
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
      <View style={styles.row}>
        <Switch
          value={rememberMe}
          onValueChange={(newValue) => setRememberMe(newValue)}
        />
        <TouchableOpacity style={styles.forgotPassword}>
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
  subTitile: {
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
});

const connector = connect(null, { login });

export default connector(LoginScreen);
