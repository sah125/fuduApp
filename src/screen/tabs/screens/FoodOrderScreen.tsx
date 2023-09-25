import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationIcon from '../../../../components/NotificationIcon';
import PopularWithYourOrder from '../../../../components/PopularWithYourOrder';
import YourOrders from '../../../../components/YourOrders';

const FoodOrderScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notification}>
          <NotificationIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.centerContainer}>
        <View style={styles.storeCard}>
          <Text style={styles.storeName}>Good Food Cafe</Text>
          <Text style={styles.storeSubtitle}>
            Café . Western Food . $
            {' '}
            <Icon name="star" size={15} color="#D90504" />
            <Text style={styles.ratingText}>4.9 </Text>(210 ratings)
          </Text>
          <View style={styles.storeAddress}>
            <Icon name="location" size={15} color="#D90504" />
            <Text style={styles.addressText}>123 Main Street, Cityville</Text>
          </View>
          <Text style={styles.deliveryTime}>15 - 20 min</Text>
        </View>

        <View style={styles.popularContainer}>
          <PopularWithYourOrder />
        </View>

        <YourOrders />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#848282',
    resizeMode: 'contain', 
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 10,
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
  notification: {
    backgroundColor: 'transparent',
  },
  centerContainer: {
    flex: 6,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  storeCard: {
    justifyContent: 'center',
    alignItems: 'center',
   },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B0100',
  },
  storeSubtitle: {
    fontSize: 12,
    color: '#848282',
  },
  storeAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 12,
    color: '#848282',
  },
  addressText: {
    fontSize: 12,
    color: '#848282',
  },
  deliveryTime: {
    marginTop: 5,
    fontSize: 6,
    color: '#FFFFFF',
    backgroundColor: '#F29F05',
    borderRadius: 10,
    padding: 3,
    
  },
  popularContainer: {
    flexDirection:'column' ,
  },
  innerContainer: {
    marginTop: 20,
  },
  childText: {
    fontSize: 12,
    color: '#000',
  },
  ratingText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '800',
  },
});

export default FoodOrderScreen;
