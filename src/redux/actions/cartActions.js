export const addToCart = (property) => {
  return {
    type: 'ADD_TO_CART',
    payload: property
  };
};

export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  };
};
