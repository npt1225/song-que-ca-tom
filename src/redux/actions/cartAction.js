export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product
});

export const increaseQuantity = (slug) => ({
  type: "INCREASE_QUANTITY",
  payload: slug
});

export const decreaseQuantity = (slug) => ({
  type: "DECREASE_QUANTITY",
  payload: slug
});

export const removeFromCart = (slug) => ({
  type: "REMOVE_FROM_CART",
  payload: slug
});
