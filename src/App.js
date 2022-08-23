import "./styles.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useReducer } from "react";
import cartReducer from "./reducers/cartReducer";

export default function App() {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalAmount: 0
  });

  return (
    <div className="container">
      <Products cartState={cartState} dispatch={dispatch} />
      <Cart
        cartItems={cartState.cart}
        totalAmount={cartState.totalAmount}
        dispatch={dispatch}
      />
    </div>
  );
}
