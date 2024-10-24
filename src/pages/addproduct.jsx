import React, { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    productCode: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    dateAdded: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleClear = () => {
    setProduct({
      productCode: '',
      name: '',
      description: '',
      price: '',
      quantity: '',
      dateAdded: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product saved', product); // This will later be replaced by API call
    alert('Product saved successfully!');
    handleClear();
  };

  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Product Code</label>
          <input
            type="text"
            name="productCode"
            className="form-control"
            value={product.productCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Price</label>
          <input
            type="number"
            step="0.01"
            name="price"
            className="form-control"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Date Added</label>
          <input
            type="date"
            name="dateAdded"
            className="form-control"
            value={product.dateAdded}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
        <button type="button" className="btn btn-secondary ml-3" onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

export default AddProduct;
