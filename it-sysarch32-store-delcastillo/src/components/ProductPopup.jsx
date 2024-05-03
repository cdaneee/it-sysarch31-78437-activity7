/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProductPopup = ({ product, onClose }) => {
  const { productName, productDescription, productPrice, productImage } = product;

  return (
    <div className="product-popup">
  <div className="product-popup-content">
    <button className="close-btn" onClick={onClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
 
        <img
          src={productImage}
          alt={productName}
          className="product-image"/>

        <div className="product-details">
          <h2 className="pop-name">{productName}</h2>
          <h3 className="pop-desc">{productDescription}</h3>
          <h4 className="price"><b>
            {new Intl.NumberFormat('en-US', 
            { style: 'currency', currency: 'PHP' }
                ).format(productPrice)}</b></h4>
        <hr></hr>
        </div>
        
      </div>
    </div>
  );
};

export default ProductPopup;