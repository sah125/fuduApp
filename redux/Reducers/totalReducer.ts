// totalReducer.ts
import {
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CALCULATE_SUBTOTAL,
  } from '../Actions/totalActions'; // Import your action types
  
  interface Item {
    name: string;
    quantity: number;
    price: number;
  }
  
  interface TotalState {
    items: Item[];
    total: number;
  }
  
  const initialState: TotalState = {
    items: [
      { name: 'Special Chicken Burger', quantity: 1, price: 30 },
      { name: 'Chicago Thin Crust', quantity: 2, price: 30 },
      { name: 'Special Chicken Burger', quantity: 1, price: 30 },
      { name: 'Special Chicken Burger', quantity: 2, price: 30 },
    ],
    total: 0,
  };
  
  const totalReducer = (state = initialState, action: any): TotalState => {
    switch (action.type) {
      case INCREASE_QUANTITY:
        const increasedItems = [...state.items];
        increasedItems[action.payload].quantity++;
        return { ...state, items: increasedItems };
  
      case DECREASE_QUANTITY:
        const decreasedItems = [...state.items];
        if (decreasedItems[action.payload].quantity > 0) {
          decreasedItems[action.payload].quantity--;
        }
        return { ...state, items: decreasedItems };
  
      case CALCULATE_SUBTOTAL:
        const updatedTotal = getSubtotal(state.items);
        return { ...state, total: updatedTotal };
  
      default:
        return state;
    }
  };
  
  const getSubtotal = (items: Item[]): number => {
    return items.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
  };
  
  export default totalReducer;
  