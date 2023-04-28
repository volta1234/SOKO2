import React, { useState } from 'react';

function Checkout({ cartItems }) {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    address: '',
    payment: ''
  });

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Implement logic to process the customer's order and clear the cart
    alert('Order processed!');
  }

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Order Summary</h3>
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
        {cartItems.length > 0 && <p>Total Price: ${totalPrice.toFixed(2)}</p>}
      </div>
      <div>
        <h3>Customer Details</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' value={customerDetails.name} onChange={handleInputChange} />
          <label htmlFor='address'>Address:</label>
          <input type='text' name='address' value={customerDetails.address} onChange={handleInputChange} />
          <label htmlFor='payment'>Payment Details:</label>
          <input type='text' name='payment' value={customerDetails.payment} onChange={handleInputChange} />
          <button type='submit'>Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
