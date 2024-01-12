import React, { useState, useContext, createContext } from 'react';

// Create a context for the product data and functions to interact with it
export const ProductContext = createContext();

// A component to provide the context values and manage the product state
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};


export default ProductProvider;