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
import { connect, useDispatch, useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
//import { connect, useDispatch, useSelector } from "react-redux";
import { login, resetPassword } from "../../../redux/Actions/auth.Actions";
import { ILogin } from "../../../core/login";
import { ThunkDispatch } from "redux-thunk";

const ResetPasswordScreen = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { resetPasswordLoading, error } = useSelector(
    (state: any) => state?.auth
  );

  const handleResetPassword = () => {
    //validation logic
    if (password === "" || confirmPassword === "") {
      setPasswordError(true);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }
    dispatch(resetPassword(password, confirmPassword));
    // Perform password reset logic here
    console.log("New password:", password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Reset Password</Text>
      <Text style={styles.subTitle}>Enter your new password</Text>

      <TextInput
        style={[styles.input, passwordError ? styles.inputError : null]}
        placeholder="New Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError(false);
        }}
      />

      <TextInput
        style={[styles.input, passwordError ? styles.inputError : null]}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
          setPasswordError(false);
        }}
      />
      <TouchableOpacity
        style={styles.resetButton}
        onPress={handleResetPassword}
      >
        {resetPasswordLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.resetButtonText}>Reset Password</Text>
        )}
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
  resetButton: {
    borderRadius: 32,
    width: "100%",
    marginTop: 25,
    padding: 20,
    color: "#2B0100",
    backgroundColor: "#F29F05",
  },
  resetButtonText: {
    fontSize: 16,
    textAlign: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
});

const connector = connect(null, { resetPassword });

export default connector(ResetPasswordScreen);
