const Product = require('../models/product');
const Store = require('../models/store');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, storeId } = req.body;

    const store = await Store.findById(storeId);
    if (!store) {
      return res.status(404).json({ message: 'Store not found.' });
    }

    if (store.owner.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to add products to this store.' });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      store: storeId,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Get all products for a store
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ store: req.params.storeId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Get a single product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    const store = await Store.findById(product.store);
    if (store.owner.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to update this product.' });
    }

    product.name = name;
    product.description = description;
    product.price = price;

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    const store = await Store.findById(product.store);
    if (store.owner.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to delete this product.' });
    }

    await product.remove();

    res.status(200).json({ message: 'Product deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
