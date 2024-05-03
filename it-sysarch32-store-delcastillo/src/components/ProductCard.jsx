  /* eslint-disable react/prop-types */
  /* eslint-disable no-unused-vars */
  // ProductCard.js

  import React, { useState } from 'react';
  import ProductPopup from './ProductPopup';
  import { Link } from 'react-router-dom'; 
  import AlertMessage from './AlertMessage'; 
  
    const ProductCard = ({ product, className, onAddToCart, cartItems }) => {
    const { productName, productDescription, productPrice, productImage } = product;
  
    const handleAddToCartClick = () => {
      onAddToCart(product);
      setShowAlert(true); // Set the state to show the alert message
    };

     setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  
    const [popupVisible, setPopupVisible] = React.useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showAlert, setShowAlert] = useState(false); // Add this line for showing the alert message
  
    const togglePopup = () => {
      setPopupVisible(!popupVisible);
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div className={`product-card ${className}`}>
        <Link to={`/product/${product.id}`}>
            <img
              src={productImage}
              alt={productName}
              className="product-image"
            />
        </Link>
  
  
       <button className="quick-view-btn" onClick={togglePopup}>
       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
            <g>
              <polyline fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10" points="1,12 1,1 12,1" />
              <polyline fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10" points="12,63 1,63 1,52" />
              <polyline fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10" points="63,52 63,63 52,63" />
              <polyline fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10" points="52,1 63,1 63,12" />
              <line fill="none" stroke="#000000" strokeWidth="5" strokeMiterlimit="10" x1="2" y1="2" x2="22" y2="22" />
              <line fill="none" stroke="#000000" strokeWidth="5" strokeMiterlimit="10" x1="42" y1="42" x2="62" y2="62" />
              <line fill="none" stroke="#000000" strokeWidth="5" strokeMiterlimit="10" x1="2" y1="62" x2="22" y2="42" />
              <line fill="none" stroke="#000000" strokeWidth="5" strokeMiterlimit="10" x1="42" y1="22" x2="62" y2="2" />
            </g>
      </svg>
  </button>
  
  
  <button className="add-to-cart-btn" onClick={handleAddToCartClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20px" height="20px" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.83a2 2 0 0 0 1.95-1.66L23 5H6" />
      <polyline points="16 3 21 3 21 8" />
      <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
  </button>
  
  
        <div className="product-details">
          <h4><i>{productName}</i></h4>
          <p>{productDescription}</p>
          <p className="price"><b>{new Intl.NumberFormat('en-US', 
          { style: 'currency', currency: 'PHP' }).format(productPrice)}</b></p>
        </div>
        
        
        {showAlert && <AlertMessage message="Product added to cart!" onClose={() => setShowAlert(false)} />}
        {popupVisible && <ProductPopup product={product} onClose={togglePopup} />}
      </div>
  
    );
  };
  
  export default ProductCard;
  