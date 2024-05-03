// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// // Sa imong parent component
// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import AlertMessage from './AlertMessage';


// const ParentComponent = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');

//   const handleAddToCart = (product, isNewItem) => {
//     if (isNewItem) {
//       setCartItems([...cartItems, product]);
//       setShowAlert(true);
//       setAlertMessage('Item added to cart!');
//     } else {
//       setShowAlert(true);
//       setAlertMessage('Item is already in cart!');
//     }
//   };

//   return (
//     <div>
//       {showAlert && <AlertMessage message={alertMessage} onClose={() => setShowAlert(false)} />}
//       <ProductCard product={product} onAddToCart={handleAddToCart} cartItems={cartItems} />
//     </div>
//   );
// };


// export default ParentComponent;
