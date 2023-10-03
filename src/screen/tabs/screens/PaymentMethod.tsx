  import React, {useState, useEffect, useMemo } from "react";
  import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from "react-native";
  import Icon from 'react-native-vector-icons/Ionicons';
  import BellIcon from '../../../../components/BellIcon';
  import { increaseQuantity, decreaseQuantity, calculateSubtotal, CALCULATE_SUBTOTAL } from '../../../../redux/Actions/totalActions'; // Import your action creators
  import { RootState } from '../../../../redux/store';
  import { useSelector, useDispatch } from 'react-redux';

  const PaymentMethod = ({ totalWithVAT }: { totalWithVAT: number }) => {    const [isToggleOn, setIsToggleOn] = useState(false);

    const toggleSwitch = () => {
      setIsToggleOn((prev) => !prev);
    };

    const items = useSelector((state: RootState) => state.total.items); // Use "state.total.items" for items
    const total = useSelector((state: RootState) => state.total.total); // Use "state.total.total" for total
    const dispatch = useDispatch();

    useEffect(() => {
      // Recalculate subtotal after increasing or decreasing quantity
      dispatch(calculateSubtotal());
    }, [items]); 
    
    const quantityTotal = useMemo(() => {
      if (typeof total === 'number') {
        return (total - 30).toFixed(2);
      }
      return '';
    }, [total]);
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
                <Icon name="pencil" size={10} color="#848282" />
                <Text style={styles.addressText}>Edit Address</Text>
              </TouchableOpacity>
            </View>
          
            <View style={styles.mapContainer}>
              <Image source={require('../../../../assets/images/map.jpg')} style={styles.imageStyle} />
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>782 Kings Road Clermont, Durban, KZN, South Africa</Text>
            </View>
        
        </View>
        <View style={styles.deliveryContainer}>
          <TouchableOpacity style={styles.deliveryInstruction}>
            <Text style={styles.deliveryText}> + </Text>
            <Text style={styles.deliveryText}>Add Delivery Instruction</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.toggleItemContainer}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Contactless delivery, place my order at the door</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#E03636" }}
            thumbColor={isToggleOn ? "#E03636" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isToggleOn}
          />
          </View>
        </View>
        <View style={styles.ItemContainer}>
        <View style={styles.walletItemContainer}>
        <View style={styles.walletContainer}>
          <Image source={require('../../../../assets/images/wallet.jpg')} style={styles.walletStyle} />
          <Text style={styles.walletText}>Payment method</Text>
        </View>
        <View style={styles.paymentContainer}>
          <TouchableOpacity style={styles.paymentInstruction}>
            <Text style={styles.paymentText}> + </Text>
            <Text style={styles.paymentText}>add a payment method</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
        
        <View style={styles.totalContainer}>
        <View style={styles.totalItemContainer}>
          <Text style={styles.totalLabel}>Total <Text style={styles.smallItem}> (incl. VAT) </Text></Text>
          {total !== undefined && <Text style={styles.totalAmount}>${quantityTotal}</Text>}
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.selectPaymentButton}>
            <Text style={styles.selectPaymentButtonText}>Select Payment Method</Text>
          </TouchableOpacity>
          </View>
        </View>

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
      paddingBottom: 90,
      paddingHorizontal: 10,
      height: '25%',
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
      paddingLeft: 2,
    },
    locationContainer: {
      width: '50%',
      
    },
    locationText: {
      fontSize: 8,
      color: '#848282',
      padding: 5,
      
    },
    imageStyle: {
      width: '100%', 
      height: 100, 
      
    },
    deliveryContainer: {
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      width: '90%',
      height: '5%',
      marginLeft: 20,
      position: 'relative',
      top: -70,
    },
    deliveryInstruction: {
      flexDirection: 'row',
      paddingTop: 10,
      marginLeft: 5,
      
      
    },
    deliveryText: {
      fontWeight: '700',
      fontSize: 8,
    },
    toggleItemContainer: {
    alignItems: 'center',
    position: 'relative',
    top: -60,
    },
    
    toggleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      width:'90%' ,
    },
    toggleText: {
      fontSize: 8,
      fontWeight: '700',
      color: '#2B0100',
      marginLeft: 10,
    },
    ItemContainer: {
      paddingLeft: 20,
      position: 'relative',
      top: -50,

    },
    walletItemContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      width: '95%',
      padding: 10, 
    },
    walletContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    walletStyle: {
      width: 13,
      height: 13,
      marginRight: 5, 
    },
    walletText: {
      fontSize: 12, 
      color: '#2B0100',
      fontWeight: '700',
    },
    paymentContainer: {
      
    },
    paymentInstruction: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paymentText: {
      fontSize: 8, 
      color: '#2B0100',
    },

    totalContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
    },
    totalItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    totalLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    totalAmount: {
      paddingTop: 8,
      fontSize: 8,
    },
    smallItem: {
      fontSize: 8,
      color: '#848282',
    },
    buttonContainer: {
      marginTop: 20,
      alignItems: 'center',
      
    },
    selectPaymentButton: {
      backgroundColor: '#E03636',
      width: '80%',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
    
    },
    selectPaymentButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    
  });


  export default PaymentMethod;
