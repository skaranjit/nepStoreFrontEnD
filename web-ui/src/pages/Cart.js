import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const cartItems = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    quantity: 1,
  },
];

const Cart = () => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <div className="item-total">
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <Link to="/checkout" className="checkout-button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
