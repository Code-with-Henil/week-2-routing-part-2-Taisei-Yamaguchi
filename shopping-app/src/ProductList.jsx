// ProductList.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductList = () => {
    const { categoryId } = useParams();
    const productsInCategory = [ {id:1,name:'chocolate',categoryId:1},{id:2,name:'shoes',categoryId:2} ];

    return (
        <div>
        <h2>Products in Category {categoryId}</h2>
        <ul>
                {productsInCategory
                    .filter(product => product.categoryId === Number(categoryId))
                    .map(product => (
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ProductList;
