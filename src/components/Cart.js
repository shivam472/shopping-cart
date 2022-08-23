import "./Cart.css";

const Cart = ({ cartItems, totalAmount, dispatch }) => {
  const increaseQty = (item) => {
    item.quantity += 1;
    dispatch({ type: "INCREASE_QTY", payload: item });
  };
  const decreaseQty = (item) => {
    if (item.quantity > 0) {
      item.quantity -= 1;
      dispatch({ type: "DECREASE_QTY", payload: item });
    }
  };

  return (
    <div className="cart">
      <p>Cart</p>
      <p> Total: ${totalAmount} </p>
      {cartItems.map((item) => (
        <div key={item.id} className="cartItem">
          <img src={item.thumbnail} alt="thumbnail" className="itemThumbnail" />
          <div className="item-tite-price--container">
            <p className="itemTitle">{item.title}</p>
            <p className="itemPrice">${item.price}</p>
          </div>
          <span className="button-container">
            <button className="increment" onClick={() => increaseQty(item)}>
              +
            </button>
            {item.quantity}
            <button onClick={() => decreaseQty(item)} className="decrement">
              -
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
