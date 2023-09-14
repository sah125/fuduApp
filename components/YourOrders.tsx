import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Item {
  name: string;
  quantity: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const OrderItem: React.FC<Item> = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textItem}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.priceItem}>${price}</Text>
      </View>
      <View style={styles.itemQuantity}>
        <TouchableOpacity onPress={onDecrease}>
          <Text style={styles.circle}> - </Text>
        </TouchableOpacity>
        <Text style={styles.textContainer}> {quantity} </Text>
        <TouchableOpacity onPress={onIncrease}>
          <Text style={styles.circle}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const YourOrders = () => {
  const [items, setItems] = useState<Item[]>([
    { name: 'Special Chicken Burger', quantity: 1, price: 30, onIncrease: () => {}, onDecrease: () => {} },
    { name: 'Chicago Thin Crust', quantity: 2, price: 30, onIncrease: () => {}, onDecrease: () => {} },
    { name: 'Special Chicken Burger', quantity: 1, price: 30, onIncrease: () => {}, onDecrease: () => {} },
    { name: 'Special Chicken Burger', quantity: 2, price: 30, onIncrease: () => {}, onDecrease: () => {} },
  ]);

  const getTotalQuantity = () => {
    return items.reduce((total, item) => (total + item.quantity), 0);
  };

  const increaseQuantity = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].quantity++;
    setItems(updatedItems);
  };

  const decreaseQuantity = (index: number) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity--;
      setItems(updatedItems);
    }
  };

  const getSubtotal = () => {
    return items.reduce((subtotal, item) => (
      subtotal + item.price * item.quantity
      ), 0);
  };

  const getDiscount = () => {
    //discount logic here
    return 30; // the actual discount calculation
  };

  const getTotalWithVAT = () => {
    const subtotal = getSubtotal();
    const discount = getDiscount();
    const VAT = 0.1; // 10% VAT rate, you can adjust this
    return (subtotal - discount) * (1 + VAT);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <View style={styles.orderList}>
        {items.map((item, index) => (
          <OrderItem
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => increaseQuantity(index)}
            onDecrease={() => decreaseQuantity(index)}
          />
        ))}
      </View>
      <View style={styles.checkoutContainer}>
        <View style={styles.cardContent}>
          <View style={styles.checkoutItem}>
            <Text style={styles.textSubtotal}>Subtotal</Text>
            <Text style={styles.subtotal}>${getSubtotal()}</Text>
          </View>
          <View style={styles.checkoutItem}>
            <Text style={styles.smallItem}>Discount</Text>
            <Text style={styles.discount}>${getDiscount()}</Text>
          </View>
          <View style={styles.checkoutItem}>
            <Text style={styles.smallItem}>Delivery Fee</Text>
            <Text style={styles.smallItem}>Free</Text>
          </View>
          <View style={styles.checkoutItem}>
            <Text>Total<Text style={styles.smallItem}> (incl. VAT) </Text></Text>
            <Text style={styles.total}>${getTotalWithVAT()}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Go To Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    paddingTop: 5,
    color: '#2B0100',
    paddingLeft: 10,
  },
  orderList: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#B4B0B0',
    marginBottom: 8,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
  },
  textContainer: {
    backgroundColor: '#D90504',
    borderRadius: 10,
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    width: 25,
    color: '#fff',
  },
  textItem: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textName: {
    marginBottom: 10,
    fontSize: 8,
  },
  priceItem: {
    marginBottom: 10,
    color: '#E03636',
    fontSize: 8,
  },
  itemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: 8,
  },
  checkoutContainer: {
    
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    position: 'relative',
    
  },
  cardContent: {
    padding: 10,
  },
  checkoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  textSubtotal: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2B0100',
  },
  subtotal: {
    fontSize: 8,
    fontWeight: '700',
   
  },
  smallItem: {
    fontSize: 8,
    color: '#848282',
  },
  discount: {
    fontSize: 8,
    color: '#848282',
  },
  total: {},
  
  checkoutButton: {
    backgroundColor: '#E03636',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '70%',
    alignSelf: 'center',
  },
  checkoutText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});

export default YourOrders;
