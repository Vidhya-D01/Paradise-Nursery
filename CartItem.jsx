import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty!</h3>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px",
            borderRadius: "8px"
          }}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>

            <button onClick={() =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity - 1
              }))
            }> - </button>

            <span style={{ margin: "10px" }}>
              {item.quantity}
            </span>

            <button onClick={() =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
              }))
            }> + </button>

            <button
              onClick={() =>
                dispatch(removeItem(item.id))
              }
              style={{ marginLeft: "15px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default CartItem;
