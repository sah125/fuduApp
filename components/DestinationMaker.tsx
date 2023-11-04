import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const DestinationMarker = () => {
  const [mapReady, setMapReady] = useState(false);
  const hardcodedLocation = {
    latitude: -29.788842996737106, // Replace with your desired latitude
    longitude: 30.897526622754366, // Replace with your desired longitude
  };

  // A function to handle the map layout change
  const onMapLayout = () => {
    setMapReady(true);
  };

  return (
    <View style={styles.container} onLayout={onMapLayout}>
      {mapReady && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: hardcodedLocation.latitude,
            longitude: hardcodedLocation.longitude,
            latitudeDelta: 0.01, // Adjust the zoom level as needed
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={hardcodedLocation}
            title="Your Location"
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default DestinationMarker;
