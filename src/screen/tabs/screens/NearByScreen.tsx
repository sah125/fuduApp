import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons

const generateRandomCoordinate = () => {
  // Generate random latitude and longitude within South Africa's range
  const latitude = Math.random() * (MAX_LATITUDE - MIN_LATITUDE) + MIN_LATITUDE;
  const longitude =
    Math.random() * (MAX_LONGITUDE - MIN_LONGITUDE) + MIN_LONGITUDE;
  return { latitude, longitude };
};

const NearByScreen: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const markers = Array.from({ length: 6 }).map((_, index) => ({
    id: index,
    coordinate: generateRandomCoordinate(),
    title: `Marker ${index + 1}`,
    description: `Description for Marker ${index + 1}`,
  }));

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: INITIAL_LATITUDE,
          longitude: INITIAL_LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsUserLocation={true}
      >
        {/* Markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>

      {/* Filter Icon */}
      <TouchableOpacity style={styles.filterIcon}>
        <Icon name="filter" size={30} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const INITIAL_LATITUDE = -30.5595;
const INITIAL_LONGITUDE = 22.9375;
const LATITUDE_DELTA = 10;
const LONGITUDE_DELTA = 10;
const MIN_LATITUDE = -35.0;
const MAX_LATITUDE = -22.0;
const MIN_LONGITUDE = 16.0;
const MAX_LONGITUDE = 33.0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
});

export default NearByScreen;
