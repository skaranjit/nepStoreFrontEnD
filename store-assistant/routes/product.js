const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

// Get all products for a store
router.get('/store/:storeId', productController.getProducts);

// Get a single product
router.get('/:id', productController.getProduct);

// Create a new product
router.post('/', auth, productController.createProduct);

// Update a product
router.patch('/:id', auth, productController.updateProduct);

// Delete a product
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
