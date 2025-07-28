import React from 'react';
import { useParams } from 'react-router-dom';
import './Store.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the first product.',
    price: 10,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the second product.',
    price: 20,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the third product.',
    price: 30,
    image: 'https://via.placeholder.com/150',
  },
];

const Store = () => {
  const { id } = useParams();

  return (
    <div className="store">
      <h2>Store {id}</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
