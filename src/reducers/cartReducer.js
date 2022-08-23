const cartReducer = (state, action) => {
  console.log(state.cart);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalAmount: state.totalAmount + action.payload.price
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        totalAmount: state.totalAmount - action.payload.price
      };

    case "INCREASE_QTY":
      console.log("increasing");
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity = action.payload.quantity;
          }
          return item;
        }),
        totalAmount: state.totalAmount + action.payload.price
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity = action.payload.quantity;
          }
          return item;
        }),
        totalAmount: state.totalAmount - action.payload.price
      };

    default:
      throw new Error("Failed");
  }
};

export default cartReducer;
