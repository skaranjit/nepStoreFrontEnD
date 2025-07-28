const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const auth = require('../middleware/auth');

// Get all stores
router.get('/', storeController.getStores);

// Get a single store
router.get('/:id', storeController.getStore);

// Create a new store
router.post('/', auth, storeController.createStore);

// Update a store
router.patch('/:id', auth, store.updateStore);

// Delete a store
router.delete('/:id', auth, store.deleteStore);

module.exports = router;
