import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" />
        </div>
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <input type="text" id="card-number" name="card-number" />
        </div>
        <div className="form-group">
          <label htmlFor="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" name="expiry-date" />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
