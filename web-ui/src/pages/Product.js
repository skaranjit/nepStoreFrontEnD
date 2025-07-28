import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const product = {
  id: 1,
  name: 'Product 1',
  description: 'This is the first product.',
  price: 10,
  image: 'https://via.placeholder.com/300x300',
};

const Product = () => {
  const { id } = useParams();

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
