import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      }));
    }
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty!</h3>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              className="cart-item-image"
              src={item.image}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover"
              }}
            />

            <h3 className="cart-item-name">{item.name}</h3>

            <p className="cart-item-price">
              Unit Price: ₹{item.price}
            </p>

            <p className="cart-item-total">
              Item Total: ₹{item.price * item.quantity}
            </p>

            <button
              className="cart-item-decrement"
              onClick={() => handleDecrement(item)}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              className="cart-item-increment"
              onClick={() =>
                dispatch(updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1
                }))
              }
            >
              +
            </button>

            <button
              className="cart-item-delete"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>
          </div>
        ))
      )}

      <h2>Cart Total: ₹{total}</h2>

      <button
        className="get-started-button"
        onClick={() => alert("Checkout Coming Soon!")}
      >
        Checkout
      </button>

      <button
        className="get-started-button"
        onClick={onContinueShopping || (() => window.history.back())}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
