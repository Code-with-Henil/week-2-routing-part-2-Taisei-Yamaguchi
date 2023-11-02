// ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    var name='';
    var description='';
    var price=0;
    if(productId==='1'){
        name='chocolate'
        description='sweet!!'
        price=5
    }else if(productId==='2'){
        name='shoes'
        description='warming!!'
        price=100
    }
    const product = {id:productId,name:name,description:description,price:price};

    return (
        <div>
        <h2>Product Details</h2>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        {/* Render other product details */}
        </div>
    );
};

export default ProductDetails;
