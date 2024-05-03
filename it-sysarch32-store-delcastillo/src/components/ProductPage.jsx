/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductPage.css';
import AlertMessage from './AlertMessage'; 

const ProductPage = ({cart, setCart}) => {
    const { id } = useParams();
    const [alertMessage, setAlertMessage] = useState('');

    const productList = [
      {
        id: "MSkCx8napbdK563J5PjQ",
        productName: "Jennie - Fish Tail P7",
        productImage: "https://firebasestorage.googleapis.com/v0/b/it-sysarch32-store-delcastillo.appspot.com/o/products-images%2Ffishtail.jpg?alt=media&token=6e991ed0-7d72-46bb-94b9-2ac60a125369",
        productPrice: 17300,
        smallImages: [
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/f/i/fishtail-p7_2_1.jpg",
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/f/i/fishtail-w2_2_1.jpg",
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/f/i/fishtail-br3_2_1.jpg",
        ],
      },
      {
        id: "qGKScUqUn7WJRSYuVLSV",
        productName: "Jennie - Petite Cooing",
        productImage: "https://firebasestorage.googleapis.com/v0/b/it-sysarch32-store-delcastillo.appspot.com/o/products-images%2Fcapybara.jpg?alt=media&token=9bfc9626-b50f-435c-8e8b-8bfd5d3a3166",
        productPrice: 3250,
        smallImages: [
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/p/e/petite-cooing-01_1.jpg",
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/p/e/petite-cooing-02_1.jpg",
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/p/a/package_c_1_1_1.jpg",
        ],
      },
      {
        id: "sz2MBLUzdYc7aYOLpIMh",
        productName: "Jennie - Donut Bun BL5",
        productImage: "https://firebasestorage.googleapis.com/v0/b/it-sysarch32-store-delcastillo.appspot.com/o/products-images%2Fdonutbun.jpg?alt=media&token=095d2697-a486-4b60-8f1a-75a3302b9eba",
        productPrice: 17500,
        smallImages: [
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/d/o/donutbun-bl5_2_1.jpg",
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/d/o/donutbun-01_2_1.jpg",
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/d/o/donutbun-br3_2_1.jpg",
        ],
      },
      {
        id: "X14JpPBBhbfEMAybEZx6",
        productName: "Jennie - Glitter 02",
        productImage: "https://firebasestorage.googleapis.com/v0/b/it-sysarch32-store-delcastillo.appspot.com/o/products-images%2Fglitter.jpg?alt=media&token=219a8a38-917c-434e-9a0f-dec9ebeef830",
        productPrice: 20000,
        smallImages: [
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/g/l/glitter-02_1_1.jpg",
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/g/l/glitter-02_3_1.jpg"
        ],
      },
    ];
  
    const product = productList.find((p) => p.id === id);
  
    if (!product) {
      return <div>Product Not Found!</div>;
    }
  
    const { productName, productPrice, productImage, smallImages } = product;
  
    const [selectedImage, setSelectedImage] = useState(productImage);
  
    const handleImageChange = (image) => {
      setSelectedImage(image);
    };
    
    useEffect(() => {
      setSelectedImage(productImage); // Setting default image as the first one from smallImages
    }, [id, productImage]); // Only run this effect when the id changes
  

    const addToCart = () => {
        const itemInCart = cart.find((item) => item.id === product.id);
        if (itemInCart) {
          setAlertMessage("Item is already in cart!");
        } else {
          setCart([...cart, { id: product.id, name: productName, price: productPrice, quantity: 1 }]);
          setAlertMessage(`${productName} has been added to cart!`);
        }
      };
    
    return (
      <div className="product-page-container">
        <div className="product-image">
          <img src={selectedImage} alt={productName} />
        </div>
        <br />
        
        <div className="product-details2">
          <h2 className="prodp-name">{productName}</h2>
  
          <p className="prodp-price"><b>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(productPrice)}</b></p>
          
          <div className="product-colors__list inline">
            {smallImages.map((image, index) => (
              <button key={index} className="small-image-button" onClick={() => handleImageChange(image)}>
                <img src={image} alt={productName} />
              </button>
            ))}
          </div>
          <br />
          
          <button className="cart-btn" onClick={addToCart}>Add to cart</button>
              
          <div><h2 className="related-items-text">Related Items</h2></div>

          {alertMessage && <AlertMessage message={alertMessage} />}          
          </div>
      </div>
    );
  };
  
  export default ProductPage;
  