import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import NotificationIcon from "./NotificationIcon";

const SearchFilterInput = () => {
  return (
    <View >
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="search" size={20} color="gray" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="gray"
        />

        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="filter" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.notification}>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    width: 350,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    padding: 8,
  },


  notification: {
    position: "absolute",
    right: -10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: 8,
  },
});

export default SearchFilterInput;
