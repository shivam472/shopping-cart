import "./Products.css";
import { useEffect, useState } from "react";

const Products = ({ dispatch, cartState }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const addToCart = (product) => {
    product.quantity = 1;
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <div className="products">
      {products.map((product) => (
        <span key={product.id} className="product">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="thumbnail"
          />
          <div className="title-price--container">
            <b className="title">{product.title}</b>
            <b className="price">${product.price}</b>
          </div>
          {cartState.cart.some((element) => element.id === product.id) ? (
            <button
              className="remove-from-cart"
              onClick={() => removeFromCart(product)}
            >
              Remove from cart
            </button>
          ) : (
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          )}
        </span>
      ))}
    </div>
  );
};

export default Products;
