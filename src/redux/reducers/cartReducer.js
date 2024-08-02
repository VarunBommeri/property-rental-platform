const initialState = {
  items: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
    case 'REMOVE_FROM_CART':
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);
      return {
        ...state,
        items: updatedItems,
        total: updatedTotal
      };
    default:
      return state;
  }
};

export default cartReducer;
