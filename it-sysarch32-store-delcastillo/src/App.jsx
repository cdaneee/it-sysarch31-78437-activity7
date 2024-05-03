/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import ProductPage from "./components/ProductPage";
import ShoppingCart from "./components/ShoppingCart"; // Import the ShoppingCart component
  
function App() {
  const [cart, setCart] = useState([]);

  const [productList, setProductList] = useState([]);
  const [showQuickView, setShowQuickView] = useState(false);

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getProductList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuickView = (product) => {
    setShowQuickView(true);
    // Pass the product object to the ProductPopup component
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="App">
      <Router>
        <Navbar />

        

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/product" element={ProductPage} />
          
          <Route
            path="/product/:id"
            element={<ProductPage productList={productList} />}
          />
          
          <Route path="/cart" 
          element={<ShoppingCart cart={cart}/>} /> 
        </Routes>

        
        <div className="product-card-container">
          {productList.map((product) => (

            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={handleQuickView}
               onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <br></br>
        <br></br>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
