import React, { useState } from 'react';
import { addProduct } from '../api/api'; 

const AddProduct = () => {
  const [formData, setFormData] = useState({
    product_code: '',
    name: '',
    description: '',
    price: '',
    qty: '',
    date_added: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(formData);  // Call the API to save the product
      alert('Product added successfully!');
      setFormData({
        product_code: '',
        name: '',
        description: '',
        price: '',
        qty: '',
        date_added: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    }
  };

  const handleClear = () => {
    setFormData({
      product_code: '',
      name: '',
      description: '',
      price: '',
      qty: '',
      date_added: '',
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
    <div style={{ padding: '20px', fontFamily: 'Comic Sans MS', backgroundColor: '#e9d9c8' }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Code</label>
          <input
            type="text"
            name="product_code"
            value={formData.product_code}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date Added</label>
          <input
            type="date"
            name="date_added"
            value={formData.date_added}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Save</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
    </div>
  );
};

export default AddProduct;
