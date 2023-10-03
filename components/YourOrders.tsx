import React, { useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, calculateSubtotal } from '../redux/Actions/totalActions'; // Import your action creators
import { RootState } from '../redux/store';

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
        <Text style={styles.priceItem}>${price.toFixed(2)}</Text>
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
  const items = useSelector((state: RootState) => state.total.items);
  const total = useSelector((state: RootState) => state.total.total);
  const dispatch = useDispatch();

  const increaseQuantityHandler = (index: number) => {
    dispatch(increaseQuantity(index));
  };

  const decreaseQuantityHandler = (index: number) => {
    dispatch(decreaseQuantity(index));
  };

  useEffect(() => {
    dispatch(calculateSubtotal());
  }, [items]);

  const quantityTotal = useMemo(() => {
    if (typeof total === 'number') {
      return (total - 30).toFixed(2);
    }
    return '';
  }, [total]);

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
            onIncrease={() => increaseQuantityHandler(index)}
            onDecrease={() => decreaseQuantityHandler(index)}
          />
        ))}
      </View>
      <View style={styles.checkoutContainer}>
        <View style={styles.cardContent}>
          <View style={styles.checkoutItem}>
            <Text style={styles.textSubtotal}>Subtotal</Text>
            {total !== undefined && <Text style={styles.subtotal}>${total.toFixed(2)}</Text>}
          </View>
          <View style={styles.checkoutItem}>
            <Text style={styles.smallItem}>Discount</Text>
            <Text style={styles.discount}>${30}</Text>
          </View>
          <View style={styles.checkoutItem}>
            <Text style={styles.smallItem}>Delivery Fee</Text>
            <Text style={styles.smallItem}>Free</Text>
          </View>
        </View>
      </View>
      <View style={styles.checkoutContainertTotal}>
        <View style={styles.cardContent}>
          <View style={styles.checkoutItem}>
            <Text>
              Total<Text style={styles.smallItem}> (incl. VAT) </Text>
            </Text>
            <Text style={styles.textSubtotal}></Text>
            {total !== undefined && <Text style={styles.subtotal}>${quantityTotal}</Text>}
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
    position: 'relative',
  },
  checkoutContainertTotal: {},
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
