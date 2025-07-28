const Store = require('../models/store');

// Create a new store
exports.createStore = async (req, res) => {
  try {
    const { name, description } = req.body;
    const owner = req.userId;

    const newStore = new Store({
      name,
      description,
      owner,
    });

    await newStore.save();

    res.status(201).json(newStore);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Get all stores
exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Get a single store
exports.getStore = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    if (!store) {
      return res.status(404).json({ message: 'Store not found.' });
    }
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Update a store
exports.updateStore = async (req, res) => {
  try {
    const { name, description } = req.body;
    const store = await Store.findById(req.params.id);

    if (!store) {
      return res.status(404).json({ message: 'Store not found.' });
    }

    if (store.owner.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to update this store.' });
    }

    store.name = name;
    store.description = description;

    await store.save();

    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Delete a store
exports.deleteStore = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);

    if (!store) {
      return res.status(404).json({ message: 'Store not found.' });
    }

    if (store.owner.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to delete this store.' });
    }

    await store.remove();

    res.status(200).json({ message: 'Store deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
