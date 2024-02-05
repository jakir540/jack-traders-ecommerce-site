import React from 'react';
import Navbar from '../features/navbar/Navbar';
import ProductDetails from '../features/products-list/components/ProductDetails';

const ProductDetailPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default ProductDetailPage;