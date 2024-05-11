import React from "react";
import  './Cart.css';
const ShoppingCart = ({ cart }) => {
  const orderTotal = cart.reduce((total, item) => {
    const itemTotal = (item.productPrice || 0) * (item.quantity || 0);
    return total + itemTotal;
  }, 0).toFixed(2);
  const handleCheckout = () => {
    // Implement your checkout logic here
    alert("Checkout functionality will be implemented soon!");
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items added to cart</p>
      ) : (
        <div>
           <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Order Total: {isNaN(orderTotal) ? "Invalid total" : `$${orderTotal}`}</p>
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          </div>
          <p>Items in cart: {cart.length}</p>
          
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.productImage} alt={item.productName} className="cart-item-image" />
                <div>
                <p>{item.productName}</p>
                  <p>Price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(item.productPrice)}</p>
                  <p>Quantity: {item.quantity}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
