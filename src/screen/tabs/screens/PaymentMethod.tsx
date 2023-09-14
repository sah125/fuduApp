import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import BellIcon from '../../../../components/BellIcon';

const PaymentMethod = () => {
  return ( 
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.notificationsContainer}>
          <TouchableOpacity style={styles.notificationItem}>
            <BellIcon badgeCount={5} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardContainer}>
       
          <View style={styles.editAddressContainer}> 
            <View style={styles.locationItem}>
            <Icon name="location" size={10} color="#D90504" />
            <Text style={styles.deliveryAddressText}>Delivery Address</Text>
            </View>
            <TouchableOpacity style={styles.addressItem}>
            <Icon name="pencil" size={10} color="#D90504" />
            <Text style={styles.addressText}>Edit Address</Text>
            </TouchableOpacity>
            </View>
         
          <View style={styles.mapContainer}>
            <Image source={require('../../../../assets/images/map.jpg')} style={styles.imageStyle} />
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>782 Kings Road Clermont, Durban, KZN,South Afica</Text>
          </View>
       
      </View>

      <TouchableOpacity style={styles.deliveryInstruction}>
        <Text style={styles.deliveryText}> + </Text>
        <Text style={styles.deliveryText}>Add Delivery Instruction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1, 
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 10,
    height: 150,
    backgroundColor: '#848282',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 17,
    color: '#FFFFFF',
    marginLeft: 5,
  },
  notificationsContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  notificationItem: {},

  cardContainer: {
    margin: 20, 
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    position: 'relative',
    top: -70,
   
  },
  locationItem: {
    flexDirection: 'row',
  },
  MapItemContainer: {
    padding: 0,
  },
  editAddressContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  deliveryAddressText: {
    fontSize: 8,
    color: '#848282',
    paddingLeft: 5,
  },
  addressItem: {
    flexDirection: 'row',

  },
  mapContainer: {
    alignItems: 'center',
   
  },
  addressText: {
    fontSize: 8,
    color: '#848282',
  },
  locationContainer: {
    width: '50%',
    
  },
  locationText: {
    fontSize: 8,
    color: '#848282',
    padding:5,
    
  },
  imageStyle: {
    width: '100%', 
    height: 100, 
    
  },
  deliveryInstruction: {
    flexDirection: 'row',
    padding: 20,
    position: 'relative' ,
    top: -90,
  },
  deliveryText: {
    fontWeight: '700',
    fontSize: 8,
  }
});

export default PaymentMethod;
