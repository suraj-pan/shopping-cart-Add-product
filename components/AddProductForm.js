import React, { useState, useContext, createContext } from 'react';
import {ProductContext} from '../store/ProductContext';


const AddProductForm = () => {
    const { addProduct } = useContext(ProductContext);
    const [newProduct, setNewProduct] = useState({ name: '', price: 0, size: 'M', quantity: 1 });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addProduct(newProduct);
      setNewProduct({ name: '', price: 0, size: 'M', quantity: 1 });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />
        </label>
        <label>
          Size:
          <select name="size" value={newProduct.size} onChange={handleInputChange}>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={newProduct.quantity} onChange={handleInputChange} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    );
  };

  export default AddProductForm;