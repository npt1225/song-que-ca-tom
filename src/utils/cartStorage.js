// src/utils/cartStorage.js
export const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
};

export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("CART_ITEMS");
  return data ? JSON.parse(data) : [];
};
