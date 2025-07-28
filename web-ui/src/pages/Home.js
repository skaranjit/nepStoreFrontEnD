import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const stores = [
  {
    id: 1,
    name: 'Grocery Store',
    description: 'Fresh groceries delivered to your door.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Restaurant',
    description: 'Delicious meals from your favorite local restaurant.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    name: 'Pharmacy',
    description: 'Get your prescriptions and health products delivered.',
    image: 'https://via.placeholder.com/300x200',
  },
];

const Home = () => {
  return (
    <div className="home">
      <h2>Stores</h2>
      <div className="store-list">
        {stores.map((store) => (
          <Link to={`/store/${store.id}`} key={store.id} className="store-card">
            <img src={store.image} alt={store.name} />
            <h3>{store.name}</h3>
            <p>{store.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
