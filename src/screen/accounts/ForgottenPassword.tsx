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
import { forgotPassword } from "../../../redux/Actions/auth.Actions";
import { ThunkDispatch } from 'redux-thunk';

interface ForgottenPasswordPageProps {
  navigation: any;
}

const ForgottenPasswordScreen: React.FC<ForgottenPasswordPageProps> = ({ navigation }) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState(false);
  const [resetPasswordSent, setResetPasswordSent] = useState(false);
  const { forgotPasswordLoading, error } = useSelector((state: any) => state?.auth);

  const handleForgottenPassword = () => {
    // Validation logic
    if (email === "") {
      setEmailError(true);
      return;
    }
    // Sending email
    console.log("Send email to:", email);
    dispatch(forgotPassword(email));
    setResetPasswordSent(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('Login')}>
        <View style={styles.backIconContainer}>
          <Icon name="arrow-back" size={24} color="#2B0100" />
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerHeader}>
        <Text style={styles.headerText}>Forgotten Password</Text>
        <Text style={styles.subTitle}>Reset your password</Text>
      </View>

      <TextInput
        style={[styles.input, emailError ? styles.inputError : null]}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError(false);
        }}
      />
      <TouchableOpacity style={styles.forgottenButton} onPress={handleForgottenPassword}>
        {forgotPasswordLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.forgottenButtonText}>Forgotten Password</Text>
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
  containerHeader: {
    marginTop: 40,
  },
  headerText: {
    fontSize: 27,
    fontWeight: "500",
    marginBottom: 40,
  },
  subTitle: {
    color: "#848282",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10, // Corrected the property name
  },
  inputError: {
    borderColor: "red",
  },
  forgottenButton: {
    borderRadius: 32,
    width: "100%",
    marginTop: 25,
    backgroundColor: "#F29F05",
    padding: 20,
  },
  forgottenButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#2B0100", // Corrected the color
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
  backIcon: {
    position: "absolute",
    top: 70,
    left: 10,
  },
});

export default ForgottenPasswordScreen;
