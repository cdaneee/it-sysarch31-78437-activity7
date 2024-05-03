/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import './Cart.css';

const ShoppingCart = ({ cart }) => {
  // Calculate order total
  const orderTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0? (
        <p>No items added to cart</p>
      ) : (
        <div>
          {/* Display items in the cart */}
          <p>Items in cart: {cart.length}</p>
          {/* Order summary */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            {/* Display order total */}
            <p>Order Total: {orderTotal}</p>
            {/* Checkout button */}
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;
