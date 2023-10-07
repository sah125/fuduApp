import {Item } from "../../components/PopularWithYourOrder"
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const CALCULATE_SUBTOTAL = 'CALCULATE_SUBTOTAL';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const increaseQuantity = (itemIndex: number) => ({
  type: INCREASE_QUANTITY,
  payload: itemIndex,
});

export const decreaseQuantity = (itemIndex: number) => ({
  type: DECREASE_QUANTITY,
  payload: itemIndex,
});

export const calculateSubtotal = () => ({
  type: CALCULATE_SUBTOTAL,
});


export const addItemToCart = (item: Item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});



