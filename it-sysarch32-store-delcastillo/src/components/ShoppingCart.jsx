import React from "react";
import './Cart.css';

const ShoppingCart = ({ cart }) => {
  // Calculate order total
  const orderTotal = cart.reduce((total, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 0);
    return total + itemTotal;
  }, 0).toFixed(2);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items added to cart</p>
      ) : (
        <div>
          <p>Items in cart: {cart.length}</p>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Order Total: {isNaN(orderTotal) ? 'Invalid total' : `$${orderTotal}`}</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
