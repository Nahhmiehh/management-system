import React, { useEffect, useState } from 'react';
import { getProduct, updateProduct } from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';

export const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        product_code: '',
        name: '',
        description: '',
        price: '',
        qty: '',
        date_added: '',
    });

    // Fetch the product to edit
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProduct(id); 
                setFormData(response.data); 
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, formData);
            alert('Product updated successfully!');
            navigate('/products'); 
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
            <div style={{ padding: '20px', backgroundColor: '#e9d9c8' }}>
                <h2>Edit Product</h2>
                <form className="product-container border p-4 rounded" style={{ width: '400px' }} onSubmit={handleSubmit}>
                    <div>
                        <label>Product Code: </label>
                        <input
                            type="text"
                            name="product_code"
                            value={formData.product_code}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Price: </label>
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
                        <label>Quantity: </label>
                        <input
                            type="number"
                            name="qty"
                            value={formData.qty}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Date Added: </label>
                        <input
                            type="date"
                            name="date_added"
                            value={formData.date_added}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
