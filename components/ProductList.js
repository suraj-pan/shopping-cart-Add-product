import React, { useState, useContext, createContext } from 'react';
import {ProductContext} from '../store/ProductContext';

const ProductList = () => {
    const { products } = useContext(ProductContext);
  
    const calculateTotalCost = () => {
      return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };
  
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.size} - ${product.price} - Quantity: {product.quantity}
            </li>
          ))}
        </ul>
        <p>Total Cost: ${calculateTotalCost()}</p>
      </div>
    );
  }

  
  export default ProductList;