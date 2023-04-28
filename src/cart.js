import React from "react";
import Checkout from "./Checkout";

export default function Cart({ removeAll, cartItems, removeItem }) {
  const totalPrice = cartItems ? cartItems.reduce((total, item) => total + item.price, 0) : 0;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <h2 style={{ fontFamily: "'Rajdhani', sans-serif" }}>Shopping Cart</h2>
      {cartItems && cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems && cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} ${item.price}</p>
          <button style={{ backgroundColor: "lightgrey" }} onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
      {cartItems && cartItems.length > 0 && <p style={{fontWeight: "bolder"}}>Total Price: ${totalPrice.toFixed(2)}</p>}
      {cartItems.length > 0 ?
        <button style={{ backgroundColor: "grey" }} onClick={() => removeAll()}>Remove All</button>
        :
        <a href="/products"><button>Go shopping</button></a>
      }
    </div>
  );
}
