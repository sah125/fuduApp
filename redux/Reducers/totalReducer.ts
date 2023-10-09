// totalReducer.ts
import {
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CALCULATE_SUBTOTAL,
    ADD_CATEGORY,
    ADD_ITEM_TO_CART
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
        if(decreasedItems[action.payload].quantity ==0){
          decreasedItems.splice(action.payload,1);
        }
        return { ...state, items: decreasedItems };
  
      case CALCULATE_SUBTOTAL:
        const updatedTotal = getSubtotal(state.items);
        return { ...state, total: updatedTotal };



          case ADD_ITEM_TO_CART:
              const itemToAdd = action.payload;
              const itemExists = state.items.some(item => item.name === itemToAdd.name);
              if (!itemExists) {
                const updatedItems = [...state.items, itemToAdd];
                return { ...state, items: updatedItems };
              }
              const updatedItems = state.items.map(item => {
                if (item.name === itemToAdd.name) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              });
              return { ...state, items: updatedItems };

        
          
  
      default:
        return state;
    }
  };
  
  const getSubtotal = (items: Item[]): number => {
    return items.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
  };
  
  export default totalReducer;
  