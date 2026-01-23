import {
  saveCartToLocalStorage,
  getCartFromLocalStorage
} from "../../utils/cartStorage";

const stateDefault = {
  cartItems: getCartFromLocalStorage()
};

export const CartReducer = (state = stateDefault, action) => {
  let newCartItems;

  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;

      const existItem = state.cartItems.find(
        item => item.slug === product.slug
      );

      if (existItem) {
        newCartItems = state.cartItems.map(item =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCartItems = [
          ...state.cartItems,
          { ...product, quantity: 1 }
        ];
      }

      saveCartToLocalStorage(newCartItems);
      return { ...state, cartItems: newCartItems };
    }

    case "INCREASE_QUANTITY": {
      newCartItems = state.cartItems.map(item =>
        item.slug === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      saveCartToLocalStorage(newCartItems);
      return { ...state, cartItems: newCartItems };
    }

    case "DECREASE_QUANTITY": {
      newCartItems = state.cartItems.map(item =>
        item.slug === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      saveCartToLocalStorage(newCartItems);
      return { ...state, cartItems: newCartItems };
    }

    case "REMOVE_FROM_CART": {
      newCartItems = state.cartItems.filter(
        item => item.slug !== action.payload
      );

      saveCartToLocalStorage(newCartItems);
      return { ...state, cartItems: newCartItems };
    }

    default:
      return state;
  }
};
