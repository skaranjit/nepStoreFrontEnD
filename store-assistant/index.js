const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const storeRoutes = require('./routes/store');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const driverRoutes = require('./routes/driver');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// API routes
app.use('/api/stores', storeRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/drivers', driverRoutes);

app.get('/', (req, res) => {
  res.send('Store Assistant API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
